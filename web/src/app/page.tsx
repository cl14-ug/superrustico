"use client";
import React, { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        ref={videoRef}
        src="/superrustico.MP4"
        autoPlay
        loop
        muted
        playsInline
        className="superrustico-video"
      />
      <audio
        ref={audioRef}
        src="/traeume.mp3"
        autoPlay
        loop
        preload="auto"
      />
    </div>
  );
}
