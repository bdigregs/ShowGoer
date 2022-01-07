import React, {useContext } from "react"
import "./FindShow.css"
import { FindShowContext } from "./FindShowProvider"
import { ShowContext } from "../shows/ShowProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

export const FindShowCard = ({ show }) => {

 console.log(show)

 const userId = parseInt(localStorage.getItem("showgoer_user"))
 show.userId = userId

 //tried to format date
//  moment('20010704T120854').format('MMMM Do YYYY, h:mm:ss a')

const navigate = useNavigate()

const { addShow } = useContext(ShowContext)

const handleClickSaveShow = (event) => {
    event.preventDefault()

    //declare new object
    const formattedShow = {
        artist: show.name,
        date: show.dates.start.localDate,
        city: show._embedded.venues[0].city.name,
        state: show._embedded.venues[0].state.name,
        venue: show._embedded.venues[0].name,
        userId: parseInt(show.userId)
        

    }

    addShow(formattedShow)


}

    return ( 
      
        <>
        
        <div className="find_show">
       <Row>
           <Col>
            <Card>
            
          <Card.Img variant="top" src={show.images[0].url} />
         
          <Card.Title className="show_name"><a href={show.url} target={show.url}>{show.name}</a></Card.Title>
         
          <Card.Body>
           
         
               <Card.Text>
               
           <p className="show_dates">{show.dates.start.localDate}</p>
        <p className="show_times">{show.dates.start.localTime}</p>
           <p className="show_venue">{show._embedded.venues[0].name}</p>
           <p className="show_city">{show._embedded.venues[0].city?.name}, {show._embedded.venues[0].state?.name}</p>
        
         
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button onClick={handleClickSaveShow}
        >Add To My Shows</button>
        </Card.Footer>
        </Card>
        </Col>
        </Row>
               {/* //add button, click event  */}
            </div>
           
            </>

    )
    
}