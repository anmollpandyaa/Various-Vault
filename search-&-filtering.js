const search = prompt("Search for a position: ")

const items = [
  "JavaScript Developer",
  "Java Backend Engineer",
  "Frontend Developer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Data Analyst",
  "Full Stack Developer"
];

function searchItems(items, query) {
    const found = []
    query = query.toLowerCase().trim()
    
    for(let i = 0; i < items.length; i++)
    {
        const item = items[i].toLowerCase().trim()
        if(item.includes(query)){
            found.push(items[i])
        }
    }
    
    return found.length === 0 ? "no position found" : found
}

console.log(searchItems(items, search))
