import React from "react";

const Todo = () => {
  return ( 
    <div className="border-5 rounded-md p-5 row-span-2 col-span-2">
      <button type="button" className="absolute">EX</button>
      <div className="flex flex-col">
        <h2 className="text-center">TODO</h2>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Task 1</p>
            <p>Due: Mon</p>
          </div>
          <div className="flex justify-between">
            <p>Task 2</p>
            <p>Due: Tues</p>
          </div>
          {/* {todos.map(() => { */}

          <div className="flex justify-between">
            <p>Task 3</p>
            <p>Due: Wed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;