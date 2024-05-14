import { Button, Row } from "antd";
import Cake from "./Cake1";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cakelist() {
    var [cakes,setCakes] = useState()
   
    useEffect(()=>{
        getCakelist()
    },[])


    function getCakelist(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"get"
        }).then((response)=>{
          
            setCakes(response.data.data)  // updating the state
        }, (error)=>{
          
        })
    }

    
  
    return (
        <>
            <Row>
                {
                    cakes?.map((cake)=>{
                      return <Link to={"/details/" + cake.cakeid}><Cake data={cake}></Cake></Link>
                    })
                }

            </Row>
        </>
    )
}

export default Cakelist 