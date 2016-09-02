var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var file = require('fs').createWriteStream('image.png');
s3.getObject({Bucket: 'favelix', Key: 'images/yeoman.8cb970fb.png'}).createReadStream().pipe(file);
s3.getObject({Bucket: 'favelix', Key: 'images/yeoman.8cb970fb.png'}, function(err, data){
  if(err){
    console.log(err, err.stack)
  }
  else{
    if(data.Metadata.move == 'true'){
      var stream = require('fs').createReadStream('image.png');
      s3.upload({Bucket: 'cc116-assignment3', Key: '18117/image.png', Body: stream}, function(err, data){
        if(err){
          console.log(err, err.stack)
        }
        else{
          console.log("success");
        }
      })
    }
    else{
      console.log("no upload");
    }
  }
});
