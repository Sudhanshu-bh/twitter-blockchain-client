const style = {
  item: `flex items-center p-5 hover:bg-[#22303c] cursor-pointer`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

interface FollowSuggestionsProps {
  name: string
  handle: string
  avatarUrl: string
}

const FollowSuggestions = ({ name, handle, avatarUrl }: FollowSuggestionsProps) => {
  return (
    <div className={style.item}>
      <div className={style.followAvatarContainer}>
        <img src={avatarUrl} alt={handle} className={style.followAvatar} />
      </div>
      <div className={style.profileDetails}>
        <div className={style.name}>{name}</div>
        <div className={style.handle}>{handle}</div>
      </div>
      <div className={style.followButton}>Follow</div>
    </div>
  )
}

export default FollowSuggestions
