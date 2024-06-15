import React, { useEffect, useState, lazy } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home/index"));
const Login = lazy(() => import("./pages/Login/index"));
// const Register = lazy(() => import("./pages/Register/index"));
const Chats = lazy(() => import("./pages/Chats/index"));
const Groups = lazy(() => import("./pages/Groups/index"));
const ProtectedRoutes = lazy(() =>
  import("./components/auth/ProtectedRoutes/index")
);
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

  let isLogin = true;
  return (
    <BrowserRouter>
      <Wrapper>
        <ToastContainer
          position={isMobile ? "top-center" : "bottom-right"}
          style={{ zIndex: "2147483647" }}
        />
        <Routes>
          <Route element={<ProtectedRoutes isLogin={isLogin} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoutes isLogin={!isLogin} redirect="/">
                <Login />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div``;
