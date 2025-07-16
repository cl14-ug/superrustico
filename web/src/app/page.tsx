import React from 'react';

export default function Home() {
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
        src="/superrustico.MP4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh',
          objectFit: 'contain',
          background: 'black',
          display: 'block',
        }}
      />
    </div>
  );
}
