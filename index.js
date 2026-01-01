
const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");

const email_field = document.querySelectorAll("input[type='email']");
const password_field = document.querySelectorAll("input[type='password']");

let warning_containers = document.querySelectorAll(".warning-container"); 
let email_warning_container = document.querySelector(".warning-1");
let pass_warning_container = document.querySelector(".warning-2");

let email_warning_message = document.getElementById("email-warning-message");
let pass_warning_message = document.getElementById("pass-warning-message");

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

    const emailVal = email_field[0].value.toLowerCase().trim();
    const passwVal = password_field[0].value.toLowerCase().trim();

    const nodeList = warning_containers;

    if(emailVal===""&&passwVal===""){
        console.warn("Both Fields are Empty!");

        for(let i=0; i < nodeList.length; i++){
            console.info(nodeList[i]);
            nodeList[i].classList.toggle("all-fields-empty");
        }

        const msgList = document.querySelectorAll(".warning-msg");
        for(let i=0; i<msgList.length; i++){
            console.info(msgList[i]);
            msgList[i].innerHTML="";
            msgList[i].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;
        }
        return true;
    }
    if(emailVal!==""&&passwVal===""){
        console.warn("Password Field is Empty!");

        nodeList[0].style.display="none";
        nodeList[1].style.display="flex";
        msgList[1].innerHTML="";
        msgList[1].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;

        return true;
    }
    if(emailVal===""&&passwVal!==""){
        console.warn("Email Field is Empty!");

        nodeList[0].style.display="flex";
        msgList[0].innerHTML="";
        msgList[0].innerHTML+=`<div class="warning-message-text"><p><span>ⓘ Field cannot be empty.</span></p></div>`;
        nodeList[1].style.display="none";
    
        return true;
    }
    

    const sampleData=["Admin@gmail.com", "User@outlook.com", "Summit@yahoo.com"];
    const isUser = sampleData.some((user)=>{user.toLowerCase() === user.trim()});
    
    click+=1;
    if(click === 1){
        console.info(click);
        if(!isUser){
            console.warn("No users found!"); 
            let error_box = document.querySelector(".error-box");
            error_box.style.display="block";

            // slide back up           
            let timeout = setTimeout(clear_error_message, 5000);
            function clear_error_message(){
                let error_box_message = document.querySelector(".error-box-msg");
                error_box_message.style.transition="1s ease";
                error_box_message.style.transform="translateY(-1000px)";
            }
            let timeout2 = setTimeout(hide_error_message, 1000);
            function hide_error_message(){
                error_box.style.display="none";
                console.info("Message error hidden.");
            } 
            click = 0;
        }
        console.info(click);
        return false;
    }

    return;
});