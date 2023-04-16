import { cn } from '@bem-react/classname'
import React, {useState} from 'react'
import "./NewTeacher.css"

const NewTeacher = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")

    const onImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.value);    
      }

    const onDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onTeacher = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/teachers/new', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name:name, img:img, description:description})
        })
        const result = response.json().then((event) => alert(event.info) )
    }

    

    const cnNewTeacher = cn("NewTeacher")
    return (
    <form className={cnNewTeacher()}>
        <label className={cnNewTeacher("Label")} htmlFor="">ФИО:</label>
        <input type="text" onChange={onName} className={cnNewTeacher("Name")} />
        <label  className={cnNewTeacher("Label")} htmlFor="">Фотография (Ссылка с соц. сетей):</label>
        <input type="text" onChange={onImg} className={cnNewTeacher("Image")}  />
        <label  className={cnNewTeacher("Label")} htmlFor="">Должность:</label>
        <input type="text" onChange={onDescription} className={cnNewTeacher("Description")} />
        <button onClick={onTeacher} className={cnNewTeacher("Button")}>Добавить</button>
    </form>
  )
}

export default NewTeacher