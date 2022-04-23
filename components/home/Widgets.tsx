import { news, whoToFollow } from '../../lib/static'
import { BiSearch } from 'react-icons/bi'
import For from '../common/For'
import NewsItem from './NewsItem'
import { useEffect } from 'react'

const style = {
  wrapper: `fixed p-4`,
  searchBar: `flex items-center bg-[#243340] px-5 py-3 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2 text-xl`,
  inputBox: `bg-transparent outline-none mx-1`,
  section: `bg-[#192734] my-5 rounded-xl overflow-hidden`,
  title: `px-5 py-3 font-bold text-lg`,
  showMore: `px-5 py-4 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

interface WidgetsProps {}

const Widgets = (props: WidgetsProps) => {
  const widgets = 'widgets'
  const WidgetsContainerInner = 'WidgetsContainerInner'

  useEffect(() => {
    const WidgetsOuter = document.getElementById(widgets) as Element
    const WidgetsInner = document.getElementById(WidgetsContainerInner)
    WidgetsInner!.style.width = window.getComputedStyle(WidgetsOuter).width
  }, [])

  return (
    <div id={widgets} className="flex-[1]">
      <div className={style.wrapper} id={WidgetsContainerInner}>
        <div className={style.searchBar}>
          <BiSearch className={style.searchIcon} />
          <input className={style.inputBox} type="text" placeholder="Search Twitter" />
        </div>
        <div className={style.section}>
          <div className={style.title}>What’s happening</div>
          <For array={news} RepeatElement={NewsItem} />
          <div className={style.showMore}>Show more</div>
        </div>
        <div className={style.section}>
          <div className={style.title}>Who to follow</div>
          {/* <For array={whoToFollow} RepeatElement={} /> */}
        </div>
      </div>
    </div>
  )
}

export default Widgets
