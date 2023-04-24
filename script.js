//tooggle function//
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-x");
    navbar.classList.remove("active");
}
//contact form//
const form=document.getElementById("form");
const flabel=document.getElementById("fnlabel");
const fname=document.getElementById("fname");
const ferror=document.getElementById("fnerror");
const llabel=document.getElementById("lnlabel");
const lname=document.getElementById("lname");
const lerror=document.getElementById("lnerror");
const maill= document.getElementById("maillabel")
const email=document.getElementById("email");
const mailerror=document.getElementById("mailerror");
const msglabel=document.getElementById("msglabel");
const msg=document.getElementById("msg");
const msgerror=document.getElementById("msgerror");

function firstname(){
    if(fname.value===""){
        ferror.innerHTML="enter your firstname";
        fname.style.borderBottomColor = "red";
        return false;
    }
    else if(fname.value.length<5||fname.value.length>10){
        ferror.innerHTML="min 2 & max 5 charactor";
        fname.style.borderBottomColor = "red";
        return false;
    }
    else{
        ferror.innerHTML="";
        fname.style.borderBottomColor="green";
        return true;
    }
}
 function lastname(){
    if(lname.value===""){
        lerror.innerHTML="enter your lastname";
        lname.style.borderBottomColor = "red";
        return false;
    }
    else if(lname.value.length<3||lname.value.length>10){
        lerror.innerHTML="min 2 & max 5 charactor";
        lname.style.borderBottomColor="red";
        return false;

    }
    else{
        lerror.innerHTML="";
        lname.style.borderBottomColor="green";
        return true;
    }


 }

 function emailfun(){
    if(email.value===""){
        mailerror.innerHTML="enter your email";
        email.style.borderBottomColor="red";
        return false;
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
    mailerror.innerHTML="enter your valid email";
      email.style.borderBottomColor="red";
      return false;
    }
    else{
        mailerror.innerHTML= "";
      email.style.borderBottomColor="green";
      return true;
    }
  
  }
  function message(){
    if(msg.value===""){
        msgerror.innerHTML="enter your message";
        msg.style.borderBottomColor="red";
        return false;
    }
    else if(msg.value.length<0||msg.length.value>10){
        msgerror.innerHTML="enter your message";
        msg.style.borderBottomColor="red";
        return false;
    }
    else{
        msg.innerHTML=""
        msg.style.borderBottomColor="red";
        return true;
    }
  }
   form.addEventListener("submit", e=>{
  e.preventDefault();
  checkinput();
})
function checkinput(){
    const firstnametrim=fname.value.trim();
    const lastnametrim=lname.value.trim();
    const emailtrim=email.value.trim();
    const msgtrim=msg.value.trim();
    
    if(firstnametrim&&lastnametrim&&emailtrim&&msgtrim){
        Swal.fire(
            'welcome!',
            'thankyou for your feedback!',
            'thankyou'
          )
    }
     

}

//testimonial function//
let userTexts=document.getElementsByClassName("usertext");
let userPics=document.getElementsByClassName("userpic");
function show(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

//add to cart  function//
var btn=document.getElementById("btn");
var  spn=document.getElementById("span");
let count=0;
function cot(){
count +=1;
document.getElementById("span").innerHTML=count;  
spn.style.color="white";
spn.style.fontSize="12px";
spn.style.textAlign="center";
spn.style.fontWeight="bold";
}

//faq function//

const accordian=document.getElementsByClassName('accordian');
for(i = 0; i<accordian.length; i++){
accordian[i].addEventListener('click',function(){
    this.classList.toggle('active');
})
}