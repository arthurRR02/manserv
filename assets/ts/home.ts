
function closeSideNavBar() {
    var nav = document.getElementById("navigation")
    var optionList = document.getElementsByTagName("ul")[0]
    var closeButton = document.getElementById("close-button")

    if (nav !== null && closeButton !== null) {
        nav.style.width = "0px"
        nav.style.padding = "0"
        optionList.style.visibility = "hidden"
        closeButton.style.visibility = "hidden"
    }
}

function verifyMenuButtonAction() {
    var nav = document.getElementById("navigation")
    var optionList = document.getElementsByTagName("ul")[0]
    var closeButton = document.getElementById("close-button")

    if (nav !== null && closeButton !== null) {
        if (nav.style.width === "250px") {
            nav.style.width = "0px"
            nav.style.padding = "0"
            optionList.style.visibility = "hidden"
            closeButton.style.visibility = "hidden"
        } else {
            nav.style.width = "250px"
            nav.style.padding = "8%"
            optionList.style.visibility = "visible"
            closeButton.style.visibility = "visible"
        }
    }
}

function verifyOpenedPage() {
    if (document.URL.includes("documentation.html")) {
        var menuOption = document.getElementById("documentation-option")
        if (menuOption != null) {
            menuOption.style.color = "#FF460A"
        }
    } else if(document.URL.includes("consult.html")) {
        var menuOption = document.getElementById("consult-option")
        if (menuOption != null) {
            menuOption.style.color = "#FF460A"
        }
    } else if(document.URL.includes("contact.html")) {
        var menuOption = document.getElementById("contact-option")
        if (menuOption != null) {
            menuOption.style.color = "#FF460A"
        }
    } else if(document.URL.includes("register.html")) {
        var menuOption = document.getElementById("register-option")
        if (menuOption != null) {
            menuOption.style.color = "#FF460A"
        }
    }
}
