import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Home() {
  return (
    <div className="mt-5 mx-5 w-80">
      <h1 className="d-flex align-items-center justify-content-center">Text Message Reminder</h1>
      <p className="d-flex align-items-center justify-content-center">Follow the instructions below to create a text message reminder.</p>
      <Create />
    </div>
  );
}

function Create() {
  const [form, setForm] = useState({
    phonenum: null,
    message: "",
    datetime: null,
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const offset = -1*(new Date().getTimezoneOffset()/60);

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form, offset};

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ phonenum: null, message: "", datetime: null });
    navigate("/finished");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="phonenum">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phonenum"
            value={form.phonenum}
            onChange={(e) => updateForm({ phonenum: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="datetime">Date and Time for Reminder</label>
          <input
            type="datetime-local"
            className="form-control"
            id="datetime"
            value={form.datetime}
            onChange={(e) => updateForm({ datetime: e.target.value })}
          />
        </div>
        <div className="my-3"></div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Text Message Reminder"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}