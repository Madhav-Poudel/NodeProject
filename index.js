
// Index.js
//imports
const express = require("express");
const dotenv=require("dotenv").config();
const router=require("./Routes/userRoute.js")

const app = express();
const port = process.env.PORT || 5001;


app.get("/", (req, res) => {
  res.send("<h1>Welcome to NodeJs Backend Server</h1>");
});



app.use('/api/user',require("./Routes/userRoute.js"))
app.use('/api/student',require("./Routes/studentRoute.js"))



app.listen(port, () => {
  console.log(`server is running on port:http://localhost:${port}`);
});

// MVC 
// M--> Model
// V--> View
// C-->Controller