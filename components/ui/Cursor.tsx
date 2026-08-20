"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentX = -100;
    let currentY = -100;
    let followerX = -100;
    let followerY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      // Smooth lerp follower for fluid precision feel
      followerX += (currentX - followerX) * 0.18;
      followerY += (currentY - followerY) * 0.18;
      setFollower({ x: followerX, y: followerY });
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "INPUT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          target.closest(".clickable"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Precision Inner Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Fluid Reticle Follower Ring with Crosshair Accents */}
      <div
        className={`fixed rounded-full border transition-all duration-200 flex items-center justify-center ${
          isHovering
            ? "w-11 h-11 border-[var(--accent)] bg-[var(--accent-dim)] shadow-[0_0_16px_var(--accent-glow)]"
            : "w-7 h-7 border-[var(--accent)]/50 bg-[var(--accent-dim)]/40"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Subtle crosshair tick marks */}
        <div className={`absolute -top-1 w-1 h-0.5 bg-[var(--accent)] transition-opacity ${isHovering ? "opacity-100" : "opacity-40"}`} />
        <div className={`absolute -bottom-1 w-1 h-0.5 bg-[var(--accent)] transition-opacity ${isHovering ? "opacity-100" : "opacity-40"}`} />
        <div className={`absolute -left-1 w-0.5 h-1 bg-[var(--accent)] transition-opacity ${isHovering ? "opacity-100" : "opacity-40"}`} />
        <div className={`absolute -right-1 w-0.5 h-1 bg-[var(--accent)] transition-opacity ${isHovering ? "opacity-100" : "opacity-40"}`} />
      </div>
    </div>
  );
}
