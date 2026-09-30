import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    // Check if touch device / mobile
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsPointer(false);
      } else {
        setIsPointer(true);
      }
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Track interactive elements hover
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .interactive-cursor');
      if (target) {
        setIsHovered(true);
        const cursorData = target.getAttribute('data-cursor');
        if (cursorData) {
          setHoverText(cursorData);
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trailing effect frame loop
  useEffect(() => {
    if (!isPointer) return;
    let animFrame;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animFrame = requestAnimationFrame(followCursor);
    };
    animFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isPointer]);

  if (!isPointer) return null;

  return (
    <>
      {/* Center glowing dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#06b6d4]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Outer trailing ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-16 h-16 border-cyan-400/80 bg-cyan-500/10 backdrop-blur-[2px] shadow-[0_0_25px_rgba(6,182,212,0.3)]'
            : 'w-8 h-8 border-violet-400/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {hoverText && (
          <span className="text-[10px] font-bold text-cyan-300 font-mono tracking-widest uppercase animate-pulse">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
}
