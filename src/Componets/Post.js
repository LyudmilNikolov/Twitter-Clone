import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar} alt=""></Avatar>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                    {displayName}{" "}
                    <span className='post__headerSpecial'>
                        {verified && <VerifiedIcon className='post__badge'/>} 
                        @{username}
                    </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt='' />
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <IosShareIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post