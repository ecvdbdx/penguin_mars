import React from 'react';

export default (props) => {
    return (
        <article className="card">
            <div className="card-image-wrapper">
                <img className="card-image" src={props.img_src} alt="img" />
            </div>
            <div className="card-info">
                <div className="card-rover">{props.rover.name}</div>
                <div className="card-camera">{props.camera.full_name}</div>
                <div className="card-sol">{props.sol}</div>
                <div className="card-date">{props.earth_date}</div>
            </div>
        </article>
    )
}