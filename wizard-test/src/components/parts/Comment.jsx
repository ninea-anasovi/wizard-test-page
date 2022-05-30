import React from 'react'

function Comment({commentName, text}) {
  return (
    <div>
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            {text}
        </label>
        <div className="mt-1">
            <textarea
            id={commentName}
            name={commentName}
            rows={3}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
            placeholder="what do you think?"
            defaultValue={''}
            />
        </div>
    </div>
  )
}

export default Comment