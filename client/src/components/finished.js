import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Finished() {
  const navigate = useNavigate();
  return (
    <div className="mt-5 mx-5">
      <h1 className="mx-5">Your Text Reminder Has Been Saved!</h1>
      <div className="my-3"></div>
      <button className="btn btn-primary mx-5" onClick={() => navigate("/")}>
        Click Here To Make Another Reminder
      </button>
    </div>
  );
}
