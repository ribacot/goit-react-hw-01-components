import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
// import data from '../user.json'

// const profile = (
//   <div className="profile">
//     <div className="description">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//         alt="User avatar"
//         className="avatar"
//       />
//       <p className="name">Petra Marica</p>
//       <p className="tag">@pmarica</p>
//       <p className="location">Salvador, Brasil</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">1000</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">2000</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">3000</span>
//       </li>
//     </ul>
//   </div>
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
