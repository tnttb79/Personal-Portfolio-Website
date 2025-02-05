import { useEffect, useState } from "react";
import "./followingStar.scss";

const FollowingStar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsMoving(true);
      // Add slight delay for smooth following effect
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);

      // Reset moving state after movement stops
      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`following-star ${isMoving ? "moving" : ""}`}
      style={{
        transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
      }}
    >
      <div className='star-core'></div>
      <div className='star-rays'></div>
      <div className='star-glow'></div>
    </div>
  );
};

export default FollowingStar;
