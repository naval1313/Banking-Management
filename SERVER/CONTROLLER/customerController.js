const customerModel = require("../MODEL/customerModel")
const generatePassword = require('../Utils/Password')
const mailer=require('../middleware/nodeMailer')
const depositeModal=require('../MODEL/depositeModel')
const path = require("path");


const customerRagistration = async(req,res)=>{

  try {

    const ranpassword = generatePassword();
    console.log(ranpassword);

    req.body.ranpassword;

    const Email=mailer(req.body.email,ranpassword)
    console.log(Email)
    
    //   const myimage = req.file.filename;
    // console.log(myimage);

    // const imagePath = req.file ? req.file.path : null;

    // console.log("Uploaded File:", imagePath);


    const { name, email,phone,password,accountType }= req.body;
       console.log(req.body)

    const data = await customerModel.create({
        name:name,
        email:email,
        phone:phone,
        password:ranpassword,
        accountType:accountType,
        // image:imagePath
    })
       res.send(data)
  }
  catch(error){
    console.log(error)
  }
}


const customerLogin =async(req,res)=>{

    const {email,password} = req.body
     console.log(req.body);
    try {
        const inpdata = await customerModel.findOne({ email: email });
        if (!inpdata) {
          res.send("email is invalid");
        }

        if (inpdata.password !=password ) {
          res.send("password is invalid");
        }
        res.send(inpdata);
    } catch (error) {
        console.log('error')
    }
}




const customerResetpass = async (req,res)=>{
       const {id}= req.body;
      console.log(req.body)

      const data=await customerModel.findById(id)
      console.log(data)
      res.send(data)
}  

 const newpass=async(req,res)=>{
     const{id,password}=req.body
     await customerModel.findByIdAndUpdate(id,{password:password})
     res.send('okk')
 }

 const deposit=async(req,res)=>{
 
     const{custID,status,Amount}=req.body

       const deposit = new depositeModal({
         custID,
         status,
         Amount,
       });

       deposit.save()
     res.send('okk')
 }

module.exports = {
  customerRagistration,
  customerLogin,
  customerResetpass,
  newpass,
  deposit
};