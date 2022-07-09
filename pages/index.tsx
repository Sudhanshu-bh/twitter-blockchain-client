// import type { NextPage } from 'next'

import Feed from '../components/home/Feed'
import Widgets from '../components/home/Widgets'
import Sidebar from '../components/Sidebar'
import { page } from '../styles/gStyles'

const style = {
  outerContent: `max-w-[1400px] w-[86%] flex justify-between`,
}

const Home = () => {
  return (
    <div className={page.outerWrapper}>
      <div className={style.outerContent}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
