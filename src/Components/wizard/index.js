import React from 'react'
import Input from '../Parts/input';
import Tooltip from '../Parts/tooltip';
import { TooltipTarget } from '../Parts/tooltip/styled';

function Wizard() {
  return (
    <div>

      <Input text={'Name'}/>
      <Tooltip text='traalaaa' position={'bottom'}>
        <TooltipTarget>I am target ulalal</TooltipTarget>
      </Tooltip>
    </div>

  )
}

export default Wizard;