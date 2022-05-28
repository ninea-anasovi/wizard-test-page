import React from 'react'
import TextInput from './parts/TextInput'

function ItemsStep(props) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <TextInput text={'Product Name'} textName={'product-name'} type='text'/>
      <TextInput text={'Price ($)'} textName='price' type={'number'}/>
    </div>
  )
}

export default ItemsStep