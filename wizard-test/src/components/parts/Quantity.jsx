import React, {useState} from 'react'

function Quantity() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({...values, [name]: value}))
    }


    return (
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 ">Enter your age:
            <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
            />
        </label>
  )
}

export default Quantity