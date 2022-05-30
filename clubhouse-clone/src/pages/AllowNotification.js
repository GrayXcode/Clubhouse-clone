import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

function AllowNotification() {
  return (
    <div className={style.phoneConfirmContainer}>
      <div className="text-center">
              <h1 className="mb-4">Last, important step!</h1>
              <h1 className="mb-3">Enable notification to know when people are talking</h1>
      </div>
    </div>
  );
}

export default AllowNotification;
