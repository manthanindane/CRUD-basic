import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Create = () => {
  
  const History = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    axios.post(
      "https://648a19fd5fa58521cab0cea8.mockapi.io/crud",{
      name:name ,
      email:email,     
  
    })
    .then(()=>{
      History("/read");
    })
  }

    

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="Formcreate">
        <h2>Create</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div classNameName="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
