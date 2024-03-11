import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Page/Login";
import { Pages404 } from "../Page/Pages404";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Pages404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
