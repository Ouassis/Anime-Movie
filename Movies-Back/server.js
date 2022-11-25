const express = require('express')
const path = require('path');
const app = express();

app.use('/',express.static(path.join(__dirname,'angular')));

app.get('',(req,res)=>{
  res.sendFile(path.join(__dirname,'angular','server.js'));
});

app.listen(PORT,()=>{
  console.log('server running at http://localhost:${PORT}');
});
