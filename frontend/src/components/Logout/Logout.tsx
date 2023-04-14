import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import "./Logout.css"

const Logout = () => {
    const cnLogout = cn("Logout")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onExit = async () => {
        dispatch({type: 'DEL_SESS', payload: {}})
        try {
          await fetch('http://localhost:3001/logout', {
            method: 'GET',
            credentials: 'include',
          });
          navigate("/")
        } catch (error) {
          console.log(error)
        }
    }


  return (
    <div className={cnLogout()}>
        <h1 className={cnLogout("TItle")}>Вы действительно хотите выйти?</h1>
        <button onClick={onExit} className={cnLogout("Button")}>Выйти</button>
    </div>
  )
}

export default Logout