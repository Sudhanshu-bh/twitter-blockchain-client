import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connected, notConnected, noMetaMask } from '../lib/constants'
import { client } from '../lib/client'

export const TwitterContext = createContext<any>({})

export const TwitterProvider = ({ children }: any) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')

  const router = useRouter()

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

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
        isProfileImageNft: false,
        profileImage: 'https://www.tbdjfnsvk.com',
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

  return (
    <TwitterContext.Provider value={{ appStatus, currentAccount, connectToWallet }}>
      {children}
    </TwitterContext.Provider>
  )
}
