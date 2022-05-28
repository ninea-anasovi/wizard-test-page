import React from 'react';
import StepWizard from 'react-step-wizard';
import UserStep from './UserStep'
import  ItemStep from './ItemsStep'
import WizardNavigation from './parts/WizardNavigation';


function WizardForm() {
  return (
      <StepWizard nav={<WizardNavigation/>} className='container mx-auto bg-slate-100 drop-shadow-xl rounded-lg p-10 mt-20'>
        <UserStep/>
        <ItemStep/>
      </StepWizard>
  )
}

export default WizardForm