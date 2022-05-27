import React from 'react'
import Input from '../Parts/input';
import Tooltip from '../Parts/tooltip';
import { TooltipTarget } from '../Parts/tooltip/styled';

function Wizard() {
  return (
    <div>

      
      <Tooltip text='This Field Can Not Be Empty' position={'bottom'}>
        <TooltipTarget>
          <Input text={'Name'} type={'Text'} /> 
          <Input text={'Agree'} type={'checkbox'} /> </TooltipTarget>
        </Tooltip>

    </div>

  )
}

export default Wizard;