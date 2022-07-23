import { useContext } from 'react'
import { TwitterContext } from '../context/TwitterContext'
import Feed from '../components/home/Feed'
import Widgets from '../components/home/Widgets'
import Sidebar from '../components/Sidebar'
import { page } from '../styles/gStyles'
import Image from 'next/image'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'
import { connected, notConnected, noMetaMask } from '../lib/constants'

const style = {
  outerContent: `max-w-[1400px] w-[86%] flex justify-between min-h-full`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pt-[7rem] pb-[10rem]`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
  link: `text-red-500 hover:underline`,
}

const Home = () => {
  const { appStatus, connectToWallet } = useContext(TwitterContext)

  const app = (status: string) => {
    let showComponent
    switch (status) {
      case connected:
        showComponent = userLoggedIn
        break
      case notConnected:
        showComponent = noUserFound
        break
      case noMetaMask:
        showComponent = noMetaMaskFound
        break
      case 'error':
        showComponent = error
        break
      default:
        showComponent = loading
    }

    return showComponent
  }

  const userLoggedIn = (
    <div className={style.outerContent}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div className={style.walletConnectButton} onClick={() => connectToWallet()}>
        Login Using Metamask
      </div>
    </div>
  )

  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div className={style.loginContent}>
        You must{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
          className={style.link}
        >
          install Metamask
        </a>
        , a <br /> virtual Ethereum wallet, in your browser.
      </div>
    </div>
  )

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} height={200} width={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again or use another browser.
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )

  return <div className={page.outerWrapper}>{app(appStatus)}</div>
}

export default Home
