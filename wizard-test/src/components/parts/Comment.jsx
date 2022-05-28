import React from 'react'

function Comment() {
  return (
    <div>
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About
        </label>
        <div className="mt-1">
            <textarea
            id="about"
            name="about"
            rows={3}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
            placeholder="you@example.com"
            defaultValue={''}
            />
        </div>
    </div>
  )
}

export default Comment