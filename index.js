let input = document.querySelector("input")

input.addEventListener("keypress",(e)=>{
   if (e.key==="Enter" && input.value.slice(-10)==="@gmail.com"){
    document.querySelector(".error").style.display="none"
    document.querySelector(".error-message").style.display="none"
     input.value=null
   }else if (e.key==="Enter" && input.value.slice(-10)!="@gmail.com"){
     document.querySelector(".error").style.display="flex"
     document.querySelector(".error-message").style.display="flex"
   }
})


document.querySelector("button").addEventListener("click",()=>{
    if (input.value.slice(-10)==="@gmail.com"){
     document.querySelector(".error").style.display="none"
     document.querySelector(".error-message").style.display="none"
      input.value=null
    }else if (input.value.slice(-10)!="@gmail.com"){
      document.querySelector(".error").style.display="flex"
      document.querySelector(".error-message").style.display="flex"
    }
 })