import "./online.css" 

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightBarFriend">
    <div className="rightbarProfileImageContainer">
    <img className="rightbarProfileImage" 
    src={PF+user.profilePicture} alt="" />
    
    <span className="rightbarOnlineStatus"></span>

     <span className="rightbarUserName"> {user.username}</span>

    </div>
  </li>
  )
}
