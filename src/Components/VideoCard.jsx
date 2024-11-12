/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { deleteVideoAPI,addHistoryDetailsAPI } from "../../services/AllAPI";
import Swal from "sweetalert2";
function VideoCard({ videoDetails }) {
  console.log(videoDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const { caption, link, imgUrl } = videoDetails;
    let today = new Date();
    let timestamp = Intl.DateTimeFormat('en-us', {
      year: '2-digit', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(today);
    
    const body = {
      caption,
      link, // Make sure `link` is correctly defined here
      timestamp
    };
    
    console.log("Timestamp:", timestamp);
    console.log("Video Details:", videoDetails);
    try {
      const result = await addHistoryDetailsAPI(body);
      console.log("API Response:", result);
    } catch (error) {
      console.error("Error adding history details:", error);
    }  };
  const handleDelete = async (id) => {
    try {
      const result = await deleteVideoAPI(id);
      Swal.fire({
        title: "Success",
        text: "video deleted Successfully",
        icon: "success",
        confirmButtonText: "Close",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Try again",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  const videoDragStart=(e,videoId)=>{
   console.log("video drag started");
   console.log(e,videoId)
   e.dataTransfer.setData("videoId", videoId); 
    }

  return (
    <div>
      <div className="row">
        {/* allVideos.map((video) => ( */}
          <div className="col">
            <Card draggable={true} onDragStart={e=>videoDragStart(e,videoDetails.id)} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={videoDetails.imgUrl} onClick={handleShow} />
              <Card.Body>
                <Card.Text className="d-flex justify-content-between">
                  {videoDetails.caption}
                  <MdDelete
                    className="text-danger fs-3"
                    onClick={() => handleDelete(videoDetails.id)}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{videoDetails.caption}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  width="100%"
                  height="315"
                  src={videoDetails.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        {/* )) */}
      </div>
    </div>
  );
}

export default VideoCard;
