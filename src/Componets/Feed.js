import React, { useEffect, useState } from 'react'
import TweetBox from './TweetBox';
import Post from './Post';
import "./Feed.css";
import db from "./firebase";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  console.log(posts);

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Test</h2>
        </div>

        <TweetBox />
          
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    </div>
  )
}

export default Feed