
const ImageProjection = (props) => {

    return (
        <div className='img-splash-guard'>
            <div className='open-img'>
                <img src={props.image.url} />
            </div>
            <div className='comments-section'>

            </div>
            <i className='close-btn' onClick={(e) => props.close(props.image._id)}>x</i>
        </div>
    )
}

export default ImageProjection;