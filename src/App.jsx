import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
   <BrowserRouter>
    <Wrapper>
    <ToastContainer
            position={isMobile?"top-center":"bottom-right"}
           style={{zIndex:"2147483647"}}
          />
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />

          </Routes>
      </Wrapper>
   </BrowserRouter>
  )
}

export default App


const Wrapper=styled.div``