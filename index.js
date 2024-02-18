import React, { createContext, useContext, useState }from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sideNav';
import MainContentScreen from './homeNav';

export const ContentContext = createContext(null);


function ContentDisplay() {
  const [currentContent, setContent] = useState("home"); // Default Content is Home.
  return(
    <div className="main_section">
      
      <ContentContext.Provider value={[currentContent, setContent]}>
         <SideNav />
         <MainContentScreen /> 
      </ContentContext.Provider>
      
    </div>

  );
}


const mainContentRoot = ReactDOM.createRoot(document.getElementById("main_section"));

mainContentRoot.render(<ContentDisplay />);