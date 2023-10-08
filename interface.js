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
static showScreen(CName, dialogue, image){
    
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
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |                                                                                                                                                        | ")
    console.log(" |________________________________________________________________________________________________________________________________________________________| ")
    console.log("                                                                                                                                                            ")
    }
}
console.log(Hud.fillSpacesCentered("jannes", 9))

var answer = rs.question()
module.exports = Hud