import axios from "axios";
import { useEffect, useState } from "react";
import Cake from "./Cake1";
import { Row } from "antd";
import { Link } from "react-router-dom";
export default function Cart(){
    var [cake,setCakes] = useState()
    var [loading,setLoading] = useState(true);
    useEffect(()=>{getCartList()},[])
    function getCartList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart/",
            method:"GET",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response)=>{  
            setCakes(response.data.data);
            console.log(response.data.data);
            setLoading(false);
        },(err)=>{
            console.log(err)
             setLoading(false);
        })
    }
    return(
        <div>
        <Row>
        {cake?.map((each) => {
            return (
                <>
                <Link to={`/display/${each.cakeid}`}><Cake data={each} /> </Link>
                </>
            )
        })}
        </Row>
        </div>)
};