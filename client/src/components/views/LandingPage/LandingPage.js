import React, { useState, useEffect } from 'react'
import Posts from '../Posts';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
// import { getPostContent } from "../../../_actions/post_actions";



function LandingPage(props) {
    const dispatch = useDispatch();
    const [state, setState] = useState({
      "posts":[
        {
          "author": 'loading..',
          "caption": 'loading..',
          "content": "loading.."
        },
      ]
    });



    useEffect( () => {
      const dataToSubmit = {group: 'home'}
      axios.post('/api/posts/getposts', dataToSubmit)
        .then( res => {
        setState({posts:res.data});
      })
      .catch(err => console.error(err.message))
    }, [])

    return (
      <div className="app" style={{ margin: "100px" }}>
        {
          <Posts posts={ state.posts } />
        }
      </div>
    )
}

export default LandingPage;
