
import "./profile.css"

import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src="assets/assets/posts/mountain.png"
                alt=""
              />
              <img
                className="profileUserImg"src="assets/assets/profilepics/profile6.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mark Elliot</h4>
                <span className="profileInfoDesc">Hi guys!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}










