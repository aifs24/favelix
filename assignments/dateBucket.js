var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var date;

s3.listObjects({Bucket : 'favelix'}, function(err, data){
  if (err)
    console.log(err, err.stack);
  else{
    for(x in data.Contents){
      if(date < data.Contents[x].LastModified || date == null){
        date = data.Contents[x].LastModified;
      }
    }
    console.log("Date of Website: " + date);
  }
});
