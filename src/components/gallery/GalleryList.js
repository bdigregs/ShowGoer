import React, { useState, useContext } from 'react'
import "./Gallery.css"
import { GalleryContext } from './GalleryProvider'
import { useNavigate, useParams } from 'react-router-dom';


export const GalleryList = () => {

    const {addPic, uploadImage, getPics } = useContext(GalleryContext)

    const [image, setImage, url, setUrl ] = useState("")


    const handleClickSavePic = (event) => {
        event.preventDefault()

        const newPic = {
            caption: image.caption,
            imageUrl: image.imageUrl,
            userId: parseInt(image.userId)

        }
        addPic(newPic)
    }


return (
    <div>
        <div>
            <input type="file" onChange= {(e) => setImage(e.target.files[0])}></input>
            <button className="gallery-upload" onClick={uploadImage}>Upload</button>
        </div>
        <div>
            <h1 className="gallery-header">Uploaded image will be displayed here</h1>
            <img src={url} />
        </div>
        <button onClick={handleClickSavePic}>Add Picture</button>
    </div>
)
}