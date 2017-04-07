var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    if(typeof req.body.user.bio !== 'undefined'){
      user.bio = req.body.user.bio;
    }
    if(typeof req.body.user.image !== 'undefined'){
      user.image = req.body.user.image;
    }
    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    });
  }).catch(next);
});

router.post('/users/login', function(req, res, next){
  console.log("LOGGIN IN")
  if(!req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }
  console.log("PASSPORT", req.body)
  passport.authenticate('local', {session: false}, function(err, user, info){
    console.log("ERR", err);
    if(err){ return next(err); }

    if(user){
      console.log("USER",user)
      user.token = user.generateJWT();
      console.log("TOKEN",user.token)
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/users', function(req, res, next){
  console.log("REGISTERING", req.body)
  var user = new User();
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    var r = {user: user.toAuthJSON()}
    console.log("FINISHED SAVING USER", r)
    return res.json(r);
  }).catch(next);
  // res.json({status:200})
});

module.exports = router;
