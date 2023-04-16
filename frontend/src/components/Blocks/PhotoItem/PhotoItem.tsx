import { cn } from "@bem-react/classname"
import "./PhotoItem.css"

interface IPhotoItem {
    id:number,
    img:string
}



const PhotoItem = ({id, img} : IPhotoItem) => {
    const cnPhotoItem = cn("PhotoItem")

    const DelImg = async function (id: number) {
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
        <p className={cnPhotoItem("Id")}>ID: {id.toString()}</p>
        <img src={img} alt="картинка" className={cnPhotoItem("Image")} />
        <button  onClick={() => DelImg(id)}   className={cnPhotoItem("Button")}> Удалить </button> 
    </>
  )
}

export default PhotoItem