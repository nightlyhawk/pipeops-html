import React, { useContext } from 'react'
import { SearchInput, SearchWrapper } from './style'
import { Search } from '../../../assets/icons/js-icons'
import { ThemeDataContext } from '../../../context/themeContext'

const SearchBar = () => {
  const { themestatus } = useContext(ThemeDataContext)
  return (
    <SearchWrapper>
        <Search color={themestatus === 'dark'? 'white' : 'purple'} />
        <SearchInput placeholder='search...' name='search' />
    </SearchWrapper>
  )
}

export default SearchBar