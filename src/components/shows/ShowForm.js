import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ShowContext } from "./ShowProvider"
import "./Show.css"

export const ShowForm = () => {

const { addShow, editShow, getShowById, deleteShow, getShows } = useContext(ShowContext)

const [ show, setShow ] = useState({})

const [ isLoading, setIsLoading ] = useState(true)

const { showId } = useParams()

const navigate = useNavigate()

const states = 
['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

//Delete function
const handleClickDelete = () => {
    deleteShow(show.id)
    .then(() => {
        navigate("/myshows")
    })
}

const handleControlledInputChange = (event) => {

    const newShow = {...show}

    newShow[event.target.id] = event.target.value

    setShow(newShow)
}

const handleClickCancel = (event) => {

    navigate("/myshows")
}

const handleClickSave = (event) => {

    const userId = parseInt(localStorage.getItem("showgoer_user"))
    show.userId = userId


if (show.artist === "" || show.date === "")
{
    window.alert("Please fill in the artist and date.")
} else {
    setIsLoading(true);
    if (showId) {
        editShow({
            id: show.id,
            artist: show.artist,
            date: show.date,
            city: show.city,
            state: show.state,
            venue: show.venue,
            log: show.log,
            userId: parseInt(show.userId)
        })
        .then(() => navigate("/myshows"))
    } else {
        addShow({
            artist: show.artist,
            date: show.date,
            city: show.city, 
            state: show.state,
            venue: show.venue,
            log: show.log,
            userId: parseInt(show.userId)
        })
        .then(() => navigate("/myshows"))
    }
}
}


useEffect(() => {
    getShows().then(() => {
        if (showId){
            getShowById(showId)
            .then(show => {
                setShow(show)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    })


}, [])


return (

    <div className="form-background">

    <form className="ShowForm">
        <h2 className="ShowForm_title"> {showId ? <>Edit Show</> : <>New Show</>}</h2>

        <fieldset>
            <div className="form_group"> 
            <label className="artist-label" htmlFor="artist">Artist: </label>
            <input type="text" id="artist" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Artist name..." value={show.artist} />
            </div>
        </fieldset>

        <fieldset>
        <div className="form_group"> 
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" className="form-control" onChange={handleControlledInputChange} value={show.date} />
            </div>
            </fieldset>

            <fieldset>
            <div className="form_group"> 
            <label htmlFor="city">City: </label>
            <input type="text" id="city" onChange={handleControlledInputChange}  required className="form-control" placeholder="City..." value={show.city} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form_group">
                <select value={show.state} name="state" id="state" onChange={handleControlledInputChange}>
                    <option value="0">State...</option>
                    {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>
        </fieldset>

        <fieldset>
            <div className="form_group"> 
            <label htmlFor="venue">Venue: </label>
            <input type="text" id="venue" onChange={handleControlledInputChange} className="form-control" placeholder="Venue name..." value={show.venue} />
            </div>
        </fieldset>

        <div className="form-buttons">
        <button className="saveShow" disabled={isLoading} onClick={event => {
            event.preventDefault()
            handleClickSave()
        }}>{showId ? <>Save Show</> : <>Add Show</>}</button>

        <button className="deleteShow" disabled={isLoading} onClick={event => {
            event.preventDefault()
            handleClickDelete()
        }}>Delete Show</button>

        <button className="cancelShow" disabled={isLoading} onClick={event => {
            handleClickCancel()
        }}>Cancel</button>
        </div>

        <fieldset>
            <div className="form_group"> 
            <label htmlFor="log">Notes </label>
            <input type="text" id="log" onChange={handleControlledInputChange} className="form-control" placeholder="Write about your experience!" value={show.log} />
            </div>
        </fieldset>

      
</form>
</div>
)


}