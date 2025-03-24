import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Footer from "../COMPONENTS/Footer";


const ResetPsss = () => {
        
    const [newpass, setNewpass] = useState({})
    const [pass, setPass] = useState();

  let id = localStorage.getItem("id");


const getPass=async()=>{
        let api = "http://localhost:2000/customer/resetpass";
    
     await axios.post(api,{id:id}).then((res)=>{
        console.log(res.data.password)
        setPass(res.data.password)
     })
    
}
 
const updatePass=async()=>{
       let api = "http://localhost:2000/customer/update";

        await axios.post(api, { id: id,password:newpass }).then((res) => {
          console.log(res.data  );
       
        });
      
}

  return (
    <>
      <div id="resetpass">
        <h1>RESET PASSWORD HERE</h1> <br />
        <h4 id="fetchpass" >{pass}</h4>
        <button
          onClick={getPass}
          style={{
            background: "#002147",
            color: "white",
            position: "relative",
            bottom: "20px",
          }}
        >
          Fetch Current Password
        </button>{" "}
        <br />
        <span style={{fontSize:"18px", fontWeight:"bold"}} > Enter New Password : </span> <br />
        <input
          type="text"
          placeholder="New Password"
          value={newpass}
          onChange={(e) => {
            setNewpass(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <button
          onClick={updatePass}
          style={{ background: "#002147", color: "white" }}
        >
          SUBMIT
        </button>
      </div>
      <br />
     
      {/* <Footer />
      <Footer /> */}
    </>
  );
}

export default ResetPsss
