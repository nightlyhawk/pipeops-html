import React from 'react'
import AuthForm from '../../components/forms/auth-form'
import { SigninWrapper } from './style'
import AuthBanner from '../../components/auth-banner'

const SignInPage = () => {
  return (
    <SigninWrapper>
        <AuthBanner />
        <AuthForm text={'signin'} />
    </SigninWrapper>
  )
}

export default SignInPage