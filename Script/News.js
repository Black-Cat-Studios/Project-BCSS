// I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

const news = News

function ReverseObject(Obj){
    var TempArr = [];
    var NewObj = {};
    for (var Key in Obj){
        TempArr.push(Key);
    }
    for (var i = TempArr.length-1; i >= 0; i--){
        NewObj[TempArr[i]] = Obj[TempArr[i]];
    }
    return NewObj;
} 

let newsentries = ReverseObject(news)

for   (const [key, value] of Object.entries(newsentries)) {
    let entry = document.createElement("div")
    entry.classList.add("newsentry")
    entry.tabIndex = "0"
    document.getElementById("newslist").appendChild(entry)
    entry.id = value.id
    
    let title = document.createElement('h1')
    title.textContent = value.title
    entry.appendChild(title)

    let description = document.createElement("p")
    description.classList.add('p')
    description.innerHTML = value.description.replace( /(<([^>]+)>)/ig, '')
    entry.appendChild(description)

    let linkcontainer = document.createElement("p")
    linkcontainer.classList.add("link")
    entry.appendChild(linkcontainer)

    let link = document.createElement("a")
    link.href = value.authorLink
    link.textContent = value.author + ' - ' + value.date;
    linkcontainer.appendChild(link)
}

NodeList.prototype.forEach = Array.prototype.forEach
      var children = document.getElementById("newslist").childNodes;
      children.forEach(function(item){
        item.onclick = function(){
            location.replace("https://black-catstudios.com/news/?" + item.id)
        }
      })

document.getElementById("search").onkeyup = filter

document.getElementById("search").onfocus = function(){
    document.getElementById("search").value = ""
    filter()
}

function filter(){
    var input, filter, ul, li, a, i, txtValue;
    let item = false

    input = document.getElementById("search");
    filter = input.value.toUpperCase();

    ul = document.getElementById("newslist")
    li = ul.getElementsByClassName("newsentry");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.maxHeight = "";
            li[i].style.opacity = "";
            li[i].style.marginLeft = "";
            li[i].style.marginTop = "";
            li[i].style.marginBottom = "";
            li[i].style.padding = "";
            item = true
        } else {
            li[i].style.padding = "0";
            li[i].style.marginTop = "0";
            li[i].style.marginBottom = "0";
            li[i].style.maxHeight = "0px";
            li[i].style.opacity = "0";
        }
    }

    if (!item){
        document.getElementById("oops").style.display = "";
    }else{
        document.getElementById("oops").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.location.href.includes("?")){
        
        let splitString = window.location.href.split("?")
        const pageID = splitString[1]

        const page = document.getElementById("Art")
        let meta = null

        for   (const [d, valued] of Object.entries(newsentries)) {
            if (valued.id == pageID){
                meta = valued
            }
        }

        if (meta){

            document.getElementById("Artm").style.display = "none"
            document.getElementById("Art").style.display = "block"

            document.body.classList.add("internet")

            document.getElementById("h").textContent = meta.title

            document.getElementById("personwhomade").href = meta.authorLink
            document.getElementById("personwhomade").textContent = meta.author + ' - ' + meta.date;

            document.getElementById("h2").textContent = meta.title

            document.getElementById("personwhomade2").href = meta.authorLink
            document.getElementById("personwhomade2").textContent = meta.author + ' - ' + meta.date;
            
            document.getElementById("imeage").style.backgroundImage = `url("` + meta.img + `")`

            document.getElementById("artidid").innerHTML = meta.description

        }
    }
})