const accountId = 12345
let accountEmail = "iamtheboss@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState
/*
prefer not to use var because of issue of block scope and functional scope, instead of var use let
*/

// accountId = 2 // Not allowed
accountEmail = "youaretheboss@gmail.com"
accountPassword = "234567"
accountCity = "Malpura"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
