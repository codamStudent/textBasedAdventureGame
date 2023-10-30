var rs = require("readline-sync")
var temp = 0, temp2 = 0
class Hud {
	//TODO: test all fillspaces to their function name
	static fillSpacesRight(input, size) {
		size -= input.length

		while (size != 0) {
			input = input + ' '
			size--;
		}
		return input
	}

	static fillSpacesLeft(input, size) {
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
			if (flipflop) { input = input + ' '; flipflop = false }
			else { input = ' ' + input; flipflop = true }
			size--
		}
		return input
	}


	static cutString(string, Max_length) {
		for (let index = Max_length; index >= 0; index--)
			if (string[index] == '\n' || string[index] == ' ')
				return [string.substring(0, index), index];
	}

	static cutStringTwice(string, Start, Max_length) {
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
	static showScreenDialogue(CName, dialogue = ["", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "", ""],
		image, question) {
		let LineLength = 152, lastprintedchar = 1, texttobeprinted = ""
		dialogue = this.fillSpacesRight(dialogue, LineLength * 9)

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
			console.log(" |" + this.fillSpacesCentered(CName, 24) + '|' + this.fillSpacesRight(image[25].substring(28), LineLength - 24))
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

		return rs.question(question)
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
	static showScreenQuestion(CName, dialogue, image = ["", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "",
		"", "", "", "", "", ""], question) {
		
			let LineLength = 152, lastprintedchar = 1, texttobeprinted = ""

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
			console.log(" |" + this.fillSpacesCentered(CName, 24) + '|' + this.fillSpacesRight(image[25].substring(28), LineLength - 24))
			console.log(" |                         |" + this.fillSpacesRight(image[26].substring(28), LineLength - 24))
			console.log(" |_________________________|______________________________________________________________________________________________________________________________  ")
		}
		
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

		return rs.question(question)
	}
}

// Hud.showScreenDialogue("jannes", "aaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccccccccc ddddddddddddddddddddddd eeeeeeeeeeeeeeeee ffffffffffffffffffffff gggggggggggggggggggggg",
// 	["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "000000000000000000000000000000000000000023", "0000000000000000000000000000000000000000000024", "00000000000000000000000000000000000000000025", "0000000000000000000000000000000000000000026", "000000000000000000000000000000000000027"], "what?")

module.exports = Hud