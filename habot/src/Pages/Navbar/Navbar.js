import logo from "../Asessts/logo.png";
import dropVec from "../Asessts/dropVec.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const navigation = [
  { name: "Find Suppliers", href: "#", current: false },
  { name: "Find Service Tags", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav
      className="px-8 py-2 flex justify-between items-center"
      style={{
        height: "65px",
        background: "gray",
      }}
    >
      <a href="#" className="flex items-center">
        <img
          alt="Habot Logo"
          src={logo}
          style={{
            width: "181px",
            height: "auto",
          }}
        />
      </a>

      {/* Main navigation links (visible on large screens) */}
      <div
        className={`hidden md:flex space-x-4 justify-center items-center ${
          isMenuOpen ? "hidden" : ""
        }`} // Hide when mobile menu is open
        style={{
          color: "#6D6E71",
          lineHeight: "24px",
          fontSize: "15.25px",
          fontWeight: "400",
          gap: "30px",
        }}
      >
        {navigation.map((item) => (
          <div key={item.name} className="flex items-center">
            <a
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(item.current)}
            >
              {item.name}
            </a>

            {/* Check if this is the "Find Service Tags" item, then show the dropdown icon */}
            {item.name === "Find Service Tags" && (
              <img
                src={dropVec}
                alt="Dropdown"
                style={{
                  marginLeft: "7px",
                  cursor: "pointer",
                }} // Adjust size as needed
              />
            )}
          </div>
        ))}

        <button
          className="relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          style={{
            width: "193px",
            height: "50px",
            borderRadius: "5px",
            border: "1px solid #00732F",
            color: "#00732F",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "24px",
          }}
        >
          Login / Signup
        </button>
      </div>

      {/* Hamburger button to open/close mobile menu */}
      <button className="p-2 md:hidden" onClick={handleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      {/* Mobile navigation menu (only shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div
          id="nav-dailoge"
          className="fixed bg-white inset-0 px-6 md:hidden"
        >
          <div id="nav-bar" className="flex justify-between items-center">
            {/* Left: Logo */}
            <a href="#" className="flex gap-2 items-center">
              <img
                alt="Habot Logo"
                src={logo} // Update with actual logo path
                style={{
                  width: "100px",
                  height: "auto",
                }}
              />
            </a>

            {/* Right: Button to close menu */}
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <FontAwesomeIcon icon={faXmark} style={{ height: "25px" }} />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex-1 gap-4 flex flex-col md:flex-row">
            {navigation.map((item) => (
              <div key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(item.current)}
                >
                  {item.name}
                </a>

                {/* Check if this is the "Find Service Tags" item, then show the dropdown icon */}
                {item.name === "Find Service Tags" && (
                  <img
                    src={dropVec}
                    alt="Dropdown"
                    style={{
                      marginLeft: "7px",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            ))}

            {/* Login / Signup button with hover animation */}
            <button
              className="relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black"
              style={{
                width: "193px",
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #00732F",
                color: "#00732F",
                fontSize: "15px",
                fontWeight: "700",
                lineHeight: "24px",
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
