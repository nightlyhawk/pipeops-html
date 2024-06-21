import styled from 'styled-components'

export const SearchWrapper = styled.div`
    display: flex;
    background: ${props => props.theme.status === 'light'? 'white' : 'var(--glass)'};
    width: 74%;
    border: none;
    border-radius: 11px;
    height: 30px;
    gap: 2%;
    padding-left: 1%;
    font-size: 10px;
    align-items: center;
    backdrop-filter: blur(8px);
`

export const SearchInput = styled.input.attrs({
    type: 'text'
  })`
    background: var(--transparent);
    width: 90%;
    padding: 0;
    margin: 0;
    border: none;
    &:focus {
      outline: none;
    }`

export const SearchIcon = styled.img`
    height : 13px;
    cursor: pointer;
`