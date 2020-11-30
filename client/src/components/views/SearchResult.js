import React from 'react';
import Button from '@material-ui/core/Button'
import axios from 'axios';

function SearchResult(props) {

    console.log(props)
    const addFollower = () => {
      const body = {
        'follower_email': props.user.email,
      }
      axios.post('api/users/addfollower', body).then((res, err) => {
        if (err) {
        }
        console.log("follower added successfully");
      })
    }
    return (
      <div>
        <div style={{
            height: "50px",
            width: "400px",
            backgroundColor: "#931a25",
            color: "white",
            verticalAlign: "center",
            margin: "100px auto",
            fontSize: "30px",
            padding: "10px"
        }}>

          {props.user.name + " " + props.user.lastname}
        </div>

        <Button color='primary' variant='contained' onClick={addFollower}>FOLLOW</Button>
      </div>


    )
}

export default SearchResult;
