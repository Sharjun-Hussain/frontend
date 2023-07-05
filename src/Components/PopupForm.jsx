import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays"
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from 'react-router-dom';
import ValidateForm from 'form-validation-react';




const PopUp = (props) => {

  const [Datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get("/admin/api/halls/availablity")
        const jsonn = responce.data.Halls;
        setDatas(...Datas, jsonn);

      } catch (error) {
        console.log(error);
      }

    };

    fetchData();

  }, [Event]);

  const [date, setdate] = useState(new Date());
  // const [modalShow, setModalShow] = useState(false);
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Hall, setHall] = useState('');
  const [Mobile, setMobile] = useState('');


  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [EmailError, setEmailError] = useState('');

  const validatePhoneNumber = () => {
    const phoneNumberPattern = /^[0-9]{10}$/; // Assuming a 10-digit phone number

    if (!phoneNumberPattern.test(Mobile)) {
      setPhoneNumberError('Invalid phone number format Make Sure It has 10 Digits !');

      return false;
    }

    setPhoneNumberError('');

    return true;
  };


  const validateEmail = () => {
    const EmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!EmailPattern.test(Email)) {
      setEmailError('Invalid Email Make Sure You Typed Correct Mail Address !');

      return false;
    }

    setEmailError('');

    return true;
  };
  // ============================================================================

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (validatePhoneNumber()) {
      if (validateEmail()) {
        try {
          await axios.post("/admin/api/booking", JSON.stringify({ Email, Name, Hall, Mobile, date }), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            console.log(response.data);
            toast.success("YOur Request Sent Succesfully")



          })

            // return redirect("/")


            .catch(error => {
              console.log(error);
              toast.error(error.message)
            });

        } catch (err) {
          console.log(err);
        }
      }
    }

  }

  return (
    <div >
      <Modal {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" className='text-center'>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className='text-center'> REQUEST BOOKING</h4>

         
            <Form onSubmit={HandleSubmit} >
              <Container className='mt-5'>
                <Row>

                  <Col>

                    <div>
                      <label htmlfor="validationCustom01" className="form-label">Email</label>
                      <input type="email" className="form-control" id="validationCustom01" value={Email} onChange={(e) => setEmail(e.target.value)} required ></input>
                      {EmailError && <h6 className='mt-1 text-danger'>{EmailError}</h6>}
                    </div>
                    <div >
                      <label htmlfor="validationCustom01" className="form-label">Mobile</label>
                      <input type="text" name="phone_input" className="form-control" id="validationCustom01" value={Mobile} onChange={(e) => setMobile(e.target.value)} required ></input>
                      {phoneNumberError && <h6 className='mt-1 text-danger'>{phoneNumberError}</h6>}
                    </div>
                  </Col>
                  <Col>

                    <div>
                      <label htmlfor="validationCustom01" className="form-label">Name</label>
                      <input type="text" name="Name" className="form-control" id="validationCustom01" value={Name} onChange={(e) => setName(e.target.value)} required></input>

                    </div>


                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Select Hall</Form.Label>
                      <Form.Select aria-label="Default select example" value={Hall} onChange={(e) => setHall(e.target.value)}>
                        <option>Open this select menu</option>
                        {/* {Datas.map((hall,index)=>{
                         <option key={index} value={hall._id} >{hall.HallName}</option>
                      })} */}

                        {/* //Its Need To be Updated to Map function Iam now add halls manuall method                     <option value="Paradice">Paradice</option> */}
                        <option value="64893f7516426dc8b68124bc">Lee Meridian</option>
                        <option value="64893f7516426dc8b68124bd">Paradise</option>
                        <option value="64893f7516426dc8b68124bf">Bawa Royal</option>
                        <option value="64893f7516426dc8b68124be">Pearls </option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Select Dates</Form.Label>
                      <DatePicker className='w-100 text-center p-1 ' style={{ cursor: "pointer" }} minDate={subDays(new Date(), -1)} selected={date} onChange={(date) => setdate(date)} />
                    </Form.Group>

                  </Col>

                </Row>
              </Container>
              <Button type="submit" >Request To Admin</Button>
            </Form>

          
        </Modal.Body>
        {/* <Modal.Footer>
         

        </Modal.Footer> */}
        <Modal.Title>
          <h6 className='text-center'>We will Sent you the Confirmation Mail when we Checked your Details Please wait .. </h6>
        </Modal.Title>
      </Modal>


    </div>
  )
}

export default PopUp