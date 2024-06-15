let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];



function excusaGenerator(){
    let quien = Math.floor(Math.random() * 4);
    let accion = Math.floor(Math.random() * 4);
    let que = Math.floor(Math.random() * 3);
    let cuando = Math.floor(Math.random() * 5);
   console.log(who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]);
}

excusaGenerator();