var express = require('express')
var app = express()


app.use(express.static(__dirname+"/dist"))
app.get('*',function(req,res){
	res.sendFile(__dirname+'/dist/index.html');
	return true;
})

var server = app.listen( process.env.PORT || 8081,function(){
  console.log('server is runing on port '+server.address().port)
})
