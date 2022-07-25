const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());

const PORT = process.env.PORT || 8000;

const products = require("./routes/products");
const members = require("./routes/members");
const orders = require("./routes/orders");
const auth = require("./routes/auth");

//parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  if (req.session.loggedin){
    res.send({
      express: "You're logged in.",
    });
  } else {
    res.send({
      express: "You're not logged in.",
    });
  }  
});


//include routes
app.use("/", auth);
app.use("/orders", orders);
app.use("/products", products);
app.use("/members", members);

// // Have Node serve the files for our built React app
// //this serves the react app files to users machine from heroku
// app.use(express.static(path.resolve(__dirname, '../client/build')));
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

}

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

//Middleware - Error handler for routes that doesnt exist
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = (404);
  next(err);
});

//Error handler define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
})

//listen on PORT 8000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
