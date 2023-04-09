import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar} from '@mui/material';
import db from "./firebase";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Lyudmil Nikolov",
      username: "lnikolov",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/564x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg"
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src=''/>
                <input 
                  onChange={e => setTweetMessage(e.target.value)} 
                  value={tweetMessage} 
                  placeholder="What's happening" 
                  type="text"
                />
                
            </div>
            <input 
              onChange={e => setTweetImage(e.target.value)} 
              value={tweetImage} 
              className='tweetBox__imageInput' 
              placeholder="Optional: Enter image URL" 
              type="text"
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox