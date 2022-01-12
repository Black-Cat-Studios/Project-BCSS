// I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

const devs = Devs

for   (const [key, value] of Object.entries(devs)) {
    let preview = document.createElement("div")
    preview.classList.add("devpreview")
    document.getElementById("upcomingpage").appendChild(preview)

    let imgpreview = document.createElement("div")
    imgpreview.style.backgroundImage = `url("` + value.profile + `")`
    preview.appendChild(imgpreview)

    let title = document.createElement("h1")
    title.textContent = value.name
    preview.appendChild(title)

    let description = document.createElement("p")
    description.textContent = value.position
    preview.appendChild(description)

    let link = document.createElement("a")
    link.href = "https://black-catstudios.com/developers/?" + value.name
    link.textContent = "View"
    preview.appendChild(link)

}

document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.location.href.includes("?")){
        
        let splitString = window.location.href.split("?")
        const main = splitString[1]
        splitString = main.split("#")
        const pageID = splitString[0]

        let meta = null

        for   (const [d, valued] of Object.entries(devs)) {
            if (valued.name == pageID){
                meta = valued
            }
        } 

        if (meta){

            document.getElementById("listpage").style.display = "none"
            document.getElementById("devspage").style.display = "block"

            document.getElementById("hpppp").style.backgroundImage = 'url(' + meta.profile + ')'
            
            document.getElementById("h").textContent = meta.name

            document.getElementById("posiiotn").textContent = meta.position
            document.getElementById("dateddd").textContent = meta.joinDate

            document.getElementById("aboutTitle").textContent = 'About ' + meta.name
            document.getElementById("aboutText").innerHTML = meta.about

            document.getElementById("rblxlink").href = meta.socials.Roblox[1]
            document.getElementById("rblxtitle").textContent = meta.socials.Roblox[0]

            document.getElementById("disctitle").textContent = meta.socials.Discord[0]

            document.getElementById("disclink").addEventListener("click", function(){
                navigator.clipboard.writeText(meta.socials.Discord[0])
                document.getElementById("disctitle").textContent = "Copied!"
                window.setTimeout(function () {
                    document.getElementById("disctitle").textContent = meta.socials.Discord[0]
                }, 1000);
            })

            document.getElementById("ytlink").href = meta.socials.Youtube[1]
            document.getElementById("yttitle").textContent = meta.socials.Youtube[0]
            
            for   (const [key, value] of Object.entries(meta.projects)) {
                let item = document.createElement("a")
                item.href = value.link
                item.target = "_blank"
                item.style.backgroundImage = 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%), url(' + value.image + ')'

                let text = document.createElement("h1")
                text.textContent = value.name
                item.appendChild(text)
                document.getElementById("FavList").appendChild(item)
            }

            let index = 0

            for   (const [key, value] of Object.entries(meta.portfolio)) {
                let item = document.createElement("a")
                item.href = value.link
                item.target = "_blank"
                item.style.backgroundImage = 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%), url(' + value.image + ')'

                let text = document.createElement("h1")
                text.textContent = value.name
                item.appendChild(text)

                if (index == 0){
                    item.classList.add("a")
                    document.getElementById("grid").appendChild(item)
                } else if (index == 1){
                    item.classList.add("b")
                    document.getElementById("grid").appendChild(item)
                } else if (index == 2){
                    item.classList.add("c")
                    document.getElementById("grid").appendChild(item)
                } else if (index == 3){
                    item.classList.add("d")
                    document.getElementById("grid").appendChild(item)
                } else {
                    document.getElementById("extras").appendChild(item)
                }

                index = index + 1

                
            }

            if (splitString[1] == "portfolio"){
                document.getElementById("portfolio").style.display = "block"
                document.getElementById("about").style.display = "none"
                document.getElementById("aboutt").classList.remove("active")
                document.getElementById("portfoliot").classList.add("active")
            }

            document.getElementById("aboutt").addEventListener("click", function(){
                document.getElementById("portfolio").style.display = "none"
                document.getElementById("about").style.display = "block"
                document.getElementById("aboutt").classList.add("active")
                document.getElementById("portfoliot").classList.remove("active")
            })

            document.getElementById("portfoliot").addEventListener("click", function(){
                document.getElementById("portfolio").style.display = "block"
                document.getElementById("about").style.display = "none"
                document.getElementById("aboutt").classList.remove("active")
                document.getElementById("portfoliot").classList.add("active")
                
                window.setTimeout(function () {
                    window.scrollTo(0,0);
                }, 1);
                
           })


           

        }
    }
})