
const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");

const email_field = document.querySelectorAll("input[type='email']");
const password_field = document.querySelectorAll("input[type='password']");

let warning_containers = document.querySelectorAll(".warning-container"); 
let email_warning_container = document.querySelector(".warning-1");
let pass_warning_container = document.querySelector(".warning-2");

let email_warning_message = document.getElementById("email-warning-message");
let pass_warning_message = document.getElementById("pass-warning-message");

let submitBtn = document.getElementById("submit-btn");
let btn_text = document.getElementById("btn-text");
let btn_load = document.querySelector(".buttonload");


let count = 0;
function showPassword(){
    count+=1;
    if(count === 1){
        document.getElementById("toggle-password").src="./show.png";
        document.getElementById("pass").type="text";
        console.info("show pass");
    }
    else if(count === 2){
        document.getElementById("toggle-password").src="./hide.png";
        document.getElementById("pass").type="password";
        console.info("hide pass");

        count = 0;
    }
    return;
}

let click = 0;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.clear();
    console.info("Validating Form...");

    const msgList = document.querySelectorAll(".warning-msg");
    const emailVal = email_field[0].value.toLowerCase().trim();
    const passwVal = password_field[0].value.toLowerCase().trim();
    const nodeList = warning_containers;

    // setTimeout -> after time out -> validation, while timeout, reload and disable the button.

    submitBtn.disabled=true;
    btn_text.style.display="none";
    btn_load.style.display="flex";
    submitBtn.style.cursor="grab";
    const validateForm = setTimeout(validate, 1000);
    function validate(){
        if(emailVal===""&&passwVal===""){
            console.warn("Both Fields are Empty!");

            for(let i=0; i < nodeList.length; i++){
                console.info(nodeList[i]);
                nodeList[i].style.display="flex";
            }

            for(let i=0; i<msgList.length; i++){
                console.info(msgList[i]);
                msgList[i].innerHTML="";
                msgList[i].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;
            }
            submitBtn.disabled=false;
            btn_text.style.display="block";
            btn_load.style.display="none";
            submitBtn.style.cursor="pointer";
            return true;
        }
        if(emailVal!==""&&passwVal===""){
            console.warn("Password Field is Empty!");

            nodeList[0].style.display="none";
            nodeList[1].style.display="flex";
            msgList[1].innerHTML="";
            msgList[1].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;
            
            submitBtn.disabled=false;
            btn_text.style.display="block";
            btn_load.style.display="none";
            submitBtn.style.cursor="pointer";
            return true;
        }
        if(emailVal===""&&passwVal!==""){
            console.warn("Email Field is Empty!");

            nodeList[0].style.display="flex";
            msgList[0].innerHTML="";
            msgList[0].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;
            nodeList[1].style.display="none";
        
            submitBtn.disabled=false;
            btn_text.style.display="block";
            btn_load.style.display="none";
            submitBtn.style.cursor="pointer";
            return true;
        }

        submitBtn.disabled=false;
        btn_text.style.display="block";
        btn_load.style.display="none";
        submitBtn.style.cursor="pointer";
        for(let i=0; i<nodeList.length; i++){
            nodeList[i].style.display="none";
        }

        const users=["avril@yahoo.com", "bonjovi@outlook.com", "admin@gmail.com"];
        const isUser = users.some((user)=>{user.toLowerCase() === user.trim()});
        if(!isUser){
            console.warn("No users found!"); 
            let error_box = document.querySelector(".error-box");
            console.info(error_box);

            error_box.style.display="block";
        
            const timeout = setTimeout(clear_error_message, 5000);
            function clear_error_message(){
                let error_box_message = document.querySelector(".error-box-msg");
                error_box_message.style.transition="1s ease";
                error_box.style.display="none";
                console.info(error_box);
            }
            
            return false;
        }

    }
    return;
});
