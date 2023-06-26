import PropTypes from "prop-types";
import clsx from "clsx";
import css from './friendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={css.FriendList}>
    {friends.map((friend) => (
        <li key={ friend.id} className={css.item}>
        <span className={clsx(css.status, friend.isOnline && css.online,
          !friend.isOnline && css.ofline)}>{friend.isOnline}</span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
</li>
    ))}
  </ul>

};
FriendList.propTypes= {
  friends: PropTypes.array.isRequired,
  
};
export default FriendList;