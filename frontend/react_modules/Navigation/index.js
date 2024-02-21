import React, { createContext, useContext, useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sideNav';
import MainContentScreen from './homeNav';

export const ContentContext = createContext(null); // Create a Context variable to pass through respective module





function ContentDisplay() {
  const [currentContent, setContent] = useState("home"); // Default Content is Home.
  const [data, setData] = useState(null);

  useEffect(() => { 
    fetch('http://localhost:8000/test/') // This poses a security risk in the industry. Don't do this shit lmao
    .then((res) => {
       if(!res.ok){
        throw new Error("Network Response is not ok");
       }else{
        return res.json();
       }})
    .then((data) => setData(data))
    .catch((error) => console.error("There was an error" , error))
    
  }, []);

  return(
    <div className="main_section">

      

      {data ? <div>{data.message}</div> : <div>Loading...</div>}
      
      <ContentContext.Provider value={[currentContent, setContent]}>
         <SideNav />
         <MainContentScreen /> 
      </ContentContext.Provider>
      
    </div>

  );
}


const mainContentRoot = ReactDOM.createRoot(document.getElementById("main_section"));

mainContentRoot.render(<ContentDisplay />);