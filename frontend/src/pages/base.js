import { Outlet, useLocation } from "react-router-dom"
import { Wrapper } from './style'
import MenuBar from '../components/menu-bar'
import NavBar from '../components/nav-bar'
import { useContext, useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import { ThemeDataContext } from "../context/themeContext"

const DahboardBase = () => {
  const { themestatus, setThemeStatus } = useContext(ThemeDataContext);
  const location = useLocation();
  useEffect(() => {
    if(location.pathname.endsWith('/dashboard')){
      setThemeStatus('dark');
    }else if(location.pathname.endsWith('do_me')){
      setThemeStatus('light');
    }
  }, [location.pathname])
  const theme = {
    dark: {
      primary: '#341949',
      secondary: 'white',
      pinkwhite: '#FAF2FF',
      green: '#158E01',
      gold: '#FF8D05',
      status: 'dark'
    },
    light: {
      primary: '#F7F7F7',
      secondary: '#341949',
      pinkwhite: '#33333399',
      green: '#158E01',
      gold: '#FF8D05',
      status: 'light'
    }
  }
  return (
    <ThemeProvider theme={theme[themestatus]}>
      <Wrapper>
        <NavBar />
        <MenuBar />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  )
}

export default DahboardBase