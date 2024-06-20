import React from 'react'
import AuthForm from '../../components/forms/auth-form'
import { SignupWrapper } from './style'
import AuthBanner from '../../components/auth-banner'

const SignUpPage = () => {
  return (
    <SignupWrapper>
        <AuthBanner />
        <AuthForm text={'Sign up'} />
    </SignupWrapper>
  )
}

export default SignUpPage