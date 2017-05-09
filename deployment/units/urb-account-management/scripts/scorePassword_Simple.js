Object.defineProperty(exports,"__esModule",{value:true});exports.default=

scorePassword_Simple;function scorePassword_Simple(
pass,
uniqueLettersAwardUntilRepetitions,
variationAwardCoefficient)

{
var score=0;
if(!pass)
return 0;


var letters=new Object();
for(var i=0;i<pass.length;i++)
{
letters[pass[i]]=(letters[pass[i]]||0)+1;
score+=uniqueLettersAwardUntilRepetitions/letters[pass[i]];
}


var variations={
digits:/\d/.test(pass),
lower:/[a-z]/.test(pass),
upper:/[A-Z]/.test(pass),
nonWords:/\W/.test(pass)};


var variationCount=0;
for(var check in variations){
variationCount+=variations[check]==true?1:0;}

score+=(variationCount-1)*variationAwardCoefficient;

return score;
}
//# sourceMappingURL=scorePassword_Simple.js.map