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
import Sidebar from "./components/Sidebar"
import Widget from "./components/Widget"
import ContentArea from "./components/ContentArea"
import Todo from './components/widget/TodoList/TodoList'
import './App.css'

function App() {

  return (
    <div className="p-5 w-full flex justify-between h-screen gap-10">
      <Sidebar />
      <ContentArea>
        {/* <Widget rowLength={3} colLength={2}> */}
        <Todo />
        {/* </Widget> */}
        {/* <Widget rowLength={1} colLength={1} /> */}
     
      </ContentArea>
    </div>
  )
}

export default App