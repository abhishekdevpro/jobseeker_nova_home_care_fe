import React from "react";
import ReactPlayer from "react-player";
import "./aboutus.css";
function Introductions({ introductionData }) {
  const urlData = JSON.parse(introductionData.urls);
  const imgData = JSON.parse(introductionData.images);

  return (
    <div className="mt-5">
      <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
        <div>
          <h1 className="mb-4">{introductionData.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: introductionData.paragraph1 }}
          ></div>
          <p className="mt-5 text-center">
            <strong>Check our quick Product Video below:</strong>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              url={urlData[0]}
              width="700px"
              height="500px"
              controls={true}
              style={{
                margin: "50px",
                border: "2px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: introductionData.paragraph2 }}
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
  );
}

export default Introductions;
