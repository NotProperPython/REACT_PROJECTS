import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideo(null);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo == null ? (
              <div className="ui active inline loader"></div>
            ) : (
              <VideoDetail video={selectedVideo} />
            )}
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
