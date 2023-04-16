import { cn } from "@bem-react/classname"
import "./TeacherItem.css"

interface ITeacherItem {
    id: number,
    name: string,
    img: string
}

const TeacherItem = ({id, name, img} : ITeacherItem) => {
    const cnTeacherItem = cn("TeacherItem")

    const DelTeacher = async function (id: number) {
        const response = await fetch('http://localhost:3001/img/delete', {
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
        <p className={cnTeacherItem("Name")}>{name}</p>
        <img src={img} alt="" className={cnTeacherItem("Image")} />
        <button onClick={() => DelTeacher(id)} className={cnTeacherItem("Button")}>Удалить</button>
    </>
  )
}

export default TeacherItem