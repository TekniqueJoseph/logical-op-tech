const userInput = '';
const isValidInput = !!userInput; //coverts the type to real false
// if(userInput){
//     console.log('here')
// } else {
//     console.log('no here')
// }
// const result = userInput ? true : false
const userName = userInput || 0; // user name = Black due to userInput being false

const rUserI = 'Shay';
const rUserN = rUserI;
const theUser = rUserI || 'Cam' // theUser = Shat due to Shay being true

let check = null;
const checkIt = check || '' // '' since both are false

let isLoggedIn = 'Joe'
const Cart = isLoggedIn && ['Books'] // Books sice both are true

let stillIn = 'Joe'
const checkOut = stillIn && '' // '' due to it being false

let cashOut = null
const chashier = cashOut && ''; // null since both are false