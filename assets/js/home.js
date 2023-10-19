
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

function limitDayInputLength() {
    var input = document.getElementById("day")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitMonthInputLength() {
    var input = document.getElementById("month")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitYearInputLength() {
    var input = document.getElementById("year")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitRg() {
    var input = document.getElementById("rg")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitCpf() {
    var input = document.getElementById("cpf")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitDdd() {
    var input = document.getElementById("ddd")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function limitPhoneNumber() {
    var input = document.getElementById("phone-number")
    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    else if (input.value < 0) input.value = 0
}

function sendDocs() {
    window.alert("Documentação enviada com sucesso!")
}


