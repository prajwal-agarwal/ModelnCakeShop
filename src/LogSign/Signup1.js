import { Button, Input } from "antd"

function Signup1(){
    return (
        <>
        <label>Name</label><Input style={{ marginTop: 15 }} placeholder="Name" ></Input>
        <label>Email</label><Input style={{ marginTop: 15 }} placeholder="Email" ></Input>
        <label>Password</label><Input style={{ marginTop: 15 }} placeholder="Password"></Input>
        <Button style={{ marginTop: 10 }} type="primary">Create Account</Button>
        </>
    )
}
export default Signup1