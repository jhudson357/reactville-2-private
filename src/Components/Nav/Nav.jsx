import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from './Wallet'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="logo" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <Wallet cash={props.cash}/>
    </nav>
  )
}

export default Nav