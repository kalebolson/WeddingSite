import { useRef, useState, useEffect } from "react"
import services from "../services";

const useGalleryCtrl = () => {
    const s = services();

    const [images, setImages] = useState();

    const [openedImage, setOpenedImage] = useState(false);

    const photoInput = useRef(null);

    const uploadClicked = (e) => {
        photoInput.current.click();
    }

    const handleFileUpload = async (e) => {
        const response = await s.postPhoto(e.target.files[0]);
        //setImages([...images, response.content])
    }

    const openImage = (id) => {
        setOpenedImage(id);
    }

    const closeImage = () => {
        setOpenedImage(false);
    }

    const nextImage = (id) => {
        const imageIds = images.map((image) => image._id)
        const index = imageIds.indexOf(id);
        const nextId = imageIds[(index + 1) % imageIds.length]
        setOpenedImage(imageIds[nextId]);
    }

    const prevImage = (id) => {
        const imageIds = images.map((image) => image._id)
        const index = imageIds.indexOf(id);
        const prevId = imageIds[(index + imageIds.length - 1) % imageIds.length] // Have to add the full length here because negative nums won't work with modulus
        setOpenedImage(imageIds[prevId])
    }

    useEffect(() => {
        (async () => {
            var debugImages = await s.getPhotos()
            setImages(debugImages);
        })()
        
    }, [])

    return {
        uploadClicked,
        setImages,
        images,
        photoInput,
        handleFileUpload,
        openImage,
        closeImage,
        nextImage,
        prevImage,
        openedImage
    }
}

export default useGalleryCtrl;