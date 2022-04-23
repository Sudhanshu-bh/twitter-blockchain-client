import { useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import { tweets } from '../../lib/static'
import For from '../common/For'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[1.5] border-r border-l border-[#38444d] mr-4`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const arr = [{ name: 'Sud' }, { name: 'Ashu' }, { name: 'Ram' }]

interface FeedProps {}

const Feed = (props: FeedProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      <For array={tweets} RepeatElement={Post} />
    </div>
  )
}

export default Feed
