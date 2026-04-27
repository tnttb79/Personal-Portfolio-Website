import { useEffect, useState } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      const nextPosition = { x: e.clientX, y: e.clientY };
      setPosition(nextPosition);
      setTrail((prev) => [nextPosition, ...prev].slice(0, 7));
    };

    const checkHover = (e) => {
      const hoverable = e.target.closest(
        'a, button, [role="button"], input[type="submit"]'
      );
      setIsHovering(!!hoverable);
    };
    const clearHover = () => setIsHovering(false);
    const setPressed = () => setIsActive(true);
    const clearPressed = () => setIsActive(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", setPressed);
    window.addEventListener("mouseup", clearPressed);
    document.addEventListener("mouseover", checkHover);
    document.addEventListener("mouseout", clearHover);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", setPressed);
      window.removeEventListener("mouseup", clearPressed);
      document.removeEventListener("mouseover", checkHover);
      document.removeEventListener("mouseout", clearHover);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <span
          className='cursor-trail'
          key={`${point.x}-${point.y}-${index}`}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (7 - index) / 12,
          }}
        />
      ))}
      <div
        className={`custom-cursor ${isHovering ? "hovering" : ""} ${
          isActive ? "active" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
