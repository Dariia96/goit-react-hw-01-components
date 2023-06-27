import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Prrofile/Prrofile';
import Statistics from './Sttatistics/Sttatistics';
import FriendList from './FrriendList/FrriendList';
import TransactionHistory from './Trransactions/Trransactions';

export const App = () => {
  return (
    <>  
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </>
  );
};
