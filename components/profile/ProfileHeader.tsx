import { FC, useContext } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
import If from '../common/If'
import { TwitterContext } from '../../context/TwitterContext'
import defaultCoverImage from '../../assets/default_coverImage.png'
import defaultProfileImage from '../../assets/default_profileImage.jpg'
import Image from 'next/image'

const style = {
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center w-full overflow-hidden`, // h-[15vh] instead of w-full
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-fit h-[145px] rounded-full mt-[-4.25rem] mb-2 ml-4 flex justify-start items-center flex justify-between border-4 border-[#fff] z-10`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

interface IProfileHeaderProps {}

const ProfileHeader: FC<IProfileHeaderProps> = (props) => {
  const router = useRouter()
  const {
    currentUser: { name: uName, handle, profileImage, coverImage, tweets },
  } = useContext(TwitterContext)

  const isProfileImageNft = false

  return (
    <>
      <div>
        <div className={style.header}>
          <div onClick={() => router.push('/')} className={style.backButton}>
            <BsArrowLeftShort />
          </div>
          <div className={style.details}>
            <div className={style.primary}>{uName}</div>
            <div className={style.secondary}>
              {tweets?.length} {tweets?.length > 1 ? 'Tweets' : 'Tweet'}
            </div>
          </div>
        </div>
        <div className={style.coverPhotoContainer}>
          <If condition={coverImage}>
            <Image
              src={!coverImage ? defaultCoverImage : coverImage}
              height={500}
              width={1500}
              alt=""
              className={style.coverPhoto}
            />
          </If>
          {console.log(!coverImage)}
        </div>
        <div className={isProfileImageNft ? 'hex' : style.profileImageContainer}>
          <Image
            src={!profileImage ? defaultProfileImage : profileImage}
            height={135}
            width={135}
            alt=""
            className={`${style.profileImage} ${isProfileImageNft && 'hex'}`}
            style={{ border: '4px solid #15202b!important' }}
          />
          {console.log('Profile Image:: ', !profileImage)}
        </div>
        <div className={style.details}>
          <div className={style.primary}>{uName}</div>
          <div className={style.secondary}>
            <If condition={!!handle}>@{handle}</If>
          </div>
        </div>
        <div className={style.nav}>
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
