import React, { useState } from 'react'
import Input from '../Input';
import Row from './Row';

function Table() {

  const [editMode, setEditMode] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Coca-cola",
      price: "4.99",
      count: "4"
    },
    {
      id: 2,
      name: "Pepsi",
      price: "3.99",
      count: "7"
    },
    {
      id: 3,
      name: "Fanta",
      price: "2.99",
      count: "11"
    },
    {
      id: 4,
      name: "Sprite",
      price: "2.34",
      count: "78"
    }
  ])

  const handleUpdate = (item) => {
    console.log(item)
    setEditMode(false)
  }

  const handleDelete = (item) => {
    console.log(item)
  }

  return (
    <div className="container flex justify-center mx-auto mt-5 ">
      <div className="flex flex-col ">
        <div className="w-full ">
          <div className="border-b border-gray-200 shadow rounded-lg">
            <table className="divide-y divide-gray-300 ">
              <thead className="bg-blue-400 text-white text-xs">
                <tr>
                  <th className="px-6 py-2">
                    ID
                  </th>
                  <th className="px-6 py-2 ">
                    Name
                  </th>
                  <th className="px-6 py-2 ">
                    Price
                  </th>
                  <th className="px-6 py-2 ">
                    Count
                  </th>
                  <th className="px-6 py-2 ">
                    Edit
                  </th>
                  <th className="px-6 py-2 ">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-100 divide-y divide-gray-300">
                {
                  data.map((item, index) => (
                    <Row key={index} item={item}/>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table