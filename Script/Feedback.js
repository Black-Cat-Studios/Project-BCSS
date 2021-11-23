//I have literally never coded Javascript ever
// This is probably the most disgusting script anyone has ever seen
// --Intykat

document.addEventListener("DOMContentLoaded", function(event) { 
    const Feedback = document.createElement("div");
    Feedback.id = "feedback";
    document.body.appendChild(Feedback);

    let h4 = document.createElement("h4");
    h4.innerHTML="Feedback";

    Feedback.appendChild(h4);

    const FeedbackForm = document.createElement("form");
    FeedbackForm.id="FeedbackForm";
    FeedbackForm.autocomplete = "off";

    Feedback.appendChild(FeedbackForm);

    const usnm = document.createElement("input");
    usnm.type = "text";
    usnm.placeholder = "Name";
    usnm.id = "UserName";
    usnm.tabIndex = "-1"

    FeedbackForm.appendChild(usnm);

    const mssg = document.createElement("textarea");
    mssg.rows = "5";
    mssg.cols = "50";
    mssg.placeholder = "Message* (300 character limit)";
    mssg.id = "Message";
    mssg.maxLength = "300";
    mssg.tabIndex = "-1"

    mssg.addEventListener('focus', (event) => {
        event.target.style.borderColor = null;
    });

    FeedbackForm.appendChild(mssg);

    const subm = document.createElement("button");
    subm.type = "submit";
    subm.tabIndex = "-1"

    FeedbackForm.appendChild(subm);

    const submtext = document.createElement("div");
    submtext.innerHTML = "Submit"

    subm.appendChild(submtext)

    const submittedtext = document.createElement("p");
    submittedtext.style.display = "none";
    submittedtext.innerHTML = "Your response has been recorded!"

    Feedback.appendChild(submittedtext)

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          Feedback.style.bottom = "-450px";
        }
        else{
            Feedback.style.bottom = null;
        }
    };

    function sendMessage(params) {
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/883474253729652736/IpUgYwxkq8u18nGs-4bHCnexyUUHTddtWuN6RJhxkAnj5yVeKPDh_1X0NpPlduWUwPme"); // Hey you! Person inspecting! Dont take this pleaseeeeeeeee i will literally shit myself, k thanks.
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));
    }
    
    function validateForm() {    
      if (mssg.value == "") {
            mssg.style.borderColor = "rgba(143, 18, 18, 0.9)";
            return false;
          }
    
        if (usnm.value == "") {
            usnm.value = "no name provided"
        }
        return true;
    } 

    FeedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    if (validateForm()){
        let params = {
            username: "KitterFeedback",
            avatar_url: "",
            embeds: [
                {
                "title": "Feedback from " + usnm.value,
                "description": mssg.value,
                "color": 15258703,
                "footer": {
                    "text": "Feedback sent from website.",
                }
                }
            ]
        };
        sendMessage(params);

        FeedbackForm.style.display = "none";
        submittedtext.style.display = null;
    }
    
    })

})