var startButton = document.getElementById("enter");
var story;
var storyVal;
var words = new Array();

function start() {
	document.getElementById("landingPage").className = "closed";
	document.getElementById("stories").className = "open";
}

function toWords() {
	storyVal = document.getElementById("values").story;

	for (i = 0; i < storyVal.length; i++) {
		if(storyVal[i].checked == true) {
			story = storyVal[i].value;
			document.getElementById("stories").className = "closed";
			document.getElementById("words").className = "open";
		}
	}

	if (story == "Albert Einstein") {
		var story1 = document.getElementsByClassName("1");
		for(i=0; i < story1.length; i+1){
			story1[i].className = "";
		}
	}

	if (story == "Bull Fighting") {
		var story2 = document.getElementsByClassName("2");
		for(i=0; i < story2.length; i+1){
			story2[i].className = "";
		}
	}
} // function toWords()


function submit() {

	if(story == "Albert Einstein"){
		var temp1  = document.getElementById("aPlace").value;
		var temp2  = document.getElementById("adjective1").value;
		var temp3  = document.getElementById("adjective2").value;
		var temp4  = document.getElementById("femaleCelebrity").value;
		var temp5  = document.getElementById("maleCelebrity").value;
		var temp6  = document.getElementById("noun1").value;
		var temp7  = document.getElementById("noun2").value;
		var temp8  = document.getElementById("noun3").value;
		var temp9  = document.getElementById("pluralNoun1").value;
		var temp10 = document.getElementById("pluralNoun2").value;
		var temp11 = document.getElementById("pluralNoun3").value;
		var temp12 = document.getElementById("pluralNoun4").value;
		var temp13 = document.getElementById("pluralProfession").value;

		if(temp1 =="" || temp2 =="" || temp3 =="" || temp4 =="" || temp5 =="" || temp6 =="" || temp7 =="" || temp8 =="" || temp9 =="" || temp10 =="" || temp11 =="" || temp12 =="" || temp13 ==""){
			alert("You must fill out all of the boxes");
		} else {
			document.getElementById("words").className = "closed";
			document.getElementById("scenarioAlbert").className = "open";

			document.getElementById("aePlace").firstChild.nodeValue = temp1;
			document.getElementById("aeAdjective1").firstChild.nodeValue = temp2;
			document.getElementById("aeAdjective2").firstChild.nodeValue = temp3;
			document.getElementById("aeFemaleCelebrity").firstChild.nodeValue = temp4;
			document.getElementById("aeMaleCelebrity").firstChild.nodeValue = temp5;
			document.getElementById("aeNoun1").firstChild.nodeValue = temp6;
			document.getElementById("aeNoun2").firstChild.nodeValue = temp7;
			document.getElementById("aeNoun3").firstChild.nodeValue = temp8;
			document.getElementById("aePluralNoun1").firstChild.nodeValue = temp9;
			document.getElementById("aePluralNoun2").firstChild.nodeValue = temp10;
			document.getElementById("aePluralNoun3").firstChild.nodeValue = temp11;
			document.getElementById("aePluralNoun4").firstChild.nodeValue = temp12;
			document.getElementById("aePluralProfession").firstChild.nodeValue = temp13;
		} // inner if statement
	} // parent if statement

	if(story == "Bull Fighting"){
		var temp1 = document.getElementById("adjective1").value;
		var temp2 = document.getElementById("emotion").value;
		var temp3 = document.getElementById("movement").value;
		var temp4 = document.getElementById("adjective2").value;
		var temp5 = document.getElementById("artOfClothing").value;
		var temp6 = document.getElementById("exclamation").value;
		var temp7 = document.getElementById("geoLocation").value;
		var temp8 = document.getElementById("noun1").value;
		var temp9 = document.getElementById("partOfTheBody").value;
		var temp10 = document.getElementById("pluralNoun1").value;
		var temp11 = document.getElementById("pluralNoun2").value;
		var temp12 = document.getElementById("spanishWord1").value;
		var temp13 = document.getElementById("spanishWord2").value;

		if(temp1 =="" || temp2 =="" || temp3 =="" || temp4 =="" || temp5 =="" || temp6 =="" || temp7 =="" || temp8 =="" || temp9 =="" || temp10 =="" || temp11 =="" || temp12 =="" || temp13 ==""){
			alert("You must fill out all of the boxes");
		} else {
			document.getElementById("words").className = "closed";
			document.getElementById("scenarioBullFighting").className = "open";

			document.getElementById("bfAdjective1").firstChild.nodeValue = temp1;
			document.getElementById("bfEmotion").firstChild.nodeValue = temp2;
			document.getElementById("bfMovement").firstChild.nodeValue = temp3;
			document.getElementById("bfAdjective2").firstChild.nodeValue = temp4;
			document.getElementById("bfArticleOfClothing1").firstChild.nodeValue = temp5;
			document.getElementById("bfArticleOfClothing2").firstChild.nodeValue = temp5;
			document.getElementById("bfExclamation").firstChild.nodeValue = temp6;
			document.getElementById("bfGeoLocation").firstChild.nodeValue = temp7;
			document.getElementById("bfNoun").firstChild.nodeValue = temp8;
			document.getElementById("bfPartOfTheBody").firstChild.nodeValue = temp9;
			document.getElementById("bfPluralNoun1").firstChild.nodeValue = temp10;
			document.getElementById("bfPluralNoun2").firstChild.nodeValue = temp11;
			document.getElementById("bfSpanishWord1").firstChild.nodeValue = temp12;
			document.getElementById("bfSpanishWord2").firstChild.nodeValue = temp13;
		} // inner if statement
	} // parent if statement
} // end of function

function reset1(){
	document.getElementById("scenarioAlbert").className = "closed";
	document.getElementById("landingPage").className = "open";
}

function reset2(){
	document.getElementById("scenarioBullFighting").className = "closed";
	document.getElementById("landingPage").className = "open";
}

startButton.onclick = start;
storyButton.onclick = toWords;
submitButton.onclick = submit;
restartButton1.onclick = reset1;
restartButton2.onclick = reset2;
