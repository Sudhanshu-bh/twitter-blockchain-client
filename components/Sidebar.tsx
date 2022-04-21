import { useState } from 'react'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import { BiHash } from 'react-icons/bi'
import { RiHome7Line, RiHome7Fill, RiFileList2Line, RiFileList2Fill } from 'react-icons/ri'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaHashtag, FaBell } from 'react-icons/fa'
import { BsBookmark, BsBookmarkFill, BsPerson, BsPersonFill } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'

import SidebarOption from './SidebarOption'

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

const Sidebar = ({ initialSelectedIcon = 'Home' }) => {
  const Home = 'Home'
  const Explore = 'Explore'
  const Notifications = 'Notifications'
  const Messages = 'Messages'
  const Bookmarks = 'Bookmarks'
  const Lists = 'Lists'
  const Profile = 'Profile'
  const More = 'More'
  const [selected, setSelected] = useState<string>(initialSelectedIcon)
  return (
    <div className={style.wrapper}>
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

        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Sudhansu Bhardwaj</div>
            <div className={style.handle}>@sudhansu_bh</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
