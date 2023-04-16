import React from 'react'
import { cn } from '@bem-react/classname'
import './NewsItem.css'

interface INewsItem {
    id: number
    createdAt: Date
    title: string
}

const NewsItem = ({id, createdAt, title}: INewsItem) => {
    const cnNewsItem = cn("NewsItem")

    const DelNews = async function (id: number) {
      const response = await fetch('http://localhost:3001/news/delete', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id })
      })
      const result = response.json().then((data) => alert(data.delete))
  }

  return (
    <>
        <p className={cnNewsItem("Id")}>ID: {id.toString()}</p>
        <div className={cnNewsItem("Date")}>Дата: {createdAt.toString()}</div>
        <p className={cnNewsItem("Title")}>Название: {title}</p>
        <button onClick={() => DelNews(id)}  className={cnNewsItem("Button")}> Удалить </button> 
    </>
  )
}

export default NewsItem