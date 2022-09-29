import React from "react";
import data from "../initial-data.json";
function RequestList() {

  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Name</th>
            <th scope="col">Short Description</th>
            <th scope="col">Email Id</th>
            <th scope="col">Long Description</th>
            <th scope="col">Complete a Request</th>
          </tr>
        </thead>
        <tbody id="main-table-body">    
        {data.map((value, key) => {
            return (
              <tr key={key}>
                <td scope="col"> </td>
                <td scope="col">{value.name}</td>
                <td scope="col">{value.sdescription}</td>
                <td scope="col">{value.emailId}</td>
                <td scope="col">{value.ldescription} </td>
                <td scope="col">{<button 
                                  type="button"
                                  className="btn btn-success" 
                                  id="complete-req-btn">    
                                  Complete Request
                                </button>}
        
        </td>
                <td scope="col"></td>
              </tr>
            );
          })}
         </tbody>
      </table>
    </div>
  );
}

function Request({ request }) {
  return (
    <tr
      className="request"
      style={{ textDecoration: request.isCompleted ? "line-through" : "" }}
    >
      <td>
        <button
          className="btn-close"
          aria-label="cancel"
          type="button"
        ></button>
      </td>
      <td>{request.name}</td>
      <td>{request.sdescription}</td>
      <td>{request.emailId}</td>
      <td>{request.ldescription}</td>
      <td>
        <button className="btn-primary btn" aria-label="complete" type="button">
          Complete
        </button>
      </td>
    </tr>
  );
}


function AddRequestForm() {
 
  return (
    <div className="form-contain">
      <div>
        <h1 align="center" style={{ marginBottom: "5%" }}>
          Create a Service Request
        </h1>
      </div>
      <form id="requestForm" className="login-form">
        <div className="form-outline mb-4">
          <label>Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-outline mb-4">
          <label>Short Description</label>
          <input
            id="sdescription"
            name="sdescription"
            className="form-control"
            placeholder="Enter Short Description"
          />
        </div>
        <div className="form-outline mb-4">
          <label>Email Id</label>
          <input
            id="emailId"
            name="emailId"
            className="form-control"
            placeholder="Enter Email ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="textAreaForRequest">Service Request</label>
          <textarea
            className="form-control"
            name="ldescription"
            id="ldescription"
            rows="5"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          id="create-req-btn"
        >
          Create Request
          
        </button>
        <button 
          type="button"
          className="btn btn-danger m-1" 
          id="reset-req-btn">    
          Reset Form
        </button>
      </form>
    </div>
  );
}

export { Request, AddRequestForm, RequestList };
