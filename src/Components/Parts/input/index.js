import React from 'react'
import { InputTextField } from './styled'
import { FormWrapper, InputLableField } from '../styled'

function Input({type, placeHolder, text, name}) {
  return (
    <FormWrapper>
        <InputLableField for={name}>{text}</InputLableField>
        <InputTextField type={type} placeholder={placeHolder} name={name}></InputTextField>
    </FormWrapper>
  )
}

export default Input;