import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover" style={{ backgroundImage: "url('https://example.com/hotlinked-image.jpg')" }}>
      {/* Existing metadata can be maintained here */}
      <h1 className="text-white">Your existing content here</h1>
    </div>
  );
}