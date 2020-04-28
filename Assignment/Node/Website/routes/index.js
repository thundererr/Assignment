var express = require('express');
var path = require("path"); 
var app = express();
var router = express.Router();


//middleware use
const logger = function (req,res,next){
	console.log("logged at : " + new Date());
}

//router.use('/', logger);

/* GET home page. */
// router.get('/',function(req,res) {
//   res.sendFile("index1.html");
//   //__dirname : It will resolve to your project folder.
// });



module.exports = router;
