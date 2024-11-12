/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { getWatchHistoryAPI,deleteWatchHistoryAPI } from "../../services/AllAPI";
function WatchHistory() {
  const [WatchDetails, setWatchDetails] = useState([]);

  const getWatchHistory = async () => {
    try {
      const result = await getWatchHistoryAPI();
      setWatchDetails(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(WatchDetails);

  useEffect(() => {
    getWatchHistory();
  }, []);

  const handleDelete=async(id)=>{
    try{
      const result=await deleteWatchHistoryAPI(id);
      getWatchHistory();
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container">
        <h3 className="mt-3">Watch History Details</h3>
        <Link to={"/home"} style={{ float: "right", textDecoration: "none" }}>
          Back to Home
        </Link>
        <Table striped="columns" className="m-5">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {WatchDetails.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
                <td>{item.timestamp}</td>
                <td>
                  <i onClick={()=>handleDelete(item.id)} className="fa-solid fa-trash text-danger"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default WatchHistory;
