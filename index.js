import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/post.js';

dotenv.config();


const app = express();



app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>{
    res.send('Welcome!');
})


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://abhay:nopassword@cluster0.cn0tx.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// const CONNECTION_URL = "mongodb+srv://abhay:nopassword@cluster0.cn0tx.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT ||5001;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log('Server is running cool!')))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);

// app.listen(port,() => {
//     console.log("Server running");
// })

