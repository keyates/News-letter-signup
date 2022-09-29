
function showModal() {
    let modals = document.querySelector(".modal")
    modals.classList.add("modal-visible")
}
function displayErrors() {
    let errors = document.querySelector(".errors") 
    errors.classList.add("errors-visible")
    
}

function validateCheckboxes() {
   let checkboxesValid = 0
   const checkboxes = document.querySelectorAll("input[type=checkbox]")
   for (let checkbox of checkboxes) {
    if (checkbox.checked == true) {
    checkboxesValid++ 
    }
}
    return checkboxesValid > 0 
   }


function validate() {
    let valid = true 
    const els = document.querySelectorAll('.errors > li')
    els.forEach(el => el.remove())
    let fullName = document.querySelector("#Name").value;
            if (fullName.length <= 2){
                createErrorItem("Please Enter a Legitimate Name")
                valid = false;
            };
    let totalAge = document.querySelector("#Age").value;
            if (totalAge <= 18){
                createErrorItem("You Must Be At Least 18 Years Old to Sign Up")
                valid = false;
            };
    let validEmail = document.querySelector("#email").value;
            if (!validEmail.includes("@")){
                createErrorItem("Please Enter a Valid Email")
                valid = false;
            };

    checkboxesValid = validateCheckboxes() 
            if (checkboxesValid != true) {
                createErrorItem("Please select one input!")
                valid = false 
            }
            if (valid) { 
                showModal()
            } else {
                displayErrors()
            }
}

const button = document.querySelector("button[type=submit]")
button.addEventListener("click", validate)

function createErrorItem(name, idName) {
    let error = document.querySelector(".errors")
    let li = document.createElement('li');
    li.textContent = name;
    error.appendChild(li);
};

document.querySelector("input[type=checkbox]")
