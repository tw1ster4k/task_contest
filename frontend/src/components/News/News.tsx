import { useEffect, useState } from "react"
import { cn } from "@bem-react/classname"
import "./News.css"
import NewsCard from "../Blocks/NewsCard/NewsCard"

const News = () => {
const [news,setNews] = useState([{id:1,author:"",title:"",description:'',img:''}])

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

      const cnNews = cn("News")
    
    
  return (
    <div className={cnNews()}>
        {
            news.map((el,index) => 
            
            <NewsCard key={index} id={el.id} author={el.author} title={el.title} description={el.description} img={el.img} />
            )
        }
    </div>
  )
}

export default News