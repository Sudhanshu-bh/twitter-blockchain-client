import * as React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { gColors } from '../../styles/gStyles'
import If from '../common/If'

const style = {
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center w-full overflow-hidden`, // h-[15vh] instead of w-full
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[8.5rem] rounded-full mt-[-4.25rem] mb-2 flex justify-start items-center px-4 flex justify-between`,
  profileImage: `object-cover rounded-full h-full border-4 border-[#15202b]`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

interface IProfileHeaderProps {}

const ProfileHeader: React.FC<IProfileHeaderProps> = (props) => {
  const router = useRouter()

  const isProfileImageNft = false
  const currentUser = '0xbb21ebb22C06b2137810865607DccA4c9Ef2323D'

  return (
    <>
      <div>
        <div className={style.header}>
          <div onClick={() => router.push('/')} className={style.backButton}>
            <BsArrowLeftShort />
          </div>
          <div className={style.details}>
            <div className={style.primary}>Sudhanshu</div>
            <div className={style.secondary}>4 tweets</div>
          </div>
        </div>
        <div className={style.coverPhotoContainer}>
          <img
            src="https://i.pinimg.com/originals/4d/d5/85/4dd585d3e8a1a6b23f9a54e5a1076c8b.jpg"
            alt=""
            className={style.coverPhoto}
          />
        </div>
        <div className={isProfileImageNft ? 'hex' : style.profileImageContainer}>
          <img
            src="https://pbs.twimg.com/profile_images/1149028860677148673/qJiM1tI9_400x400.jpg"
            alt=""
            className={style.profileImage}
          />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Chandler Bing</div>
          <div className={style.secondary}>
            <If condition={!!currentUser}>
              @{currentUser.slice(0,8)}...{currentUser.slice(-5)}
            </If>
          </div>
        </div>
        <div className={style.nav}>
          <div>About</div>
          <div className={style.activeNav}>Tweets</div>
          <div>Tweets & Replies</div>
          <div>Media</div>
          <div>Likes</div>
        </div>
      </div>
    </>
  )
}

export default ProfileHeader
