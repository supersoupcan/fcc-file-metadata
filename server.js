var multer = require('multer')
var upload  = multer({dest : 'uploads/'});

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single('myFile'), function (req, res, next){
  if (req.file){
    res.json({
      size : req.file.size,
      fileType : req.file.mimetype
    });
  }else{
    res.sendStatus(400);
  }
});

app.listen(process.env.PORT);