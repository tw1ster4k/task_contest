import React from 'react'
import { cn } from '@bem-react/classname'
import './TeacherCard.css'

interface ITeacherCard{
    name: string,
    description: string,
    img: string
}

const TeacherCard = ({name,description,img}: ITeacherCard) => {
    const cnTeacherCard = cn("TeacherCard")
  return (
    <div className={cnTeacherCard()}>
        <img src={img} alt="учитель" className={cnTeacherCard("Image")} />
        <h2 className={cnTeacherCard("Name")}>{name}</h2>
        <h3 className={cnTeacherCard("Lessons")}>{description}</h3>
    </div>
  )
}

export default TeacherCard