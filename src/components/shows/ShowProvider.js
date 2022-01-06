import React, { useState, createContext } from "react"

export const ShowContext = createContext()

export const ShowProvider = (props) => {

    const [ shows, setShows ] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")


    const getShows = () => {
        return fetch("http://localhost:8088/shows")
        .then(res => res.json())
        .then(setShows)
    }

    const addShow = showObj => {
        return fetch("http://localhost:8088/shows", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(showObj)
    })
        .then(response => response.json())
        .then(getShows)
}

    const deleteShow = showId => {
        return fetch(`http://localhost:8088/shows/${showId}`, {
            method: "DELETE"
        })
        .then(getShows)
    }

    const editShow = show => {
        return fetch(`http://localhost:8088/shows/${show.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(show)
        })
        .then(getShows)
    }

    const getShowById = (id) => {
        return fetch(`http://localhost:8088/shows/${id}`)
        .then(res => res.json())
    }

    return (
        <ShowContext.Provider value={{
            shows, getShows, addShow, getShowById, deleteShow, editShow, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ShowContext.Provider>
    )

}