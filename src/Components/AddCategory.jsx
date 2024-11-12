/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  getCategoryAPI,
  updateCategoryAPI,
} from "../../services/AllAPI";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";
function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState([]);
  const handleAddCategory = async () => {
    if (categoryName) {
      try {
        const body = {
          categoryName: categoryName,
          allVideos: [],
        };
        const result = await addCategoryAPI(body);
        if (result.status >= 200 && result.status < 300) {
          handlegetCategory();
          Swal.fire({
            title: "Success",
            text: "Category added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          setCategoryName("");
          handleClose();
        } else {
          Swal.fire({
            title: "Error",
            text: "Try Again",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill the form",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };
  const handlegetCategory = async () => {
    try {
      const result = await getCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setCategoryDetails(result.data);
        console.log(result.data);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlegetCategory();
  }, []);
  const handleCategoryDelete = async (id) => {
    const result = await deleteCategoryAPI(id);
    try {
      if (result.status >= 200 && result.status < 300) {
        Swal.fire({
          title: "Success",
          text: "Category deleted Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        handlegetCategory();
      } else {
        Swal.fire({
          title: "Error",
          text: "delete unsuccessful",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const VideoOver = (e) => {
    console.log(e, "video over");
    e.preventDefault();
  };
  const VideoDrop = async (e, CategoryId) => {
    e.preventDefault();
    console.log("Video dropped at " + CategoryId);
  
    const videoId = e.dataTransfer.getData("videoId");
    console.log(videoId);
  
    try {
      // Fetch video data
      const { data } = await getAVideoAPI(videoId);
      console.log("Fetched video data:", data);
  
      // Update the category's allVideos array immutably
      setCategoryDetails((prevCategories) =>
        prevCategories.map((category) =>
          category.id === CategoryId
            ? { ...category, allVideos: [...category.allVideos, data] }
            : category
        )
      );
  
      // Update backend with the modified category
      const updatedCategory = categoryDetails.find((cat) => cat.id === CategoryId);
      const result = await updateCategoryAPI(CategoryId, { ...updatedCategory, allVideos: [...updatedCategory.allVideos, data] });
      console.log("Updated category on backend:", result);
    } catch (error) {
      console.error("Error during video drop:", error);
    }
    handlegetCategory();
  };
  
  return (
    <div>
      <div className="text-center">
        <button className="btn btn-primary m-2" onClick={handleShow}>
          Add Category
        </button>
      </div>
      <div className="row">
        {categoryDetails.length > 0
          ? categoryDetails.map((item) => (
              <div
                onDragOver={(e) => VideoOver(e)}
                onDrop={(e) => VideoDrop(e, item.id)}
                className="col mx-5 d-flex border justify-content-between"
                key={item.id}
              >
                <h3 className="me-2">{item.categoryName}</h3>
                <RiDeleteBin6Fill
                  className="fs-3 text-danger"
                  onClick={() => handleCategoryDelete(item.id)}
                ></RiDeleteBin6Fill>
                <div className="row">
                  {
                    item.allVideos.map((items)=>(
                      <p>{items.caption}</p>
                    ))
                  }
                </div>
              </div>
            ))
          : "No Categories"}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              onChange={(e) => setCategoryName(e.target.value)}
              type="text"
              placeholder="Add Category"
              className="form-control mb-3"
            ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategory;
