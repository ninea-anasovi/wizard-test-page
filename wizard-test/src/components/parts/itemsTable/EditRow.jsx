import Input from '../Input'
import React from 'react'

function EditRow({item, setState}) {
  return (
    <tr>
        <td className='px-6 py-4'>
          {item?.id}
        </td>
        <td className='px-6 py-4'>
          <Input type='text' value={item?.name} onChange={()=>console.log(item?.name)}/>
        </td>
        <td className='px-6 py-4'>
          <Input type='number' value={item?.price} onChange={()=>console.log(item?.price)}/>
          
        </td>
        <td className='px-6 py-4'>
          <Input type='number' value={item?.count} onChange={()=>console.log(item?.count)}/>
        </td>
        <td className="px-6 py-4" onClick={event => setState(false)}>
          <button>Save</button>
        </td>
        <td className="px-6 py-4" onClick={event => console.log(event.target)}>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </a>
        </td>
    </tr>
  )
}

export default EditRow