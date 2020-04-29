var date = moment();
console.log(date);
var currentday = $("#currentDay");
currentday.text(date);

var workhours = document.querySelector("#work-hours");

var workhours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];


renderWorkhours();
function renderWorkhours() {
    for (var i = 0; i < workhours; i++) {
        var workhours = workhours[i];
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.textContent = workhours;
        workhours.appendChild(li);
        
        var button = document.createElement("button");
        button.textContent = "save";
        button.setAttribute("id", i + 9);
        button.setAttribute("class", "save");

        li.appendChild(button);


        
        var storageItem = localStorage.getItem(workhours[i]);
        var inText = document.createElement("INPUT");
        inText.setAttribute("type", "text");
        inText.setAttribute("data-time", i + 9);
        inText.setAttribute("class", "myText");
        inText.id = (i + 9 + "t");
        inText.value = storageItem;
        
        
        console.log(storageItem);
        li.appendChild(inText);





    }

}






var saveBtn = document.querySelectorAll(".save");
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function (event) {
        event.preventDefault();

        var elementId = this.getAttribute("id");
        var x = '[data-time="' + elementId + '"]';
        var inputDiv = document.querySelector(x);
        var inputText = inputDiv.value;
        console.log(inputText);
    


        localStorage.setItem(elementId, inputText);
    
    });
}




if ((new Date().getHours()) === 9) {

    document.getElement('9t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 9) {

    document.getElementById('9t').style.backgroundColor = "#d3d3d3";
} else {

    document.getElementById('9t').style.backgroundColor = "#77dd77";

}


if ((new Date().getHours()) === 10) {


    document.getElement('10t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 10) {

    document.getElementById('10t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('10t').style.backgroundColor = "#77dd77";


}



if ((new Date().getHours()) === 11) {


    document.getElement('11t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 11) {

    document.getElementById('11t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('11t').style.backgroundColor = "#77dd77";

}




if ((new Date().getHours()) === 12) {


    document.getElement('12t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 12) {

    document.getElementById('12t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('12t').style.backgroundColor = "#77dd77";

}


if ((new Date().getHours()) === 1) {


    document.getElement('1t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 1) {

    document.getElementById('1t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('1t').style.backgroundColor = "#77dd77";
}


if ((new Date().getHours()) === 2) {


    document.getElement('2t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 2) {

    document.getElementById('2t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('2t').style.backgroundColor = "#77dd77";
}



if ((new Date().getHours()) === 3) {


    document.getElement('3t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 3) {

    document.getElementById('3t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('3t').style.backgroundColor = "#77dd77";
}




if ((new Date().getHours()) === 4) {


    document.getElement('4t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 4) {

    document.getElementById('4t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('4t').style.backgroundColor = "#77dd77";
}


if ((new Date().getHours()) === 5) {


    document.getElement('5t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 5) {

    document.getElementById('5t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('5t').style.backgroundColor = "#77dd77";
}
