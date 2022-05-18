import React, {useState} from 'react'

const Contact = () => {



    const [msg, setMsg] = useState({
        name : '',
        email : '',
        message : ''
    });

    //Handle Inputs
const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
}

//Handle Submit
const handleSubmit = async(event)=>{
    event.preventDefault();
    //Object Destructuring
    //Store object data into variables
    const {name,email,message} = msg;
    try {
        //It is submitted on port 3000 by default 
        //which is front end but we need to submit it on
        //backend which is on port 3001. so we need proxy
        const res = await fetch('/message',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,email,message
            })
        })
        if(res.status === 400 || !res){
            window.alert("Message Not Sent. Try Again Later")
        }else{
            window.alert("Message Sent Successfully");
            setMsg({
                name : '',
                email : '',
                 message : ''
            })
        }
    } catch (error) {
        console.log(error);
    }
}

    return (
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                        <h1 className='display-6 text-center mb-4'>Have Some <b>Question?</b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={require('../assets/contactus.png')} alt="Contact" className='w-75' />
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method={'POST'}>
                        <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Dilini Jayasiri" 
                                 name="name"
                                 value={msg.name}
                                 onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                name="email"
                                value={msg.email}
                                onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                 name="message"
                                 value={msg.message}
                                 onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className='btn btn-outline-primary rounded-pill'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
