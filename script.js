// FOR NAV BAR HAMBURGER MENU
const togglebtn = document.querySelector('.toggle-btn')
const togglebtnImg = document.querySelector('.toggle-btn img')
const dropDownMenu = document.querySelector('.drop-down-menu')

togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}


// For FORM SUBMISSION 
function checkFormSubmission() {
    // You can add your own condition to check if the form is submitted or not.
    // For this example, let's assume the form is not submitted if a certain field is empty.
    var inputField = document.getElementById("name","E-mail","Queries");
    if (inputField.value.trim() === "") {
        // If the condition is met, redirect to another page.
        window.location.href = "error_page.html";
    } else {
        // If the condition is not met, submit the form.
        document.getElementById("myForm").submit();
        // window.location.href = "successful.html";

    }
}

