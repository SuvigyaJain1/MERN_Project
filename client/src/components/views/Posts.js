import React from 'react';
import PostCard from './PostCard';

export default function Posts(props){
  const posts = props.posts.map((post) => {return <PostCard post={post} />})
  return(
      <div style={{'margin':'10px'}}>
        { posts.length != 0 ? posts : <h1> Looks like there are no posts... </h1>}
      </div>
  )
}
