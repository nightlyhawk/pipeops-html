import React from 'react'
import { SearchIcon, SearchInput, SearchWrapper } from './style'
import search from '../../../assets/icons/search.svg'

const SearchBar = () => {
  return (
    <SearchWrapper>
        <SearchIcon src={search} alt="search" />
        <SearchInput placeholder='search...' name='search' />
    </SearchWrapper>
  )
}

export default SearchBar