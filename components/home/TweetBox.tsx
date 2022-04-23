import { ChangeEvent, MouseEvent, useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill, RiBarChartHorizontalLine } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-4`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

export interface TweetBoxProps {}

export default function TweetBox(props: TweetBoxProps) {
  const [tweetMessage, setTweetMessage] = useState('')
  const [isTweetValid, setIsTweetValid] = useState(false)

  const handleTweetMsgChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setTweetMessage(value)
    if (value.length > 0 && value.length <= 280) setIsTweetValid(true)
    else setIsTweetValid(false)
  }

  const postTweet = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(tweetMessage)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://scontent.fdel58-1.fna.fbcdn.net/v/t1.6435-9/207502429_789463771758563_8799433428446380283_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RIVsegECCfgAX_8rFSo&tn=JbwVai6Gok4vge3N&_nc_ht=scontent.fdel58-1.fna&oh=00_AT_-PZ-KRjFXGYvhmXd8D-wTuAIlg4IgiEfIex8UdsBr5g&oe=62891F40"
          alt="Profile image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(event) => handleTweetMsgChange(event)}
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <button
              className={`${style.submitGeneral} ${
                isTweetValid ? style.activeSubmit : style.inactiveSubmit
              }`}
              disabled={!isTweetValid}
              onClick={postTweet}
              type="submit"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
