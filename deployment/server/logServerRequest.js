Object.defineProperty(exports,"__esModule",{value:true});exports.default=


logServerRequest;function logServerRequest(req,res,next,loggingFunction){
var oldWriteRes=res.write;
var oldEndRes=res.end;

var chunksRes=[];

res.write=function(chunk){
chunksRes.push(new Buffer(chunk));
oldWriteRes.apply(res,arguments);
};

res.end=function(chunk){
if(chunk)chunksRes.push(new Buffer(chunk));

var responseBody=Buffer.concat(chunksRes).toString('utf8');


var clientIP=req.headers['x-real-ip']||req.connection.remoteAddress;

var user=void 0;
if(res.codeFoundriesInjected&&res.codeFoundriesInjected.user)
user=res.codeFoundriesInjected.user;else
user='not determined';

var requestAndResponse={
headers:req.headers,
cookies:req.cookies,
user:user,
query:req.body,
response:responseBody,
clientIP:clientIP};


loggingFunction(requestAndResponse);

oldEndRes.apply(res,arguments);
};

next();
}
//# sourceMappingURL=logServerRequest.js.map