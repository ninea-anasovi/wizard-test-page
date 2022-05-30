import React from 'react'

function Checkbox({checkboxName, title, description}) {
  return (
    <div className="flex items-start">
        <div className="flex items-center h-5">
            <input
            id="comments"
            name={checkboxName}
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
            {title}
            </label>
            <p className="text-gray-500">{description}</p>
        </div>
    </div>
  )
}

export default Checkbox;