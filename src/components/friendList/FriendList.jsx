import React from 'react';
import { FriendListItem } from '../friendsListItem/FriendsListItem';

export const FriendList = props => {
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
  );
};

// export const Statistics = props => {
//     return (
//       <section class="statistics">
//         <h2 class="title">{props.title}</h2>

//         <ul class="stat-list">
//           {props.stats.map(item => {
//             return (
//               <StatItem key={item.id} label={item.label} percentage={item.percentage} />
//              );
//           })}
//         </ul>
//       </section>
//     );
//   };
