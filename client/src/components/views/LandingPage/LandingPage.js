import React, { useState } from 'react'
import { FaCode } from "react-icons/fa";
import PostCard from './PostCard';



function LandingPage() {

    const [post, setPost] = useState({
        author: "Example Author",
        caption: "First Post",
        content: "Example Post Content - Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl sagittis erat consectetur vestibulum. Curabitur et suscipit erat. Aenean eget commodo arcu. Mauris ullamcorper ut felis a luctus. Cras eget fringilla neque, at dictum felis. Nam luctus eget orci id porta. Phasellus gravida sed nunc ut venenatis. Maecenas fermentum auctor ultrices."
    });

    return (
        <div className="app" style={{ margin: "100px" }}>
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
        </div>
    )
}

export default LandingPage
