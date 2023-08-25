import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./ContextReducer";
import Cart from "../screens/Cart"
import Modal from "../Modal";

export default function Navbar() {
  const [cartView,setCartView] = useState(false)
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const loadCart = () =>{
    setCartView(true)
  }

  return (
    <div className="fs-0.6">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success"
        style={{ height: "10vh",zIndex :"999999999" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic mx-3" to="/">
            affable
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-0 ">
              <li className="fs-5">
                <Link className="nav-link active fs-4 text-white m-auto" to="/">
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="fs-5">
                  <Link className="nav-link active fs-4 text-white" to="/myOrderData">
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div
                className="d-flex justify-content-center align-content-center  mx-3"
                style={{ gap: "1vw" }}
              >
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/creatuser"
                  style={{ fontWeight: "600" }}
                >
                  SignUp
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/login"
                  style={{ fontWeight: "600" }}
                >
                  Login
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-1"
                  onClick={loadCart}
                  style={{ fontWeight: "600" }}
                >
                  My Cart &nbsp;
                  {
                    <Badge pill bg="danger">
                      {data.length}
                    </Badge>
                  }
                </div>
                {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                <div
                  className="btn bg-white text-danger mx-1"
                  style={{ fontWeight: "600" }}
                  onClick={handleLogout}
                >
                  Logout!
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
