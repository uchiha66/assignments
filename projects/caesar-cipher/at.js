var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function cypher(strg, offset){
// const lowerCaseStr = str.toLowerCase();
const alphab = 'abcdefghijklmnopqrstuvwuxyz'.split('');
let encrypt = '';
for(let i = 0; i < strg.length; i++){
    strg[i] 
    const index = alphab.indexOf(strg [i])
    let newIndex = ( (index + shift )% 26 ) 

    encrypt += newChatacter




  }
 
  return encrypt


}


console.log(cypher(input,shift))


