const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require('./routes/auth'); 

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api', auth);



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://jashparikh7447:trial@trialcluster.f6nqf.mongodb.net/backend_db?retryWrites=true&w=majority&appName=trialCluster"
  )
  .then(() => { 
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
