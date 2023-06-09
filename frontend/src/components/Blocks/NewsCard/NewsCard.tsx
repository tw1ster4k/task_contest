import { cn } from "@bem-react/classname"
import "./NewsCard.css"

interface INewsCard {
    id: number,
    author?: string,
    title: string,
    img ?: string,
    description: string,
}

const NewsCard = (news : INewsCard) => {
    const cnNewsCard = cn("NewsCard")
  return (
    <div className={cnNewsCard()}>
        <img className={cnNewsCard("Image")} src={news.img ? news.img : "https://zapschool.ru/images/background/logo5.png"} alt="" />
        <h2 className={cnNewsCard("Title")}>Название:{news.title}</h2>
        <h3 className={cnNewsCard("Author")}>Автор:{news.author ? news.author : "Неизвестный"}</h3>
        <p className={cnNewsCard("Description")} >{news.description}</p>
    </div>
  )
}

export default NewsCard