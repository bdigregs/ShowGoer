import React from "react"
import "./Show.css"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export const ShowCard = ({ show }) => {


    const now = new Date(show.date.replace(/-/g, '\/').replace(/T.+/, ''));
    const dateString = now.toLocaleDateString({
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    })
    
    console.log(dateString);
    // moment('20010704T120854').format('MMMM Do YYYY, h:mm:ss a')

    const navigate = useNavigate()

    
    return (

        <>
     
                    <div className="show-card">
                   
                      
                            <h4 className="artist">{show.artist}</h4>
                            <p className="date">{now.toLocaleDateString({
                                weekday: "short",
                                year:  "numeric",
                                month: "2-digit",
                                day: "numeric"
                            })} </p>
                            {/* show time */}
                            <p className="city">{show.city}, {show.state}</p>
                            <p className="venue">{show.venue}</p>
                            <p className="notes">Notes:</p>
                            <p className="log">{show.log}</p>

                            <div className="button-container">
                            <button id="edit-button" onClick={() =>
                                navigate(`/myshows/edit/${show.id}`)}>Edit show</button>
                        </div>
                        </div>
               
                        {/* <Row className="upcoming-shows">
                        {(Date.now() < Date.parse(show.date)) && <>
                        <Col xs md="auto" order="last">
                            <h3 className="artist">{show.artist}</h3>
                            <p className="date">{show.date}</p>
                
                            <p className="city">{show.city}, {show.state}</p>
                            <p className="venue">{show.venue}</p>
                            <p className="log">Notes: {show.log}</p>

                            <button onClick={() =>
                                navigate(`/myshows/edit/${show.id}`)}>Edit show</button>
                        </Col> </>}
                    </Row>
                     */}

                 </>



// {(Date.now() < Date.parse(show.date)) && <>
//                     <Row className="upcoming-shows">
//                         <Col xs md="auto">
//                             <h3 className="artist">{show.artist}</h3>
//                             <p className="date">{show.date}</p>
//                             {/* show time */}
//                             <p className="city">{show.city}, {show.state}</p>
//                             <p className="venue">{show.venue}</p>
//                             <p className="log">Notes: {show.log}</p>

//                             <button onClick={() =>
//                                 navigate(`/myshows/edit/${show.id}`)}>Edit show</button>
//                         </Col>
//                     </Row>
//                 </>
// }
          




    

    )

}