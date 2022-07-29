import "./post.css"
import { MoreVert } from "@mui/icons-material";

export default function Post() {


  return (
    // <div className="post">
    //   <div className="postWrapper">
    //     <div className="postTop">

    //       <div className="postTopLeft">

    //       <img className="postProfileImg" src="/assets/assets/profilepics/john.png" alt=""/>
             
    //         <span className="postUsername"> Marc Fischer</span>
    //         <span className="postDate">5 mins ago</span>
    //       </div>
          
    //       <div className="postTopRight">
    //         <MoreVert />
    //       </div>
          
    //       <div className="postCenter">
    //       <span className="postText"> Hey my first post</span>
    //       <img className="postImg" src="/assets/assets/posts/squirrel.png" alt="" />
    //     </div>
      
    //     <div className="postBottom">
    //       <div className="postBottomLeft">
    
    //         <img className="likeIcon" src="assets/assets/posts/like.png"  alt="" />
    //         <img className="likeIcon" src="assets/assets/posts/heart.png"  alt="" />
    //         <span className="postLikeCounter"> 15 people like it</span>
    //       </div>
    //       <div className="postBottomRight">
    //         <span className="postCommentText">9 comments</span>
    //       </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    

    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/assets/profilepics/john.png" alt=""/>"
          
            <span className="postUsername">
              Marc Fischer
            </span>
            <span className="postDate">5 mins ago </span>
          </div>
          <div className="postTop">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">My First Post</span>
          <img className="postImg" src="/assets/assets/posts/squirrel.png" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/assets/posts/like.png" alt="" />
            <img className="likeIcon" src="assets/assets/posts/heart.png" alt="" />
            <span className="postLikeCounter">15 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>

  )
}



