import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Coin from './components/Coin/Coin'
import Modal from './components/Modal/Modal'

function App() {
  let storedUserDataJSON = localStorage.getItem('userData7');
  let userData = JSON.parse(storedUserDataJSON);
  useEffect(()=> {
    console.log(userData);
  }, [userData])
  

  const [count, setCount] = useState(userData?.tapCount)
  const [countToTap, setCountToTap] = useState(userData?.countToTap)

  function handleClick() {
    setCount((count + userData.countToTap))
    userData.tapCount = count + userData.countToTap;
    let userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData7', userDataJSON);
  }
  function up() {
   if(count > 50) {
    setCountToTap((countToTap + 1))
    setCount((count - 50))
    userData.countToTap = countToTap + 1;
    let userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData7', userDataJSON);
   }
  }
  return (
    <>
      <Modal open={userData == null}/>

      <Header userData={userData}/>
      <main>
        <Coin count={count} onClick={() => handleClick()}/>
        <div className="container">
        <div className="">
          <h4>Улучшение клика</h4>
          <button className='btn' onClick={up}>Улучшить клик на +1 за 50 spermcoin?</button>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
