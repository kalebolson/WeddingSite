import closeBtnImg from '../images/close-round-icon.svg'

const ImageProjection = (props) => {

    return (
        <div className='splash-guard'>
            <div className="img-proj-content">
                <div className='open-img'>
                    <img src={props.image.url} />
                </div>
                <div className='comments-section'>

                </div>
                <img src={closeBtnImg} className='close-btn' onClick={(e) => props.close(props.image._id)} />
            </div>

        </div>
    )
}

export default ImageProjection;