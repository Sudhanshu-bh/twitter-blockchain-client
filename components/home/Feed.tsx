import { useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import For from '../common/For'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const arr = [{ name: 'Sud' }, { name: 'Ashu' }, { name: 'Ram' }]

const tweets = [
  {
    displayName: 'Sudhanshu Bhardwaj',
    username: '0xbb21ebb22C06b2137810865507DccA4c9Ef2323D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/84751571_493232508048359_8076612551892271104_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_ohc=XOknWeu9_loAX9HRiNX&tn=JbwVai6Gok4vge3N&_nc_ht=scontent.fdel58-1.fna&oh=00_AT8wSWQNqq9lllSPIYRLsOeD3vd8CyngZkxHxREE7jKaWw&oe=628793CB',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Ashutosh Sharma',
    username: '0xbb21ebb22C06b2137810865607DccA4c9Ef2323D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/68478590_381918609179750_6465808986200342528_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=LyYxcxTlhTkAX9-XcEL&_nc_ht=scontent.fdel58-1.fna&oh=00_AT-U2DvdUzmcUEJoiVd7_XERI6CoZKPBJ_dvEDtohGGknA&oe=62871EAC',
    text: 'should I learn next.js?',
    isProfileImageNft: true,
    timestamp: '2022-02-14T12:00:00:000Z',
  },
  {
    displayName: 'Shiv',
    username: '0xbb21ebb22C07b2137810865507DccA4c9Ef2323D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/207502429_789463771758563_8799433428446380283_n.jpg?stp=dst-jpg_s526x395&_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RIVsegECCfgAX_Fl0BN&tn=JbwVai6Gok4vge3N&_nc_ht=scontent.fdel58-1.fna&oh=00_AT9AEuZChjbUvoG-ftPPrlH9vTNhSVOfud4BXskC2zhhew&oe=62891F40',
    text: "Lemons' rates are skyroketing",
    isProfileImageNft: false,
    timestamp: '2020-06-02T12:00:00:000Z',
  },
  {
    displayName: 'Ankit',
    username: '0xbb21ebb22C06b2137810865507DccA4c9Ef2223D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/68478590_381918609179750_6465808986200342528_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=LyYxcxTlhTkAX9-XcEL&_nc_ht=scontent.fdel58-1.fna&oh=00_AT-U2DvdUzmcUEJoiVd7_XERI6CoZKPBJ_dvEDtohGGknA&oe=62871EAC',
    text: 'will there be another lockdown',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Shiv',
    username: '0xbb21ebb22C07b2137810865507DccA4c9Ef2323D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/207502429_789463771758563_8799433428446380283_n.jpg?stp=dst-jpg_s526x395&_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RIVsegECCfgAX_Fl0BN&tn=JbwVai6Gok4vge3N&_nc_ht=scontent.fdel58-1.fna&oh=00_AT9AEuZChjbUvoG-ftPPrlH9vTNhSVOfud4BXskC2zhhew&oe=62891F40',
    text: "Lemons' rates are skyroketing",
    isProfileImageNft: false,
    timestamp: '2020-06-02T12:00:00:000Z',
  },
  {
    displayName: 'Ankit',
    username: '0xbb21ebb22C06b2137810865507DccA4c9Ef2223D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/68478590_381918609179750_6465808986200342528_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=LyYxcxTlhTkAX9-XcEL&_nc_ht=scontent.fdel58-1.fna&oh=00_AT-U2DvdUzmcUEJoiVd7_XERI6CoZKPBJ_dvEDtohGGknA&oe=62871EAC',
    text: 'will there be another lockdown',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Shiv',
    username: '0xbb21ebb22C07b2137810865507DccA4c9Ef2323D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/207502429_789463771758563_8799433428446380283_n.jpg?stp=dst-jpg_s526x395&_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RIVsegECCfgAX_Fl0BN&tn=JbwVai6Gok4vge3N&_nc_ht=scontent.fdel58-1.fna&oh=00_AT9AEuZChjbUvoG-ftPPrlH9vTNhSVOfud4BXskC2zhhew&oe=62891F40',
    text: "Lemons' rates are skyroketing",
    isProfileImageNft: false,
    timestamp: '2020-06-02T12:00:00:000Z',
  },
  {
    displayName: 'Ankit',
    username: '0xbb21ebb22C06b2137810865507DccA4c9Ef2223D',
    avatarUrl:
      'https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/68478590_381918609179750_6465808986200342528_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=LyYxcxTlhTkAX9-XcEL&_nc_ht=scontent.fdel58-1.fna&oh=00_AT-U2DvdUzmcUEJoiVd7_XERI6CoZKPBJ_dvEDtohGGknA&oe=62871EAC',
    text: 'will there be another lockdown',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
]

interface FeedProps {
  customId: string
}

const Feed = ({ customId }: FeedProps) => {
  return (
    <div className={style.wrapper} id={customId}>
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
