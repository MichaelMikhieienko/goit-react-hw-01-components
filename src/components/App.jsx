import * as React from 'react';
import {Profile} from './profile/Profile'
import userProfile from '../data/user.json'
import {Statistics} from './statistics/Statistics';
import userStatistics from '../data/data.json'
import { FriendList } from './friendList/FriendList';
import userFriendList from '../data/friends.json'
import userFriendsListItem from '../data/friends.json'
import {TransactionHistory} from './transactionHistory/TransactionHistory'
import userTransactionHistory from '../data/transactions.json'




export const App = () => {

  React.useEffect(() => {
    console.log('RENDER');
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Profile 
     username={userProfile.username}
     tag={userProfile.tag}
     location={userProfile.location}
     avatar={userProfile.avatar}
     stats={userProfile.stats}
     />
     <Statistics title="Upload stats" stats={userStatistics} />
     <FriendList friends={userFriendList} />;
     <TransactionHistory items={userTransactionHistory} />;

     
    </div>
  );
};
