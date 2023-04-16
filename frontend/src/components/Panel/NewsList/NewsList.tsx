import React, {useState, useEffect} from 'react'
import { cn } from '@bem-react/classname'
import "./NewsList.css"
import NewsItem from '../../Blocks/NewsItem/NewsItem'

const NewsList = () => {
    const [news, setNews] = useState([{id:1, title:"", createdAt: new Date()}])
    const cnNewsList = cn("NewsList")

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/news', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
            setNews(data)
        })()
              }, [])

  return (
    <div className={cnNewsList()}>
        {news.map((el, index) =>
            <li key={index} className={cnNewsList("Item")}>
                <NewsItem id={el.id} title={el.title} createdAt={el.createdAt} />
            </li>
            )
        }
    </div>
  )
}

export default NewsList