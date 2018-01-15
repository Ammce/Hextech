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
    res.redirect('/contact');
  });

  router.get('*', (req, res)=>{
    res.render('index');
  });

module.exports = router;
