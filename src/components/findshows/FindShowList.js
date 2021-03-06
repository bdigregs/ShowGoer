import React, { useContext, useEffect, useState } from "react";
import { FindShowContext } from "./FindShowProvider";
import "./FindShow.css"
import { FindShowCard } from "./FindShowCard"




export const FindShowList = () => {

    const { findShows, getFindShows, getFindShowsCity } = useContext(FindShowContext)


    const [searchTerm, setSearchTerm] = useState("")

  
    //Trying to make Enter work
    // const handleKeypress = e => {
    //     if (e.keyCode === 13) {
         
    //         getFindShowsCity(searchTerm)
    //         getFindShows(searchTerm)
    //         console.log(searchTerm);
    //     }
    // }

    const handleControlledInputChange = (props) => {

        setSearchTerm(props.target.value)

    }

    //only use useEffect to print data when the page loads
    // useEffect(() => {

    //     getFindShowsCity()
    // }, [])

    // useEffect(() => {

    //     getFindShows()
    // }, [])


    return (



        <div id="findshows-page">

            <div className="findshow-sticky">



                <h1 className="find-shows-header">Find shows near you</h1>

                <div className="findshows-container">
                    <input type="search" className="form-control rounded" placeholder="Search by city or artist..." onChange={handleControlledInputChange} aria-label="Search"
                        aria-describedby="search-addon" />

                    <button type="button" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault()
                        getFindShowsCity(searchTerm)
                        getFindShows(searchTerm)
                        console.log(searchTerm)
                    }}>Search</button>
                </div>
            </div>
            <div className="input-group">
                {
                    findShows._embedded?.events.sort((a, b) => {
                        return new Date(a.date) - new Date(b.date)
                    }).map(show => {
                        return <FindShowCard key={show.id} show={show} />
                    })
                }

            </div>


            {/* text input (search phrase), change state like in a form but with 1 input, button w/ event listener that takes search phrase out of state, plug into api call, getShows function will need paramater probably. Similar to a form w/ one input. Separate container for results */}
        </div>

    )

}