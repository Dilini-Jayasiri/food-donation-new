import React from 'react'
import '../assets/partials/services.scss'



 const Services =() => {
  return (
    <section id="service">
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h3 className='fs-5 text-center mb-0'>Needy organization</h3>
                    <h1 className='display-6 text-center mb-4'>You can Donate to any of theese</h1>
                    <hr className='w-25 mx-auto'/>
                </div>
               
            </div>
            <div className='row mt-5'>
                <div className="col-md-4">
                <div class="card p-3">
                <img src={require('../assets/childrenhome.png')} class="card-img-top" alt="childrenhome"  height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Children's Home</h5>
                        
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card p-3">
                  <img src={require('../assets/oldagehome2.png')} class="card-img-top" alt="oldagehome" height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Old Age Home</h5>
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card p-3">
                  <img src={require('../assets/poor.jpg')} class="card-img-top" alt="poorpeople" height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Poor People</h5>
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <h3 className='fs-5 text-center mb-0'>Meal Type</h3>
                    <h1 className='display-6 text-center mb-4'>You can Donate any of theese Meal</h1>
                    <hr className='w-25 mx-auto'/>
                </div>
               
            </div>

            <div className='row mt-5'>
                <div className="col-md-4">
                <div class="card p-3">
                <img src={require('../assets/breakfast.jpg')} class="card-img-top" alt="breakfast" height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Breakfast</h5>
                        
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card p-3">
                  <img src={require('../assets/lunch.jpg')} class="card-img-top" alt="lunch" height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Lunch</h5>
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card p-3">
                  <img src={require('../assets/dinner.jpg')} class="card-img-top" alt="dinner"  height={'300px'}/>
                     <div class="card-body text-center">
                        {/* <i className='fa fa-cogs fa-4x mb-4 text-primary'></i> */}
                        <h5 class="card-title mb-3 fs-4 fw-bold">Dinner</h5>
                        <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                </div>
                
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services;
