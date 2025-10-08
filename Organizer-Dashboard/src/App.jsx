/**
 * 
 * Task List
 * - Sidebar
 * - Card that contains default styling
 * - Individual widgets in cards
 * - Expanded page views from widgets
 * 
 */


import { useState } from 'react'
import Sidebar from "./components/sidebar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-5 flex justify-between h-screen">
      <Sidebar />
      <div className="w-4/5">big area</div>
    </div>
  )
}

export default App
