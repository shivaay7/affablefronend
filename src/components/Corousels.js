import React from "react";

export default function () {
  return (
    <div>
      <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        style={{
          maxHeight: "80vh",
          overflow: "hidden",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className="corousel-caption position-absolute bottom-0 start-50 translate-middle w-50"
          style={{ zIndex: "999999999999" }}
        >
          <div>
            <form className="d-flex" style={{zIndex:"9999999999999999"}}>
              <input
                className="form-control  mt-3 mb-3 py-10 me-2 text-white bg-light p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success mt-3 mb-3 text-white btn-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div
          className="carousel-inner"
          style={{
            maxHeight: "80vh",
            overflow: "hidden",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div
            className="carousel-item active overflow-hidden"
            style={{
              maxHeight: "80vh",
              overflow: "hidden",
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "brightness(50%)",
            }}
          >
            <img
              src="https://source.unsplash.com/random/300×300/?burger"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div
            className="carousel-item overflow-hidden"
            style={{
              maxHeight: "80vh",
              overflow: "hidden",
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "brightness(50%)",
            }}
          >
            <img
              src="https://source.unsplash.com/random/200×200/?pizza"
              className="d-block w-100 "
              alt="..."
            ></img>
          </div>
          <div
            className="carousel-item overflow-hidden"
            style={{
              maxHeight: "80vh",
              overflow: "hidden",
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "brightness(50%)",
            }}
          >
            <img
              src="https://source.unsplash.com/random/300×300/?icecream"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
}
