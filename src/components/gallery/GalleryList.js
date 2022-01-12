import React, { useState, useContext, useEffect } from 'react'
import "./Gallery.css"
import { Gallery, GalleryContext } from './GalleryProvider'
import { useNavigate, useParams } from 'react-router-dom';
import { GalleryCard } from './GalleryCard';


export const GalleryList = () => {

    const {addPic, getPics, images} = useContext(GalleryContext)

    const [image, setImage ] = useState("")
    const [ url, setUrl] = useState("")

    const navigate=useNavigate()

    // const uploadImage = () => {
    //     const data= new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "showgoer")
    //     data.append("cloud_name", "dtmiilpg4")
    //     fetch("https://api.cloudinary.com/v1_1/dtmiilpg4/image/upload", {

    //     method: "POST",
    //     body: data
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //     setUrl(data.url)
    //     addPic({
           
    //         imageUrl: data.url,
            
    //         userId:  +localStorage.getItem("showgoer_user")

    //     })
    // })
    // .catch(err => console.log(err))
    // }


    // const onChange = (e) => {

    //     setImage(e.target.files[0])
    
    // }

    useEffect(() => {

       getPics(localStorage.getItem("showgoer_user"))

    }, [images.length])


return (
    <div className="gallery-background">
        

<h1 className="gallery-header">Your Gallery</h1>

    <div className="add-pic-button-container">
    <button id="add-pic" onClick={() => {
        navigate("/gallery/create")}}>Add Picture</button>
        </div>
        
        {/* <div className="upload">
          
            <button id="gallery-upload" onClick={uploadImage}>Upload</button>

            Image <span className="font-css top">*</span>

          
     <button id="choose-file-button">
         <input type="file" id="file-input" onChange= {onChange} name="ImageStyle"/>
     </button>
   
        </div> */}
        
       
    
     <div className="mb-1">
       
           
          {
              images.map((image) => <GalleryCard key={image.id} pic={image} /> )
          }
      
        {/* <button onClick={handleClickSavePic}>Add Picture</button> */}
        {/* <img src={image.imageUrl} /> */}

</div>
    </div>

    
)
}