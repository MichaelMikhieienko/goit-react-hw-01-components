import * as React from 'react';
import {Profile} from './profile/Profile'
import userProfile from '../data/user.json'
import {Statistics} from './statistics/Statistics';
import userStatistics from '../data/data.json'

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
     
    </div>
  );
};
