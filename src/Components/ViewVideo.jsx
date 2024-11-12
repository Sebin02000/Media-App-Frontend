/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import VideoCard from "../Components/VideoCard";
import { getVideoAPI } from "../../services/AllAPI";

function ViewVideo({ addVideoResp }) {
  const [allVideos, setAllVideos] = useState([]);

  const handleGetVideo = async () => {
    try {
      const result = await getVideoAPI();
      setAllVideos(result.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    handleGetVideo();
  }, [addVideoResp]);

  return (
    <div>
      <div className="row p-5">
          {allVideos.map((item) => (
            <div className="col" key={item.id}>
              <VideoCard videoDetails={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ViewVideo;
