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
    color: var(--glass);
    text-decoration: none;
    &.active {
        color: var(--secondary);
    }
`

export const MenuIcon = styled.img`
    height: 20px;
    width: 20px;
`