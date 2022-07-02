import * as React from 'react'
import Widgets from '../components/home/Widgets'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import { page } from '../styles/gStyles'

const style = {
  // mainContent: `flex-[1.5] border-r border-l border-[#38444d] overflow-y-scroll`,
}

interface IprofileProps {}

const profile: React.FC<IprofileProps> = (props) => {
  return (
    <div className={page.outerWrapper}>
      <div className={page.outerContent}>
        <Sidebar />
        <div className={page.middleContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default profile
