import React from 'react';
import About from './About';
import '../assets/partials/home.scss'
import Services from './Services';
import Contact from './Contact';




const Home = () =>{
    return(
        <div>
           <section id="home">
               <div className="container">
                   <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h2 className="display-6 fw-bolder mb-4 text-center text-white">Donate Love With Poor Heart</h2>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Doloremque sapiente natus velit consequatur ex officia accusantium eius fugiat eligendi culpa debitis magnam, 
                            possimus nemo perspiciatis.</p>
                           
                        </div>
                   </div>
               </div>
               
           </section>
        <About/>
        <Services/>
        <Contact/>
       
        </div>
    );
}

export default Home;
