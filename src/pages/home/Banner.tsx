import React from 'react';

interface BannerProps {
  appName?: string | null;
  token: string | null;
}

const Banner = ({ appName, token }: BannerProps) => {
  if (token) {
    return null;
  }

  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName && appName.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
