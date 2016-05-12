var userInput = document.querySelector("#userInput");
var cards = document.querySelector("#cards");
var create = document.querySelector("#create");

var messages = [];

create.addEventListener("click", submit);


function submit(){
	var newUserInput = userInput.value;
	var finalUserInput = newUserInput.trim();
	if(finalUserInput === ""){
		alert("Please fill in the all criteria");
		newUserInput = "";
	} else {
		addNewMessage(finalUserInput);
		userInput.value = "";
	}
}

function addNewMessage(passedFromSubmit) {
	messages.push(passedFromSubmit);
	console.log("M", messages);
	buildDom();
}

function buildDom(){
	var domContent = ""
	for (var i = 0; i < messages.length; i++) {
		var newMessages = messages[i];
		console.log("NewM",newMessages);
		domContent += `<div class="card"><div class="message">${newMessages}</div><button class="delete" type="button">Delete</button></div>`;
		cards.innerHTML = domContent;
		var deleteButton = document.getElementsByClassName("delete");
		var newDeleteButton = Array.from(deleteButton);
		for (var a = 0; a < newDeleteButton.length; a++) {
			newDeleteButton[a].addEventListener("click", deleteMessage);
		}
	}
}

function deleteMessage(event) {
	var item = event.target.closest('.card').querySelector('.message').textContent;
	var finalItem = messages.indexOf(item);
	console.log(finalItem);
	console.log(messages);
	messages.splice(finalItem, 1);
	console.log("post-splice", messages);
	event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}


