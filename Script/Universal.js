// I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

if(window.location.href.search('mail')){
  window.location.replace("https://mail.black-catstudios.com/mail");
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
} // stolem from stackoverflow ;aomwoal lmao

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } 
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    let user = getCookie(cname);
    if (user != "") {
        return true;
    } else {
        return false;
    }
} // stolen from w3 schools nlamoao

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

if (checkCookie("bcs_uid")){
    dataLayer.push({'user_id': getCookie("bcs_uid")});
}else{
  const UID =  uuidv4();
  setCookie("bcs_uid",UID)
  dataLayer.push({'user_id': UID});
} // some code I actaully made myself

document.addEventListener("DOMContentLoaded", function(event) { 

    // Navigation

    const navbr = document.createElement("nav");
    document.body.insertBefore(navbr, document.body.childNodes[0]);
    let link = document.createElement("a");
    link.href="https://black-catstudios.com/"
    navbr.appendChild(link)

    let icon = document.createElement("img");
    icon.id ="img"
    icon.src = "https://black-catstudios.com/Images/bcs.png"
    link.appendChild(icon)

    const links = document.createElement("div")
    links.id = "navlinks"
    navbr.appendChild(links)

    link = document.createElement("a")
    link.innerHTML = "Home"
    link.classList.add("a")
    if(document.title.search(link.innerHTML) !== -1){link.classList.add("active")}
    link.href = "https://black-catstudios.com/"
    links.appendChild(link)

    link = document.createElement("a")
    link.innerHTML = "Games"
    link.classList.add("a")
    if(document.title.search(link.innerHTML) !== -1){link.classList.add("active")}
    link.href = "https://black-catstudios.com/games"
    links.appendChild(link)

    link = document.createElement("a")
    link.innerHTML = "News"
    link.classList.add("a")
    if(document.title.search(link.innerHTML) !== -1){link.classList.add("active")}
    link.href = "https://black-catstudios.com/news"
    links.appendChild(link)

    link = document.createElement("a")
    link.innerHTML = "Developers"
    link.classList.add("a")
    if(document.title.search(link.innerHTML) !== -1){link.classList.add("active")}
    link.href = "https://black-catstudios.com/developers"
    links.appendChild(link)

    const selectorThingy = document.createElement("div")
    selectorThingy.id = "accountContainer"
    navbr.appendChild(selectorThingy)

    const selectorButton = document.createElement("button")
    selectorButton.textContent = "No User"
    selectorThingy.appendChild(selectorButton)

    const dropIcon = document.createElement("img")
    dropIcon.src = "https://black-catstudios.com/Images/arrow2.png"
    selectorThingy.appendChild(dropIcon)

    // Account Manager

    const dropDown = document.createElement("div")
    dropDown.id = "accountOptionsDropdown"
    dropDown.style.top = "-100px"
    document.body.appendChild(dropDown)

    const setButton = document.createElement("button")
    setButton.id = "settings"
    setButton.textContent = "Settings"
    dropDown.appendChild(setButton)
    setButton.tabIndex="-1"

    icon = document.createElement("div")
    icon.id = "settIcon"
    setButton.appendChild(icon)

    const logButton = document.createElement("button")
    logButton.id = "logout"
    logButton.textContent = "Log Out"
    dropDown.appendChild(logButton)
    logButton.tabIndex="-1"

    icon = document.createElement("div")
    icon.id = "logIcon"
    logButton.appendChild(icon)

    // Settings

    const settContainer = document.createElement("div")
    settContainer.id = "accountSettingsContainer"
    document.body.prepend(settContainer)

    let header = document.createElement("h1")
    header.textContent = "Settings"
    settContainer.appendChild(header)

    const bocks = document.createElement("div")
    bocks.id = "bocs_box_sussyb_sus_fom_pi_co_cooking_relatable"
    settContainer.appendChild(bocks)

    const tabber = document.createElement("div")
    tabber.id = "tabberLOLOPOOOLOOL"
    bocks.appendChild(tabber)

    const themeT = document.createElement("a")
    themeT.textContent = "Themes"
    themeT.id = "themeB"
    themeT.classList.add("active")
    tabber.appendChild(themeT)

    const linkedT = document.createElement("a")
    linkedT.textContent = "Linked Accounts"
    linkedT.id = "linkedB"
    tabber.appendChild(linkedT)

    const polT = document.createElement("a")
    polT.textContent = "Policies"
    polT.id = "policiesB"
    tabber.appendChild(polT)

    const DelT = document.createElement("a")
    DelT.textContent = "Delete Account"
    DelT.id = "no"
    tabber.appendChild(DelT)

    const theme = document.createElement("div")
    theme.style.display = "flex"
    theme.id = "theme"
    bocks.appendChild(theme)

    const light1 = document.createElement("button")
    light1.classList.add("actived")
    light1.id = "light"
    theme.appendChild(light1)

    const dark1 = document.createElement("button")
    dark1.id = "dark"
    theme.appendChild(dark1)

    const linked = document.createElement("div")
    linked.id = "linked"
    bocks.appendChild(linked)

    const buttonforrblx = document.createElement("div")
    buttonforrblx.id = "rblxarea"
    linked.appendChild(buttonforrblx)

    const inputofrrblx = document.createElement("input")
    inputofrrblx.id = "roblox"
    linked.appendChild(inputofrrblx)

    const buttonfordisc = document.createElement("div")
    buttonfordisc.id = "discarea"
    linked.appendChild(buttonfordisc)

    const inputofrdisc = document.createElement("input")
    inputofrdisc.id = "discord"
    linked.appendChild(inputofrdisc)

    const buttonforeml = document.createElement("div")
    buttonforeml.id = "emlarea"
    linked.appendChild(buttonforeml)

    const inputforeml = document.createElement("input")
    inputforeml.id = "email"
    linked.appendChild(inputforeml)

    const policies = document.createElement("div")
    policies.id = "policies"
    bocks.appendChild(policies)

    let d = document.createElement("a")
    d.href  = "https://black-catstudios.com/policies/cookies"
    d.textContent = "Cookies Policy"
    policies.appendChild(d)

    d = document.createElement("a")
    d.href  = "https://black-catstudios.com/policies/cookies"
    d.textContent = "Privacy Policy"
    policies.appendChild(d)

    const deleteAcc = document.createElement("div")
    deleteAcc.id = "delete"
    bocks.appendChild(deleteAcc)

    let texsts = document.createElement("p")
    texsts.textContent = "Why do you want to delete your account? (optional)"
    deleteAcc.appendChild(texsts)

    const deleteReason = document.createElement("textarea")
    deleteAcc.appendChild(deleteReason)

    const deletebutton = document.createElement("button")
    deletebutton.id = "DELTEDDDDD"
    deletebutton.textContent = "Delete Account"
    deleteAcc.appendChild(deletebutton)

    // Footer

    const foot = document.createElement("footer")
    document.body.appendChild(foot)

    let wedge = document.createElement("div")
    wedge.classList.add("wedge1", "variant3")
    foot.appendChild(wedge)

    const fbottom = document.createElement("div")
    fbottom.classList.add("bottom")
    foot.appendChild(fbottom)

    icon = document.createElement("img")
    icon.src = "https://black-catstudios.com/Images/bcs.png"
    fbottom.appendChild(icon)

    const socials = document.createElement("div")
    socials.classList.add("footer_social_areas")
    fbottom.appendChild(socials)

    link = document.createElement("a")
    link.href = "https://www.roblox.com/groups/3874675/Black-Cat-Studios#!/about"
    socials.appendChild(link)
    let deco = document.createElement("span")
    deco.classList.add("rblx")
    link.appendChild(deco)

    link = document.createElement("a")
    link.href = "https://discord.gg/7Gr39jb"
    socials.appendChild(link)
    deco = document.createElement("span")
    deco.classList.add("disc")
    link.appendChild(deco)

    link = document.createElement("a")
    link.href = "https://www.youtube.com/channel/UCOVPHg9WM7V6H7tuMYvTNLg"
    socials.appendChild(link)
    deco = document.createElement("span")
    deco.classList.add("yt")
    link.appendChild(deco)

    let bottomline = document.createElement("div")
    bottomline.classList.add("bottomline")
    fbottom.appendChild(bottomline)

    const flinks = document.createElement("div")
    flinks.classList.add("bottomlinks")
    fbottom.appendChild(flinks)

    link = document.createElement("a")
    link.href = "https://black-catstudios.com/policies/cookies"
    link.innerHTML = "Cookies Policy"
    flinks.appendChild(link)

    link = document.createElement("a")
    link.href = "https://black-catstudios.com/policies/privacy"
    link.innerHTML = "Privacy Policy"
    flinks.appendChild(link)

    link = document.createElement("a")
    link.href = "mailto:contact@black-catstudios.com"
    link.innerHTML = "contact@black-catstudios.com"
    flinks.appendChild(link)

    waitForElementToDisplay("#iubenda-cs-banner",function(){
      icon = document.createElement("img")
    icon.src = "https://black-catstudios.com/Images/noticeicon.png"
    icon.id = "bannericon"

    if (document.getElementById("iubenda-cs-banner")){
      document.getElementById("iubenda-cs-banner").insertBefore(icon, document.getElementById("iubenda-cs-banner").childNodes[0]);
    };

    if (!window.location.href.includes("black")){ // So that I can TEST WITHOUT THIS STUPID FUCKING BANNER IN THE STUPID FUCKING WAY OH MY FUCKING GOD
      document.getElementById("iubenda-cs-banner").style.display = "none"
    }
  },100,9000);



    selectorThingy.onclick = function() {
      if(dropDown.style.top == "75px"){
        dropDown.style.top = "-100px"
        dropIcon.style.transform = ""
        setButton.tabIndex = "-1"
        logButton.tabIndex = "-1"
      }else{

        setButton.tabIndex = "0"
        logButton.tabIndex = "0"
        dropDown.style.top = "75px"
        dropIcon.style.transform = "rotate(180deg)"
      }
    }

    setButton.onclick = function(){
      if(settContainer.style.width =="100vw"){
        settContainer.style.width = "0vw"
        settContainer.style.height = "0vh"
      }else{
        settContainer.style.width = "100vw"
        settContainer.style.height = "100vh"
      }
    }

    header.onclick = function(){
      if(settContainer.style.width =="100vw"){
        settContainer.style.width = "0vw"
        settContainer.style.height = "0vh"
      }else{
        settContainer.style.width = "100vw"
        settContainer.style.height = "100vh"
      }
    }

    function hideall(){
      NodeList.prototype.forEach = Array.prototype.forEach
      var children = tabber.childNodes;
      children.forEach(function(item){
        item.classList.remove("active")
      });
      var children = bocks.childNodes;
      children.forEach(function(item){
        if (item.parentElement !== tabber){
          if (item !== tabber){
            item.style.display = "none"
          }
        }
      });
    }

    themeT.onclick = function(){
      hideall()
      themeT.classList.add("active")
      theme.style.display = "flex"
    }

    linkedT.onclick = function(){
      hideall()
      linkedT.classList.add("active")
      linked.style.display = "flex"
    }

    polT.onclick = function(){
      hideall()
      polT.classList.add("active")
      policies.style.display = "flex"
    }

    DelT.onclick = function(){
      hideall()
      DelT.classList.add("active")
      deleteAcc.style.display = "flex"
    }

    function getURL() {
      alert("The URL of this page is: " + window.location.href);
  }
  
})



var exampledata = `
const USERS_WEBSITE_ID = {
    // NOTE: arrays are marked with "[]" in javascript whereas dictionaries are marked as "{}"
    "OverviewData": {
      "discordRole" : [true, "RoleName", "RoleId"],  // true stands for if they are in the server
      "robloxGroupRole" : [true, "RoleName", "RoleRankNumber"], // true stands for if they are in the group
      "websiteId" : USERS_WEBSITE_ID,
      "userSince" : "00:00:00", // date that we got the first marked data
      "adminAccount" : false, // true/false if they are admit
      "bannedFromAllServices": false, // if we want we can perma ban certain UIDs
      "assosiations" : [UID1, UID2, UID3, "..."], // list of users possibly assosiated to this user
      "notes" : [["intykat", "this guy sus"], ["feenixz","yeah this guy p sus"]],

      // Not going to let anyone access this data, but it will be used for the UID in the case that someone deletes the cookie or accesses from a new device
      "internetProviderAddress" : "11.1.1.1.1..1.1.1.1.1...1(urmom..)...1..1.1.1"
    },

    "WebsiteData" : {
        "GAData" : GOOGLE_ANALYTICS_DATA, // google analytics (GA saves a shit ton of data im not gonna try to list it all)
        "bannedFromSiteServices" : false, // banned from all site related services
        "firstSiteRecord" : "00:00:00", // first time user used the site
        "UIDCreationDate" : "00:00:00", // when their unique ID was first used
        "username" : "intyakt",
        "pfp" : "url",
        "passwordHash": "AWODU@#$()*@#AIDBNWE!!!!!!!"
    },

    "RobloxData" : {
      "firstBCSGame" : ["GameName","GameID","00:00:00"], // First game played by the user and date they played it
      "mostPlayedBCSGame" : ["GameName","GameID"],
      "robloxUserID" : "UserId",
      "accountCreationDateRoblox" : "00:00:00",
      "currentUserName" : "Username",
      "currentDisplayName" : "DisplayName",
      "usersFriends" : ["robloxid1", "robloxid2"], // list of friends of the user, used to create possible assosiations
      "bannedFromRobloxServices" : false, // banned from all roblox associated services
      "warningsRecieved" : ["warning1","warning2"],
    },
    
    "DiscordData" : {
      "accountCreationDateDiscord" : "00:00:00",
      "bannedFromDiscordServices" : false, // banned from all discord associated services
      "invitedBy" : ["discorduserid"], // array of all the invites they have used, used for possible association
      "discordUserID" : "UserId",
      "currentNameAndTag" : "intyshit#0012",
      "warnings" : ["warning1, warning2"],
    }
  }
  `