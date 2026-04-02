// create a express server

// package.json ==> type = module ==> import
// package.json ==> type = commomjs ==> const, require

const express = require('express');
const path = require('path');

const app = express();

// MiddlWare ==> Middleware was run before route, call before function
// usecase: Authorization, Authentication, validation, Error handling
// user req ----> server
// server res ----> user
// with middleware : user req ----> middleware(server) --> server route
app.use(function(req, res, next){
    console.log("Middleware is Running 👩‍💻");
    next();
});
// login request ----> middleware(server) --> server route (profile)

// create a route
app.get("/", function(req, res){
    res.send("Welcome to Express.js 😎")
})

app.get('/profile', function(req, res) {
    res.send("Show profile page")
})

app.get('/login', function(req, res) {
    const dirPath = path.resolve();
    const FilePath = path.join(dirPath, 'Pages', 'login.html');
 res.sendFile(FilePath);
})

// error handling :
// last listed route. always write after all routes it will catch all the not handled by the pevious routes 
app.use(function(req, res){
    res.status(404).send("Page Not Found 🧨")
    res.status(500).send("Page Not Want Wrong 🎇")
})


app.listen(1212, () => {
    console.log("Server is Running 🐱‍👤")
})