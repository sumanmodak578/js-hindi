const accountId = 144553
let accountEmail = "example@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "sample@gmail.com"
accountPassword = "67890"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);