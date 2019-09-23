import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { format, parseISO } from 'date-fns';

import {
  AvatarPhoto,
  Link,
  TransparentButton,
  UserName,
  UserScreenName,
} from './atoms/';


function formatDate(date) {
  if (typeof date === 'string') {
    date = parseISO(date);
  }
  return format(date, 'dd-MM-yyyy H:mm');
}


export function Quack({ quack, onLikePress }) {
  const {
    id,
    user: { name, screenName, profileImageUrl },
    text,
    likeCount,
    liked,
    createdAt,
  } = quack;

  const linkToUser = `/${screenName}`;
  const linkToQuack = `/${screenName}/status/${id}`;

  return (
    <article style={{display: 'flex' , flexDirection:'row', borderTop: '0.1rem solid #ED1848'}}>
      <div>
        <Link to={linkToUser}>
          <AvatarPhoto src={profileImageUrl} alt={name} />
        </Link>
      </div>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <div style={{ fontSize: "1.5rem", display: 'flex', flexDirection:'row'}}>
          <Link to={linkToUser} >
            <UserName name={name} /> <UserScreenName screenName={screenName} />
          </Link>
          {' - '}
          <Link to={linkToQuack}>
            <span style={{fontSize: "1rem"}}>{formatDate(createdAt)}</span>
          </Link>
        </div>
        <div style={{flexGrow: 1, marginTop: '0.5rem'}}>{text}</div>
        <div style={{alignSelf: 'flex-start'}}>
          <TransparentButton
            onClick={() => {
              if (!onLikePress) return;
              onLikePress(quack);
            }}
          >
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular}
            />{' '}
            {likeCount}
          </TransparentButton>
        </div>
      </div>
    </article>
  );
}

export const LikeCount = ({liked, quack, likeCount, onLikePress}) => (
  <TransparentButton
    onClick={() => {
      if (!onLikePress) return;
      onLikePress(quack);
    }}
    >
    <FontAwesomeIcon
      icon={liked ? faHeartSolid : faHeartRegular}
    />{' '}
    {likeCount}
  </TransparentButton>
);

export const data = {
  user: { id: 123, name: 'Lenka Von', screenName: 'lenkavon', profileImageUrl: 'https://avatars3.githubusercontent.com/u/11210193?s=460&v=4'},
  id: 1234,
  createdAt: '2019-08-08T05:43:18.023Z',
  userId: 123,
  text: 'Hello, People of the VSE!',
  likeCount: 399,
  liked: true,
}