import React from "react";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed" data-source="youtube">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
