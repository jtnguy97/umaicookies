let name_form = document.querySelector(".inputfield1");
let email = document.querySelector(".inputfield2");
let message = document.querySelector(".inputfield3");

let button = document.querySelector("#submit");

button.disabled = true;

name_form.addEventListener("change", button_check);
email.addEventListener("change", button_check);
message = addEventListener("change", button_check);

function button_check(){
    if(document.querySelector(".inputfield1").value === "" || document.querySelector(".inputfield2").value === "" || document.querySelector(".inputfield3").value === ""){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
}