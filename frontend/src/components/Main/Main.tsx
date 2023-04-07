import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { cn } from "@bem-react/classname"
import "./Main.css"
import Carousel from "../Carousel/Carousel"
import { Link } from "react-router-dom";

const images = [
    'http://www.admbal.ru/upload/iblock/261/itzu1gdfm2ramcqhwmmh40t9msdrb87w.jpg',
    'https://sun9-43.userapi.com/impg/KIHyb4HU7G_vUGmyn-uwIvq3YDwLbkdFmJMa7Q/dsPYkjli03g.jpg?size=1280x853&quality=95&sign=1f1cc9af2583b8c5cda77fc7b84a8c31&type=album',
    'https://sun9-67.userapi.com/impg/nganpFkh6ZnCNgCa7mXKh8zTWeA-8cr1vP6KWQ/UiIHijGa5ko.jpg?size=800x533&quality=95&sign=930a726d2c7bcf89ce95e8afad6a27b1&type=album',
  ];

const Main = () => {
    const cnMain = cn("Main")
  return (
    <div className={cnMain()}>
         <Carousel images={images} />
         <div className={cnMain("History")}>
            <div className={cnMain("HistoryText")}>
                <p className={cnMain("Text")}>Центр образования естественно-научной и технологической направленностей «Точка роста» на базе МБОУ "Светлинская СОШ№1" создан в 2020 году в рамках федерального проекта «Современная школа» национального проекта «Образование». Он призван обеспечить повышение охвата обучающихся программами основного общего и дополнительного образования естественно-научной и технологической направленностей с использованием современного оборудования.</p>
            </div>
            <img src="https://sun9-79.userapi.com/impg/9lPm1jxS0yRmUMYJz6X79VqLPAeSRRc714_JpA/YPtRkLc-SjA.jpg?size=1280x853&quality=95&sign=d110b5c4a4b30a07d8530ae01d24672a&type=album" alt="" className={cnMain("HistoryImage")} />
         </div>
         <div className={cnMain("Location")}>
            <YMaps>
                <div className={cnMain("Map")}>
                    <Map height="325px" width="450px" defaultState={{ center: [50.821644, 60.854725], zoom: 16 }}>
                        <Placemark defaultGeometry={[50.821644, 60.854725]} />
                    </Map>
                </div>
            </YMaps>
            <div className={cnMain("LocationText")}>
                <p className={cnMain("Text")}>Центры «Точка роста» на базе общеобразовательных организаций сельской местности и малых городов создаются для формирования условий для повышения качества общего образования, в том числе за счет обновления учебных помещений, приобретения современного оборудования, повышения квалификации педагогических работников и расширения практического содержания реализуемых образовательных программ.</p>
            </div>
         </div>
         <div className={cnMain('Subjects')}>
            <div className={cnMain("SubjectsText")}>
                <p className={cnMain("Text",{size:"lg"})}>Центр «Точка роста» является частью образовательной среды общеобразовательной организации, на базе которой осуществляется: преподавание учебных предметов из предметных областей «Естественно-научные предметы», «Естественные науки», «Обществознание и естествознание», «Математика и информатика», «Технология»;</p>
            </div>
            <img className={cnMain("SubjectsImage")} src="https://sun9-61.userapi.com/impg/686GWK5uuib6fwV4aN5-aA0NKZoqCGxMHwUBoA/jbR6BnPT44Q.jpg?size=1280x853&quality=95&sign=cc40442c821572bd46dbe5271eb86c72&type=album" alt="" />
            <div className={cnMain("SubjectsText")}>
                <p className={cnMain("Text",{size:"lg"})}>внеурочная деятельность для поддержки изучения предметов естественно-научной и технологической направленностей; дополнительное образование детей по программам естественнонаучной и технической направленностей; проведение внеклассных мероприятий для обучающихся; организация образовательных мероприятий, в том числе в дистанционном формате с участием обучающихся из других образовательных организаций.</p>
            </div>
         </div>
         <div className={cnMain("Ministry")}>
            <img src="https://edu.gov.ru/application/frontend/skin/default/assets/data/official_symbols/orel_logo_text.png" alt="" className={cnMain("MinistryImage")} />
            <div className={cnMain("MinistryText")}>
                <div>
                    <p className={cnMain("Text")}>Центры «Точка роста» создаются при поддержке Министерства просвещения Российской Федерации</p>
                    <Link to="https://edu.gov.ru/" className={cnMain("MinistryLink")}>Подробнее</Link>
                </div>
                <div>
                    <p className={cnMain("Text")}>Информация о национальном проекте «Образование» на сайте Министерства просвещения Российской Федерации</p>
                    <Link to="https://edu.gov.ru/national-project/" className={cnMain("MinistryLink")}>Подробнее</Link>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Main