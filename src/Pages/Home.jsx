/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddVideo from "../Components/AddVideo";
import { Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import ViewVideo from "../Components/ViewVideo";
import AddCategory from "../Components/AddCategory";
function home() {

  const [addVideoResp,setaddVideoResp]=useState({})
  console.log(addVideoResp)
  return (
    <div>
      <div className="row">
        <div className="col-6 d-flex p-3">
          <h1>Upload Videos</h1>
          <AddVideo setaddVideoResp={setaddVideoResp}/>
        </div>
        <div className="col-6">
          <Link
            to={"/watchhistory"}
            style={{ float: "right", textDecoration: "none" }}
            className="p-2 text-secondary"
          >
            Watch History <FaHistory className="fs-4" />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <h1 className="text-center">All Videos</h1>
          <ViewVideo addVideoResp={addVideoResp} />
        </div>
        <div className="col-3">
          <h1 className="text-center">Add Category</h1>
          <AddCategory />
        </div>
      </div>
    </div>
  );
}

export default home;
