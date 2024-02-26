import React, { createContext, useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sideNav';
import MainContentScreen from './homeNav';

export const ContentContext = createContext(null); // Create a Context variable to pass through respective module
export const UserContext = createContext(null);



 

function ContentDisplay() {
  const [currentContent, setContent] = useState("home"); // Default Content is Home.
  const [data, setData] = useState(null); // User Data 

  useEffect(() => { 
    fetch('http://127.0.0.1:8000/getStudent/') // Fetch API data from Database
    .then((res) => {
       if(!res.ok){
        throw new Error("Network Response is not ok");
       }else{
        console.log("Data Received.")
        return res.json(); // parses the data into JSON format. 
       }})
    .then((data) => setData(data)) // set the Data to the useState data.
    .catch((error) => console.error("There was an error" , error))
    
  }, []);

  return(
    <div className="main_section">
      
      <ContentContext.Provider value={[currentContent, setContent]}>
        <SideNav />
        <UserContext.Provider value={[data, setData]}>
          <MainContentScreen /> 
        </UserContext.Provider>
      </ContentContext.Provider>
      
    </div>

  );
}


const mainContentRoot = ReactDOM.createRoot(document.getElementById("main_section"));

mainContentRoot.render(<ContentDisplay />);