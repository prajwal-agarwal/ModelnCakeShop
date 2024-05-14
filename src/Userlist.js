import { Alert, Card, Image, Row } from "antd";
// import Datatable from "./DataTable";

function Userlist(){
    var users = [
        {name:"Shrish Kumar",role:"Trainer"},{name:"Bagish Kumar",role:"Engineer"},
        {name:"Chandan Kumar",role:"Officer",location:"Pune"},{name:"Subhash Kumar",role:"Cricketer"}
    ];

       // var users =Object.keys(usermap)
    if(users.length ===0 ){
        return(
            <Alert message="Zero Results found" type="alert"/>
        )
    }else{
    return (
<>
<Row>
{users.map((each)=>{
    var keys=Object.keys(each);
    return(
        <>
        <Card style={{width:200}}>
        <Image height={100} src="user.png"/>
 {/* <Alert message={each.name} type="success"/>
 <Alert message={each.role} type="success"/> */}
 {/* <p>{each.name}</p>
 <p>{each.role}</p>
 <p>{each.location}</p> */}

  {  keys.map((eachkey)=>{
        return <p>{each[eachkey]}</p>
    })
}
    </Card>
    </>
    )
})
    }
  </Row>  
    </>
    )
    // </>
    }
}
export default Userlist;