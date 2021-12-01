
var username = document.getElementById('username');
var password = document.getElementById('password');

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');
var error = document.getElementById('error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);
error.addEventListener('textInput', check ());

function validated(){
    if (username.value.length < 5){

        username.style.border = "1px solid red";
        username_error.style.display ="block";
        username.focus();
        return false;
    }
    if (password.value.length < 1){
        password.style.border = "1px solid red";
        pass_error.style.display ="block";
        password.focus();
        return false;
    }
    if(username.value=="thuynt" && password.value == 1111){
        return true;
    }else if(username.value!=""){
            error.style.display ="block";
            return false;
    }
    
}

function username_Verify(){
    if((username.value.length >=5)){
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
      //  return true;
    }
}
function pass_Verify(){
    if(password.value.length >=1){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
     //   return true;
    }
}


