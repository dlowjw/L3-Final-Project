import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-5 border-orange-500 items-center rounded-md gap-5 p-5">
      <h1>Dashboards</h1>
        <a href="#">Tasks</a>
        <a href="#">Workout</a>
      <h1>Widgets</h1>
        <a href="#">Calender</a>
        <a href="#">Checklist</a>
        <a href="#">Graph</a>
        <a href="#">Grid</a>
        <a href="#">List</a>
        <a href="#">Reminder</a>
    </div>
  )
}

export default Sidebar