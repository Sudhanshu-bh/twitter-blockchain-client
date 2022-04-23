// import type { NextPage } from 'next'

import Feed from '../components/home/Feed'
import Widget from '../components/home/Widget'
import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-3/4 flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar customId="sidebar" />
        <Feed customId="feed" />
        <Widget />
      </div>
    </div>
  )
}

export default Home
