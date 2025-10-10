import React from "react";
import useWidgetStore from '../stores/widgetStore';
import Todo from '../components/widget/TodoList/TodoList'

const Sidebar = () => {
  let addWidget = useWidgetStore((state) => state.addWidget);

  return (
    <div className="flex flex-col border-5 items-center rounded-md gap-5 p-5">
      <h1>Dashboards</h1>
        <a href="#">Tasks</a>
        <a href="#">Workout</a>
      <h1>Widgets</h1>
        <a href="#">Calender</a>
        <a href="#">Checklist</a>
        <a href="#">Graph</a>
        <a href="#">Grid</a>
        <div onClick={() => addWidget(<Todo />)}>List</div>
        <a href="#">Reminder</a>
    </div>
  )
}

export default Sidebar
 