



export const getLogin = (user, pass) =>{
    const DataInput = {"username": user, "password": pass}
    const passValue = document.getElementById("password").value;
    const userValue = document.getElementById("username").value;

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';


    fetch("http://127.0.0.1:8000/CSRFTOKENREQ/")
    .then((data) => {
        console.log(data)
        // axios.post("https://127.0.0.1:8000/login/", DataInput, {
        //     method: 'POST',
        //     headers: {
        //         'X-CSRFToken': data.csrfToken
        //     }
        // })
        // .then( (res) => {
        //     console.log("Data values Sent");
        // })
        // .catch((error) => {console.error("LOGIN Request Error : ", error)})   
    })
    .catch((error) => {console.error("CSRF Request Error: ", error)})

}