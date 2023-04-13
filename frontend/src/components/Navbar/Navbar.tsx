import { cn } from "@bem-react/classname"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    const Arr = [{link:'/news', name:"Новости"}, {link: '/documents', name:"Документы"}, {link:'/programms', name:"Программы"}, {link:"/gallery",name:'Галерея'}, {link:'/teachers',name:'Учителя'}]

    const cnNavbar = cn("Navbar")
  return (
    <nav className={cnNavbar()}>
        <Link to="/" ><img className={cnNavbar("Image")} src="https://tochkarosta.68edu.ru/wp-content/uploads/2019/10/cropped-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%82%D0%BE%D1%87%D0%B5%D0%BA-%D1%80%D0%BE%D1%81%D1%82%D0%B0-%D0%B1%D0%B5%D0%B7-%D1%84%D0%BE%D0%BD%D0%B0-%D0%B8-%D0%BC%D0%B5%D0%BB%D0%BA%D0%B8%D1%85.png" alt="Главная" /></Link>
            {Arr.map((el:object,index:number) => 
        //@ts-ignore
            <Link to={el.link} key={index} className={cnNavbar("Link")}>{el.name}</Link>
            )}
    </nav>
  )
}

export default Navbar