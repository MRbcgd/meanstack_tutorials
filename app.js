var express = require('./config/express_config.js');
var app = express();

app.listen(3000);
module.exports=app;
console.log('Server running at http://localhost:3000');
