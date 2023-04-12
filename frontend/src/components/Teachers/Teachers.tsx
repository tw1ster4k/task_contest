import React, {useState, useEffect} from 'react'
import "./Teachers.css"
import { cn } from '@bem-react/classname'
import TeacherCard from '../Blocks/TeacherCard/TeacherCard'

const Teachers = () => {
    const cnTeachers = cn("Teachers")
    const [state, setState] = useState([{id:1,name:"", description:"", img:""}])

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/teachers', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
            
          setState(data)
         })()
              }, [])

  return (
    <div className={cnTeachers()}>
        {state.map((el, index) => 
        <TeacherCard key={index} name={el.name} description={el.description} img={el.img} />
        )}
    </div>
  )
}

export default Teachers