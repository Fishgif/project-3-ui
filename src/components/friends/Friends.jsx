import "./friends.css"

export default function Friends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ul className="leftbarFriendList">
    <li className="leftbarFriend">
      <img className="leftbarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  </ul>
  )
}
