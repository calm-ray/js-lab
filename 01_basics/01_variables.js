const accountId = 1444543
let accountEmail = "akr@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 2 // will throw TypeError: Assignment to constant variable.
// console.log(accountId); 

accountEmail = "anjani@gmail.com"
accountPassword = "21212"
accountCity = "Howrah"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/**
 * Prefer not to use var
 *  because of issue in block and functional scope
 */