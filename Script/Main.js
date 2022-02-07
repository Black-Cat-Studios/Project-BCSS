// I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://black-catstudios.com/Resources/News.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 loadJSON(function(response) {
    var news = JSON.parse(response);
    var children = document.getElementById("news1").children // I know I should've used a for loop

    for (var i = 0; i < children.length; i++) {
        var Child = children[i];
        if (Child.className == "date") {
            Child.childNodes[0].innerHTML = news[Object.keys(news)[Object.keys(news).length - 1]].author + ' - ' + news[Object.keys(news)[Object.keys(news).length - 1]].date;
            Child.childNodes[0].href = news[Object.keys(news)[Object.keys(news).length - 1]].authorLink
        } else if (Child.className == "text") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 1]].description;
        } else if (Child.className == "title") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 1]].title;
        }
    }

    var children = document.getElementById("news2").children

    for (var i = 0; i < children.length; i++) {
        var Child = children[i];
        if (Child.className == "date") {
            Child.childNodes[0].innerHTML = news[Object.keys(news)[Object.keys(news).length - 2]].author + ' - ' + news[Object.keys(news)[Object.keys(news).length - 2]].date;
            Child.childNodes[0].href = news[Object.keys(news)[Object.keys(news).length - 2]].authorLink
        } else if (Child.className == "text") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 2]].description;
        } else if (Child.className == "title") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 2]].title;
        }
    }

    var children = document.getElementById("news3").children

    for (var i = 0; i < children.length; i++) {
        var Child = children[i];
        if (Child.className == "date") {
            Child.childNodes[0].innerHTML = news[Object.keys(news)[Object.keys(news).length - 3]].author + ' - ' + news[Object.keys(news)[Object.keys(news).length - 2]].date;
            Child.childNodes[0].href = news[Object.keys(news)[Object.keys(news).length - 3]].authorLink
        } else if (Child.className == "text") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 3]].description;
        } else if (Child.className == "title") {
            Child.innerHTML = news[Object.keys(news)[Object.keys(news).length - 3]].title;
        }
    }

});
games = Games



// Here's probably the hardest part of the site: the slidy thingy at the top
// I think to start I'm going to make an array of slides for it to cycle through
// To do this I'm gonna grab some stuff from the games module

let slides = []

slides.push(games[Object.keys(games)[Object.keys(games).length - 2]])
slides.push(games[Object.keys(games)[Object.keys(games).length - 1]])

let CurrentPage = 0

const SelectionIndicators = document.getElementById("SelectionIndicatorContainer")

while (SelectionIndicators.firstChild) {
    SelectionIndicators.removeChild(SelectionIndicators.firstChild);
};

for(let i=0; i<=slides.length - 1; i++) {
    var indicator = document.createElement("button");
    indicator.classList.add('SelectionIndicator')
    indicator.id = i
    indicator.onclick = function() {switchto(i)};

    SelectionIndicators.appendChild(indicator);	
}

function Update() {

    let cover = document.createElement("div");
    
    cover.style.width = "100%";
    cover.style.height = "90vh";
    cover.style.background = "white";
    cover.style.left = "0"
    cover.style.top = "43px"
    cover.style.transition = ".5s"
    cover.style.position = "absolute";

    document.getElementById("GamesParallaxArea").appendChild(cover);
    
    window.setTimeout(function () {
        cover.style.background = "rgba(0,0,0,0)"
    }, 50);

    window.setTimeout(function () {
        cover.parentNode.removeChild(cover)
    }, 600);

    for(let element of document.getElementsByClassName("active")){
        if(element.tagName == 'BUTTON') {
            element.classList.remove("active")
        };
    };
    document.getElementById(CurrentPage.toString()).classList.add('active');
    document.getElementById("GamesParallaxArea").style.backgroundImage = `linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%),
    url("`+ slides[CurrentPage]['image'] + `")`;
    document.getElementById("titleimage").src = slides[CurrentPage]['titleimage'];
    document.getElementById("description").innerHTML = slides[CurrentPage]['description'];
    document.getElementById("linktogame").href = slides[CurrentPage]['link'];
}

function switchto(index) {
    CurrentPage = index;
    Update();
};

function autoslide() {
    setTimeout(function () {
        var i = CurrentPage + 1
    if (i == 2) {
        i = 0
    }
    switchto(i)
        autoslide();
    }, 25000);
}

autoslide();
Update();

document.getElementById("arrowright").onclick = function() {
    var i = CurrentPage + 1
    if (i == 2) {
        i = 0
    }
    switchto(i)
};

document.getElementById("arrowleft").onclick = function() {
    var i = CurrentPage - 1
    if (i == -1) {
        i = 1
    }
    switchto(i)
};