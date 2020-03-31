module.exports = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-auth-token, Content-Type, Accept");
  next();
}