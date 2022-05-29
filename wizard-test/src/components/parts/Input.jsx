import React, { useEffect, useState } from 'react'

function Input({textName, text, type, value}) {

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        setInputValue(value)
    }, [])

  return (                        
        <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 ">
                {text}
            </label>
            <input
                type={type}
                name={textName}
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
        </div>  
  )
}

export default Input