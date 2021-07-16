 // JavaScript Document
function playGame() {
  var enterCabin = confirm("You come across a house in the woods. Do you go in?");

  if (enterCabin == true) {
    //we enter the cabin
    alert("you decide to enter the cabin and find some delicious bowls of oatmeal")
    var porridgeChoice = prompt("You walk into the cabin and find three bowls of porridge. Do you try 1, 2, or 3?")
    if (porridgeChoice == 1) {
      alert("This porridge is too cold! THE END");
    } else if (porridgeChoice == 2) {
      alert("This porridge is too hot! THE END");
    } else {
      alert("This porridge is just right!");
    }
  } else {
    // we don't enter the cabin
    alert("Well, I guess that's all folks!")
  }
}

function changeFavicon() {
	document.getElementById("favicon").setAttribute("href", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png")
}

function changeTitle() {
	document.getElementById("title").innerHTML = "My Drive - Google Drive"
}

function addThing(){
	var newThing = document.getElementById("thingToDo").value;
	document.getElementById("listOfThings").innerHTML += newThing + "<br>";
}

function speakOldMan() {
	var userInput = document.getElementById("userSpeak").value;
if (userInput == "Hello") {
	document.getElementById("oldManResponse").innerHTML += "Did you say yellow? I'm sorry, my hearing isn't great." + "<br>";
}
else if (userInput.equals("Hi")){
	document.getElementById("oldManResponse").innerHTML += "Bye? Leaving so soon?" + "<br>";
} else if (userInput.equals("Zack says hi")){
	document.getElementbyId("oldManResponse").innerHTML += "Oh, that Zack. You know that piece of crap?! He left me here to DIE!" + "<br>";
} else {
	document.getElementById("oldManResponse").innerHTML += "I'm sorry, could you speak up?" + "<br>"; 
	}
 }