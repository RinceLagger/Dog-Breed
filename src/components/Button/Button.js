import React from "react";
/* external modules */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle as backIcon } from "@fortawesome/free-solid-svg-icons";
/* styles */
import "./Button.css";

function Button({ path }) {
  return (
    <Link to={`${path}`}>
      <button className="back-button">
        <FontAwesomeIcon icon={backIcon} size="4x" />
      </button>
    </Link>
  );
}

export default Button;
