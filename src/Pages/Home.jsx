import React, { Fragment } from 'react'
import NavBar from '../Components/NavBar';
import { Carasoul } from '../Components/Carasoul';

import Services from '../Components/Services';
import HowWorks from '../Components/HowWorks';
import Footer from '../Components/Footer';
import PopupForm from '../Components/PopupForm';
import { useEffect } from 'react';




const Home = () => {



  return (
    <Fragment>
      <NavBar />
      <Carasoul />
<PopupForm/>
      <Services />
      
      <HowWorks />
      <Footer />
    </Fragment>
  )
}

export default Home;