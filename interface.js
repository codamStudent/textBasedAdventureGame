var rs = require("readline-sync")
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

// const hud = new Hud();
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// the final part that shows the dialogue and image and gets the user input
static showScreenDialogue(CName, dialogue, image, question){
        let LineLength = 152
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
        console.log(" |" + dialogue.slice(0 + (LineLength * Line), (LineLength * (Line+1))) + "| ")
    }
    // console.log("lalala"+dialogue+"lalala");

    console.log(" |________________________________________________________________________________________________________________________________________________________| ")
    console.log("                                                                                                                                                            ")
    
    return rs.question(question)
    }
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

Hud.showScreenDialogue("jannes", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
,"aa", "what?")

console.log(Hud.fillSpacesRight("your mom", 18) + Hud.fillSpacesLeft("your mmo", 18))

module.exports = Hud