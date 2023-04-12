import React from 'react'
import "./Programms.css"
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'

const Programms = () => {
    const cnProgramms = cn("Programms")
  return (
    <div className={cnProgramms()}>
        <h1 className={cnProgramms("Title")}>Дополнительная общеобразовательная общеразвивающая программа технической направленности "Компьютерная графика" </h1>
        <h2 className={cnProgramms("Title")}>Возраст обучающихся: 11-12 лет </h2>
        <h2 className={cnProgramms("Title")}>Срок реализации: 1 год </h2>
        <Link className={cnProgramms("Link")} to="https://docs.google.com/document/d/1SoMAex0VNfn01laZLtb2MgDdEaOYt9j2i0eluSgxl88/edit">Подробнее</Link>
        <h1 className={cnProgramms("Title")}>Дополнительная общеобразовательная общеразвивающая программа физкультурно-спортивной направленности "Приключения в шахматной стране" </h1>
        <h2 className={cnProgramms("Title")}>Возраст обучающихся: 10-15 лет </h2>
        <h2 className={cnProgramms("Title")}>Срок реализации: 1 год </h2>
        <Link className={cnProgramms("Link")} to="https://docs.google.com/document/d/1pYjwCORxNX7QF28M0g-t3BjrWt6VPLKvS2yQaI1GOJs/edit">Подробнее</Link>
        <h1 className={cnProgramms("Title")}>Дополнительная общеобразовательная общеразвивающая программа технической направленности "Робототехника" </h1>
        <h2 className={cnProgramms("Title")}>Возраст обучающихся: 13-15 лет </h2>
        <h2 className={cnProgramms("Title")}>Срок реализации: 1 год </h2>
        <Link className={cnProgramms("Link")} to="https://docs.google.com/document/d/10R9dTomXd4oMhwaSdk1UstMWCGRT2HoUTVaIpv20mCs/edit">Подробнее</Link>
        <h1 className={cnProgramms("Title")}>Дополнительная общеобразовательная программа социально-педагогической направленности "Юный спасатель" </h1>
        <h2 className={cnProgramms("Title")}>Возраст обучающихся: 11-13 лет </h2>
        <h2 className={cnProgramms("Title")}>Срок реализации: 1 год </h2>
        <Link className={cnProgramms("Link")} to="https://docs.google.com/document/d/1zneGKxVq44OSm0CXoCbWhH23uLyofUCpsr1MeFhL8-o/edit">Подробнее</Link>
    </div>
  )
}

export default Programms