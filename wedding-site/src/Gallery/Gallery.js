import React from "react";
import useGalleryCtrl from "./useGalleryCtrl";
import { useState, useRef, useEffect } from "react"
import services from "../services"
import ImageBox from "./ImageBox";
import ImageProjection from "./ImageProjection";

export default function Gallery() {

    const ctrl = useGalleryCtrl()
    
    var imageBoxes = ctrl.images
        ? ctrl.images.map((image) => {
            return <ImageBox 
                key={image._id} 
                id={image._id} 
                url={image.url} 
                likes={image.likes} 
                comments={image.comments} 
                openImage={ctrl.openImage}/>
          })
        : ''

    return (
        <div>
            <input ref={ctrl.photoInput} 
                onChange={e => ctrl.handleFileUpload(e)} 
                type='file' 
                className='hide'
                accept="image/png, image/jpeg">
            </input>
            <button className='upload-btn' onClick={(e) => ctrl.uploadClicked(e)}>Upload A Photo!</button>

            <ul className='img-grid'>
                {imageBoxes}
            </ul>

            {ctrl.openedImage 
            ? <ImageProjection 
                image={ctrl.images.find(image => image._id === ctrl.openedImage)} 
                next={ctrl.nextImage}
                prev={ctrl.prevImage}
                close={ctrl.closeImage}/>
            : ''
            }
        </div>
    )
}