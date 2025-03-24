import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaRupeeSign } from "react-icons/fa";
import Footer from '../COMPONENTS/Footer';


const MyCurrentBalance = () => {

    const[show,setShow]=useState([])

    const id=localStorage.getItem("id")
     async function getAmount() {
         
        let api = `http://localhost:2000/customer/totalAmnt/?id=${id}`;


    await axios.get(api).then((res)=>{
         console.log(res.data)
         setShow(res.data)
    })
         
     }

    useEffect(()=>{
        getAmount()
    },[id]) 
      
    let depoAmount=0
    let withdrawAmount=0
    let total=0

    let res=show.map((e)=>{
          
          if(e.status=='credit'){
              depoAmount+=e.Amount
          }
          if(e.status=='debit'){
             withdrawAmount+=e.Amount
          }
    })
  
      total=depoAmount-withdrawAmount
      
    
  return (
    <>
      <div className="curr" id="currbalance">
        <h3>
          Avaliable Balance{" "}
          <h1 style={{ color: "#002147" , padding:"10px"}}>
            <FaRupeeSign />
            {total}
          </h1>
        </h3>
      </div>{" "}
      <br />
     
      {/* <Footer /> */}
    </>
  );
}

export default MyCurrentBalance