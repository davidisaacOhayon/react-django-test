const server = require('http');



fetch('http://127.0.0.1:8000/getStudent')
  .then((res) => {
    if(!res.ok){
        console.log("Response Not Okay.");
    }else{
        return res.json();
    }
  })
  .then( (data) =>{
    console.log(data);
  })