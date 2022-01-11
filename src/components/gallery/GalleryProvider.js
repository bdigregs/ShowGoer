import React, { useState, createContext } from 'react'
import "./Gallery.css"

export const GalleryContext = createContext()

export const Gallery = (props) => {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const uploadImage = () => {
        const data= new FormData()
        data.append("file", image)
        data.append("upload_preset", "tutorial")
        data.append("cloud_name", "dtmiilpg4")
        fetch("https://api.cloudinary.com/v1_1/dtmiilpg4/image/upload", {

        method: "POST",
        body: data
    })
    .then(resp => resp.json())
    .then(data => {
        setUrl(data.url)
    })
    .catch(err => console.log(err))
    }


    const getPics = () => {
        return fetch("http://localhost:8088/gallery")
        .then(res => res.json())
        .then(setImage)
    }


    const addPic = picObj => {
        return fetch("http://localhost:8088/gallery", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(picObj)
    })
        .then(response => response.json())
        .then(getPics)
}


const handleClickSavePic = (event) => {
    event.preventDefault()

    const newPic = {
        caption: image.caption,
        imageUrl: image.imageUrl,
        userId: parseInt(image.userId)

    }
    addPic(newPic)
}
// return (
//     <div>
//         <div>
//             <input type="file" onChange= {(e) => setImage(e.target.files[0])}></input>
//             <button className="gallery-upload" onClick={uploadImage}>Upload</button>
//         </div>
//         <div>
//             <h1 className="gallery-header">Uploaded image will be displayed here</h1>
//             <img src={url} />
//         </div>
//         <button onClick={handleClickSavePic}>Add Picture</button>
//     </div>
// )
    return ( 
        <GalleryContext.Provider value={{ 
            image, setImage, url, setUrl, addPic, uploadImage, getPics
        }}>
            {props.children}
        </GalleryContext.Provider>
    )

}
