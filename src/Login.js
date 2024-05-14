import { Alert, Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1() {
  var email, password
  var user ={}
  function updateEmail(e) {
    user.email = e.target.value
  }
  function updatePassword(e) {
    user.password = e.target.value
  }

  var navigate =useNavigate(null)
  function signIn(e) {
   
      axios({
        url: "http://apibyauw.eu-4.evennode.com/api" + "/login",
        method: "post",
        data: user
      }).then((response) => {
      
        console.log(response);
        console.log(response.headers.getAuthorization);
        localStorage.token = response.data.token
        navigate("/cake")
      },
       (error) => {
       
      }
    )
    
  }
  return (
    <div>
      {/* {error && <Alert type="error" message={error} />} */}
      <label>Email</label><Input type='email' style={{ marginTop: 15 }} placeholder="Please enter your email" onChange={updateEmail}></Input>
      <label>Password</label><Input type='password' style={{ marginTop: 15 }} placeholder="Please enter your password" onChange={updatePassword}></Input>
      <Button style={{ marginTop: 10 }} type="primary" onClick={signIn}>Login</Button>
    </div>
  );
}
export default Login1;