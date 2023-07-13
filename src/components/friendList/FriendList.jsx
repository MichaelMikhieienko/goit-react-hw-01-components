import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from '../FriendsListItem/FriendsListItem';

export const FriendList = (props) => {
  return (
    <ul className="friend-list">
      {props.friends.map(item => {
        return (
          <FriendListItem 
            key={item.id} 
            name={item.name}
            isOnline={item.isOnline}
            avatar={item.avatar} 
          />
        );
      })}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};
