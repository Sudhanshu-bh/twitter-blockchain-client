import { useState, useContext } from 'react'
import { TwitterContext } from '../../../context/TwitterContext'
import { useRouter } from 'next/router'
import { client } from '../../../lib/client'
import { contractABI, contractAddress } from '../../../lib/constants'
import { ethers } from 'ethers'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../../../lib/pinata'

let metamask: any

const getEthereumContract = async () => {
  if (!metamask) return
  const provider = new ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

  return transactionContract
}

const ProfileImageMinter = () => {
  if (typeof window !== undefined) {
    metamask = (window as any).ethereum
  }

  const { currentAccount, setAppStatus } = useContext(TwitterContext)

  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState<File>()

  const mint = async () => {
    if (!name || !description || !profileImage) return

    setStatus('loading')

    const pinataMetadata = {
      name: `${name} - ${description}`,
    }

    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetadata)

    await client
      .patch(currentAccount)
      .set({ profileImage: ipfsImageHash })
      .set({ isProfileImageNft: true })
      .commit()

    const imageMetadata = {
      name: name,
      description: description,
      image: `ipfs://${ipfsImageHash}`,
    }

    const ipfsJsonHash = await pinJSONToIPFS(imageMetadata)

    const contract = await getEthereumContract()

    const transactionParameters = {
      to: contractAddress,
      from: currentAccount,
      data: await contract!.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    }

    await metamask.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    })

    setStatus('finished')
  }

  const modalChildren = (modalStatus = status) => {
    let result
    switch (modalStatus) {
      case 'initial':
        result = (
          <InitialState
            name={name}
            setName={setName}
            profileImage={profileImage!}
            setProfileImage={setProfileImage}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )
        break
      case 'loading':
        result = <LoadingState />
        break
      case 'finished':
        result = <FinishedState />
        break

      default:
        router.push('/')
        setAppStatus('error')
        // result = <></>
        break
    }

    return result
  }
  return <>{modalChildren()}</>
}

export default ProfileImageMinter
