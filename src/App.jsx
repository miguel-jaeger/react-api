import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RazasDeGatos from './Gatitos'
import ImagenesDogs from './Dogs'

function App() {
  return (
  <><div>
      <ImagenesDogs />
    </div><div>
        <RazasDeGatos />
      </div></>
  )
}

export default App
