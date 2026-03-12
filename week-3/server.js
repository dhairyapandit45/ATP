// Create express server
import exp from 'express'
// import from mongoose module
import { connect } from 'mongoose'
// import productApp from ProductAPI
import { productApp } from './APIs/productAPI.js'
import cookieParser from 'cookie-parser'

const app = exp()

const port = 4000

//====================== middleware =============================
//app.use --> execute for every route


// add body parser
app.use(exp.json())

//cookie
app.use(cookieParser())

// forward product api requests by path /product-api
app.use('/product-api',productApp)

//_____________________start server_______________________________
app.listen(port,()=>console.log(`Server running on port ${port}`))
//================================================================


//_________________connect to DB server___________________________
async function connectDB()
{
    try
    {
        await connect("mongodb://localhost:27017/mini-app");
        console.log("DB connection established")
    }
    catch(err)
    {
        console.log(err)
    }
}
connectDB()

// error handling middleware ->end of file or else it will send res for every step
app.use((err,req,res,next)=>{
    if(err.name === "ValidationError"){
        return res.status(400).json({message:"error occurred", err})
    }
    //cast error
    if(err.name === "CastError"){
        return res.status(400).json({message:"error occurred",err})
    }
})