import React from 'react';
// import { Table } from 'antd';
import Datatable from './DataTable';

function Usertablelist(){
    // const columns = [
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //      // render: (text) => <a>{text}</a>,
    //     },
    //     {
    //       title: 'Role',
    //       dataIndex: 'role',
    //       key: 'role',
    //     },
    //     {
    //       title: 'Location',
    //       dataIndex: 'location',
    //       key: 'location',
    //     },
      
    //   ];
    //   const users = [
    //       {name:"Shrish Kumar",role:"Trainer"},{name:"Bagish Kumar",role:"Engineer"},
    //           {name:"Chandan Kumar",role:"Officer"},{name:"Subhash Kumar",role:"Cricketer"}];

    var users = [{ name: "newuser1", role: "Developer" , location:"Lucknow"},
    { name: "newuser2", role: "Developer",location:"Hyderabad",phone:9988998899},
    { name: "newuser3", role: "Manager",location:"Mumbai"}];
    return <Datatable data={users}></Datatable>

// return(
// <Datatable data={users}/>
// )

}

//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
//];
//const Usertablelist = () => <Table columns={columns} dataSource={data} />;
export default Usertablelist;