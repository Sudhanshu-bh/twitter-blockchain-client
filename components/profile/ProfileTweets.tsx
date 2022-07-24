import { FC, useContext } from 'react'
import For from '../common/For'
import Post from '../Post'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
  wrapper: ``, //no-scrollbar
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

interface IProfileTweetsProps {}

const ProfileTweets: FC<IProfileTweetsProps> = (props) => {
  const { currentUser } = useContext(TwitterContext)

  const userTweets = currentUser?.tweets?.map((tweet: any) => ({
    author: {
      name: currentUser.name,
      handle: currentUser.handle,
      isProfileImageNft: currentUser.isProfileImageNft,
      profileImage: currentUser.profileImage,
    },
    ...tweet,
  }))

  return (
    <>
      <div className={style.wrapper}>
        <For array={userTweets} RepeatElement={Post} />
      </div>
    </>
  )
}

export default ProfileTweets
