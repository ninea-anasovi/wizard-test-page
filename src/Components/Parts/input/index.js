import React from 'react'
import { FormWrapper, InputLableField, InputTextField } from './styled'

function Input({type, placeHolder, text, name}) {
  return (
    <FormWrapper>
        <InputLableField for={name}>{text}</InputLableField>
        <InputTextField type={type} placeholder={placeHolder} name={name}></InputTextField>
    </FormWrapper>
  )
}

export default Input;