import React from "react";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import Home from "./pages/Home";
import Verification from "./Components/Authentication/Verification";
import ResetPassword from "./Components/Authentication/ResetPassword";
import { useSelector } from "react-redux";
import stylesheet from './App.module.css'
function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);



  return (
    <div   breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minbreakpoint="xxs" >
      <Routes>
        <Route path="/" element={<Authentication />} />
       
        {isLoggedIn && (
          <>
            <Route path="/verification" element={<Verification />} />
            <Route path="/home" element={<Home />} />
           
          </>
        )}
        {!isLoggedIn && <Route path="/auth" element={<Authentication />} />}
        <Route path="forget" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;