// FORM VALIDATION
const Name = document.getElementById("name");
const s1 = document.querySelector('.s1');
const Ntest = document.querySelector(".Ntest");

const Email = document.getElementById("email");
const s2 = document.querySelector('.s2');
const Etest = document.querySelector(".Etest");

const Password = document.getElementById("password");
const s3 = document.querySelector('.s3');
const Ptest = document.querySelector(".Ptest");

const CPassword = document.getElementById("Cpassword");
const s4 = document.querySelector('.s4');
const CPtest = document.querySelector(".CPtest");


// Name validation
Name.addEventListener('change',(e)=>{
    const val = Name.value
    const length = val.length

    if(length < 3){
        // Apply error style
        Ntest.classList.add("error")
        s1.innerText = 'Name should not be less than 3 char.';
        s1.classList.add('errortext');
    
    }else{
        Ntest.classList.add("valid");  
        s1.innerText = '';
        }
})

Email.addEventListener('change',(e)=>{
    const val = Email.value
    const valid_expression = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const length = val.length

    if(length >= 3 && val.match(valid_expression)){
        // Apply error style
        Etest.classList.add("valid"); 
        s2.innerText = '';

    }else{

        Etest.classList.add("error");
        s2.innerText = 'Please enter a valid email.';
        s2.classList.add('errortext');
        }
})

Password.addEventListener('change', (e)=>{
    const validation_expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const val = Password.value

    if(val.match(validation_expression)){
        // Apply error style
        Ptest.classList.add("valid"); 
        s3.innerText = '';
    
    }else{
        Ptest.classList.add("error");
        s3.innerText = 'Password should be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter';
        s3.classList.add('errortext');
        }
})

CPassword.addEventListener('change', (e)=>{
    const validation_exp = Password.value
    const val = CPassword.value
    if(val.match(validation_exp)){
       
        // Apply error style
        CPtest.classList.add("valid");
        s4.innerText = '';

    }else{
        CPtest.classList.add("error");
        s4.innerText = 'Password is not the same.';
        s4.classList.add('errortext');
        }
})

function ShowOrHidePassword() {
    if (Password.type === "password") {
      Password.type = "text";
    } else {
      Password.type = "password";
    }
  }
  

  function ShowOrHideConfirmPassword() {
    if (CPassword.type === "password") {
      CPassword.type = "text";
    } else {
      CPassword.type = "password";
    }
  }