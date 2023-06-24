import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, } from 'react-router-dom'






function PendingBookings() {
 
  const param = useParams();
  const [datas, setDatas] = useState([]);

 

const HandleAccept = async ()=>{

  const bookingid = datas._id;
  console.log(datas[0]);
  // 
}  

const HandleDecline =()=>{

}
const handle= ()=>{
  // setDatas(dataArray)
  console.log(datas)
}
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       const responce = await axios.get("http://127.0.0.1:8000/admin/api/pendingbookings")
        // .then((response)=>{
        //   // const xdata = response.data;
        //   // setDatas(prevdata => [...prevdata, xdata]);
          
        // console.log(response.data)
        // setDatas([response.data]);
        // });
        const jsonn =  responce.data.Bookingdata;
       
        setDatas(...datas , jsonn);
        
        
        // console.log(jsonn)
       
        //  setDatas({jsonn})
        // console.log(datas)
       
        // const {data} =dataaa;
        // console.log(dataaa.data)
        // setDatas(dataaa.data);
        // console.log({datas})
        //  console.log(xdata)
       
        // console.log(datas);
        // console.log([respons]);
        
        
        

      } catch (error) {
        console.log(error);
      }
      
    };

    fetchData();
    
  }, []);





  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className='text-center mt-4'>
          Pending Bookings 
          </h2>
          <div className='d-flex justify-content-center mt-4'>
            <table>
              <tr>
              <th style={{ width: "250px" }}>Hall_ID</th>
                <th style={{ width: "250px" }}>CUSTOMER NAME</th>
                <th style={{ width: "250px" }}>DATE</th>
                <th style={{ width: "250px" }}>STATUS</th>
                
                <th style={{ width: "250px" }}>ACTIONS</th>

              </tr>

              {datas.map((data, index) => (
        <tr className='my-2' key={index}>
          <td  >{data.HallID}</td>
          <td>{data.Name}</td>
          <td>{data.Date}</td>    
          <td>{data.status}</td>
          <td><Button className='mx-2 bg-success' onClick={ async()=>{
            const id= data._id;
            console.log(id);
            try{
              await axios.get(`http://127.0.0.1:8000/admin/api/pendingbookings/${id}/accept`)
            .then((response) =>{
              
            })
            }catch(err){
              console.log(err);
            }
          }}>Accept</Button>
          <Button className='bg-danger' onClick={ async()=>{
            const id= data._id;
            console.log(id);
            try{
              await axios.get(`http://127.0.0.1:8000/admin/api/pendingbookings/${id}/decline`)
              .then((response) =>{
                
              })
            }catch(err){
              console.log(err);
            }
          }}>Decline</Button></td>
        </tr>
        ))}
             

            </table>

          </div>


        </Col>
      </Row>
    </Container>
    
  )
}

export default PendingBookings

// {datas.map((item, index) => (
      
//   <div key={index}>
//     <p>Name: {item.name}</p>
//     <p>Age: {item.age}</p>
//   </div>
// ))}