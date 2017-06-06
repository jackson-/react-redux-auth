var router = require('express').Router();
var mongoose = require('mongoose');

// return a list of tags
router.get('/', function(req, res, next) {
    return res.json({tags: []});
});

module.exports = router;
