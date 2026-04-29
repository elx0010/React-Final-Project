import React, { useEffect, useState } from 'react'
import './Show.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
 
const Show = () => {
    let navigate = useNavigate()
    const [show, setShow] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true);

    async function getShow() {
        setLoading(true);
        if (!id) return;
        try {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
            setShow(data);
        } catch (error) {
            setShow({});
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => { 
            getShow();
            setLoading(false); 
        }, 1000);
        return () => clearTimeout(timer);
    }, [id]);


  return (
    <div>
        {/* <section id="show__details">
            <div className="container">
                <div className="row">
                    <header className="show__header">
                        <h2 className="show__title">{show.data?.title || "Loading..."}</h2>
                        <button className="back__btn" onClick= {() => navigate('/')} >Back</button>
                    </header>
                    <div className="show__content">
                        {show.data && show.data.images ? (
                            <>
                                <img src={show.data.images.jpg.image_url} alt={show.data.title} />
                                <div className="show__details">
                                    <p><strong>Rating:</strong> {show.data.score ?? "N/A"}</p>
                                    <p><strong>Episodes:</strong> {show.data.episodes ?? "N/A"}</p>
                                    <p><strong>Status:</strong> {show.data.status}</p>
                                    <p><strong>Aired:</strong> {show.data.aired?.string}</p>
                                    <p><strong>URL:</strong> <a href={show.data.url} target="_blank" rel="">MyAnimeListPage</a></p>
                                </div>
                                <div className="show__synopsis">
                                    <p><strong>Synopsis:</strong> {show.data.synopsis}</p>
                                </div>
                            </>
                        ) : (
                            <div>Loading Show Details...</div>
                        )}
                    </div>
                </div>
            </div>
        </section> */}
        {show.data && show.data.images ?  
            <>
                <div className="navbar">
                    <div className="container">
                        <a href="/" onClick={() => navigate('/')} className="back-link">
                            <span>Back to Catalog</span>
                        </a>
                    </div>
                </div>
                <div className="main-content row">
                    <div className="hero">
                        <div className="hero-content container">
                            <div className="poster-column">
                                <div className="poster-wrapper">
                                    <img src= {show.data.images.jpg.image_url}
                                        alt=""
                                        className="poster" />
                                </div>
                            </div>
                            <div className="info-column">
                                <h1 className="title">{show.data?.title}</h1>
                                <div className="stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-label">Rating</div>
                                        <div className="stat-value">{show.data.score ?? "N/A"}</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-label">Episodes</div>
                                        <div className="stat-value">{show.data.episodes ?? "N/A"}</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-label">Status</div>
                                        <div className="status-row">
                                            <span className="status-text">{show.data.status}</span>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-label">Aired</div>
                                        <div className="stat-value aired">{show.data.aired?.string}</div>
                                    </div>
                                </div>
                                <div className="synopsis">
                                    <h3 className="synopsis-heading">
                                        SYNOPSIS
                                    </h3>
                                    <p className="synopsis-text">
                                        {show.data.synopsis}
                                    </p>
                                </div>
                                <a href={show.data.url} target="_blank" className="mal-button">
                                    MyAnimeList Page
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="extra-bar container">
                        <div className="genres">
                            {show.data.genres?.map((genre) => {
                                return (
                                    <span key={genre.mal_id} className="genre-tag">{genre.name}</span>
                            )})}
                            
                        </div>
                    </div>
                </div>
            </>
             : (
                <div className={loading ? ' shows__loading' : ''}>
                    <i className="fa-solid fa-spinner shows__loading--spinner"></i>
                </div>
            )}
    </div>
)}
export default Show