import React from 'react';
import StepWizard from 'react-step-wizard';
import UserStep from './UserStep'
import  ItemStep from './ItemsStep'
import WizardNavigation from './parts/WizardNavigation';


function WizardForm() {
  return (
      <div className='container mx-auto bg-slate-50 drop-shadow-xl rounded-lg p-10 mt-20'>
        <StepWizard nav={<WizardNavigation/>} >
          <UserStep/>
          <ItemStep/>
        </StepWizard>
      </div>

  )
}

export default WizardForm