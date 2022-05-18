const mongoose = require('mongoose');

const db = "mongodb+srv://dilinijayasiri:jEvaJFYlBHqJcs7y@cluster0.x4zix.mongodb.net/foodweb?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection successfull");
}).catch((e) => {
    console.log(e);
})