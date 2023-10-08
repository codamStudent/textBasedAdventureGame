var rs = require("readline-sync")
class Hud{
    static fillSpacesCentered(input, size) {
        let flipflop = false
        if (flipflop) input = input + ' '
        else input = ' ' + input
        
        return input
    }

// const hud = new Hud();


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