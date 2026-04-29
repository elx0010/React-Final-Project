import React, { useEffect, useState } from 'react'
import './ShowCards.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const ShowCards = ({ search = '' }) => {
    let navigate = useNavigate();
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

        async function getShows() {
            setLoading(true);
            const  { data } = await axios.get("https://api.jikan.moe/v4/top/anime?type=ona");
            const sorted = [...data.data].sort((a, b) => b.popularity - a.popularity);
            setShows(sorted);
            setLoading(false);
            console.log(sorted)
        }

    useEffect(() => {
        getShows();
    }, []);

    const filteredShows = shows.filter(show =>
        show.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="shows">
            <div className="container">
                <div className="row">
                    {loading ? (<div className="shows__loading"></div>) : (
                        <div className="landing__header">
                            <h3>Popular Right Now</h3>
                        </div>
                    )}
                    <div className={`shows__content${loading ? ' shows__loading' : ''}`}>
                        <i className="fa-solid fa-spinner shows__loading--spinner"></i>
                        {filteredShows.length === 0 && !loading ? (
                            <div className="shows__none">No matches!</div>
                        ) : (
                            <div className="shows__grid">
                                {filteredShows.map(show => (
                                    <div
                                        className="show__card"
                                        key={show.mal_id}
                                        onClick={() => navigate(`/show/${show.mal_id}`)}
                                    >
                                        <img src={show.images.jpg.image_url} alt={show.title} />
                                        <h3>{show.title}</h3>
                                        <p>⭐ {show.score ?? "N/A"}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowCards