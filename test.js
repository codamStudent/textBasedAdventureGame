// let string = "aaaaabvbbbcccccdddddeeeee"

const { start } = require("discord");
const { GuildAuditLogsEntry, GuildAuditLogs } = require("discord.js");

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

// let Max_length = 69, string = "sASDFASDasdfssadjfkladsjflkajsdfasdfkljasdfakldshfdashasd fasdf argbys fbwrsb", printString = ""

// function cutString(Max_length, string) {
//     for (let index = Max_length; index >= 0; index--)
//         if (string[index] == '\n' || string[index] == ' ' )
//             return string.substring(0, index);
// }


// console.log(cutString(Max_length, string));

function returnTwo() {
    return ["aaaaaa", 7]}
// }
// function printTwo(a, b) {
//     console.log(a);
//     console.log(b);
// }

let aaa, bbb, ccc

[aaa, bbb] = returnTwo()
console.log(bbb);

// [aaa,bbb] = [3,2]
// console.log(aaa);
// console.log(bbb); 
// [ccc] = returnTwo()
// console.log(ccc);
// printTwo([ccc] = returnTwo(),aaa)

// let eee = ["aaaaaaaaaaaa", 34] + 1
// console.log(eee[15]);
var texttobeprinted = "", lastprintedchar = 0, LineLength = 30 
let dialogue = "aaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccc dddddddddddddddddd eeeeeeeeeeeeee ffffffffffffffffffffffffffff"

function fillSpacesRight(input, size){
    size -= input.length

    while (size != 0) {
        input = input + ' '
        size--;
    }
    return input
}

function cutString(string, Max_length ) {
    for (let index = Max_length; index >= 0; index--)
        if (string[index] == '\n' || string[index] == ' ' )
            return [string.substring(0, index), index];
}

function cutStringTwice(string, Start, Max_length ) {
	// console.log(Start, Max_length);
    for (let index = Max_length; index >= 0; index--){
        console.log(index + Start, string.length);
		if(string.length < (index + start)){
            console.log("true");}
        else{
            console.log("false");
        }
		// console.log(string.length > (index + start))
        if (string[Start + index] == '\n' || string[Start + index] == ' '){									/**/

            return [string.substring(Start, Start + index), Start + index];
}}}



// [texttobeprinted, lastprintedchar] = cutStringTwice(dialogue, 40, LineLength)
// console.log(texttobeprinted, lastprintedchar);
   



// [texttobeprinted, lastPrintedhar] = cutStringTwice(dialogue, lastprintedchar, LineLength)
    // console.log(" |"+ fillSpacesRight(texttobeprinted, LineLength)+"| ");

    // // [texttobeprinted, lastprintedchar] = cutString(dialogue.substring(lastprintedchar, dialogue.length))
    // console.log(" |"+ fillSpacesRight(texttobeprinted, LineLength)+"| ");
    // // fillSpacesRight(cutString(dialogue, LineLength))
    
    //this ensures good line wrapping(, hopefully, havent tested it yet)
    for (let Line = 0; Line <= 8; Line++) {


		[texttobeprinted, lastprintedchar] = cutStringTwice(dialogue, lastprintedchar, LineLength);
		// console.log(texttobeprinted+'a');
		console.log(" |"+ fillSpacesRight(texttobeprinted, LineLength)+"| ");
		console.log(lastprintedchar++);

        // console.log(" |" + dialogue.slice(0 + (LineLength * Line), (LineLength * (Line+1))) + "| ")
    }
