import React from 'react'
import CustomerReducer from '../redux/reducers/CustomerReducer';
import PrimaryButton from './buttons/PrimaryButton'
import SecondaryButton from './buttons/SecondaryButton'
import SET_PERSONAL_INFO from '../redux/ActionTypes'

function WizardNavigation(props) {

  const nextHandler = () => {
    return (
      props.nextStep,
      <CustomerReducer action={SET_PERSONAL_INFO}/>
      
    )
    

  }
  return (
    <div className='flex justify-between m-auto gap-3 mb-5'>
      <SecondaryButton text='Previous' onClick={props.previousStep}/>
      <PrimaryButton text='Next' onClick={props.nextStep}/>
    </div>
  )
}

export default WizardNavigation