var m=[];vertx.createHttpServer().requestHandler(function(r){m.push(r.params().get('m'));r.response().putHeader("Content-Type","text/html").end(m.join('<p>')+'<form><input name=m>')}).listen(8080)
