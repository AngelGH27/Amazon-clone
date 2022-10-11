const functions= require("firebase-functions");

const express=require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51Kl4yPSHDaf0ApOCGDQKZyul1ReR2KQvPY5YCaopKMGvVUTaJK65QM3ZEqzu5HU2MtsSVdhQRfDURTKg9Osn8egr00VsgwjjhE');


// App config

// const port=5000;
// const url="http://localhost"

const app=express();

// Middlewares

app.use(cors({origin:true}));
app.use(express.json());

// API routes

app.get("/god",(req,res)=>{
    res.send("God is great");
})

app.post('/payments/create', async (req,res)=>{
    const total=req.query.total;

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
      res.status(201).send({
        clientSecret:paymentIntent.client_secret,
      })
})

// Listen command
express.api=functions.https.onRequest(app);

