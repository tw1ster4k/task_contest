import { useEffect, useState } from "react"
import { cn } from "@bem-react/classname"
import "./News.css"
import NewsCard from "../Blocks/NewsCard/NewsCard"

const News = () => {
    const arr = [{id:1, author:"Name", title:"New Title" ,body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:"https://sun9-47.userapi.com/impg/FJCTMFtRU6RozQimq6CwLa8dxJrHMCRnk30n1g/LC4VQ-lh0xs.jpg?size=800x533&quality=95&sign=3a6e6310f4fc1742715a510cf07e47dd&type=album" },
        {id:2, author:"You", title:"Title" ,body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:undefined }
]
    const cnNews = cn("News")
    
    
  return (
    <div className={cnNews()}>
        {
            arr.map((el,index) => 
            <NewsCard key={index} id={el.id} author={el.author} title={el.title} body={el.body} img={el.img} />
            )
        }
    </div>
  )
}

export default News