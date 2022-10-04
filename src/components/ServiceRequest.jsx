import React, { useState } from "react";

function RequestList({ requests, setRequests }) {
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
          {requests.map((value) => {
            return (
              <Request
                value={value}
                requests={requests}
                setRequests={setRequests}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Request({ value, requests, setRequests }) {
  const removeRequest = () => {
    setRequests(requests.filter((x) => x.name !== value.name));
  };

  const completeRequest = () => {
    const updatedState = requests.map((x) => {
      // the object x is equal to object value
      if (x === value) {
        return { ...x, isCompleted: true };
      }

      return x;
    });

    setRequests(updatedState);
  };

  return (
    <tr
      className="request"
      style={{ textDecoration: value.isCompleted ? "line-through" : "" }}
    >
      <td>
        <button
          className="btn-close"
          aria-label="cancel"
          type="button"
          onClick={() => {
            removeRequest();
          }}
        ></button>
      </td>
      <td>{value.name}</td>
      <td>{value.sdescription}</td>
      <td>{value.emailId}</td>
      <td>{value.ldescription}</td>
      <td>
        <button
          className="btn-primary btn"
          aria-label="complete"
          type="button"
          onClick={() => {
            completeRequest();
          }}
        >
          Complete
        </button>
      </td>
    </tr>
  );
}

function AddRequestForm({ requests, setRequests }) {
  const [formValues, setFormValues] = useState({
    name: "",
    sdescription: "",
    emailId: "",
    ldescription: "",
  });

  const clearForm = () => {
    setFormValues({
      name: "",
      sdescription: "",
      emailId: "",
      ldescription: "",
    });
  };

  const makeRequest = () => {
    setRequests([...requests, formValues]);
    clearForm();
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    setFormValues({ ...formValues, [name]: target.value });
  };

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
            value={formValues.name}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label>Short Description</label>
          <input
            id="sdescription"
            name="sdescription"
            className="form-control"
            placeholder="Enter Short Description"
            value={formValues.sdescription}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label>Email Id</label>
          <input
            id="emailId"
            name="emailId"
            className="form-control"
            placeholder="Enter Email ID"
            value={formValues.emailId}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textAreaForRequest">Service Request</label>
          <textarea
            className="form-control"
            name="ldescription"
            id="ldescription"
            rows="5"
            value={formValues.ldescription}
            onChange={(event) => {
              handleInputChange(event);
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          id="create-req-btn"
          onClick={() => {
            makeRequest();
          }}
        >
          Create Request
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          id="reset-req-btn"
          onClick={() => {
            clearForm();
          }}
        >
          Reset Form
        </button>
      </form>
    </div>
  );
}

export { Request, AddRequestForm, RequestList };