import React, {useEffect, useState} from 'react'
import { cn } from '@bem-react/classname'
import "./TeachersList.css"
import TeacherItem from '../../Blocks/TeacherItem/TeacherItem'

const TeachersList = () => {

    const [teachers, setTeachers] = useState([{id:1, name:"", img:""}])

    const cnTeachersList = cn("TeachersList")

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/teachers', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
            setTeachers(data)
        })()
              }, [])
  return (
    <div className={cnTeachersList()}>
        {teachers.map((el, index) =>
            <li key={index} className={cnTeachersList("Item")}>
                <TeacherItem id={el.id} name={el.name} img={el.img}/>
            </li>
            )
        }
    </div>
  )
}

export default TeachersList