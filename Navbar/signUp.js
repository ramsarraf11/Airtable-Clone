let getData= document.querySelector(".mainDiv");
getData.addEventListener("submit",myFun);
let obj={};
function myFun(e){
    e.preventDefault();
    
    let email = document.querySelector("#email").value;
    let userName = document.querySelector("#userName").value;
    let pass = document.querySelector("#pass").value;
   if(email == ""){
    alert("Please Fill in your email")
   }else if(pass == ""){ alert("Please Fill in your Password")}
   else if(userName == ""){ alert("Please Fill in your UserName")}
   else{
    obj.email = email
obj.userName = userName
obj.pass = pass

localStorage.setItem("loginData",JSON.stringify(obj));
alert("Sign Up Succsesfull")

   }
}
