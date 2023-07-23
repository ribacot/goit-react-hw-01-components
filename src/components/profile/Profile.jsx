import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({ username, avatar, tag, location, stats }) {
  return (
    <div className={css.container}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.img_profile} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.stats_list}>
        <li className={css.stats_list_items}>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stats_list_items}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.stats_list_items}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}


Profile.prototype = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};