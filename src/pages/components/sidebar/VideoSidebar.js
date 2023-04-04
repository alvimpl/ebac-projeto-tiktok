import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSideBar">
      <div className="videoSideBar__options" onClick={handdleLike}>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__options">
        <ChatIcon />
        <p>{messages} </p>
      </div>
      <div className="videoSideBar__options">
        <ShareIcon />
        <p>{shares} </p>
      </div>
    </div>
  );
}

export default VideoSidebar;
