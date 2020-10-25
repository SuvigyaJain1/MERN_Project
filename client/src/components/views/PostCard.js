import React from 'react';
import { Link } from 'react-router-dom';

const postStyle = {
    width: "18rem",
    backgroundColor: "#c9352e",
    color: "white",
    padding: "25px",
    fontSize: "20px",
    margin: "10px",
    display: "inline-block"
}

function PostCard(props) {
    return (
        <Link to="/grouproute">
            <div class="card" style={postStyle} >
                <div class="card-body">
                    <h4 class="card-title">{props.post.caption}</h4>
                    <h5 class="card-title">{props.post.author}</h5>
                    <p class="card-text">{props.post.content.substring(0, 120) + "..."}</p>

                </div>
            </div >
        </Link>
    )
}

export default PostCard;