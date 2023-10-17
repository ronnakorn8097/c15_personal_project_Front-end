import React from "react";
import { Link } from "react-router-dom";

function ButtonAction({ userId }) {
  return (
    <div className="flex gap-2">
        
      <Link to={`/user/${userId}`}>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-gray-400"
        >
          Edit
        </button>
      </Link>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white bg-red-700"
      >
        Del
      </button>
    </div>
  );
}

export default ButtonAction;
