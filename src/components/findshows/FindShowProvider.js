import React, { useState, createContext } from "react"

export const FindShowContext = createContext()

export const FindShowProvider = (props) => {

    const [ findShows, setShows ] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

    const getFindShows = (search) => {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${search}&apikey=XEGB360AJB76vGURXeE7mG0y1iNLmfoT`)
        .then(res => res.json())
        .then(setShows)
    }

    const getFindShowsCity = (search) => {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=${search}&apikey=WoH918XzQjQACHV4jJJlI2oUqLqtJXUz`)
        .then(res => res.json())
        .then(setShows)
    }

return ( 
    <FindShowContext.Provider value={{ 
        findShows, getFindShows, getFindShowsCity, searchTerms, setSearchTerms
    }}>
        {props.children}
    </FindShowContext.Provider>
)
}