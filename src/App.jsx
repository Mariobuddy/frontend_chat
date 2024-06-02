import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
      </Wrapper>
   </BrowserRouter>
  )
}

export default App


const Wrapper=styled.div``