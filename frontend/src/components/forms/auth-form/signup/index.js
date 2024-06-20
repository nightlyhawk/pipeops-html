import React from 'react'
import { FormExtras, FormInput, FormLabel } from '../style'

const SignUp = () => {
  return (
    <FormExtras>
        <FormExtras direction='column' width='49%'>
            <FormLabel for='firstname'>Firstname</FormLabel>
            <FormInput type='text' id='firstname' name='firstname' placeholder='Enter Firstname' required/>
        </FormExtras>
        <FormExtras direction='column' width='49%'>
            <FormLabel for='lastname'>Lastname</FormLabel>
            <FormInput type='text' id='lastname' name='lastname' placeholder='Enter Lastname'  required />
        </FormExtras>
    </FormExtras>
  )
}

export default SignUp