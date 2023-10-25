// let string = "aaaaabvbbbcccccdddddeeeee"

// console.log(string.slice(0, 5))
// console.log(string.slice(5,10))
// console.log(string.slice(10, 15))
// console.log(string.slice(15, 20))
// console.log(__dirname)
// console.log("|" + "                 " +"\\");
// const { properties } = require('./test.json');    
// let json = require('node:json')

// JSON.

// console.log(properties.ReferenceToLocalSchema.ref);

// "properties": {
//     "ReferenceToLocalSchema

let Max_length = 69, string = "sASDFASDasdfssadjfkladsjflkajsdfasdfkljasdfakldshfdashasd fasdf argbys fbwrsb", printString = ""

function cutString(Max_length, string) {
    for (let index = Max_length; index >= 0; index--)
        if (string[index] == '\n' || string[index] == ' ' )
            return string.substring(0, index);
}


console.log(cutString(Max_length, string));