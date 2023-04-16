import { cn } from "@bem-react/classname"
import "./PhotoList.css"
import {useState, useEffect} from "react"
import PhotoItem from "../../Blocks/PhotoItem/PhotoItem"

const PhotoList = () => {
    const [photo, setPhoto] = useState([{id:1, img:""}])
    const cnPhotoList = cn("PhotoList")

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/img', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
            setPhoto(data)
        })()
              }, [])

  return (
    <div className={cnPhotoList()}>
        {photo.map((el, index) =>
            <li key={index} className={cnPhotoList("Item")}>
                <PhotoItem  id={el.id} img={el.img}/>
            </li>
            )
        }
    </div>
  )
}

export default PhotoList