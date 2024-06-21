import React from 'react'
import { 
    FormButton, 
    FormContainer, 
    FormExtras, 
    FormHeader, 
    FormIcon, 
    FormInput, 
    FormLabel, 
    FormLink, 
    FormText, 
    FormWrapper } from '../style'
import SignIn from './signin'
import google from '../../../assets/icons/google.svg'
import facebook from '../../../assets/icons/facebook.svg'
import { useNavigate } from 'react-router-dom'
import SignUp from './signup'

const AuthForm = ({text}) => {
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate('/dashboard');
    }
    let heading;
    let subText;
    let extraOption;

    switch(text){
        case "Sign in":
            heading = 'SIGN IN'
            subText = 'New user? create an account'
            extraOption = true
            break;
        case "Sign up":
            heading = 'SIGN UP'
            subText = 'Create An Account'
            extraOption = false
            break;
        default:
            heading = 'SIGN IN'
            subText = 'New user? create an account'
            extraOption = true
            break;
    }
  return (
    <FormWrapper>
        <FormHeader size='40px'>{heading}</FormHeader>
        <FormText>{subText}</FormText>
        <FormContainer onSubmit={handleSubmit}>
            <SignIn />
            {!extraOption && <SignUp />}
            <FormExtras justify={!extraOption && 'end'}>
                {extraOption && <FormLink>Forgot password?</FormLink>}
                <FormButton width='20%' type='submit'>{text}</FormButton>
            </FormExtras>
        </FormContainer>
        {extraOption &&
            <>
                <FormButton outline='true' width='35%' >Sign in using Google <FormIcon src={google} /></FormButton>
                <FormButton outline='true' width='35%' >Sign in using Facebook <FormIcon src={facebook} /> </FormButton>
            </>
        }
        {!extraOption && 
            <FormExtras width='72%'>
                <FormInput type='checkbox' id='terms' height='15px' width='16px' padding='0' />
                <FormLabel for='terms'>
                    By clicking, you agree to our privacy policies, terms and conditions, anti-money laundering policies, and information policies.
                </FormLabel>
            </FormExtras>
        }
        <FormText width='72%'>Protected by <strong>reCAPTCHA</strong> and subjected to <strong>PURPLEDUSUITE terms and conditions</strong>, and <strong>privacy policies</strong>.</FormText>
    </FormWrapper>
  )
}

export default AuthForm