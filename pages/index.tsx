// import type { NextPage } from 'next'

import Feed from '../components/home/Feed'
import Widgets from '../components/home/Widgets'
import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-[72%] flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
