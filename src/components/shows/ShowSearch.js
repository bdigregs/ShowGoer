import React, { useContext } from "react"
import { ShowContext } from "./ShowProvider"
import "./Show.css"

export const ShowSearch = () => {

  //Changes state in provider. AnimalSearch is a child of provider, utilizes props in Context
  const { setSearchTerms } = useContext(ShowContext)

  return (
    <>
      
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search your shows... " />
    </>
  )
}
