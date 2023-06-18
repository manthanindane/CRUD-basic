import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setid] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://648a19fd5fa58521cab0cea8.mockapi.io/crud/${id}`, {
        name: Name,
        email: Email,
      })
      .then(() => {
        Navigate("/read");
      });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
