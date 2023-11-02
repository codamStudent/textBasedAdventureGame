if (!("parse" in Array.prototype)) {
  Object.defineProperty(Array.prototype, "parse", {
    enumerable: false,
    value: function () {
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

function cutStringAtChar(string = "", char) {
  for (const key in string)
    if (string[key] == char)
      return string.substring(0, key)
}

function cutStringAtCharReverse(string = "", char = '') {
  for (let key = string.length; key != 0; key--)
    if (string[key] == char)
      return string.substring(++key, string.length)
  return string
}

function parseImage(pointer = "", index) {
  const { $ref } = pointer;
  let obj = require(cutStringAtChar($ref[index], '#'));
  const splits = cutStringAtCharReverse($ref[index], "#").split('/');

  for (const s of splits)
    obj = obj[s];
  return obj;
}

// import { fillSpacesCentered, fillSpacesLeft, fillSpacesRight, showScreenDialogue, showScreenQuestion } from "./interface.js"
var IF = require("./interface.js")
var story = require("./story.json")

// console.log(IF.fillSpacesCentered("asjkf;ldj", 2))
// console.log(IF.fillSpacesRight("asjkf;ldj", 44))
// console.log(story[1].screen);

function followStory(index) {
  if (index === undefined) return

  for (const part in story[index].dialogue) {
    if (story[index].dialogue[part] == null) return;
    if (part != story[index].dialogue.length - 1) {
      IF.showScreenDialogue(
        story[index].namebox[part],
        story[index].dialogue[part],
        parseImage(story[index].screen, part)
      )
    }
  }

  followStory(story[index].continue_at[IF.showScreenQuestion(
    story[index].namebox[story[index].namebox.length - 1],
    story[index].options,
    parseImage(story[index].screen, story[index].namebox.length - 1),
    story[index].dialogue[story[index].dialogue.length - 1]
  )])
}

// parseImage(story["1"].screen, 0);

followStory("1")


