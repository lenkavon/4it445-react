import React from 'react';

export function UserScreenName({ screenName }) {
  return <span style={{fontSize: "1.5rem", fontStyle: 'italic'}}>@{screenName}</span>;
}
