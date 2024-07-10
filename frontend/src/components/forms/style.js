import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.color? '2%' : '5% 0%'};
    background-color: ${props => props.color};
    width: ${props => props.width};
    gap: 2%;
`
export const FormHeader = styled.h1`
    color: ${props => props.color || 'var(--primary)'};
    font-size: ${props => props.size};
    align-self: ${props => props.size? '' : 'flex-start'};
    font-weight: 700;
`
export const FormText = styled.p`
    color: var(--primary);
    width: ${props => props.width};
`

export const FormInput = styled.input`
    border: 1px solid var(--primary);
    background-color: var(--transparent);
    padding-left: ${props => props.padding || '4%'};
    height: ${props => props.height || '40px'};
    width: ${props => props.width || '100%'};
    border-radius: 6px;
    margin-bottom: 3%;
    margin-top: 0.8%;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: ${props => props.task? '100%' : '72%'};
    gap: 1rem;
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
    flex-direction: ${props => props.direction};
    width: ${props => props.width};
    justify-content: ${props => props.justify || 'space-between'};
    gap: 1%;
`
export const FormIcon = styled.img`
    height: 20px;
    width: 20px;
`