import React, { useState, createContext } from 'react'
import "./Gallery.css"

export const GalleryContext = createContext()

export const Gallery = (props) => {
    const [images, setImages] = useState([]);
    const [url, setUrl] = useState("");



    const getPics = (userId) => {
        return fetch(`http://localhost:8088/gallery?userId=${userId}`)
        .then(res => res.json())
        .then(setImages)
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

const deletePic = picId => {
    return fetch(`http://localhost:8088/gallery/${picId}`, {
        method: "DELETE"
    })
    .then(getPics)
}


return ( 
    <GalleryContext.Provider value={{ 
        images, setImages, url, setUrl, addPic, getPics, deletePic
    }}>
        {props.children}
    </GalleryContext.Provider>
)

}

// export default Gallery;

// const handleClickSavePic = (event) => {
//     event.preventDefault()

//     const newPic = {
//         caption: image.caption,
//         imageUrl: image.imageUrl,
//         userId: parseInt(image.userId)

//     }
//     addPic(newPic)
// }
// return (
//     <div>
//         <div>
//             <input type="file" onChange= {(e) => setImages(e.target.files[0])}></input>
//             <button className="gallery-upload" onClick={uploadImage}>Upload</button>
//         </div>
//         <div>
//             <h1 className="gallery-header">Uploaded image will be displayed here</h1>
//             <img src={url} />
//         </div>
//         <button onClick={handleClickSavePic}>Add Picture</button>
//     </div>
// )
 
