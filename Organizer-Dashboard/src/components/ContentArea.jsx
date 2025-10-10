import React from 'react'
import useWidgetStore from '../stores/widgetStore';

const ContentArea = ({ children }) => {
  let widgets = useWidgetStore((state) => state.widgets);
  console.log(widgets);
  
  return (
    <div className="w-full border-5 p-5 grid grid-rows-8 grid-cols-8 gap-4">
      {widgets.map((widget) => widget)}
    </div>
  )
};

export default ContentArea;