const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;

const products = require("./routes/products");
const members = require("./routes/members");
const orders = require("./routes/orders");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({
    express: "Your Backend Service is Running.",
  });
});

app.use("/orders", orders);
app.use("/products", products);
app.use("/members", members);

// // Have Node serve the files for our built React app
// //this serves the react app files to users machine from heroku
// app.use(express.static(path.resolve(__dirname, '../client/build')));

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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
