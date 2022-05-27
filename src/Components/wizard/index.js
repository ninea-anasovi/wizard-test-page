import React from 'react'
import Checkbox from '../Parts/checkbox';
import Input from '../Parts/input';
import Tooltip from '../Parts/tooltip';
import { TooltipTarget } from '../Parts/tooltip/styled';
import { WizardWrapper } from './styled'

function Wizard() {
  return (
    <WizardWrapper>

      
      <Tooltip text='This Field Can Not Be Empty' position={'bottom'}>
        <TooltipTarget>
          <Input text={'Name'} type={'Text'} /> 
          <Checkbox text={'Agree'} type={'checkbox'} /> 
        </TooltipTarget>
      </Tooltip>

    </WizardWrapper>

  )
}

export default Wizard;