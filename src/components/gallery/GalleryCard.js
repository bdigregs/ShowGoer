import React, { useContext } from "react"
import { GalleryContext } from "./GalleryProvider";
import "./Gallery.css"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export const GalleryCard = ({ pic }) => {

    const navigate = useNavigate()

    const {addPic} = useContext(GalleryContext)


    return (

        <>

            <div className="gallery-card">

                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pic.imageUrl} />
                            <Card.Title className="picture caption">{pic.caption}</Card.Title>


    


                        </Card>
                    </Col>
                </Row>




            </div>





        </>


    )

}