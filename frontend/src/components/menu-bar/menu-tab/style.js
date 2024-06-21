import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";




export const MenuWrapper = styled.div`
    display: flex;
    gap: 7%;
    align-items: center;
    padding: 2% 9%;
    background-color: var(--transparent);
`

export const MenuLink = styled(Link)`
    color: ${props => props.theme.status === 'dark'? 'var(--glass)' : '#33333399'};
    text-decoration: none;
    &.active {
        color: ${props => props.theme.status === 'dark'? 'var(--secondary)' : 'black'};
    }
`

export const MenuIcon = styled.img`
    height: 20px;
    width: 20px;
`