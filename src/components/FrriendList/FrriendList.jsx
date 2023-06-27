import PropTypes from "prop-types";
import css from './FrriendList.module.css';
import FriendListItem from "./FrriendListItem";

const FriendList = ({ friends }) => {
    return <ul className={css.FriendList}>
      {friends.map((friend) => (
        <FriendListItem 
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          key={friend.id}
         />
    ))}
  </ul>

};
FriendList.propTypes= {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number,
  
};
export default FriendList;