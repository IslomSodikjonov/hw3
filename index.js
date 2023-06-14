// Task 1
let str = 'aaa@bbb@ccc'

console.log(
    str.replace(/@/g,"!")
)



// Task 2
let text = "HELLOWORLD"

console.log(
    text[0] +
    text.slice(text.search("ELLO"), text.search("ELLO") + 4).toLowerCase() + " " +
    text.slice(text.search("WORLD"), text.search("WORLD") + 5).toLowerCase()
)



//Task 3
let textTwo = 'Hello, it is HTML'

let language = 'JS'

console.log(
    textTwo.slice(textTwo.search("Hello"), textTwo.search("Hello") + 5) +
    textTwo.slice(textTwo.search(" it"), textTwo.search(" it") + 6) + ' not ' + language
)



//Task 4
let a = 'alex'

console.log(
    a.charAt(0).toUpperCase() + a.slice(1)
)



//Task 5
function getRandomInt(max) {
    return Math.floor(Math.random() * 100);
}

console.log(getRandomInt());

console.log(getRandomInt());

console.log(getRandomInt());



//Task 6
let txt = 'Lex luter has a big suit'

console.log(
    txt.slice(txt.search("a"), txt.search("a") + 1).toUpperCase() +
    txt.slice(txt.search("Lex"), txt.search("Lex") + 3).toLowerCase()
)