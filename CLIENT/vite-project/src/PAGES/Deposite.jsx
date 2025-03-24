import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'
import Footer from '../COMPONENTS/Footer'


const MyDeposit = () => {

   const[deposit,setDeposit]=useState({})
  const id = localStorage.getItem("id");
    async function depositAmount(){
      
             let api = "http://localhost:2000/customer/deposit";


        await axios.post(api,{custID:id,Amount:deposit,status:"credit",}).then((res)=>{
           console.log(res.data)
           toast.success('Successfully Deposit!')
           toast('Deposite Your Amount!',
            {
              icon:'✔',
              style: {
                borderRadius: '10px',
                background: 'green',
                color: '#fff',
              },
            }
          );
        })
         console.log(deposit)
    }
          
  return (
    <>
      <div  id="depocard">
        <div className="curr">
          <h1 style={{ color: "black" }}>Deposit Here</h1>
          <p>Enter Deposite Amount</p>
          <input
            type="number"
            placeholder="Enter Amount"
            value={deposit}
            onChange={(e) => {
              setDeposit(e.target.value);
            }}
          />
          <button onClick={depositAmount} id="depobtn" >Deposit</button>
          <Toaster />
        </div>
      </div>
      <br />
      {/* <Footer />
      <Footer /> */}
    </>
  );
}

export default MyDeposit