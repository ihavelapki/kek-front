import React from 'react';
import ReactPlayer from 'react-player';
import classes from './VideoPlayer.module.css';

function VideoPlayer() {
    return (
      <div className={classes.video_frame}> 
        <ReactPlayer
          url="/videos/video_2023-08-08_16-43-25.mp4"
          controls={true} // Показывать элементы управления
          playing={true} // Автоматическое воспроизведение
          width="100%" // Ширина плеера
          height="auto" // Высота плеера
        />
      </div>
    );
  }

export default VideoPlayer;