"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeLanguage, setActiveLanguage] = useState<'DE' | 'ITA'>('DE');
  const [isMobile, setIsMobile] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle autoplay based on device type
  useEffect(() => {
    if (!isMobile && audioRef.current) {
      // Desktop: autoplay immediately
      audioRef.current.play().catch(() => {});
    }
  }, [isMobile]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
        if (audioRef.current && (!isMobile || hasUserInteracted)) {
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
  }, [isMobile, hasUserInteracted]);

  const handleLanguageChange = (language: 'DE' | 'ITA') => {
    setActiveLanguage(language);
    setHasUserInteracted(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = language === 'DE' ? '/traeume.mp3' : '/libiamo.mp3';
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  };

  const handleUserInteraction = () => {
    if (isMobile && !hasUserInteracted) {
      setHasUserInteracted(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={handleUserInteraction}
    >
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        className="video-container"
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
        
        <div 
          style={{ 
            marginTop: '20px',
            position: 'relative',
            zIndex: 10,
          }}
          className="language-selector"
        >
          <span
            style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500',
              cursor: 'pointer',
              textDecoration: activeLanguage === 'DE' ? 'underline' : 'none',
            }}
            onMouseEnter={(e) => {
              if (activeLanguage !== 'DE') {
                e.currentTarget.style.textDecoration = 'underline';
              }
            }}
            onMouseLeave={(e) => {
              if (activeLanguage !== 'DE') {
                e.currentTarget.style.textDecoration = 'none';
              }
            }}
            onClick={() => handleLanguageChange('DE')}
          >
            DE
          </span>
          <span
            style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500',
              margin: '0 10px',
            }}
          >
            |
          </span>
          <span
            style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500',
              cursor: 'pointer',
              textDecoration: activeLanguage === 'ITA' ? 'underline' : 'none',
            }}
            onMouseEnter={(e) => {
              if (activeLanguage !== 'ITA') {
                e.currentTarget.style.textDecoration = 'underline';
              }
            }}
            onMouseLeave={(e) => {
              if (activeLanguage !== 'ITA') {
                e.currentTarget.style.textDecoration = 'none';
              }
            }}
            onClick={() => handleLanguageChange('ITA')}
          >
            ITA
          </span>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src="/traeume.mp3"
        loop
        preload="auto"
      />
    </div>
  );
}
