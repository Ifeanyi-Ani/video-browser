import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((item, index) => {
    return <VideoItem video={item} key={index} onVideoSelect={onVideoSelect} />
  })

  return (
    <div className='ui relaxed divided list'>{renderedList}</div>
  )
}

export default VideoList