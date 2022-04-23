const style = {
  item: `flex items-center p-5 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
}

interface NewsItemProps {
  category: string
  title: string
  image: string
}

const NewsItem = ({ category, title, image }: NewsItemProps) => {
  return (
    <div className={style.item}>
      <div className={style.newsItemLeft}>
        <div className={style.newsItemCategory}>{category}</div>
        <div className={style.newsItemTitle}>{title}</div>
      </div>
      <div className={style.newsItemRight}>
        <img className={style.newsItemImage} src={image} alt="" />
      </div>
    </div>
  )
}

export default NewsItem
