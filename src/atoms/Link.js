import React from 'react';

export function Link({ children, noUnderline, ...rest }) {
  return (
    <div
      style={{
        link: 'no-underline',
        'underline-hover': !noUnderline,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
