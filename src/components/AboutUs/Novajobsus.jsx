import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./aboutus.css";

function Novajobsus({ novaJobsusData }) {
  const imgData = JSON.parse(novaJobsusData.images);

  return (
    <div className="mt-5">
      <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
        <div>
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(24px, 5vw, 30px)",
              fontWeight: "bold",
            }}
          >
            {novaJobsusData.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: novaJobsusData.paragraph1 }}
            style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
          ></div>

          <div className="mx-3 mx-lg-5 d-flex justify-content-center position-relative">
            <Carousel
              style={{
                width: "800px",
                padding: "20px",
              }}
              prevIcon={
                <span
                  className="carousel-control-prev-icon position-absolute"
                  style={{ backgroundColor: "#000", right: "200px" }}
                  aria-hidden="true"
                />
              }
              nextIcon={
                <span
                  className="carousel-control-next-icon position-absolute"
                  style={{ backgroundColor: "#000", left: "200px" }}
                  aria-hidden="true"
                />
              }
            >
              {imgData.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={`https://api.novajobs.us${image}`}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novajobsus;
