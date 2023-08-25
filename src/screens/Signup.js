import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""})

    //so that the things can work properly in form and data should refresh timely
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}))
        try {
          const response = await fetch("/api/creatuser",{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            alert("Successfull")
          }
          else{
            console.log("Enter valid Credentials")
          }
        } catch (error) {
          console.error(error);
          // Handle the error as appropriate
        }
      };

const onChange =(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" 
              onChange={onChange}>
              Name
            </label>
            <input type="text" className="form-control" name="name" onChange={onChange} value={credentials.name}></input>
          </div>

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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="location"
              onChange={onChange}
              value={credentials.location}
              className="form-control"
            ></input>
          </div>
          <button type="submit m-3" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
