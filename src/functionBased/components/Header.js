import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import { BiMenu, BiX } from 'react-icons/bi';


const Header = () => {

  const [navOpen, setNavOpen] = useState(false)

  const handleToggle = () => {
    setNavOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavOpen((prev) => !prev);
  };

  const headerStyle = {
    padding: "20px 20px",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <nav className="naviBar">
        <h1
          style={{
            fontSize: "1.1rem",
            fontWeight: "800",
            color: "#f1913f",
            textTransform: "uppercase",
            textAlign: "center",
          }}>
          todos
        </h1>
        <button onClick={handleToggle} type="button">
          { navOpen ? (
            <BiX style={{
              fontSize: '30px',
              marginTop: '10px',
              color: '#f71501',
            }}
            />
          ) : (
            <BiMenu style={{
              fontSize: '30px',
              marginTop: '10px',
            }}
            />
          ) }
        </button>
        <ul className="newLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="todos">Todo</Link>
          </li>
          <li>
            <Link to="contact">About</Link>
          </li>
        </ul>
        <ul className={`naviLinks menuNav ${navOpen ? ' showMenu' : ''}`}>
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="todos" onClick={closeNav}>Todo</Link>
          </li>
          <li>
            <Link to="contact" onClick={closeNav}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header