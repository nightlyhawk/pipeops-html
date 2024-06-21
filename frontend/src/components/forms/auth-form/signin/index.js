import React from 'react'
import { 
  FormInput, 
  FormLabel } from '../../style'

const SignIn = () => {
  return (
    <>
        <FormLabel for='username/email'>Username/email</FormLabel>
        <FormInput type='email' id='username/email' name='username/email' placeholder='Enter email address' required/>
        <FormLabel for='password'>Password</FormLabel>
        <FormInput type='password' id='password' name='password' placeholder='Password' required />
    </>
  )
}

export default SignIn