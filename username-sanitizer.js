const MAX_USERNAME_LENGTH = 16;

console.log("Welcome to our application!")
const username = prompt("Please choose a username: ")

function sanitizeUsername(input){
    input = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, MAX_USERNAME_LENGTH)
    
    if(input == "") return "Username Empty!"
    return input
}

console.log("Your final username is:", sanitizeUsername(username))
