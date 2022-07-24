import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connected, notConnected, noMetaMask } from '../lib/constants'
import { client } from '../lib/client'

export const TwitterContext = createContext<any>({})

export const TwitterProvider = ({ children }: any) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [tweets, setTweets] = useState<object[]>([])

  const router = useRouter()

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  useEffect(() => {
    if (!currentAccount || appStatus !== connected) return
    getCurrentUserDetails()
    fetchTweets()
  }, [currentAccount, appStatus])

  const checkIfWalletConnected = async () => {
    if (!(window as any).ethereum) return setAppStatus(noMetaMask)
    try {
      const addressArray = await (window as any).ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus(connected)
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus(notConnected)
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Initiates MetaMask wallet connection
   */
  const connectToWallet = async () => {
    if (!(window as any).ethereum) return setAppStatus(noMetaMask)
    try {
      setAppStatus('loading')

      const addressArray = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus(connected)
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus(notConnected)
      }
    } catch (error) {
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!(window as any).ethereum) return setAppStatus(noMetaMask)
    try {
      const userDoc = {
        _type: 'user',
        _id: userWalletAddress,
        name: 'Unnamed',
        handle: Date.now().toString(),
        isProfileImageNft: false,
        profileImage: '',
        coverImage: '',
        walletAddress: userWalletAddress,
      }

      await client.createIfNotExists(userDoc)
      setAppStatus(connected)
    } catch (err) {
      router.push('/')
      console.log('error: ', err)
      setAppStatus('error')
    }
  }

  const getProfileImageUrl = async (imageUri: string, isNft: boolean) => {
    let url = imageUri
    if (isNft) {
      url = `https://gateway.pinata.cloud/ipfs/${imageUri}`
    }
    return url
  }

  const fetchTweets = async () => {
    const query = `
    *[_type == "tweet"]{
      "author": author->{name, handle, walletAddress, profileImage, isProfileImageNft},
      tweetText,
      timestamp
    }|order(timestamp desc)
    `
    const sanityResp = await client.fetch(query)

    setTweets([])

    sanityResp.forEach(async (item: any) => {
      const profileImageUrl = await getProfileImageUrl(
        item.author.profileImage,
        item.author.isProfileImageNft
      )

      item.author.profileImage = profileImageUrl

      setTweets((prevState) => [...prevState, item])
    })
  }

  const getCurrentUserDetails = async () => {
    if (appStatus != connected) return

    const query = `
      *[_type == "user" && _id == "${currentAccount}"]{
        "tweets": tweets[]->{timestamp, tweetText}|order(timestamp desc),
        name,
        handle,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
      }
    `

    const sanityResp = await client.fetch(query)
    let userData = sanityResp[0]

    userData.profileImage = await getProfileImageUrl(
      userData.profileImage,
      userData.isProfileImageNft
    )

    setCurrentUser(userData)
  }

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectToWallet,
        fetchTweets,
        tweets,
        currentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
