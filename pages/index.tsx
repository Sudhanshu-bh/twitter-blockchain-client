// import type { NextPage } from 'next'

import Feed from '../components/home/Feed'
import Widgets from '../components/home/Widgets'
import Sidebar from '../components/Sidebar'
import { page } from '../styles/gStyles'

const Home = () => {
  return (
    <div className={page.outerWrapper}>
      <div className={page.outerContent}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
