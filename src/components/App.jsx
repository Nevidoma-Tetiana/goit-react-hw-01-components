import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

import user from 'content/user.json';
import data from 'content/data.json';
import friends from 'content/friends.json';
import transactions from 'content/transactions.json';

const { username, tag, location, avatar, stats } = user;

export default function App() {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload status" data={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
