const express = require("express")
const route = express.Router();
const customerController = require("../CONTROLLER/customerController");
// const multer=require('multer')


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload/"); // Save files to uploads directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Keep original file name
//   },
// });

// const upload = multer({ storage: storage });


route.post("/ragistration", customerController.customerRagistration );
route.post("/login", customerController.customerLogin);
route.post("/resetpass", customerController.customerResetpass);
route.post('/update',customerController.newpass)
route.post('/deposit',customerController.deposit)




module.exports= route;

