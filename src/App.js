import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import BlogLists from './BlogLists';
import Sliders from './Sliders';





function App() {

  
  
  return (    
<div className="App">
<Router>
      <div>
        <Routes>
        <Route path="/" element={<BlogLists />} />
          <Route path="/post/:id" element={<BlogDetails />} />
          <Route path="/slider" element={<Sliders />} />
        </Routes>


    <div className='container'>
    <Link to="/slider">Go to Slider Page</Link> &nbsp;
    <Link to="/">Back to Home</Link>
    </div>
        

      </div>
    </Router>
    


    
  

    

    

   

      

     
    
    </div>
  );  
}


export default App;
