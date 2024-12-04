import logo from '../Asessts/logo.png';
import dropVec from '../Asessts/dropVec.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const navigation = [
  { name: 'Find Suppliers', href: '#', current: false },
  { name: 'Find Service Tags', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-white px-8 py-2 flex justify-between items-center shadow-md"
      style={{
        height: '65px',
      }}
    >
      <a
        href="#"
        className="flex items-center md:w-[181px] lg:w-[181px] w-[120px]"
      >
        <img alt="Habot Logo" src={logo} />
      </a>

      {/* Main navigation links (visible on large screens) */}
      <div
        className={`hidden md:flex md:ml-5 space-x-4 justify-center items-center ${isMenuOpen ? 'hidden' : ''}`}
        style={{
          color: '#6D6E71',
          lineHeight: '24px',
          fontSize: '15.25px',
          fontWeight: '400',
          gap: '30px',
        }}
      >
        {navigation.map((item) => (
          <div key={item.name} className="flex items-center md:text-[14px]">
            <a
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(item.current)}
            >
              {item.name}
            </a>

            {/* Find Service Tags dropdown */}
            {item.name === 'Find Service Tags' && (
              <img
                src={dropVec}
                className="md:justify-center cursor-pointer ml-[7px]"
                alt="Dropdown"
              />
            )}
          </div>
        ))}

        <button className="relative font-[700] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-[193px] lg:w-[193px] rounded-[5px] border-[1px] border-[#00732F] text-[#00732F] text-[15px] leading-[24px] h-[50px]">
          Login / Signup
        </button>
      </div>

      {/* Hamburger button for mobile menu */}
      <button className="p-2 md:hidden" onClick={handleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="nav-dailoge"
          className="fixed inset-0 px-6 md:hidden h-[40vh] w-[90%] mt-[65px] ml-[20px] rounded-[20px] bg-white border border-[#00732F] shadow-xl p-5 sm:mt-[65px] sm:mx-auto md:mt-[65px] md:mx-auto"
        >
          <div className="flex-1 gap-4 flex flex-col md:flex-row">
            {navigation.map((item) => (
              <div key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(item.current)}
                >
                  {item.name}
                </a>
                {item.name === 'Find Service Tags' && (
                  <img
                    src={dropVec}
                    alt="Dropdown"
                    style={{ marginLeft: '7px', cursor: 'pointer' }}
                  />
                )}
              </div>
            ))}

            <button
              className="relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black md:w-[193px] lg:w-[193px] w-[150px]"
              style={{
                height: '50px',
                borderRadius: '5px',
                border: '1px solid #00732F',
                color: '#00732F',
                fontSize: '15px',
                fontWeight: '700',
                lineHeight: '24px',
              }}
            >
              Login / Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
