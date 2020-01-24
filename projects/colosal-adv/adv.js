const readlineSync = require('readline-sync');

const userName = readlineSync.question('Name your champion ');
console.log('greetings ' + userName + '!');
console.log('Life duh')

const player = {
    hp: 100, 
    username: userName 
}
const snakes = ["jerry","morty"]
const goblin = "rick"


let progression = 0;
while (player['hp'] > 1) {
    
    
    progression = showProgress(progression);
    progression += 1;
   
    let attackOrNot = Math.random() * 10;
    if (Math.ceil(attackOrNot) * 10 <= ((4 / 4) * 100)) { 
        console.clear()
        console.log('attack!!!');
        var userName = readlineSync.question('snake bite tuff luck');
        player["hp"] -= 20
        console.log("your health is", player["hp"])
        pause(5000)
    } 


    if (progression === 60) {
        console.log('your a true champion', progression);
    }

}


function showProgress(progression) {
    let MAX = 60, MIN = 0, value = progression, key;
    console.log('\n\n' + (new Array(20)).join(' ') +
      'Press m to walk  FIX: [SPACE]\n');
    while (true) {
      console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value);
      key = readlineSync.keyIn('',
        {hideEchoBack: true, mask: '', limit: 'M q'}
        ); 
        if (value === 20) return value
        if (value === 30) return value
        if (value === 60) return value
        if (key === 'q') process.exit(0)
        // if (value === 10) return value;
        if (key === 'z') { if (value > MIN) { value--; } }
      else if (key === 'm') { if (value < MAX) { value++; } }
      else { break; }
    }
    console.log('\nA value the user requested: ' + value);

}






function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) {
        /* Do nothing */
    }
}