import { FC } from 'react'
import For from '../common/For'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Joey Tribbiani',
    username: '0xbb21ebb22C06b2137810865507DccA4c9Ef2323D',
    avatarUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2016%2F07%2F03%2Ffriends.jpg&q=60',
    text: 'Hey, How you doin?',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Chandler Bing',
    username: '0xbb21ebb22C06b2137810865607DccA4c9Ef2323D',
    avatarUrl: 'https://i.pinimg.com/originals/7f/3a/8d/7f3a8d5db6a8f9d9dbd52c430bbc1f2b.jpg',
    text: 'The ball is Janice. The ball is Janice!',
    isProfileImageNft: false,
    timestamp: '2022-02-14T12:00:00:000Z',
  },
  {
    displayName: 'Phoebe Buffay',
    username: '0xbb21ebb22C07b2137810865507DccA4c9Ef2323D',
    avatarUrl: 'https://openpsychometrics.org/tests/characters/test-resources/pics/F/3.jpg',
    text: 'Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, what are they feeding you?',
    isProfileImageNft: false,
    timestamp: '2020-06-02T12:00:00:000Z',
  },
  {
    displayName: 'Ross Geller',
    username: '0xbb21ebb22C06b2137810865607DccA4c9Ef2323D',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6f/David_Schwimmer_as_Ross_Geller.jpg',
    text: 'Hey Rach, I need you...',
    isProfileImageNft: true,
    timestamp: '2022-02-14T12:00:00:000Z',
  },
  {
    displayName: 'Chandler Bing',
    username: '0xbb21ebb22C07b2137810865507DccA4c9Ef2323D',
    avatarUrl: 'https://i.pinimg.com/originals/7f/3a/8d/7f3a8d5db6a8f9d9dbd52c430bbc1f2b.jpg',
    text: "and that's how a bill becomes a law.",
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

interface IProfileTweetsProps {}

const ProfileTweets: FC<IProfileTweetsProps> = (props) => {
  return (
    <>
      <div className={style.wrapper}>
        <For array={tweets} RepeatElement={Post} />
      </div>
    </>
  )
}

export default ProfileTweets
