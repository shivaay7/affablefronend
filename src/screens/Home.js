import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import Corousels from "../components/Corousels";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Cart from "../screens/Cart"

export default function Home() {
  //retrive two data members from backend also ki hum changes frontend se reflect kr paaye
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  //create end point to fetch the data
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  //to call the useEffect for once
  // useEffect(()=>{
  //   loadData()
  // },[yahan dependency dete hai,agar nahin di hui hai to start hote hi saare functions call ho jayenge])

  //react me kaam karte vaqt sabse pehle intial value dena padta hai ya ternary operator condition rakhni padti hai coz start hote pe sabse pehle react return function execute krta hai uske baad upar ke logic,to uska dhyaan rakhna hai hamesha!
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
          style={{
            maxHeight: "80vh",
            overflow: "hidden",
            position: "relative",
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
            <h1 className="display-5 text-center mt-lg-5">Food that tells a story</h1>
            </div>
            <div>
              <div className="d-flex justify-content-center" style={{ zIndex: "9999999999999999" }}>
                <input
                  className="form-control  mt-3 mb-3 py-10 me-2 text-white bg-dark p-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value = {search}
                  onChange = {(e)=>{setSearch(e.target.value)}}
                ></input>
                {/* <button
                  className="btn btn-outline-success mt-3 mb-3 text-white btn-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
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
      <div className="container">
        {/* {foodCat !== []
          ? foodCat.map((data) => {
              console.log(data);
              return (
                <div>
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== []?foodItem.filter((item)=> item.CategoryName === data.CategoryName).map(filterItems=>{
                    return(
                      <div key = {filterItems._id}>
                            <Card></Card>
                      </div>
                    )
                  }) :<div>No Such Data Found !</div>}
                </div>
              );
            })
          : ""} */}

        {foodCat.length > 0 ? (
          foodCat.map((category) => {
            {/* console.log(category); */}
            const filteredItems = foodItem.filter(
              (item) => item.CategoryName === category.CategoryName &&
              item.name.toLowerCase().includes(search.toLocaleLowerCase()),
            ) ;
            return (
              <div key={category._id} className="row mb-3">
                <div className="fs-3 m-3">{category.CategoryName}</div>
                <hr />
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div key={item._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem = {item}
                        options={item.options[0]}
                      ></Card>
                    </div>
                  ))
                ) : (
                  <div>No items found in this category</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No categories found</div>
        )}


        {/* <Card /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
