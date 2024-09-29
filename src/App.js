import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
// import Account_Page from "./Components/Account_Page";
import Acc_Page_Frame from "./Components/Acc_Page_Frame";
import Acc_Page_Frame2 from "./Components/Acc_Page_Frame2";

function App() {
  return (
    // <AccTestPage />
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Home />} />
          <Route path="/account" element={<Acc_Page_Frame />} />
          <Route path="/account2" element={<Acc_Page_Frame2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;