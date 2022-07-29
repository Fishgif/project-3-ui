import "./feed.css"
import Post from "../post/Post";
import Share from "../share/Share";
// import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
         
      </div>
    </div>
  );
}