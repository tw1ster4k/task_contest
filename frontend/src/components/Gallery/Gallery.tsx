import {useState, useEffect} from 'react'
import { cn } from '@bem-react/classname'
import "./Gallery.css"

const Gallery = () => {
    const [images, setImages] = useState([{img:""}])

    useEffect(() => {
        (async () => {
          const res = await fetch('http://localhost:3001/img', {
            method: "GET",
            headers: {
              'Content-Type':'application/json'
            }
          });
          const data = await res.json()
          setImages(data)
         })()
              }, [])

    const cnGallery = cn("Gallery")
  return (
    <div className={cnGallery()}>

        {images.map((el,index) => 
        
        <img src={el.img} key={index} alt="картинка" className={cnGallery("Image")} />
        )}

    </div>
  )
}

export default Gallery