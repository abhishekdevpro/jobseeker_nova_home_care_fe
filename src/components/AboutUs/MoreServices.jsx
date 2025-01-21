import React, { useState, useEffect } from "react";
import "./aboutus.css";

function MoreServices({ moreServicesData }) {
  const imgData = JSON.parse(moreServicesData.images);

  return (
    <>
      <div className="mt-5">
        {/* Conditionally render "Edit" button based on authToken */}

        <div>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div
              className="mx-3 mx-lg-5 mb-4 mb-lg-0"
              style={{ maxWidth: "420px" }}
            >
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(14px, 5vw, 20px)",
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
                {moreServicesData.title}
              </h1>
              <p
                style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                dangerouslySetInnerHTML={{
                  __html: moreServicesData.paragraph1,
                }}
              ></p>
              <p
                style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                dangerouslySetInnerHTML={{
                  __html: moreServicesData.paragraph2,
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: moreServicesData.paragraph3,
                }}
                style={{
                  fontSize: "clamp(14px, 3vw, 15px)",
                  fontWeight: "500",
                }}
              ></p>
            </div>
            <div className="mx-3 mx-lg-5">
              <img
                src={`https://api.novajobs.us${imgData[0]}`}
                alt="Uploaded Image"
                style={{ height: "350px", width: "350px" }}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
            <h1
              className="m-b5"
              style={{
                fontSize: "clamp(14px, 5vw, 20px)",
                fontWeight: "semibold",
              }}
            >
              {moreServicesData.paragraph4}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreServices;
