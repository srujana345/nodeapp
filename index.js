// console.log('Helooww')

// let a=20
// let b=30
// let c=a+b
// console.log(c)

// function sqr(x){
//     return x*x
// }
// console.log(sqr(5))

// const sq=(a)=>{
//     return a*a
// }
// console.log(sq(5))

// import cors from 'cors'
import express from 'express'
const app=express();
// app.use(cors())
app.listen(8081,()=>{
    console.log('Server is running on port 8081')
});
app.get("/",(req,res)=>{
    res.send("Hello World")
})
// app.get("/home",(req,res)=>{
//     res.send("Home page")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact Page")
// })
// app.get("/faq",(req,res)=>{
//     res.send("FAQ Page")
// })

app.get('/products',(req,res)=>{
    const products=[
        {id:1,name:'Product 1',price:100},
        {id:2,name:'Product 2',price:200},
        {id:3,name:'Product 3',price:300},
        
    ];
    res.json(products)
});