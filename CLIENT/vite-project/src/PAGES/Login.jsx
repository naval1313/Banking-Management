import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [inp,setInp] = useState({})

const nav = useNavigate();

const  handleinput =(e)=>{
  let name = e.target.name;
  let value = e.target.value;
 setInp((values) => ({ ...values, [name]: value })); 
}

 const handleSubmit = async (e)=>{
   e.preventDefault()
     let api = "http://localhost:2000/customer/login"
      
     await axios.post(api,{...inp}).then((res)=>{
         console.log(res.data)

         localStorage.setItem("name", res.data.name),
           localStorage.setItem("email", res.data.email);
          localStorage.setItem("id", res.data._id);
         localStorage.setItem("acctype", res.data.accountType);

           if(inp.email === res.data.email){
               nav("/dash");
           } else{
            alert("INVALID EMAIL!")
           }
     })
 }

  return (
    <div>

      <Form id="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter here" name="email" onChange={handleinput} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password"  name="password" onChange={handleinput} />
        </Form.Group>

        <Button type="submit" id="login-btn"  onClick={handleSubmit}>
          LogIn
        </Button>
        
      </Form>
    </div>
  );
};

export default Login;
