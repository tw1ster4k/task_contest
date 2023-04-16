import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./MainPanel.css"
import { Link, Outlet } from 'react-router-dom'

const MainPanel = () => {
  const cnMainPanel = cn("MainPanel")
  const panelNav = [{id:1,href:"/news",name:"Новости"},{id:2,href:"/teachers",name:"Учителя"}, {id:3,href:'/gallery', name:"Галерея"}]

  const [addBtnLink, setAddBtnLink] = useState("/news");



  const clickHandle = (link: string) => setAddBtnLink(link)

  return (
    <div className={cnMainPanel()}>
        <nav className={cnMainPanel("Navbar")}>
            {panelNav.map((el) => 
            <Link to={`/panel${el.href}`} onClick={() => clickHandle(el.href)} className={cnMainPanel("Link")} key={el.id}>{el.name}</Link>
            )}
            <Link to={ `/panel${ addBtnLink }/new` } className={cnMainPanel("New")}> + </Link>
        </nav>
        <div className={cnMainPanel("Content")}>
              <Outlet />
        </div>
    </div>
  )
}

export default MainPanel