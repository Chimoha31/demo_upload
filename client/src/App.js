import React from "react";
import "./App.css";
import StudentInfo from "./components/StudentInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<InputForm />} />
          <Route path="students" element={<StudentInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
