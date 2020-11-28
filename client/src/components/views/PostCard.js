import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const postStyle = {
    minWidth: "50%",
    width: "80%",
    // backgroundColor: "#F4D9D8",
    color: "#100118",
    padding: "25px",
    margin: "10px",
    display: "inline-block"
}

function PostCard(props) {
    return (
        <Link to="/posts/" + props.post._id>
          <Card className="card" style={postStyle} >
            <div class="card-body">
              <h4 class="card-title">{props.post.caption}</h4>
              <h5 class="card-author">{props.post.author}</h5>
              <p class="card-text">{props.post.content}</p>

            </div>
            </Card >
          </Link>
    )
}

export default PostCard;
