if (!("parse" in Array.prototype)) {
  Object.defineProperty(Array.prototype, "parse", {
    enumerable: false,
    value: function() {
      var o, i, ln = this.length;
      while (ln--) {
        i = Math.random() * (ln + 1) | 0;
        o = this[ln];
        this[ln] = this[i];
        this[i] = o;
      }
      return this;
    }
  });
}

// import { fillSpacesCentered, fillSpacesLeft, fillSpacesRight, showScreenDialogue, showScreenQuestion } from "./interface.js"
var IF = require("./interface.js")
var story = require("./story.json")

console.log(IF.fillSpacesCentered("asjkf;ldj", 2))
console.log(IF.fillSpacesRight("asjkf;ldj", 44))
console.log(story[1].screen);

function followStory(index) {
    if (index === undefined) return

    for (part in story[index].dialogue) 
        IF.showScreenDialogue(story[index].namebox[part] ,story[index].dialogue[part], parseImage(story[index].screen, part))
        
    

    followStory(story[index].continue_at[IF.showScreenQuestion(story[index].dialogue[story[index].dialogue.length - 1], story[index].options)])
}

function parseImage(pointers, index) {
    
}

