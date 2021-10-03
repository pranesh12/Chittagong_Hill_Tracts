import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information">
      <div className="container">
        <div className="information_container">
          <div className="row">
            <div className="col-md-8">
              <div>
                <h1>Let's Build something amazing Together</h1>
              </div>
              <div>
                <h2>Start by Saying hi</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div>
                  <small>Information</small>
                </div>
                <div>
                  <address>West Narankaya,Khagrachari</address>
                </div>
                <div>
                  <h3>pranesh6dev@gmail.com</h3>
                </div>
              </div>
              <div>
                <p>Servies</p>
                <p>Notes</p>
                <p>Contact</p>
                <p>Work</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
