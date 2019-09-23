import React from 'react';

export function AvatarPhoto({ src, alt}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: '10rem', width: '10rem',padding: '0.2rem', marginRight:'1rem'}}
    />
  );
}
