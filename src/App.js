import React from 'react'
import './App.css'
import Home from './pages/Home'
import { useStore } from './store/zustand'

function App() {

  const getAllPhotos = useStore((state) => state.getAllPhotos)

  React.useEffect(() => {
    getAllPhotos()
  }, [])

  return (
    <div className='app'>
      <Home />
    </div>
  )
}

export default App
