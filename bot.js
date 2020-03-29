console.log('bot!')
var config = require('./config')
console.log(config)

// Twitter API
var Twit = require('twit')
var T = new Twit(config)  // API key (excluded from Git)

