import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5% 0%;
    width: 50%;
    gap: 2%;
`
export const FormHeader = styled.h1`
    color: var(--primary);
    font-size: 40px;
    font-weight: 700;
`
export const FormText = styled.p`
    color: var(--primary);
    width: ${props => props.width};
`

export const FormInput = styled.input`
    border: 1px solid var(--primary);
    background-color: var(--transparent);
    padding-left: 4%;
    height: 40px;
    width: 100%;
    border-radius: 6px;
    margin-bottom: 3%;
`
export const FormContainer = styled.form`
    width: 72%;
`

export const FormButton = styled.button`
    border: ${props => props.outline? '1px solid var(--primary)' : 'none'};
    border-radius: 18px;
    background-color: ${props => props.outline? 'var(--secondary)' : 'var(--primary)'};
    color:  ${props => props.outline? 'var(--primary)' : 'var(--secondary)'};
    width: ${props => props.width || 'max-content'};
    height: 40px;
    display: ${props => props.outline? 'flex': ''};
    padding: ${props => props.outline? '1% 2%': ''};
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4%;
`
export const FormLink = styled(Link)``

export const FormLabel = styled.label``

export const FormExtras = styled.div`
    display: flex;
    justify-content: space-between;
`
export const FormIcon = styled.img`
    height: 20px;
    width: 20px;
`