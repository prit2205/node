const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/web/v1/user.route");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();


//cors origin --> allow only that website that mention into origin group,ex.backend only res when localhost 3005 send request ,other than give cors error 
//localhost 3005 --> req --> accept --> give response 
//localhost 3004 --> req --> cors error --> don't give response 
// in origin you mention frontend urls(devlopment,production both)
app.use(cors({ origin: "https://localhost:3002", credentials: true }));

PORT = process.env.PORT;

// temp route --> in Backend we Don't create a Home Route. after Testing / Devlopement Remove Home Route
app.get("/", (req, res) => {
    res.status(401).json({ message: "Access Denined !!"});
});


app.use("/user" , userRouter)// --> localhost: 3005/user?register


app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
});

