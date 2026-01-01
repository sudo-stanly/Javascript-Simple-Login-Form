
const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const email_field = document.querySelectorAll("input[type='email']");
const password_field = document.querySelectorAll("input[type='password']");

let email_warning_container = document.querySelector(".warning-1").classList;
let pass_warning_container = document.querySelector(".warning-2").classList;
let warning_containers = document.querySelectorAll(".warning-container"); 

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

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.clear();
    console.info("Validating Form...");

    let isFormEmpty = false;
    inputs.forEach((i)=>{
        if(i.value.trim()===""){ console.error(`Fields are Empty! : ${i.type}`); isFormEmpty=true;  }
    });
    if(isFormEmpty===true){
        // warning_containers.foreach((c)=>{
        //     c.classList.toggle("all-fields-empty");
        // });
        // console.info(warning_containers);
        const nodeList = warning_containers;
        for(let i=0; i < nodeList.length; i++){
            console.info(nodeList[i]);
            nodeList[i].classList.toggle("all-fields-empty");
        }

        const msgList = document.querySelectorAll(".warning-msg");
        // msgList[0].innerHTML="";
        // msgList[0].innerHTML+=`<div class="warning-message-text"> <p><span>ⓘ Field cannot be empty.</span></p> </div>`;
        // console.info(msgList[0]);

        for(let i=0; i<msgList.length; i++){
            msgList[i].innerHTML="";
            msgList[i].innerHTML+=`<div class="warning-message-text"> <p><span>ⓘ Field cannot be empty.</span></p> </div>`;
            console.info(msgList[i]);
        }
    }

    if(isFormEmpty===false){
        console.info("Validating Email and Password.");

        const sample_users=["Admin@gmail.com", "User@gmail.com", "Summit@gmail.com"];
        const isUser = sample_users.some((user)=>{ user.toLowerCase() === user.trim() });
        if(!isUser){
            console.warn("No users found!"); 
            let error_box = document.querySelector(".error-box");
            error_box.style.display="block";

            // slide back up           
            const timeout = setTimeout(clear_error_message, 5000);
            function clear_error_message(){
                let error_box_message = document.querySelector(".error-box-msg");
                error_box_message.style.transition="1s ease";
                error_box_message.style.transform="translateY(-1000px)";
            }
            const timeout2 = setTimeout(hide_error_message, 10000);
            function hide_error_message(){
                error_box.style.display="none";
                console.info("Message error hidden.");
            }
        }
        else{

        }


        
        // const emailValue = email_field[0].value.toLowerCase();
        // console.info(`value ${emailValue}`);

        // for(const index of sample_users){
        //     console.info(`${sample_users[index]}`);
        //     if(emailValue.trim() !== toString(sample_users[index]).toLowerCase().trim()){ 
        //         console.warn("No users found!"); 
        //         let error_box = document.querySelector(".error-box");
        //         error_box.style.display="block";

        //         // slide back up           
        //         const timeout = setTimeout(clear_error_message, 5000);
        //         function clear_error_message(){
        //             let error_box_message = document.querySelector(".error-box-msg");
        //             error_box_message.style.transition="1s ease";
        //             error_box_message.style.transform="translateY(-1000px)";
        //         }
        //         const timeout2 = setTimeout(hide_error_message, 10000);
        //         function hide_error_message(){
        //             error_box.style.display="none";
        //             console.info("Message error hidden.");
        //         }
        //     }
        //     else{
        //         console.info("User found.");

        //         let passwordValue = password_field[0].value.toLowerCase();

        //         if(emailValue.trim() === "" && passwordValue.trim() !== ""){
        //             console.warn("Email field is empty.");
        //             email_warning_message.style.display="";
        //         }
        //     }
        // }

        
    }

    return;
});