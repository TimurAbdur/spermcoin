import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'
import './Modal.css'

export default function Modal({children, ...props}) {
    const dialog = useRef()
    
    useEffect(()=> {
        if(props.open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    },[props.open])
    
    let input = useRef()
    function register() {
          let userData = {
            fullName: input.current.value,
            tapCount: 1,
            countToTap: 1,
        };
        
        // Преобразуем объект в строку JSON
        let userDataJSON = JSON.stringify(userData);
        
        // Сохраняем данные в локальное хранилище
        localStorage.setItem('userData7', userDataJSON);
        dialog.current.close()
        location. reload()
    }
    return createPortal(
        <dialog ref={dialog}>
            <h2 style={{marginTop: 30, marginBottom: 20, fontSize: 26, fontWeight: 700}}>Добро пожаловать в Spermcoin!</h2>
            <h3 style={{marginBottom: 15, fontSize: 22, fontWeight: 500}}>Регистрация</h3>
            <label style={{marginBottom: 15, fontSize: 22, fontWeight: 500}} htmlFor="name">Введите логин:</label>
            <input ref={input} type="text" />
            <button className='btn' onClick={register}>Зарегистрироваться</button>
        </dialog>,
        document.getElementById('modal')
    )
}