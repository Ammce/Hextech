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
  });

<<<<<<< HEAD
  router.get('/*', (req, res)=>{
=======
  router.get('*', (req, res)=>{
>>>>>>> Third commit
    res.render('index');
  });

module.exports = router;
