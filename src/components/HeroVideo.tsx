"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero-poster.jpg"
      className={className}
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
