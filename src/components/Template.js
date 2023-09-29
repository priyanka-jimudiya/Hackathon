import React from "react";
import { Link } from "react-router-dom";


function Template() {
    return (
        <>
         <div className="container">
  <div className="row" style={{ marginTop: '20px' }}>
    <div className="col-sm-4">
      <div className="card">
        <Link to="/" className="navbar-brand">
          <img src="./Image.png" width={350} height={300} alt="Certificate Gen" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">Certificate of Participation</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <Link to="/" className="navbar-brand">
          <img src="./design-id-page-1 (1).png" width={350} height={300} alt="Certificate Gen" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">Blood Donation Certificate</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <Link to="/" className="navbar-brand">
          <img src="./Image.png" width={350} height={300} alt="Certificate Gen" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">Certificate of Participation</h5>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Template