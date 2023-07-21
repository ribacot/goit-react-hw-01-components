import './FriendListItem.module.css';
export default function FriendListItem({ data }) {
  return data.length
    ? data.map(({ avatar, name, isOnline, id }) => {
        let statusColor = null;
        isOnline ? (statusColor = 'green') : (statusColor = 'red');
        return (
          <li key={id} className="item">
            <span
              className="status"
              style={{ backgroundColor: statusColor }}
            ></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })
    : 'No Frends';
}
