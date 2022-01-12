import React, {useContext, useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GalleryContext } from "./GalleryProvider"
import "./Gallery.css"

export const GalleryForm = () => {

    const {addPic, editPic, deletePic } = useContext(GalleryContext)

    const [ pic, setPic ] = useState({})

    const [ isLoading, setIsLoading ] = useState(true)

    const {picId} = useParams()

    const navigate = useNavigate()


    const [image, setImage ] = useState("")
    const [ url, setUrl] = useState("")
 

    const uploadImage = () => {
        const data= new FormData()
        data.append("file", image)
        data.append("upload_preset", "showgoer")
        data.append("cloud_name", "dtmiilpg4")
        fetch("https://api.cloudinary.com/v1_1/dtmiilpg4/image/upload", {

        method: "POST",
        body: data
    })
    .then(resp => resp.json())
    .then(data => {
        setUrl(data.url)
        addPic({
           
            imageUrl: data.url,
            caption: data.caption,
            userId:  +localStorage.getItem("showgoer_user")

        })
    })
    .catch(err => console.log(err))
    .then(() => navigate("/gallery"))
    }


    const onChange = (e) => {

        setImage(e.target.files[0])
    
    }

    const handleControlledInputChange = (event) => {
        const newPic = {...pic}
        newPic[event.target.id] = event.target.value
        setPic(newPic)
        console.log(newPic)
    }


    // const deletePicture = () => {
    //     deletePic(pic.id)
    //     .then(() => {
    //         navigate("/gallery")
    //     })
    // }

    const cancelEdit = (e) => {
        e.preventDefault()
        navigate("/gallery")
    }

    // const savePicEdit = () => {
    //     const userId = parseInt(localStorage.getItem("showgoer-user"))
    //     pic.userId = userId

    //     setIsLoading(true);
    //     if (picId) {
    //         editPic({
    //             id: pic.id,
    //             imageUrl: pic.imageUrl,
    //             caption: pic.caption,
    //             userId: parseInt(pic.userId)
    //         })
    //         .then(() => navigate("/gallery"))
    //     } else { 
    //         addPic({
    //             imageUrl: pic.imageUrl,
    //             caption: pic.caption,
    //             userId: parseInt(pic.userId)
    //         })
    //         .then(() => navigate("/gallery"))
    //     }
    // }


    

  return (

    
        <div className="gallery-form">

            <h2 className="gallery-form-title"> {picId ? <> Edit Picture</> : <>New Picture</>}</h2>

            <h4 className="instructions">Choose a file and click "upload."</h4>

            <div className="upload">
          
          <button id="gallery-upload" onClick={uploadImage}>Upload</button>

          <span className="font-css top">*</span>

        
   <button id="choose-file-button">
       <input type="file" id="file-input" onChange= {onChange} name="ImageStyle"/>
   </button>
 
     
   
      <label htmlFor="caption">Caption: </label>
            <input type="text" id="caption" onChange={handleControlledInputChange}  required className="form-control" placeholder="Write a caption..." value={pic.caption} />
            </div>
      
            <div className="form-buttons">
        

        <button className="cancelEdit" disabled={isLoading} onClick={event => {
            cancelEdit()
        }}>Cancel</button>
        </div>
    </div>
    
   


  )

}