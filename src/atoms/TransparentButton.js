import React from 'react';

export function TransparentButton({ children, ...rest }) {
  return (
    <button
      type="button"
      style={{
        background:'transparent',
        border: 'none',
        color: '#989FA5'
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
