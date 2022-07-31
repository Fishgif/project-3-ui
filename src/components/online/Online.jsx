import "./online.css" 

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rightbarProfileImageContainer">
    <img className="rightbarProfileImage" 
    src={user.profilePicture} alt="" />
    
    <span className="rightbarOnlineStatus"></span>

     <span className="rightbarUserName"> {user.username}</span>

    </div>
  </li>
  )
}
