import React, { useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const navScroll = () => {
        if (navRef.current) {
                if(window.scrollY >= 80) {
                    navRef.current.classList.add("nav__dark")
                } else {
                    navRef.current.classList.remove("nav__dark")
                }
            }
        }
        window.addEventListener("scroll", navScroll);

        return () => {
            window.removeEventListener("scroll", navScroll);
        }
    }, [])

    function focusSearch() {
        const clicked = document.querySelector(".search__input--field");
        clicked.scrollIntoView({ behavior: "smooth", block: "center" });
        clicked.focus();
    }

    
  return (
    <div ref={navRef} className="nav">
        <h2 className="section__title">
            AnimeWave
        </h2>
        <ul className="nav__link--list">
            <li className="nav__link">
                <a href="/" onClick={() => focusSearch()}>Search</a>
            </li>
            <li className="nav__link">
                <a href="#shows" className="nav__link--top-rated">Top Rated</a>
            </li>
            <li className="nav__link">
                <a href="/" className="nav__link--contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar