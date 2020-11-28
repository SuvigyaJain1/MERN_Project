import React from 'react';


function SearchResult(props) {

    console.log(props)

    return (
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
    )
}

export default SearchResult;
