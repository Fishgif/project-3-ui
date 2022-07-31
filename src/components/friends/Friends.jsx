import "./friends.css"

export default function Friends({user}) {
  return (
    <ul className="leftbarFriendList">
    <li className="leftbarFriend">
      <img className="leftbarFriendImg" src={user.profilePicture} alt="" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  </ul>
  )
}
