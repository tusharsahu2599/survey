import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Forms() {

  const [emailId, setEmailId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailId);

    axios
      .post("http://3.111.116.229:5005/v1/loginStaff", {
        emailId: "tusharsahu@gmail.com",
      })
      .then((res) => {
        if(res.data.message === "success"){
          console.log("success");
          console.log(res.data.email)
          localStorage.setItem("username", JSON.stringify(res.data.email));
          localStorage.setItem("url", JSON.stringify(res.data.url));
          window.location.href = "/survey";
        }
      }
      )
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setEmailId(e.target.value);
  }

  let user = JSON.parse(localStorage.getItem("username"));

  return (
    <div>
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li class="active">
                <Link to="/survey">Home</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  {user ? user : "USER"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input class="form-control" id="exampleInputEmail1" name="emailId" value={emailId}  onChange={handleChange} type="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
