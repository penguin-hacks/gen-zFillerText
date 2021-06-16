const express = require('express');
const app = express();

// Require the express routes defined in router.js
const routes = require('./router');

// Define the hostname and port where the server can be found
const hostname = "genz-ipsum.herokuapp.com";
// const port = 3000;

// Define the directory where static files are found
app.use(express.static('public'));

// Specify the routes to be used for our application 
app.use(routes);

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}`);
//   console.log(`Server is listening at http://${hostname}:${port}/`);
})