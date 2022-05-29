import React from 'react'

function DisplayRow({item, setState}) {
  return (
    <tr>
        <td className='px-6 py-4'>{item?.id}</td>
        <td className='px-6 py-4'>{item?.name}</td>
        <td className='px-6 py-4'>{item?.price}</td>
        <td className='px-6 py-4'>{item?.count}</td>
        <td className="px-6 py-4" onClick={event => setState(true)}>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </a>
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

export default DisplayRow