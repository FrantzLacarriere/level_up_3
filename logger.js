// export a middleware function using module.exports
// write a function that takes 3 arguments, request, response, and next
// caputre the start time with +new Date();
// use the response's 'finish' event to write when a request is done
//
module.exports = function(req, res, next){
  var start = +new Date(),
     url = req.url,
     method = req.method,
     stream = process.stdout;

  res.on('finish', function(){
    var duration = +new Date() - start;
    stream.write(`request took ${duration}ms to finish\n`);
  })
  next();
}
