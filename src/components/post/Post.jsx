import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";



  export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }

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
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""/>"
          
            <span className="postUsername">
        
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            
            <span className="postDate">{post.date} </span>
          </div>
          <div className="postTop">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo}  alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/assets/posts/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/assets/posts/heart.png"onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} like this post</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>

  )
}



