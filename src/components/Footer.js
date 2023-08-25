import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-1 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="text-muted mt-4 mx-5">© 2023 affable, Inc</span>
        </div>
      </footer>
    </div>
  );
}
