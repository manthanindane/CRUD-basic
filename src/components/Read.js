import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("https://648a19fd5fa58521cab0cea8.mockapi.io/crud").then((res) => {
      setData(res.data);
    });
  }

  function handleDelete(id){
      axios.delete(`https://648a19fd5fa58521cab0cea8.mockapi.io/crud/${id}`
      ).then(()=>{
          getData();
      })  
  }

  function setLocalStorage(id, name, email){
      localStorage.setItem("id",id)
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      // console.localStorage()

  }




  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                <button className="btn btn-success" onClick={()=>{setLocalStorage(eachData.id, eachData.name, eachData.email)}}>Edit</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.369/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/94HZYrbAnbNATqJp/scene.splinecode"></spline-viewer>
    </>
  );
};

export default Read;
