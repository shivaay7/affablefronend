import React,{useState} from 'react'

import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
const [credentials, setCredentials] = useState({email:"",password:""})
let navigate = useNavigate();
  //so that the things can work properly in form and data should refresh timely
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("userEmail"))
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  };
  

const onChange =(event)=>{
  setCredentials({...credentials,[event.target.name]:event.target.value})
}
  return (
    <>
      <div className='container mt-5' >
          <form onSubmit = {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={onChange}
              value={credentials.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={credentials.password}
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <button type="submit m-3" className="btn btn-success">
            Submit
          </button>
          <Link to="/creatuser" className="m-3 btn btn-danger">
            I'am a new User!
          </Link>
          </form>
      </div>
    </>
  )
}
