import Link from 'next/link'

import { useEffect, useContext, useState } from 'react'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import { BiHash } from 'react-icons/bi'
import { RiHome7Line, RiHome7Fill, RiFileList2Line, RiFileList2Fill } from 'react-icons/ri'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaHashtag, FaBell } from 'react-icons/fa'
import { BsBookmark, BsBookmarkFill, BsPerson, BsPersonFill } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'

import SidebarOption from './SidebarOption'
import { useRouter } from 'next/router'
import { TwitterContext } from '../context/TwitterContext'

const style = {
  wrapper: `fixed h-screen px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4 h-11 w-11`,
  profileImage: `h-11 w-11 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `font-medium`,
  handle: `text-[#8899a6] text-sm`,
  moreContainer: `flex items-center ml-5 mr-2`,
}

interface SidebarProps {
  initialSelectedIcon?: string
}

const Sidebar = ({ initialSelectedIcon = 'Home' }: SidebarProps) => {
  const Home = 'Home'
  const Explore = 'Explore'
  const Notifications = 'Notifications'
  const Messages = 'Messages'
  const Bookmarks = 'Bookmarks'
  const Lists = 'Lists'
  const Profile = 'Profile'
  const More = 'More'

  const sidebar = 'sidebar'
  const sidebarInnerContainer = 'sidebarInnerContainer'

  const router = useRouter()
  const { currentAccount, currentUser } = useContext(TwitterContext)

  const [uName, setUName] = useState('')
  const [handle, setHandle] = useState('')
  useEffect(() => {
    setUName(currentUser.name)
    setHandle(currentUser.handle)
  }, [currentUser])

  const [selected, setSelected] = useState<string>(initialSelectedIcon)

  useEffect(() => {
    const sidebarInner = document.getElementById(sidebarInnerContainer) as Element
    let sidebarInnerWidth = window.getComputedStyle(sidebarInner).width

    const sidebarOuter = document.getElementById(sidebar)
    sidebarOuter!.style.width = sidebarInnerWidth
  }, [])

  return (
    <div id={sidebar}>
      <div className={style.wrapper} id={sidebarInnerContainer}>
        <div className={style.twitterIconContainer}>
          <VscTwitter />
        </div>
        <div className={style.navContainer}>
          <SidebarOption
            text={Home}
            Icon={selected === Home ? RiHome7Fill : RiHome7Line}
            isActive={selected === Home}
            setSelected={setSelected}
            redirect="/"
          />
          <SidebarOption
            text={Explore}
            Icon={selected === Explore ? FaHashtag : BiHash}
            isActive={selected === Explore}
            setSelected={setSelected}
            redirect="/explore"
          />
          <SidebarOption
            text={Notifications}
            Icon={selected === Notifications ? FaBell : FiBell}
            isActive={selected === Notifications}
            setSelected={setSelected}
            redirect="/notifications"
          />
          <SidebarOption
            text={Messages}
            Icon={selected === Messages ? HiMail : HiOutlineMail}
            isActive={selected === Messages}
            setSelected={setSelected}
            redirect="/messages"
          />
          <SidebarOption
            text={Bookmarks}
            Icon={selected === Bookmarks ? BsBookmarkFill : BsBookmark}
            isActive={selected === Bookmarks}
            setSelected={setSelected}
            redirect="/bookmarks"
          />
          <SidebarOption
            text={Lists}
            Icon={selected === Lists ? RiFileList2Fill : RiFileList2Line}
            isActive={selected === Lists}
            setSelected={setSelected}
            redirect="/lists"
          />
          <SidebarOption
            text={Profile}
            Icon={selected === Profile ? BsPersonFill : BsPerson}
            isActive={selected === Profile}
            setSelected={setSelected}
            redirect="/profile"
          />
          <SidebarOption text={More} Icon={CgMoreO} setSelected={setSelected} />

          <div
            className={style.tweetButton}
            onClick={() => router.push(`${router.pathname}/?mint=${currentAccount}`)}
          >
            Mint
          </div>
        </div>
        <div className={style.profileButton}>
          <div className={style.profileLeft}>
            <img
              src={currentUser.profileImage}
              alt="profile"
              className={`${style.profileImage} ${currentUser.isProfileImageNft && 'smallHex'}`}
            />
          </div>
          <div className={style.profileRight}>
            <div className={style.details}>
              <div className={style.name}>
                {uName?.length > 15 ? `${uName.slice(0, 14)}...` : uName}
              </div>
              <div className={style.handle}>
                @{handle?.length > 15 ? `${handle.slice(0, 14)}...` : handle}
              </div>
            </div>
            <div className={style.moreContainer}>
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
