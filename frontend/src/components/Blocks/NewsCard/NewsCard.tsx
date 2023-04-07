import { cn } from "@bem-react/classname"
import "./NewsCard.css"

interface NewsCard {
    id: number,
    author?: string,
    title: string,
    img ?: string,
    body: string;

}

const NewsCard = (news : NewsCard) => {
    const cnNewsCard = cn("NewsCard")
  return (
    <div className={cnNewsCard()}>
        <img className={cnNewsCard("Image")} src={news.img ? news.img : "https://zapschool.ru/images/background/logo5.png"} alt="" />
        <h2 className={cnNewsCard("Title")}>Название:{news.title}</h2>
        <h3 className={cnNewsCard("Author")}>Автор:{news.author ? news.author : "Неизвестный"}</h3>
        <p className={cnNewsCard("Description")} >{news.body}</p>
    </div>
  )
}

export default NewsCard