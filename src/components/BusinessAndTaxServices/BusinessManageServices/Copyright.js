import React from "react";

const Copyright = () => {
  return (
    <div className="m-4 p-4">
      <p className="copyright-heading">
        All content, design, and intellectual property on this website are
        protected under international copyright laws. Any unauthorized use,
        reproduction, or distribution is strictly prohibited.
      </p>
      <p className="copyright-logo-wrapper copyright-heading mt-5">
        <span className="logo-text">JETCO bank</span> . All rights reserved.
      </p>
      <p className="copyright-footer-text mt-5">
        For inquiries regarding the use of copyrighted material, please contact
        our legal department at <br />{" "}
        <span className="logo-text">Jetcobank@gmail.com</span>
      </p>
    </div>
  );
};

export default Copyright;
