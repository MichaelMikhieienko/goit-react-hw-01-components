import * as React from 'react';
import { Profile } from './Profile/Profile';
import userProfile from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import userStatistics from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import userFriendList from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userTransactionHistory from '../data/transactions.json';
import './app.css'

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
        color: '#010101',
      }}
    >
      <section className='sectionProfile'>
        <Profile
          username={userProfile.username}
          tag={userProfile.tag}
          location={userProfile.location}
          avatar={userProfile.avatar}
          stats={userProfile.stats}
        />
      </section>

      <section className='sectionStatistics' >
      <Statistics title="Upload stats" stats={userStatistics} />
      </section>

      <section class sectionFriendList>
      <FriendList friends={userFriendList} />
      </section>

      <section class sectionTransactionHistory>
      <TransactionHistory items={userTransactionHistory} />
      </section>
      
      
      
    </div>
  );
};
