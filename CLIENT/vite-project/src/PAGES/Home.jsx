import React from 'react'
import himg from "../IMAGES/111.jpg"
import Login from './Login'
import { Link } from 'react-router-dom'
import LoanCalculators from './LoanCalculators'
import CustomerServices from './CustomerServices'

const Home = () => {
  return (
    <div>
      <div id="hero">
        <img src={himg} id="heroimg" />
        <Login />
        <h2 id="newacc">
          Dont Have an Account...
          <Link to="/ragistration" style={{ color: "white" }}>
            {" "}
            SignUp Now!
          </Link>
        </h2>
      </div>

      <div>
        <LoanCalculators />
        <CustomerServices/>
      </div>
    </div>
  );
}

export default Home


