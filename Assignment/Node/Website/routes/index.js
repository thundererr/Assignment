var express = require('express');
var path = require("path"); 
var app = express();
var router = express.Router();

router.get('/', (req, res, next)=>{
	// app.use(express.static(path.join(__dirname, 'views')))
	res.sendFile(path.join(__dirname + '/../views/index.html'));
})


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
