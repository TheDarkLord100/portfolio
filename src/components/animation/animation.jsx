import React from 'react';
import './animation.css';
import Image from '../../assets/image.png';
import LeftEye from '../../assets/left.png';
import RightEye from '../../assets/right.png';

export default function Animation() {
    const backgroundImageStyle = {
        backgroundImage: `url(${Image})`
    };

    return (
        <div className="animation-container" style={backgroundImageStyle}>
        </div>
    );
}
