import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
// import logo from '../../public/cs-logo.png';

const CommonNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
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
          <p><a href="/">Home</a></p>
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
            <p><a href="/">Home</a></p>
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

export default CommonNavbar;
