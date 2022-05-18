import React from 'react'
import { NavLink } from 'react-router-dom';

 const Footer = () => {
  return (
    <div>
        <footer className="footer text-white">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6">
                            <h4>FOOD BANK</h4>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                   All around the country  
                            </li>
                            <li className="nav-item mb-2">
                                Sri Lanka
                            </li>
                        </ul>
                        </div>
                    <div className="col-4">
                        <h5>Admin</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                    Dilini Jayasiri  
                            </li>
                            <li className="nav-item mb-2">
                                <a to="#" className="nav-link p-0 text-white">
                                    dilininadeesha2018@gmail.com
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>We Need Sponsors</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <NavLink to="./requests" className="nav-link p-0 text-white">
                                    Request food
                                </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <a to="#" className="nav-link p-0 text-white">
                                    Show Food Requests
                                </a> 
                            </li>
                        </ul>
                    </div>
                  

                    <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                        <p>2021 Copy right reserved</p>
                    </div>
                    </div>
                </footer>
            </div>

        </footer>
    </div>
  )
}

export default Footer;