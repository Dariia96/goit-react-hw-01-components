import PropTypes from "prop-types";
import clsx from "clsx";
import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return <li  className={css.item}>
        <span className={clsx(css.status, isOnline && css.online,
          !isOnline && css.ofline)}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>

};

export default FriendListItem;

FriendListItem.propTypes= {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    };