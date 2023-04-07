import { cn } from '@bem-react/classname';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Documents from './components/Documents/Documents';

function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/news' element={<News />}/>
        <Route path="/documents" element={<Documents />}/>
      </Routes>
    </div>
  );
}

export default App;
