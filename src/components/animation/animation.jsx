import { useState, useEffect, useRef } from 'react';
import './animation.css';
import Image from '../../assets/image.png';
import LeftEye from '../../assets/left.png';
import RightEye from '../../assets/right.png';

export default function Animation() {
  const eyeLeft = useRef();
  const leftWrapper = useRef();
  const eyeRight = useRef();
  const rightWrapper = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (leftWrapper.current && eyeLeft.current && rightWrapper.current && eyeRight.current) {

        const factor = 0.025;

        // For left eye
        const leftWrapperRect = leftWrapper.current.getBoundingClientRect();
        const leftMouseX = event.clientX - leftWrapperRect.left;
        const leftMouseY = event.clientY - leftWrapperRect.top;
        const leftCenterX = leftWrapperRect.width / 2;
        const leftCenterY = leftWrapperRect.height / 2;
        const leftOffsetX = leftMouseX - leftCenterX;
        const leftOffsetY = leftMouseY - leftCenterY;
        eyeLeft.current.style.transform = `translate(${leftOffsetX * factor}px, ${leftOffsetY * factor}px)`;

        // For right eye
        const rightWrapperRect = rightWrapper.current.getBoundingClientRect();
        const rightMouseX = event.clientX - rightWrapperRect.left;
        const rightMouseY = event.clientY - rightWrapperRect.top;
        const rightCenterX = rightWrapperRect.width / 2;
        const rightCenterY = rightWrapperRect.height / 2;
        const rightOffsetX = rightMouseX - rightCenterX;
        const rightOffsetY = rightMouseY - rightCenterY;
        eyeRight.current.style.transform = `translate(${rightOffsetX * factor}px, ${rightOffsetY * factor}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="animation-container">
      <div className="robotWrapper">
        <img src={Image} className="robotImg" alt="Robot" />
        <div className="leftEyeWrapper" ref={leftWrapper}>
          <img src={LeftEye} className="leftEyeImg" alt="Left Eye" ref={eyeLeft} />
        </div>
        <div className="rightEyeWrapper" ref={rightWrapper}>
          <img src={RightEye} className="rightEyeImg" alt="Right Eye" ref={eyeRight} />
        </div>
      </div>
    </div>
  );
}
