import React from "react";
import { FriendListItem } from '../friendsListItem/FriendsListItem'

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