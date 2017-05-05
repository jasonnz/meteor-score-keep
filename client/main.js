// import './../imports/utils';
import someDefault, {greetUser, name} from './../imports/utils';

console.log('Log from /client/main.js');
console.log(greetUser() + ' ' + name + '\n' + someDefault);