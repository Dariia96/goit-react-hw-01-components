import PropTypes from "prop-types";
import css from './FriendList.module.css';
import FriendListItem from "./FriendListItem";

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
  friends: PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number.isRequired}).isRequired).isRequired,
  
};
export default FriendList;