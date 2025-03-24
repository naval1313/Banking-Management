import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'
import Footer from '../COMPONENTS/Footer'

const MyWithdraw = () => {

     const[withdraw,setWithdraw]=useState({Amount:''})
     const id=localStorage.getItem('id')


     async function withdrwaAmount() {
    let api = "http://localhost:2000/customer/withdraw";
try {
  await axios.post(api,{custID:id,Amount:withdraw,status:"debit",}).then((res)=>{
    console.log(res.data)
    toast.success('Successfully Withdrawl!')
 })
  console.log(withdraw)

} catch (error) {
  toast.error('insufficient fund!')
}
}
  return (
    <>
      <div className="curr" id="withdraw">
        <h1 style={{ color: "black" }}> Withdrawal Here</h1>
        <input
          type="number"
          placeholder="Enter Amount"
          value={withdraw}
          onChange={(e) => {
            setWithdraw(e.target.value);
          }}
        />
        <br />
        <button
          onClick={withdrwaAmount}
          style={{ background: "#002147", color: "white" ,position:"relative", top:"20px"}}
        >
          Withdraw
        </button>

        <Toaster />
      </div>
      <br />
   
      {/* <Footer />
      <Footer /> */}
    </>
  );
}

export default MyWithdraw