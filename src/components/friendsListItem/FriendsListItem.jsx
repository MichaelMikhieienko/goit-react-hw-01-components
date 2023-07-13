import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = (props) => {
  return (
    <li className="item">
      <span className="status">{props.isOnline ? 'Yes' : 'No'}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


