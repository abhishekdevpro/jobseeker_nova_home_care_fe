import React from "react";
import "./aboutus.css";
function ForJobseeker({ forJobseekerData }) {
  const imgData = JSON.parse(forJobseekerData.images);
  return (
    <>
      <div className="mt-5">
        <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
          <div>
            <h1
              style={{
                fontSize: "clamp(14px, 5vw, 20px)",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              {forJobseekerData.title}
            </h1>
            <div
              className="mt-2 mb-4"
              dangerouslySetInnerHTML={{ __html: forJobseekerData.paragraph1 }}
              style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
            ></div>
            <div
              className="mt-2 mb-4"
              dangerouslySetInnerHTML={{ __html: forJobseekerData.paragraph2 }}
              style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
            ></div>
            <div className="mx-3 mx-lg-5 d-flex justify-content-center">
              <img
                src={`https://api.novajobs.us${imgData[0]}`}
                alt="Uploaded Image"
                style={{ height: "400px", width: "800px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForJobseeker;
