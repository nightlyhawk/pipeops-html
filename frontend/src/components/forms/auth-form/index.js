import React from 'react'
import { FormButton, FormContainer, FormExtras, FormHeader, FormIcon, FormLink, FormText, FormWrapper } from './style'
import SignIn from './signin'
import google from '../../../assets/icons/google.svg'
import facebook from '../../../assets/icons/facebook.svg'
import { useNavigate } from 'react-router-dom'

const AuthForm = ({text}) => {
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate('/dashboard')
    }
    let heading;
    let subText;
    let extraOption;

    switch(text){
        case "signin":
            heading = 'SIGN IN'
            subText = 'New user? create an account'
            extraOption = true
            break;
        case "signup":
            heading = 'SIGN UP'
            subText = 'Create an account'
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
        <FormHeader>{heading}</FormHeader>
        <FormText>{subText}</FormText>
        <FormContainer onSubmit={handleSubmit}>
            {extraOption &&
                <>
                    <SignIn />
                    <FormExtras>
                        <FormLink>Forgot password?</FormLink>
                        <FormButton width='20%' type='submit'>Sign in</FormButton>
                    </FormExtras>
                </>
            }
        </FormContainer>
        {extraOption &&
            <>
                <FormButton outline='true' width='35%' >Sign in using Google <FormIcon src={google} /></FormButton>
                <FormButton outline='true' width='35%' >Sign in using Facebook <FormIcon src={facebook} /> </FormButton>
                <FormText width='72%'>Protected by <strong>reCAPTCHA</strong> and subjected to <strong>PURPLEDUSUITE terms and conditions</strong>, and <strong>privacy policies</strong>.</FormText>
            </>
        }
    </FormWrapper>
  )
}

export default AuthForm