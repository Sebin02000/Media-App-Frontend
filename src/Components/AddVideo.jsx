/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiVideoUploadFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addVideoAPI } from "../../services/AllAPI";
import Swal from 'sweetalert2'
function AddVideo({setaddVideoResp}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [VideoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    link: "",
  });

  const getEmbedLink = (e) => {
    const { value } = e.target;
    let ycode = value.slice(-31);
    let ylink = `https://www.youtube.com/embed/${ycode}`;

    setVideoDetails({ ...VideoDetails, link: ylink });
  };

  const handleUpload = async () => {
    const { caption, imgUrl, link } = VideoDetails;

    if (!caption || !imgUrl || !link) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill the form',
        icon: 'error',
        confirmButtonText: 'Close'
      })    } else {
      const result = await addVideoAPI(VideoDetails);
      console.log(result);
      if(result.status>=200 && result.status<300){
        Swal.fire({
          title: 'Success',
          text: 'Video added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        handleClose();
        setaddVideoResp(result.data)
        setVideoDetails({
          caption:"",
          imgUrl:"",
          link:""
        })
      }
     else{
      alert(result.status)
     }
    }
  };
  return (
    <div>
      <RiVideoUploadFill className="fs-3 mt-2 mx-2" onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              type="text"
              onChange={(e) =>
                setVideoDetails({ ...VideoDetails, caption: e.target.value })
              }
              placeholder="Enter video caption"
              className="form-control mb-3"
            ></input>
            <input
              type="text"
              onChange={(e) =>
                setVideoDetails({ ...VideoDetails, imgUrl: e.target.value })
              }
              placeholder="Enter video Image"
              className="form-control mb-3"
            ></input>
            <input
              type="text"
              onChange={getEmbedLink}
              placeholder="Enter video URL"
              className="form-control mb-3"
            ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddVideo;
