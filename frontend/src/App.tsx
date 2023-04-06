import './App.css';
import { cn } from '@bem-react/classname';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
