import React, { useState } from "react";

const InputForm = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const handleChange = (e) => {
    setNewStudent({...newStudent, [e.target.name]: e.target.value});
  }

  const handlePhoto = (e) => {
    setNewStudent({...newStudent, photo: e.target.files[0]});
    console.log(newStudent.photo);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newStudent.photo)
    formData.append("email", newStudent.email)
    formData.append("name", newStudent.name)
    console.log(newStudent.photo.name);
  }

  


  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />
      <input
        type="text"
        placeholder="name"
        name="name"
        value={newStudent.name}
        onChange={handleChange}
        />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={newStudent.email}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default InputForm;
