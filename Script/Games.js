// I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

const games = Games
// first things first: switcher

document.getElementById("released").onclick = function() {
    document.getElementById("indicator").style.right = "113px"
    document.getElementById("released").style.fontWeight = "bold"
    document.getElementById("upcoming").style.fontWeight = "500"
    document.getElementById("releasedpage").style.display = "table"
    document.getElementById("upcomingpage").style.display = "none"
}

document.getElementById("upcoming").onclick =  function() {
    document.getElementById("indicator").style.right = "-2px"
    document.getElementById("released").style.fontWeight = "500"
    document.getElementById("upcoming").style.fontWeight = "bold"
    document.getElementById("releasedpage").style.display = "none"
    document.getElementById("upcomingpage").style.display = "table"
}

for   (const [key, value] of Object.entries(games)) {
    let preview = document.createElement("div")
    preview.classList.add("gamepreview")

    if (value.released){document.getElementById("releasedpage").appendChild(preview)}else{document.getElementById("upcomingpage").appendChild(preview)}

    let imgpreview = document.createElement("div")
    imgpreview.classList.add("preview")
    imgpreview.style.backgroundImage = `url("` + value.image + `")`
    preview.appendChild(imgpreview)

    let bottominfo = document.createElement("div")
    bottominfo.classList.add("bottom")
    preview.appendChild(bottominfo)

    let title = document.createElement("h1")
    title.textContent = value.name
    bottominfo.appendChild(title)

    let description = document.createElement("p")
    description.textContent = value.description
    bottominfo.appendChild(description)

    let link = document.createElement("a")
    link.href = value.link
    link.textContent = "View On Roblox"
    bottominfo.appendChild(link)

}