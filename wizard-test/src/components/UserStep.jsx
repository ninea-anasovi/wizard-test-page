import React, { useEffect } from 'react'
import Checkbox from './parts/Checkbox'
import Dropdown from './parts/Dropdown'
import TextInput from './parts/TextInput'
import Comment from './parts/Comment'


function UserStep(props) {


  return (
    <div className='grid grid-cols-2 gap-4'>
      <TextInput text={'First Name'} textName='first-name' type={'text'}/>
      <TextInput text={'Last Name'} textName='last-name' type={'text'}/>
      <TextInput text={'Age'} textName='age' type={'number'}/>
      <Dropdown/>
      <Checkbox/>
      <Comment/>
    </div>
  )
}

export default UserStep