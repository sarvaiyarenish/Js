const accountId = 123
let accountEmail = "sarvaiyarenish@gmail.com"
var accountPassword = "654321"
accountCity = "Rajot"
let accountMobileno

// accountId = 2 // its not allowed to change

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "renish@gmail.com"
accountPassword = "123456"
accountCity = "Surat"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountMobileno])
