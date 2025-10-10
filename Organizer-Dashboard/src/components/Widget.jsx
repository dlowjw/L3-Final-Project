import React from "react";

const Widget = ({ rowLength, colLength, children }) => {

  const rowMap = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };

  const colMap = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  };

  return ( 
    <div className={`border-5 rounded-md p-5 ${rowMap[rowLength]}  ${colMap[colLength]}`}>
      <button type="button" className="absolute">EX</button>
      {children}
    </div>
  )
}

export default Widget