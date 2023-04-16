import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./NewPhoto.css"

const NewPhoto = () => {
    const [photo, setPhoto] = useState("")
    const cnNewPhoto = cn("NewPhoto")

    const onImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(e.target.value)
    }

    const onPhoto = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/img/new', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({img:photo})
        })
        const result = response.json().then((event) => alert(event.info) )
    }

  return (
    <form className={cnNewPhoto()}>
        <label htmlFor="" className={cnNewPhoto("Label")}>Вставьте ссылку на фотографию:</label>
        <input type="text" className={cnNewPhoto("Input")} onChange={onImg}/>
        <button onClick={onPhoto} className={cnNewPhoto("Button")}>Создать</button>
    </form>
  )
}

export default NewPhoto