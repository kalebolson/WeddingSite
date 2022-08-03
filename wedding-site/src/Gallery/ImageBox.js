import { useEffect, useState, useRef } from 'react'
import likeOutline from '../images/heart-outline.svg'
import likePink from '../images/heart-pink.svg'
import likeRed from '../images/heart-red.svg'
import commentImg from '../images/comment-icon.svg'
import services from '../services'

export default function ImageBox(props) {
    const s = services();
    const [liked, setLiked] = useState(false);
    const [init, setInit] = useState(true);
    var [likes, setLikes] = useState(props.likes > 0 ? props.likes : 0);
    var commentCountString = props.commentCount
        ? "(" + props.commentCount + ")"
        : ""

    function likeHover(e) {
        if (!liked)
            e.currentTarget.src = likePink;
    }

    function likeOffHover(e) {
        e.currentTarget.src = liked
            ? likeRed
            : likeOutline
    }

    async function likeClick(e) {
        if (liked){
            e.currentTarget.src = likeOutline;
            s.unLikePhoto({ id: props.id });
            setLiked(false);
            setLikes(likes - 1);
        }
        else {
            e.currentTarget.src = likeRed;
            s.likePhoto( {id: props.id });
            setLiked(true);
            setLikes(likes + 1);
        }
        
    }

    return (
        <div className='img-item'>
            <div className='img-box' onClick={props.openImage(props.id)}>
                <img src={props.url} />
            </div>
            <div className='img-icons'>
                <div className='img-icon'>
                    <img src={likeOutline} className='like-img'
                    onMouseOver={e => likeHover(e)}
                    onMouseLeave={e => likeOffHover(e)}
                    onMouseDown={e => likeClick(e)}/> 
                    <i>{likes}</i>
                </div>
                <div className='img-icon'>
                    <img src={commentImg} className='comment-img' /><i>{commentCountString}</i>
                </div>
            </div>
        </div>
    )
}