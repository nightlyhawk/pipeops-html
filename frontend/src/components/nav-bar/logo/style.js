import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const LogoLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.status === 'light'? 'black' : 'var(--pinkwhite)'};
`

export const LogoIcon = styled.img`
    height: 20px;
    width: 20px;
`

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`