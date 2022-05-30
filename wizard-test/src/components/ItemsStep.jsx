import React from 'react'
import Quantity from './parts/Quantity'
import Input from './parts/Input'
import Table from './parts/itemsTable/Table'

function ItemsStep() {
  return (
    <>
      <div className='grid grid-cols-3 gap-4' id='2mmm'>
        <Input text={'Product Name'} textName={'product-name'} type='text'/>
        <Input text={'Price ($)'} textName='price' type={'number'}/>
        <Quantity/>
      </div>
      <Table/>
      
    </>

  )
}

export default ItemsStep