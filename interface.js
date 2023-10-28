var rs = require("readline-sync")
var temp = 0, temp2 = 0
class Hud{
    //TODO: test all fillspaces to their function name
    static fillSpacesRight(input, size){
        size -= input.length

        while (size != 0) {
            input = input + ' '
            size--;
        }
        return input
    }
    
    static fillSpacesLeft(input, size){
        size -= input.length

        while (size != 0) {
            input = ' ' + input
            size--;
        }
        return input
    }

    static fillSpacesCentered(input, size) {
        size -= input.length
        let flipflop = false
        
        while (size >= 0) {
            if (flipflop)
                 {input = input + ' '; flipflop = false}
            else {input = ' ' + input; flipflop = true}
            size--
        }
        return input
    }

    
    static cutString(string, Max_length ) {
        for (let index = Max_length; index >= 0; index--)
            if (string[index] == '\n' || string[index] == ' ' )
                return [string.substring(0, index), index];
    }

    static cutStringTwice(string, Start, Max_length ) {
        for (let index = Max_length; index >= 0; index--)
            if ((Start + index) < string.length) 
                if (string[Start + index] == '\n' || string[Start + index] == ' ')
                    return [string.substring(Start, Start + index), Start + index];
        //at htis point we are at the end of the string, i mark this with -1 ... 
        return ["", -1]
    }

// const hud = new Hud();
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// the final part that shows the dialogue and image and gets the user input
static showScreenDialogue(CName, dialogue, image, question){
        let LineLength = 152, lastprintedchar = 1, texttobeprinted = ""
    dialogue = this.fillSpacesRight(dialogue, LineLength * 9)

    console.log("                                      ------------------------------                                                                                        ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("                                                                                                                                                            ")
    console.log("  _________________________                                                                                                                                 ")
    console.log(" |                         |                                                                                                                                ")
    console.log(" |                         |                                                                                                                                ")
    console.log(" |" + this.fillSpacesCentered(CName, 24) + "|                                                                                                                                ")
    console.log(" |                         |                                                                                                                                ")
    console.log(" |_________________________|______________________________________________________________________________________________________________________________  ")


    
    //this ensures good line wrapping(, hopefully, havent tested it yet)
    for (let Line = 0; Line <= 8; Line++) {
        // ... so that i can intercept it later
    if (lastprintedchar) {
	    [texttobeprinted, lastprintedchar] = this.cutStringTwice(dialogue, lastprintedchar, LineLength);
        console.log(" |"+ this.fillSpacesRight(texttobeprinted, LineLength)+"| ");
        // skip the ' ' at which we just cut of
	    lastprintedchar++
    }else 
        console.log(" |"+ this.fillSpacesRight("", LineLength)+"| ")
    }

    console.log(" |________________________________________________________________________________________________________________________________________________________| ")
    console.log("                                                                                                                                                            ")
    
    return rs.question(question)
    }

    /*function cutStringTwice(string, Start, Max_length ) {
    for (let index = Max_length; index >= 0; index--)
        if ((Start + index) < string.length) 
            if (string[Start + index] == '\n' || string[Start + index] == ' ')
                return [string.substring(Start, Start + index), Start + index];
    //at htis point we are at the end of the string, i mark this with -1 ... 
    return ["", -1]
}

dialogue = ' ' + dialogue + ' '

for (let Line = 0; Line <= 8; Line++) {
	// ... so that i can intercept it later
    if (lastprintedchar) {
	    [texttobeprinted, lastprintedchar] = cutStringTwice(dialogue, lastprintedchar, LineLength);
        console.log(" |"+ fillSpacesRight(texttobeprinted, LineLength)+"| ");
        // skip the ' ' at which we just cut of
	    lastprintedchar++
    }else 
        console.log(" |"+ fillSpacesRight("", LineLength)+"| ")
    }*/


    /*let Max_length = 69, string = "sASDFASDasdfssadjfkladsjflkajsdfasdfkljasdfakldshfdashasd fasdf argbys fbwrsb", printString = ""

function cutString(Max_length, string) {
    for (let index = Max_length; index >= 0; index--)
        if (string[index] == '\n' || string[index] == ' ' )
            return string.substring(0, index);
}*/

    static showScreenQuestion(CName, dialogue, image, question){
        
        console.log("                                      ------------------------------                                                                                        ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("                                                                                                                                                            ")
        console.log("  _________________________                                                                                                                                 ")
        console.log(" |                         |                                                                                                                                ")
        console.log(" |                         |                                                                                                                                ")
        console.log(" |" + this.fillSpacesCentered(CName, 25) + "|                                                                                                                                ")
        console.log(" |                         |                                                                                                                                ")
        console.log(" |_________________________|______________________________________________________________________________________________________________________________  ")

        //this ensures good line wrapping(, hopefully, havent tested it yet)
        for (let Line = 8; Line < 0; Line--) {
            let LineLength = 152
            console.log(" |" + dialogue.substring(0 + LineLength * Line, LineLength + LineLength * Line) + "| ")
        }

        console.log(" |________________________________________________________________________________________________________________________________________________________| ")
        console.log("                                                                                                                                                            ")

        return rs.question(question)
    }
}

Hud.showScreenDialogue("jannes", "aaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccccccccc ddddddddddddddddddddddd eeeeeeeeeeeeeeeee ffffffffffffffffffffff gggggggggggggggggggggg"
,"aa", "what?")

console.log(Hud.fillSpacesRight("your mom", 18) + Hud.fillSpacesLeft("your mmo", 18))

module.exports = Hud