import { useEffect, useState } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { format } from 'timeago.js'
import If from './common/If'

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-medium mr-1`,
  // verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2 font-light`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

interface PostProps {
  profileImage: string
  tweetText: string
  timestamp: string // '2020-06-01T12:00:00:000Z',
  author: {
    name: string
    handle: string
    profileImage: string
    isProfileImageNft: boolean
  }
}

const Post = (props: PostProps) => {
  const {
    author: { name: uName, handle, isProfileImageNft, profileImage },
    tweetText,
    timestamp,
  } = props

  const [uHandle, setUHandle] = useState('')

  const [tweetTextFinal] = useState(
    tweetText.split('\n').map((line, index) => (
      <div key={index}>
        {line}
        {line === '' && <div>&#10240;</div>}
      </div>
    ))
  )

  useEffect(() => {
    setUHandle(handle)
  }, [handle])

  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={profileImage}
          alt="Profile Image"
          className={`${style.profileImage} ${isProfileImageNft && 'smallHex'}`}
        />
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{uName}</span>
            <If condition={isProfileImageNft}>
              <BsFillPatchCheckFill />
            </If>
            <span className={style.handleAndTimeAgo}>
              @{uHandle} · {format(new Date(timestamp).getTime())}
            </span>
          </span>
          <div className={style.tweet}>{tweetTextFinal}</div>
        </div>
        <div className={style.footer}>
          <div className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}>
            <FaRegComment />
          </div>
          <div className={`${style.footerIcon} hover:bg-[#1b393b] hover:text-[#03ba7c]`}>
            <FaRetweet />
          </div>
          <div className={`${style.footerIcon} hover:bg-[#39243c] hover:text-[#f91c80]`}>
            <AiOutlineHeart />
          </div>
          <div className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}>
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
