if (!("scramble" in Array.prototype)) {
	Object.defineProperty(Array.prototype, "scramble", {
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

var rs = require("readline-sync")
var temp = 0, temp2 = 0
class Hud {
	//TODO: test all fillspaces to their function name
	static fillSpacesRight(input = "", size) {
		size -= input.length

		while (size > 0) {
			input = input + ' '
			size--;
		}
		// console.log(input.length);
		return input
	}

	static fillSpacesLeft(input = "", size) {
		size -= input.length

		while (size >= 0) {
			input = ' ' + input
			size--;
		}
		return input
	}

	static fillSpacesCentered(input = "", size) {
		size -= input.length
		// console.log(input.length);
		let flipflop = false
		flipflop = false

		while (size > 0) {
			if (flipflop) { 
				input = input + ' '; 
				flipflop = false 
			}
			else { 
				input = ' ' + input; 
				flipflop = true 
			}
			size--
		}

		// console.log(input.length);
		return input
	}

	static cutString(string = "", Max_length) {
		for (let index = Max_length; index >= 0; index--)
			if (string[index] == '\n' || string[index] == ' ')
				return [string.substring(0, index), index];
	}

	static cutStringTwice(string = "", Start, Max_length) {
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
	static showScreenDialogue(CName, dialogue,
		image = ["", "", "", "", "",
			"", "", "", "", "",
			"", "", "", "", "",
			"", "", "", "", "",
			"", "", "", "", "", ""]) {
		let LineLength = 152, lastprintedchar = 1, texttobeprinted = ""
		dialogue = this.fillSpacesRight(' ' + dialogue, LineLength * 9)

		console.log(this.fillSpacesRight(image[0], LineLength))
		console.log(this.fillSpacesRight(image[1], LineLength))
		console.log(this.fillSpacesRight(image[2], LineLength))
		console.log(this.fillSpacesRight(image[3], LineLength))
		console.log(this.fillSpacesRight(image[4], LineLength))
		console.log(this.fillSpacesRight(image[5], LineLength))
		console.log(this.fillSpacesRight(image[6], LineLength))
		console.log(this.fillSpacesRight(image[7], LineLength))
		console.log(this.fillSpacesRight(image[8], LineLength))
		console.log(this.fillSpacesRight(image[9], LineLength))
		console.log(this.fillSpacesRight(image[10], LineLength))
		console.log(this.fillSpacesRight(image[11], LineLength))
		console.log(this.fillSpacesRight(image[12], LineLength))
		console.log(this.fillSpacesRight(image[13], LineLength))
		console.log(this.fillSpacesRight(image[14], LineLength))
		console.log(this.fillSpacesRight(image[15], LineLength))
		console.log(this.fillSpacesRight(image[16], LineLength))
		console.log(this.fillSpacesRight(image[17], LineLength))
		console.log(this.fillSpacesRight(image[18], LineLength))
		console.log(this.fillSpacesRight(image[19], LineLength))
		console.log(this.fillSpacesRight(image[20], LineLength))
		console.log(this.fillSpacesRight(image[21], LineLength))
		if (null == CName) {
			console.log(this.fillSpacesRight(image[22], LineLength))
			console.log(this.fillSpacesRight(image[23], LineLength))
			console.log(this.fillSpacesRight(image[24], LineLength))
			console.log(this.fillSpacesRight(image[25], LineLength))
			console.log(this.fillSpacesRight(image[26], LineLength))
			console.log("  ________________________________________________________________________________________________________________________________________________________  ")
		} else {




			console.log("  _________________________ " + this.fillSpacesRight(image[22].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[23].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[24].substring(28), LineLength - 24))
			console.log(" |" + this.fillSpacesCentered(CName, 25) + '|' + this.fillSpacesRight(image[25].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[26].substring(28), LineLength - 24))
			console.log(" |_________________________|______________________________________________________________________________________________________________________________  ")
		}


		//this ensures good line wrapping(, hopefully, havent tested it yet)
		for (let Line = 0; Line <= 8; Line++) {
			// ... so that i can intercept it later
			if (lastprintedchar) {
				[texttobeprinted, lastprintedchar] = this.cutStringTwice(dialogue, lastprintedchar, LineLength);
				console.log(" |" + this.fillSpacesRight(texttobeprinted, LineLength) + "| ");
				// skip the ' ' at which we just cut of
				lastprintedchar++
			} else
				console.log(" |" + this.fillSpacesRight("", LineLength) + "| ")
		}

		console.log(" |________________________________________________________________________________________________________________________________________________________| ")
		console.log("                                                                                                                                                            ")
		rs.question("continue")
	}



	static something() {
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
	}

	static showScreenQuestion(CName, options = ["", "", "", ""], image = ["", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "", ""], question) {

		let LineLength = 152, printedLineCount = 0 /*lastprintedchar = 1, texttobeprinted = ""*/

		console.log(this.fillSpacesRight(image[0], LineLength))
		console.log(this.fillSpacesRight(image[1], LineLength))
		console.log(this.fillSpacesRight(image[2], LineLength))
		console.log(this.fillSpacesRight(image[3], LineLength))
		console.log(this.fillSpacesRight(image[4], LineLength))
		console.log(this.fillSpacesRight(image[5], LineLength))
		console.log(this.fillSpacesRight(image[6], LineLength))
		console.log(this.fillSpacesRight(image[7], LineLength))
		console.log(this.fillSpacesRight(image[8], LineLength))
		console.log(this.fillSpacesRight(image[9], LineLength))
		console.log(this.fillSpacesRight(image[10], LineLength))
		console.log(this.fillSpacesRight(image[11], LineLength))
		console.log(this.fillSpacesRight(image[12], LineLength))
		console.log(this.fillSpacesRight(image[13], LineLength))
		console.log(this.fillSpacesRight(image[14], LineLength))
		console.log(this.fillSpacesRight(image[15], LineLength))
		console.log(this.fillSpacesRight(image[16], LineLength))
		console.log(this.fillSpacesRight(image[17], LineLength))
		console.log(this.fillSpacesRight(image[18], LineLength))
		console.log(this.fillSpacesRight(image[19], LineLength))
		console.log(this.fillSpacesRight(image[20], LineLength))
		console.log(this.fillSpacesRight(image[21], LineLength))
		if (null == CName) {
			console.log(this.fillSpacesRight(image[22], LineLength))
			console.log(this.fillSpacesRight(image[23], LineLength))
			console.log(this.fillSpacesRight(image[24], LineLength))
			console.log(this.fillSpacesRight(image[25], LineLength))
			console.log(this.fillSpacesRight(image[26], LineLength))
			console.log("  ________________________________________________________________________________________________________________________________________________________  ")
		} else {
			console.log("  _________________________ " + this.fillSpacesRight(image[22].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[23].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[24].substring(28), LineLength - 24))
			console.log(" |" + this.fillSpacesCentered(CName, 25) + '|' + this.fillSpacesRight(image[25].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[26].substring(28), LineLength - 24))
			console.log(" |_________________________|______________________________________________________________________________________________________________________________  ")
		}

		// let opForPrinting = options

		// for (let index = 9; index > 0; index--)
		// 	opForPrinting.scramble()

		console.log(" |" + this.fillSpacesRight("", LineLength) + "| ");
		console.log(" |" + this.fillSpacesRight("", LineLength) + "| ");
		console.log(" |" + this.fillSpacesRight(this.fillSpacesLeft(question, 20),LineLength) + "| ");
		console.log(" |" + this.fillSpacesRight("", LineLength) + "| ");

		let op = []

		for (let index in options) {
			console.log(" |" + this.fillSpacesCentered(this.fillSpacesRight(String.fromCharCode(97 + Number(index)) +"              "+ options[index]+"   ", 100),  LineLength) + "|");
			++printedLineCount
			// console.log(String.fromCharCode(97 + Number(index)) + "aaaa");
			op.push(String.fromCharCode(97 + Number(index)))
		}

		while (printedLineCount++ < 5)
			console.log(" |" + this.fillSpacesRight("", LineLength) + "| ");

		console.log(" |________________________________________________________________________________________________________________________________________________________| ")
		console.log("                                                                                                                                                            ")

		let choice = rs.question("what option will you chose? ").toLowerCase()
		while (true) {
			// console.log(op);
			console.log(options);
			console.log(choice);
			if (op.includes(choice)){
				console.log(op.indexOf(choice));
				return op.indexOf(choice)
			}else {
				// this process still adds another line while deleting the last line, but i cant be bothered to fix that rn
				process.stdout.moveCursor(0, -1)
				process.stdout.write("\r\x1b[K");
				choice = rs.question("please give a valid answer ");
			}
		}
	}
}

/*(CName, options = ["", "", "", ""], image = ["", "", "", "", "", ""], question)*/

// Hud.showScreenQuestion("jannes", ["aaa", "bbb", "ccc"],
// 	[
// 		"01", "02", "03", "04", "05", "06", "07",
// 		"08", "09", "10", "11", "12", "13", "14",
// 		"15", "16", "17", "18", "19", "20", "21", "22", "000000000000000000000000000000000000000023",
// 		"0000000000000000000000000000000000000000000024", "00000000000000000000000000000000000000000025",
// 		"0000000000000000000000000000000000000000026", "000000000000000000000000000000000000027"
// 	],
// 	"whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat?")

// Hud.showScreenDialogue("meeee", "aaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccccccccc ddddddddddddddddddddddd eeeeeeeeeeeeeeeee ffffffffffffffffffffff gggggggggggggggggggggg", 
// ["01", "02", "03", "04", "05", "06", "07","08", "09", "10", "11", "12", "13", "14",
// "15", "16", "17", "18", "19", "20", "21", "22", "000000000000000000000000000000000000000023",
// "0000000000000000000000000000000000000000000024", "00000000000000000000000000000000000000000025",
// "0000000000000000000000000000000000000000026", "000000000000000000000000000000000000027"
// ],"haaaalllloooo?")

module.exports = Hud


// aaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccccccccc ddddddddddddddddddddddd eeeeeeeeeeeeeeeee ffffffffffffffffffffff gggggggggggggggggggggg