import './AppHeader.css' 
import { Switch, Route, Link, NavLink } from 'react-router-dom';

function AppHeader() {
    return (
        <header className="header">
        <div className="logo"><span className="first-word">nueng</span><span  className="second-word">Story</span></div>
        <div className="page-name">
          <NavLink to="/" activeClassName="link-active" exact>Home</NavLink>
          <NavLink to="/about" activeClassName="link-active" exact>Who's nueng</NavLink>
        </div>
      </header>
    )
}

export default AppHeader