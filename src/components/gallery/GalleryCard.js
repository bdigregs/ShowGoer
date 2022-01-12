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

    const {addPic, deletePic} = useContext(GalleryContext)

    const handleClickDelete = () => {
        deletePic(pic.id)
        .then(() => {
            navigate("/gallery")
        })
    }


    return (

        <>

            <div className="gallery-group">


                <div className="gallery-card">
                            <img className="gallery-pic" src={pic.imageUrl} />

                            <h6 className="caption">{pic.caption}</h6>

                            <div className="button-container">
                        <button id="delete-pic" onClick={event => {
                            event.preventDefault()
                            handleClickDelete()
                        }}>Delete</button>
                            </div>
                            </div>

    





            </div>





        </>


    )

}