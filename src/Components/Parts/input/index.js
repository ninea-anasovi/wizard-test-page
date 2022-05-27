import React from 'react'
import { FormWrapper, InputTextField } from './styled'

function Input({type, placeHolder, text}) {
  return (
    <FormWrapper>
        
        <InputTextField type={type} placeholder={placeHolder} name="fname"></InputTextField>
        {/* <label for="fname">First name:</label>
        <input type={type} placeholder={placeHolder} name="fname"></input> */}
    </FormWrapper>
  )
}

export default Input;