"use client";

import React, { useRef, useState, useCallback } from "react";

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  glareColor?: "gold" | "white" | "emerald";
  elevation?: boolean;
}

export default function Card3D({
  children,
  className = "",
  maxTilt = 12,
  glareOpacity = 0.25,
  glareColor = "gold",
  elevation = true,
  ...rest
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
  });
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  const getGlareGradient = (x: number, y: number) => {
    switch (glareColor) {
      case "emerald":
        return `radial-gradient(circle at ${x}% ${y}%, rgba(52, 211, 153, ${glareOpacity}) 0%, transparent 65%)`;
      case "white":
        return `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 65%)`;
      case "gold":
      default:
        return `radial-gradient(circle at ${x}% ${y}%, rgba(220, 185, 115, ${glareOpacity}) 0%, rgba(255, 255, 255, 0.1) 25%, transparent 70%)`;
    }
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Normalization from -1 to 1
      const normalizedX = (x / rect.width - 0.5) * 2;
      const normalizedY = (y / rect.height - 0.5) * 2;

      const rotateX = -normalizedY * maxTilt;
      const rotateY = normalizedX * maxTilt;

      setTransformStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(1.025, 1.025, 1.025)`,
        transition: "transform 0.08s ease-out",
      });

      setGlareStyle({
        opacity: 1,
        background: getGlareGradient(xPercent, yPercent),
        transition: "opacity 0.15s ease-out",
      });
    },
    [maxTilt, glareOpacity, glareColor]
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.4s ease-out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative preserve-3d group ${className}`}
      style={transformStyle}
      {...rest}
    >
      {/* 3D Specular Glare Reflection Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
        style={glareStyle}
      />
      {/* Ambient 3D Depth Shadow when elevated */}
      {elevation && (
        <div className="pointer-events-none absolute -inset-1 rounded-[inherit] bg-gradient-to-tr from-gold-500/0 via-gold-500/10 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
      )}
      {children}
    </div>
  );
}
