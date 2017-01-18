//개발자환경, 사용자환경으로 수정하고 싶다면 'production'으로 수정한다.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express_config.js');
var mongoose=require('./config/mongoose.js')

var db=mongoose();
var app = express();

app.listen(3000);
module.exports=app;
console.log('Server running at http://localhost:3000');
