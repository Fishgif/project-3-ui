import "./leftbar.css";


import {
  Feed, ChatBubbleOutline, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event,
  School } from "@mui/icons-material";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <Feed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatBubbleOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>

          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>

          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>

          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>

        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr"  />

        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/assets/assets/profilepics/jane.png" alt="" />
            <span className="leftbarFriendName">Mark Elliot</span>

          </li>
        </ul>
      </div>
    </div>
  );
}
