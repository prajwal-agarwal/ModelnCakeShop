import { Button, Col, Input, Layout } from "antd"
import { useState } from "react"
import Datatable from "./Datatable"
import axios from "axios";

function Signup() {
    var email, name, password, experience
    function deleteUser1(index) {
        userList.splice(index, 1);
        userList = [...userList]
        setUserList(userList)
    }
    function emailChanged(event) {

        email = event.target.value
    }
    function nameChanged(event) {

        name = event.target.value
    }
    function passwordChanged(event) {

        password = event.target.value
    }
    function experienceChanged(event) {
        experience = event.target.value
    }
    // function createAccount() {
    //   console.log("******reached")
    //   axios({
    //     url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
    //     method:"post",
    //     data:user
    //   }).then((response)=>{
    //     console.log("Response from api" + response)
    //   },(error)=>{
    //     console.log("Error from api" + error)
    //   })
    // }
    var user = {}
    var [userList, setUserList] = useState([])
    function printValue() {
        user.name = name
        user.email = email
        user.password = password
        user.experience = experience
        userList.push(user)
        userList = [...userList]
        setUserList(userList)
    }
    var userNameToDelete = ""
    function deleteUserFromTable() {
        var index
        userList.forEach((u, i) => {
            console.log(u.name + ":" + userNameToDelete)
            if (u.name == userNameToDelete) {
                index = i
            }
        }
        )
        // alert("!!!" + index)
        if (index >= 0) {
            userList.splice(index, 1);
            userList = [...userList]

            setUserList(userList)
        }
    }
    function updateDeleteUserName(e) {
        userNameToDelete = e.target.value
        console.log("!!!user" + userNameToDelete)
    }
    return (
        <Layout>

            <Layout style={{ margin: "auto" }}>
                <Col>
                    <h1>Create Account</h1>
                    <Input style={{ marginTop: 15 }} placeholder="Name" onChange={nameChanged}></Input>
                    <Input style={{ marginTop: 10 }} placeholder="Email" onChange={emailChanged}></Input>
                    <Input style={{ marginTop: 10 }} placeholder="Password" onChange={passwordChanged}></Input>
                    <Input style={{ marginTop: 10 }} placeholder="Experience" onChange={experienceChanged}></Input>
                    <Button style={{ marginTop: 10 }} type="primary" onClick={printValue}>Create Account</Button>

                    <Input style={{ marginTop: 15 }} placeholder="Name" onChange={updateDeleteUserName}></Input>
                    <Button style={{ marginTop: 10 }} type="primary" onClick={deleteUserFromTable}>Delete Account</Button>
                    <Datatable data={userList} deleteUser1={deleteUser1}></Datatable>
                </Col>
            </Layout>
        </Layout>

    )
}
export default Signup