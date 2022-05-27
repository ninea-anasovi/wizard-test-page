import React from 'react'
import { InputCheckbox} from './styled';
import { FormWrapper, InputLableField } from '../styled'

function Checkbox({name, type, checked, text}) {
  return (
    <FormWrapper>
        <InputCheckbox type={type} name={name} checked={checked}></InputCheckbox>
        <InputLableField for={name}>{text}</InputLableField>
    </FormWrapper>
  )
}

export default Checkbox;