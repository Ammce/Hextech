var router = require('express').Router();


  router.get("/", (req, res) =>{
    res.render("index");
  });

  router.get('/user', (req, res)=>{
    res.json("User");
  });

  router.post('/send', (req, res) => {
    let msg = req.body.name;
    console.log('working ' + msg);
    res.json({greetings: "Hello it is workinggg"});

  });

  router.get('*', (req, res)=>{
    res.render('index');
  });

module.exports = router;
