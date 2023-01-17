import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
// import logo from '../../public/cs-logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState('false');
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className={color ? 'gpt3__navbar gpt3_navbar-color' : 'gpt3__navbar'}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link href="/">
            <img
              src="/cs-logo.png"
              alt="csa-logo"
              className="w-[34px] h-[34px] object-contain"
            />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link href="/">Home</Link></p>
          <p><Link href="#placements">Placements</Link></p>
          <p><Link href="/events">Events</Link></p>
          <p><Link href="#academics">Academics</Link></p>
          <p><Link href="#GoalOfCSA">About</Link></p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link href="#home" onClick={() => setToggleMenu(false)}>Home</Link></p>
            <p><Link href="#placements" onClick={() => setToggleMenu(false)}>Placements</Link></p>
            <p><Link href="/events" onClick={() => setToggleMenu(false)}>Events</Link></p>
            <p><Link href="#academics" onClick={() => setToggleMenu(false)}>Academics</Link></p>
            <p><Link href="#GoalOfCSA" onClick={() => setToggleMenu(false)}>About</Link></p>
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
