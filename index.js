import express from "express"
import app from "express-ws-routes"
import dotenv from 'dotenv'
//import robotRoutes from "./routes/robotRoutes.js";
dotenv.config()

app.use(express.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', ['*']);
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});

const router = app.Router()
router('/', (info, cb)=>{
    cb(function(socket) {
        socket.send('connected!');
    });
})
app.use("/", router)


app.listen(process.env.APP_PORT, ()=>{
    console.log("API listening on port", process.env.APP_PORT)
})


