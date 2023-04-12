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

function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/news' element={<News />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/programms' element={<Programms />}/>
        <Route path='/teachers' element={<Teachers />} />
      </Routes>
    </div>
  );
}

export default App;
