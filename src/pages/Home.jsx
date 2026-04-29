import React, { useState, useRef } from 'react'
import './Home.css'
import banner from '../assets/banner__bckgnd.jpg'
import Navbar from '../components/Navbar'
import ShowCards from '../components/ShowCards'

const Home = () => {
    
    const [search, setSearch] = useState('')
    const inputRef = useRef(null);

    function resetShows() {
        setTimeout(() => {
            if (inputRef.current && inputRef.current.value === '') {
                setSearch("")
            }
        }, 1000)
    }

    function handleSearchButton() {
        if (inputRef.current) {
            setSearch(inputRef.current.value);
        }
    }

    function handleInputKeyDown(event) {
        if (event.key === 'Enter') {
            setSearch(inputRef.current.value);
        }
    }

  return (
    <>
        <div className="landing__banner--background">
            <img src={banner} alt="Landing Banner" />
            <div className="header">
                <div className="row">
                    <Navbar />
                </div>
            </div>
            <main>
                <section id="landing">
                    <div className="container">
                        <div className="row">
                            <div className="landing__content">
                                <div className="search__input">
                                    <input
                                        type="text"
                                        spellCheck={false}
                                        onKeyDown={handleInputKeyDown}
                                        placeholder="Find Your Anime"
                                        className="search__input--field"
                                        ref={inputRef}
                                        onKeyUp={resetShows}
                                    />
                                    <button onClick={handleSearchButton} className="input__button">
                                        <svg data-v-2a11e7ca aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16">
                                            <path data-v-2a11e7ca fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" className=""></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <ShowCards search={search} />
            </main>
        </div>
    </>
  )
}

export default Home