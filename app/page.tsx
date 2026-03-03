import React from 'react';
import './styles.css';

const Page = () => {
  return (
    <div className="hero" style={{
      backgroundImage: "url('https://your-instagram-background-url.com')",
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative',
    }}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 30% tint
      }}></div>
      <h1 className="title">Welcome to our website</h1>
    </div>
  );
};

export default Page;