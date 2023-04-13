import React,{ChangeEvent, useState} from 'react'
import './Login.css'
import { cn } from '@bem-react/classname'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

interface ILogin {
  admin?: string
}

const Login = ({admin} : ILogin) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const cnLogin = cn("Login")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const NameSubmit = (event: ChangeEvent<HTMLInputElement>) => {
       setName(event.target.value)
    }

    const PasswordSubmit = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
     }

     const  AllSubmit = async (event: React.MouseEvent<HTMLButtonElement>) =>  {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: name, password: password})
        })
        const result = response.json().then((el) => {
          if(el.answer = "Done"){
            dispatch({type: "ADMIN", payload: el.name})
            navigate('/')
            alert("Вы вошли!")
          }else{
            alert(el.answer)
          }
        })
     }

return(
  <form className={cnLogin()}>
      <input type="text" className={cnLogin("Input")} onChange={NameSubmit} placeholder="Имя" />
      <input type="password" className={cnLogin("Input")} placeholder="Пароль" onChange={PasswordSubmit} />
      <button onClick={AllSubmit} type="submit" className={cnLogin("Button")}>Log in</button>
      </form>
    
    )
  
}

export default Login