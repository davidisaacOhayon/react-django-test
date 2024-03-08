import React, { createContext, useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sideNav';
import MainContentScreen from './homeNav';
import { FetchAPI } from './fetch';


export const ContentContext = createContext(null); // Create a Context variable to pass through respective module
export const UserContext = createContext(null);



 

function ContentDisplay() {
  const [currentContent, setContent] = useState("home"); // Default Content is Home.
  const [data, setData] = useState(null); // User Data 

  useEffect(() => { 
    FetchAPI('http://127.0.0.1:8000/getStudent/')
    .then((data) => setData(data));
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