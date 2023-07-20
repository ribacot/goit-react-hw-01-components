export default function FriendListItem({ data }) {
  return data.length
    ? data.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })
    : 'No Frends';
}
