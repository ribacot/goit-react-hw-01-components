import css from './FriendListItem.module.css';

export default function FriendListItem({ data }) {
  return data.length
    ? data.map(({ avatar, name, isOnline, id }) => {
       
        return (
          <li key={id} className={css.item}>
            <span className={isOnline ? css.green : css.red}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })
    : 'No Frends';
}
