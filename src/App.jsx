import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);
  return (
    <div>
      <Header />
      <div className="">El email es {email}</div>
      <button className='btn btn-primary' onClick={
        () => {
          dispatch({
            type: "user/setUser",
            payload: {
              email: "hola@gmail.com",
            }
          })
        }
      }>Email</button>
      <Footer />
    </div>
  )
}

export default App
