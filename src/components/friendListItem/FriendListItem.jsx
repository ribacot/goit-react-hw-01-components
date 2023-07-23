import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ data }) {
  return data.length
    ? data.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={`${css.status} ${isOnline ? css.green : css.red}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="60" />
            <p className="name">{name}</p>
          </li>
        );
      })
    : 'No Friends';
}

FriendListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
