import React from 'react';
import samsung from './samsung.png';
import tinker1 from './tinker1.jpg';
//styling the image and acces the 2 times
//access the property of another file into this
function Three(props) {
    return (
        <div className="m-3 text-center">
        <img src={samsung} width="200"/>
        <h3>{props.pro.name}</h3>
        <h3>{props.pro.branch}</h3>
        <h3>{props.pro.Year}</h3>
        <button type="button" class="btn btn-primary">Connect</button>
    </div>
    );
}

export default Three;
