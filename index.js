// FORM VALIDATION
const Name = document.getElementById("name");
const s1 = document.querySelector('.s1');

const Email = document.getElementById("email");
const s2 = document.querySelector('.s2');

const Password = document.getElementById("password");
const s3 = document.querySelector('.s3');

const CPassword = document.getElementById("Cpassword");
const s4 = document.querySelector('.s4');



// Name validation
Name.addEventListener('change',(e)=>{
    const val = Name.value
    const length = val.length

    if(length < 3){
        // Apply error style
        Name.classList.add("error")
        s1.innerText = 'Name should not be less than 3 char.';
        s1.classList.add('errortext');
    
    }else{
        Name.classList.add("valid");  
        s1.innerText = '';
        }
})

Email.addEventListener('change',(e)=>{
    const val = Email.value
    const length = val.length

    if(length < 3){
        // Apply error style
        Email.classList.add("error");
        s2.innerText = 'Please enter a valid email.';
        s2.classList.add('errortext');
    
    }else{
        Email.classList.add("valid"); 
        s2.innerText = '';
        }
})

Password.addEventListener('change', (e)=>{
    const validation_expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const val = Password.value

    if(val.match(validation_expression)){
        // Apply error style
        Password.classList.add("valid"); 
        s3.innerText = '';
    
    }else{
        Password.classList.add("error");
        s3.innerText = 'Password should be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter';
        s3.classList.add('errortext');
        }
})

CPassword.addEventListener('change', (e)=>{
    const validation_expression = Password.value
    const val = CPassword.value
    if(val.match(validation_expression)){
       
        // Apply error style
        CPassword.classList.add("valid");
        s4.innerText = '';

    }else{
        s4.innerText = 'Password is not the same.';
        s4.classList.add('errortext');
        }
})