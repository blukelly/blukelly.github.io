let nouns = ["whale", "door", "city", "flute", "eye", "chair", "heart", "man", "loon"];
let adjectives = ["angry", "defeated", "calm", "gentle", "happy", "colossal", "puny", "repulsive", "obedient", "victorious", "zealous", "obnoxious", "mammoth", "teeny"]

document.getElementById("noun1").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])
document.getElementById("noun2").innerHTML = (nouns[Math.floor(Math.random() * nouns.length)])


document.getElementById("adj1").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
document.getElementById("adj2").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
document.getElementById("adj3").innerHTML = (adjectives[Math.floor(Math.random() * adjectives.length)])
