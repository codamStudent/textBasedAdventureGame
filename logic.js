// import { fillSpacesCentered, fillSpacesLeft, fillSpacesRight, showScreenDialogue, showScreenQuestion } from "./interface.js"
var AAAA = require("./interface.js")
var story = require("./story.json")

console.log(AAAA.fillSpacesCentered("asjkf;ldj", 2))
console.log(AAAA.fillSpacesRight("asjkf;ldj", 44))
console.log(story[1].continue_at[3]);

function followStory(index) {
    if (index === undefined) return

    followStory()
}
