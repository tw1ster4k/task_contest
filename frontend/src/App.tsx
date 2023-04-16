import { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Documents from './components/Documents/Documents';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Programms from './components/Programms/Programms';
import Teachers from './components/Teachers/Teachers';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import Logout from './components/Logout/Logout';
import MainPanel from './components/Panel/MainPanel/MainPanel';
import NewsList from './components/Panel/NewsList/NewsList';
import PhotoList from './components/Panel/PhotoList/PhotoList';
import TeachersList from './components/Panel/TeachersList/TeachersList';
import NewNews from './components/Panel/NewNews/NewNews';
import NewTeacher from './components/Panel/NewTeacher/NewTeacher';
import NewPhoto from './components/Panel/NewPhoto/NewPhoto';

interface Istate {
  name: string
}

function App() {
  const dispatch = useDispatch()
  const cnApp = cn("App")
  
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/checkAdmin', {
        method: "GET",
        headers: {
          'Content-Type':'application/json'
        }
      });
      const data = await res.json().then((el) => {
        if(el.answer = "Выполнено"){
          dispatch({type: "ADMIN", payload: el.name})
        }else{
          alert(el.answer)
        }
      })
    })()
  }, [])
  
  const admin = useSelector((state: Istate) => state.name)
  console.log(admin)
  

  return (
    <div className={cnApp()}>
      <Navbar isAdmin={admin}/>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/news' element={<News />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/login' element={<Login  />}/>
        <Route path='/logout' element={<Logout />} />
        <Route path='/programms' element={<Programms />}/>
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/panel' element={<MainPanel />} >
          <Route path='news' element={<NewsList />} />
            <Route path='news/new' element={<NewNews />} />
          <Route path='gallery' element={<PhotoList />} />
            <Route path='gallery/new' element={<NewPhoto />} />
          <Route path='teachers' element={<TeachersList />} />
            <Route path='teachers/new' element={<NewTeacher />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
