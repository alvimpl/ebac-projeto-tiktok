import React, { useRef, useState } from "react";
import "./Video.css";
import "./components/footer/VideoFooter";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ url, likes, messages, shares, name, description, music }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;

/*
    Usando o código abaixo criamos a condição de play e pause, mas pode ser usado somente if e else como está em function handdleStart

    function handdleStart(){
        if(play == false){
            videoRef.current.play()            
            setPlay(true)
        }
        if(play == true){
            videoRef.current.pause()
            setPlay(false)
        }

*/
