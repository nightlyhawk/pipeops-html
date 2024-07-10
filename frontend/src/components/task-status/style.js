import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const StatusContainer = styled(Link)`
    background-color: var(--secondary);
    border-radius: 7px;
    text-align: left;
    width: 25%;
    padding: 2%;
    &.active {
        background-color: var(--primary);
        color: white;
    }
`

export const StatusWrapper = styled.div`
    display: flex;
    gap: 2%;
    &.task_top {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }
`

export const StatusHeader = styled.h4``

export const StatusText = styled.p``