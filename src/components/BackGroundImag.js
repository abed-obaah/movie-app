import React from "react";

const BackGroundImag = (props) => {
    const imageStyle ={
        width: "1519px",
        height: "550px"
    }
    return (
        <>
                <div style={imageStyle} className="image-container d-flex justify-content-start m-3">
                      <img style={imageStyle} src="/react-movie-app/cinemas.jpg" alt="movie"></img>
                </div>
        </>
    )
}

export default BackGroundImag;