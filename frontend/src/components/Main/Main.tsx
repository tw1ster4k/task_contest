import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { cn } from "@bem-react/classname"
import "./Main.css"
import Carousel from "../Carousel/Carousel"
import { Link } from "react-router-dom";

const images = [
    'https://t21532j.sch.obrazovanie33.ru/upload/site_files/2j/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%A2%D0%BE%D1%87%D0%BA%D0%B0%20%D0%A0%D0%BE%D1%81%D1%82%D0%B0.jpg',
    'https://gorodnsk63.ru/wp-content/uploads/2020/09/tochkaya-rosta_cninskaya-shkola-1.jpg',
    'https://cdnn21.img.ria.ru/images/07e6/09/07/1815060650_0:63:1201:738_1920x0_80_0_0_cf12e23c9534337f83d96acd91f8a249.jpg',
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
            <img src="https://sun9-19.userapi.com/impg/9347tAqrTllx8suZC16WC_Xf7QCVoJsZopbKQw/XSi3xjc80Eo.jpg?size=800x600&quality=95&sign=041495898fd99a6b31cdce41d0935918&type=album" alt="" className={cnMain("HistoryImage")} />
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
            <img className={cnMain("SubjectsImage")} src="https://sun9-58.userapi.com/impg/VzcxxaF5dJDjEsSqGMLwh6CYmm8nWrD8qVv_2g/vgWQNVz-XsE.jpg?size=800x600&quality=95&sign=071c21ab652b6edf29701056cbce4f24&type=album" alt="" />
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