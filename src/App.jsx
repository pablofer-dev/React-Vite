import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
}

export default App
