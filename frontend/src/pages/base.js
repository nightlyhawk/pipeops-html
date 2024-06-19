import { Outlet } from "react-router-dom"
import { Wrapper } from './style'
import MenuBar from '../components/menu-bar'
import NavBar from '../components/nav-bar'

const Base = () => {
  
  return (
    <Wrapper>
        <NavBar />
        <MenuBar />
        <Outlet />
    </Wrapper>
  )
}

export default Base