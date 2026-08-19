"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let followerX = -100;
    let followerY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const animateFollower = () => {
      followerX += (pos.x - followerX) * 0.12;
      followerY += (pos.y - followerY) * 0.12;
      setFollower({ x: followerX, y: followerY });
      raf = requestAnimationFrame(animateFollower);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("[data-cursor]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="cursor"
        style={{ left: pos.x, top: pos.y, transform: `translate(-50%,-50%) scale(${isHovering ? 2 : 1})` }}
      />
      <div
        className="cursor-follower"
        style={{
          left: follower.x,
          top: follower.y,
          transform: `translate(-50%,-50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
    </>
  );
}
