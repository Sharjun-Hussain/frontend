import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from '../Assets/logo1.png'
import { FaFacebook ,FaInstagram,FaTwitter,FaGoogle} from 'react-icons/fa'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        // <footer>
        //     <div className=" w-100 text-start main-Foo " >
        //         <Container fluid>

        //             <Row md={12} xs={1} className='pb-3'  >

        //                 <Col className="d-md-none">
        //                     <img src={logo1} className="Foo-logo" alt="fw" />
        //                     <h5 className="text-dark Foo-Logo-text-Head ms-2">EventSpot 
        //                         Main Street, Sainthamruthu,
        //                         </h5>
        //                     <h4 className="text-dark Foo-Logo-text-Head ms-2">+94 771 020 020</h4>
        //                     <h4 className="text-dark Foo-Logo-text-Head ms-2">+94 757 340 891</h4>
        //                     <h4 className="text-dark Foo-Logo-text-Head ms-2">EventSpot@outlook.com</h4>
        //                     {/* <hr className=" hr  w-50 "/> */}
        //                     {/* <hr className="w-100 d-md-block d-none hr" />
        //                     <hr className=" hr w-75 d-md-none" /> */}
        //                     <a className='pe-1 mx-1' href='www.facebook.com'> <FaFacebookF /></a>
        //                     <a className='pe-1 mx-1' href='www.Linkedin.com'>  <AiFillLinkedin /></a>
        //                     <a className='pe-4 mx-1' href='www.Instagram.com'> <AiFillInstagram /></a>
        //                 </Col>
        //                 <Col className="ps-md-5 d-md-flex   justify-content-evenly pt-4 mt-3">
        //                     {/* <a> <h5 className="Foo-Header">EventSpot</h5></a>
        //                     <hr className="w-100 d-md-block d-none hr" />
        //                     <hr className=" hr w-75 d-md-none" /> */}
        //                     <a> <h2 className="Foo-Content">Home</h2></a>
        //                     <a> <h5 className="Foo-Content">About Us</h5></a>
        //                     <a> <h5 className="Foo-Content">Login</h5></a>
        //                     <a> <h5 className="Foo-Content">Contact</h5></a>

        //                     </Col>
        //                     <hr className="w-75 mt-4 d-md-block d-none hr" id="hh" />

        //                     <div className="text-center mt-3  d-md-block d-none foo-text">
        //                     Our event hall booking service is the perfect solution for your next special occasion.<br/> Whether you're
        //                      planning a wedding, corporate event, or birthday party, .<br/> With our easy-to-use online booking system you can reserve
        //                        your event space in just a few clicks.,<br/> Contact us today to start planning your next unforgettable event!
        //                     </div>


        //             </Row>


        //         </Container>
        //     </div>


        // </footer>

        <Container fluid className="bg-white py-4">
            <Row className="d-md-flex d-none ">
                <Col md={2} className="ps-5 ">
                    <img src={logo1} height="70"/>
                </Col>
                <Col>
               <div> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
                </Col>
                <Col className="d-flex flex-column">
                    <Link to="/" >EventSpot</Link>
                    <Link to="/Contatct" >Contatct-Us</Link>
                    <Link to="/About" >About-Us</Link>
                    <Link to="/admin/Login" >Login</Link>
                </Col>
                <Col className="">
                   <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
                   <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
                   <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
                   <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
                </Col>
            </Row>

            <Row className="d-md-none d-block justify-content-center">
                <Col sm={12} md={2} className="ps-5 justify-content-center">
                    <img src={logo1} height="70"/>
                </Col>
                <Col sm={12}>
               <div className="justify-content-center"> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
                </Col>
                <Col sm={12} className="d-flex flex-column justify-content-center">
                    <Link to="/" >EventSpot</Link>
                    <Link to="/Contatct" >Contatct-Us</Link>
                    <Link to="/About" >About-Us</Link>
                    <Link to="/admin/Login" >Login</Link>
                </Col>
                <Col sm={12} className="">
                   <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
                   <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
                   <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
                   <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
                </Col>
            </Row>


        </Container>



    );
};

export default Footer;
