import React from "react";
import "./CertificatesStyles.css";

import Certificate from "../../assets/certificate.jpg";

function Certificates() {
  return (
    <div name="certificates" className="certificates">
      <div className="container">
        <h1>Download your certificate here</h1>

        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Certificate} alt="/" />
        </div>
        <button>Download Police Certificate </button>
      </div>
    </div>
  );
}

export default Certificates;
