const text = "I am someone who turns complexity into elegant, efficient solutions through thoughtful and precise code."

const limit = 30

function generatePreview(text, limit) {
    text = text.trim()
    
    if(text.length > limit){
        return text.slice(0, limit) + "..."
    } 
    else{
        return text
    }
}

console.log(generatePreview(text, limit))
