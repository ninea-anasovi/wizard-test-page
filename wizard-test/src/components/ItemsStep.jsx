import React from 'react'
import Quantity from './parts/Quantity'
import TextInput from './parts/TextInput'
import Table from './parts/Table'

function ItemsStep(props) {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <TextInput text={'Product Name'} textName={'product-name'} type='text'/>
        <TextInput text={'Price ($)'} textName='price' type={'number'}/>
        <Quantity/>
      </div>
      <Table/>
    </>

  )
}

export default ItemsStep