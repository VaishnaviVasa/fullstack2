import React from 'react';
import samsung from './samsung.png';
import tinker1 from './tinker1.jpg';

function Three() {
    return (
        <div>
            <h1>Reviews</h1>
            <div>
                <img src={samsung} alt="Samsung product is good" />
                <h3>This product is good</h3> {/* Description for Samsung */}
            </div>
            <div>
                <img src={tinker1} alt="Tinker product is excellent" />
                <h3>This product is excellent</h3 > {/* Description for Tinker */}
            </div>
        </div>
    );
}

export default Three;
