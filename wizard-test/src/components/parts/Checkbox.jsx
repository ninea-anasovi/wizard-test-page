import React from 'react'

function Checkbox() {
  return (
    <div className="flex items-start">
        <div className="flex items-center h-5">
            <input
            id="comments"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
            Comments
            </label>
            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
        </div>
    </div>
  )
}

export default Checkbox;