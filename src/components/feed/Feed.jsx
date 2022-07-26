import {  useContext, useEffect, useState } from "react";
import "./feed.css"
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";



export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

useEffect(() => {
  const fetchPosts = async () =>{
    const res = username 
    ? await axios.get(process.env.API_HOST + "/posts/profile/" + username)
     : await axios.get(process.env.API_HOST + "posts/timeline/" + user._id);
    //  Arrange Posts in order
     setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };
  fetchPosts();
}, [username, user._id]);





  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* Hide Share for non user */}
      {(!username || username === user.username) &&<Share/>}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
        
        
         
      </div>
    </div>
  );
}