import React from "react";
import "./StudentInfo.css";

const StudentInfo = () => {
  return (
    <div className="students_container">
      <ul className="student_card">
        <li>
          <img
            src="https://stat.ameba.jp/user_images/20120925/13/vegitaouji/28/09/j/o0310037112205366558.jpg"
            alt="student"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          />
        </li>
        <div className="edit_delete">
          <li>✍</li>
          <li>🗑</li>
        </div>
        <li>
          <h2>Chiho M</h2>
        </li>
        <li>
          <p>mokochii1108@gmail.com</p>
        </li>
      </ul>
       
    </div>
  );
};

export default StudentInfo;
