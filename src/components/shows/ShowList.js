import React, { useContext, useEffect, useState } from "react";
import { ShowContext } from "./ShowProvider";
import "./Show.css"
import { ShowCard } from "./ShowCard";
import { ShowSearch } from "./ShowSearch";
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export const ShowList = () => {

    const { getShows, shows, searchTerms } = useContext(ShowContext)

    const [filteredShows, setFiltered] = useState([])

    const navigate = useNavigate()

    const { showId } = useParams();

    useEffect(() => {
        getShows()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {

            const subset = shows.filter(show => show.artist.toLowerCase().includes(searchTerms.toLowerCase()) || show.city.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(shows)
        }
    }, [searchTerms, shows])

    return (

        <>


            <div className="sticky-header">

                <div className="your-shows-container">
                    <h1 className="your-shows">Your Shows</h1>


                    <div className="show_search">
                        <ShowSearch key={showId} />
                        <button id="add-show" onClick={() => {
                            navigate("/myshows/create")
                        }}>Add Show Manually</button>
                    </div>
                </div>
            </div>


            <div className="shows">
                <Container className="columns">
                    <Row>
                        <Col>
                            <h2 id="past-header">Past Shows</h2>
                            <div className="scroll-show">

                                {

                                    filteredShows.sort((a, b) => {
                                        return new Date(b.date) - new Date(a.date)
                                    }).map(show => {

                                        if (Date.now() > Date.parse(show.date))
                                            return (

                                                show.userId === parseInt(localStorage.getItem("showgoer_user")) ?
                                                    <ShowCard
                                                        key={show.id}
                                                        show={show} /> : <></>
                                            )
                                    }
                                    )}
    }
                            </div>
                        </Col>
                        <Col>
                            <h2 id="upcoming-header">Upcoming</h2>
                            <div className="scroll-show">

                                {

                                    filteredShows.sort((a, b) => {
                                        return new Date(b.date) - new Date(a.date)
                                    }).map(show => {

                                        if (Date.now() < Date.parse(show.date))
                                            return (

                                                show.userId === parseInt(localStorage.getItem("showgoer_user")) ?
                                                    <ShowCard
                                                        key={show.id}
                                                        show={show} /> : <></>
                                            )
                                    }
                                    )}
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>

        </>
    )
}

