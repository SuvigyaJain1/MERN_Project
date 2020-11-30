import React from 'react';
import PostCard from './PostCard';

export default function Posts(props){
  const posts = (props.post == null)?[]:props.posts.map((post) => {return <PostCard post={post} />})
  return(
      <div style={{'margin':'20px'}}>
        { posts.length !== 0 ? posts : <h1 style={{
          "marginTop":"69px",
          "fontFamily":"Roboto"
        }}> Looks like there are no posts... </h1>}
      </div>
  )
}
