const url = prompt("enter a URL: ")

function validateURL(url){
    url = url.trim().toLowerCase()
    if(url.includes(" ")) return "invalid URL"
    if(url.startsWith("http://") || url.startsWith("https://")) return "valid URL"
    else return "invalid URL"
}

console.log(validateURL(url))
