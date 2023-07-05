
import Home from "./Pages/Home";
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./Pages/Register";
import Dashboard from "./Admin/Dashboard";
import Login from "./Admin/Login";
import PendingBookings from "./Admin/Booking/PendingBookings";
import AcceptedBookings from "./Admin/Booking/AcceptedBookings";
import ClosedBookings from "./Admin/Booking/ClosedBookings";
import Halls from '../src/Admin//Halls'
import About from "./Pages/About";
import ProfilePage from "./Admin/Profile";
import NotFound from "./Pages/404NotFound";
import { AddHall } from "./Admin/AddHall";
import Contact from "./Pages/Contact";
import { PrivateRoute } from "./Routes/PrivateRoutes";



function App() {

  const token = localStorage.getItem("token");
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='about' element={< About />}></Route>
          <Route exact path='contact' element={< Contact />}></Route>
          <Route exact path='reg' element={< Registration />}></Route>

          {/* <Routes>
        <Route path="*" element={<NotFound />} />
        </Routes> */}





          <Route exact path='/Admin/Login' element={<Login />} ></Route>

          {token ? (<> <Route exact path='/Admin/Dashboard' element={<Dashboard />} >

            <Route exact path='PendingBookings' element={<PendingBookings />} />
            <Route exact path='AcceptedBookings' element={<AcceptedBookings />} />
            <Route exact path='ClosedBookings' element={<ClosedBookings />} />
            <Route exact path='Halls' element={<Halls />} />
            <Route exact path='addHall' element={<AddHall />} />
          </Route>

            <Route exact path='/admin/register' element={<Registration />} />
            <Route exact path='/admin/profile' element={<ProfilePage />} />

          </>
          ) : <Route exact path='/Admin/Login' element={<Login />} ></Route>}


        </Routes>
      </Router>

    </div>


  );
}

export default App;
