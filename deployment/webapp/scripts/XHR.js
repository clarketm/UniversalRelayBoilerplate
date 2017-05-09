Object.defineProperty(exports,"__esModule",{value:true});exports.

postXHR=postXHR;function postXHR(url,jsondata,onSuccess,onFailure){

var xhr=new XMLHttpRequest();
xhr.open('POST',url);
xhr.setRequestHeader('Content-Type','application/json');

xhr.onreadystatechange=function(){

if(xhr.readyState==4){
if(xhr.status==200){

onSuccess(xhr.responseText);
}else{

onFailure(xhr.responseText);
}
}
};

xhr.send(JSON.stringify(jsondata));
}
//# sourceMappingURL=XHR.js.map