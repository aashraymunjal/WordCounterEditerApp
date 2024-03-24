import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import * as React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg :message,
    type:type
  })
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#020B36';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';

  }
}

  const router = createBrowserRouter([
  {
    path:"/",
    element:<TextForm heading="Enter the text to analyze" mode={mode}/>
  },
  {
    path:"/About",
    element:<About/>
  }
])

return (
  <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <BrowserRouter></BrowserRouter>
    <RouterProvider router = {router}/>
    <div className="container my-3">
    </div>
  </>
);
}

export default App;
