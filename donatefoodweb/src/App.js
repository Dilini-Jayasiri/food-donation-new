
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import DonateDash from './components/DonateDash';
import {Routes,Route} from 'react-router';
import DonationForm from './pages/DonationForm';
import DonationType from './components/DonationType';
import Services from './components/Services';
import Contact from './components/Contact';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';


import Requests from './pages/Requests/Requests';
import { useEffect, useState } from 'react';




function App() {

  const [auth,setauth] = useState(false);
  const [auth1,setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials :"include"
      });

      if(res.status === 200){
         setauth(true)
         setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
     }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  },[]);

  return (
   <>
   <NavBar auth={auth1}/>
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/about" element={<About/>}/>
     <Route path="/services" element={<Services/>}/>
     <Route path="/contact" element={<Contact/>}/>
     
     <Route  path="/login" element={<Login/>} auth={auth1}/>
     <Route  path="/register" element={<Register/>} auth={auth1}/>
     <Route  path="/donateDash" element={<DonateDash/>} auth={auth}/>
     <Route  path="/donationForm" element={<DonationForm/>} auth={auth}/>
     <Route path="/donationType" element={<DonationType/>} auth={auth}/>
     <Route path="/requests" element={<Requests/>} auth={auth}/>
     <Route  path="/logout" element={<Logout/>} auth={auth}/>
     
     </Routes>
   
   {/* <Home/>
   <About/> */}

  <Footer/> 
  </>   
  );
}

export default App;
