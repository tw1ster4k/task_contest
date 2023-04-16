import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./NewNews.css"

const NewNews = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const cnNewNews = cn("NewNews")

    const OnTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const onImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.value);    
      }

    const onAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value)
    }

    const onNews = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/news/new', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: title, author: author, img:img, description:description})
        })
        const result = response.json().then((event) => alert(event.info) )
    }

  return (
    <form className={cnNewNews()}>
        <label className={cnNewNews("Label")} htmlFor="">Название (обязательно):</label>
        <input type="text" onChange={OnTitle} className={cnNewNews("Title")} />
        <label className={cnNewNews("Label")} htmlFor="">Автор:</label>
        <input type="text" onChange={onAuthor} className={cnNewNews("Author")} maxLength={20} />
        <label className={cnNewNews("Label")} htmlFor="">Картинка (Ссылка из интернета):</label>
        <input type="text" onChange={onImg} className={cnNewNews("Image")} />
        <label className={cnNewNews("Label")} htmlFor="">Описание (до 500 слов, обязательно):</label>
        <input type="text" onChange={onDescription} className={cnNewNews("Description")} maxLength={500} />
        <button onClick={onNews} className={cnNewNews("Button")}>Создать</button>
    </form>
  )
}

export default NewNews