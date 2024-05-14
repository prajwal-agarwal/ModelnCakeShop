import { Button, Input } from "antd";
import axios from "axios";

function Login() {
  // function userLogin(){
  //   axios({
  //     url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
  //     method:"post",
  //     data:user
  //   }).then((response)=>{
  //     console.log("Response from api" + response)
  //   },(error)=>{
  //     console.log("Error from api" + error)
  //   })
  // }

    return (
        <div>
            <label>Username</label><Input style={{ marginTop: 15 }} placeholder="Name" ></Input>
            <label>Password</label><Input style={{ marginTop: 15 }} placeholder="Password" ></Input>
            <Button style={{ marginTop: 10 }} type="primary">Login</Button>
        </div>
    );
}
export default Login;