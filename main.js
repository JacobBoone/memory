

var Card = function(name, bottom, top){
	this.name = name;
	this.bottom = bottom;
	this.top= top;
}

// image as a object



var imgTop = $('<img class="top">').attr('src', 'images/CardBack.png');

var cardTop = $('<div class="card-item"></div>').append(imgTop);



// need array of letters and insert into memoryCard variable
var arrLetters = ["A","B","C","D","E"];


var letterA = $('<p class"letter"></p>').append(arrLetters[0]);
var letterB = $('<p class"letter"></p>').append(arrLetters[1]);
var letterC = $('<p class"letter"></p>').append(arrLetters[2]);
var letterD = $('<p class"letter"></p>').append(arrLetters[3]);
var letterE = $('<p class"letter"></p>').append(arrLetters[4]);


var display = [letterA,letterB,letterC,letterD,letterE]


var cardBottom = $('<div class="bottom"></div>').append(display[1]);



var memoryCard = new Card ('card', cardBottom, cardTop)


// need array of cards to display want 10 to show on the page so loop thru them and show each letter twice


var deck = [memoryCard];



// put the deck on the page

var puttoponpage = function(arr){
	for (var i = 0; i < arr.length; i++){
		$('#deck').append(arr[i].top)
	}
}

var putbottomonpage = function(arr){
	for (var i = 0; i < arr.length; i++){
		$('.card-item').append(arr[i].bottom)
	}
}


$(document).on('ready', function() {


	puttoponpage(deck);
	putbottomonpage(deck);

});