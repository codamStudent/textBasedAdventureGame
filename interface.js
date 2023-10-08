var rs = require("readline-sync")
class Hud{
    //TODO: test all fillspaces to their function name
    static fillSpacesRight(input, size){
        size -= input.length

        while (size != 0) {
            input = input + ' '
        }
        return input
    }
    static fillSpacesLeft(input, size){
        size -= input.length

        while (size != 0) {
            input = ' ' + input
        }
        return input
    }
    static fillSpacesCentered(input, size) {
        size -= input.length
        let flipflop = false
        
        while (size != 0) {
            if (flipflop)
                 {input = input + ' '; flipflop == false}
            else {input = ' ' + input; flipflop == true}
            size--
        }
        return input
    }

// const hud = new Hud();
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// the final part that shows the dialogue and image and gets the user input
static showScreen(CName, dialogue, image, question){
    
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
        console.log(" |" + dialogue.slice(0 + LineLength * Line, LineLength + LineLength * Line) + "| ")
    }

    console.log(" |________________________________________________________________________________________________________________________________________________________| ")
    console.log("                                                                                                                                                            ")
    
    return rs.question(question)
    }
}
console.log(Hud.fillSpacesCentered("jannes", 9))

module.exports = Hud