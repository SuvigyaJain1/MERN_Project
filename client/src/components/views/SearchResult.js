import React from 'react';


function SearchResult(props) {



    return (
        <div style={{
            height: "50px",
            width: "400px",
            backgroundColor: "white",
            color: "black",
            margin: "100px auto",
            textAlign: "left",
            fontSize: "30px"
        }}>
            {props.email}
        </div>
    )
}

export default SearchResult;