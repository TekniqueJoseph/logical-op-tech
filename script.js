const userInput = '';
const isValidInput = !!userInput; //coverts the type to real false
// if(userInput){
//     console.log('here')
// } else {
//     console.log('no here')
// }
// const result = userInput ? true : false
const userName = userInput || 'Black'; // user name = Black due to userInput being false

const rUserI = 'Shay';
const rUserN = rUserI;
const theUser = rUserI || 'Cam' // theUser = Shat due to Shay being true

let isLoggedIn = true
const Cart = isLoggedIn && ['Books']

let stillIn = false
const checkOut = stillIn && ['Books']