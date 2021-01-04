const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
    
    const PORT = 4000;
    app.use(bodyParser.urlencoded({ extended: true}));
    app.listen(PORT, (req,res)=>{
        console.log('server is running at port:', PORT)
    })
 
    // app.get('/',(req,res)=>{
    //     res.send('<h1>Hello World!</h1>')
    // })

    // app.get("/", (req,res)=>{
    //     res.sendFile(path.join(__dirname, 'public','index.html'))
    // })

    // app.get("/aboutus", (req,res)=>{
    //     // res.send('<h2>AboutUs<h2>')
    //     res.sendFile(path.join(__dirname, 'public','aboutus.html'))
    // })

    // app.get("/contactus", (req,res)=>{
    //     // res.send('<h2>AboutUs<h2>')
    //     res.sendFile(path.join(__dirname, 'public','contactus.html'))
    // })

    app.get("/login", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
        res.sendFile(path.join(__dirname, 'registration','login.html'))
    })
    app.post('/login',(req,res)=>{
        res.send(req.body.email);
    })

    app.get("/signup", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
        res.sendFile(path.join(__dirname, 'registration','signup.html'))
    })

    app.use(express.static(path.join(__dirname,'public')))

  
