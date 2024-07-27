"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="portfolio-header header-style-one">
      <div className="container">
        <div className="portfolio-inner-nav">
          <div className="my-logo">
            <a href="#">Raj Amancha</a>
          </div>
          <nav className={`${active ? "active" : ""}`}>
            <div className="mobile-only">
              <div id="back" onClick={() => setActive(false)}>
                <Image
                  width="20"
                  height="20"
                  src="/img/arrow.png"
                  alt="return"
                />
              </div>
            </div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-only">
            <div className="mobile-menu" onClick={() => setActive(true)}>
              <Image
                width="30"
                height="30"
                src="/img/menu.png"
                alt="mobile-menu"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
