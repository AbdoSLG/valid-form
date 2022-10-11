let form = document.forms[0],
   inputName = document.querySelector(".name"),
   pass = document.querySelector(".pass"),
   rePass = document.querySelector(".re-pass"),
   email = document.querySelector(".email"),
   error=document.querySelector(".errors"),
   btn=document.querySelector("button"),
   set=new Set();

   let eyes=document.querySelectorAll(".d-flex p")
   eyes.forEach((e)=>{
      e.addEventListener("click" , ()=>{
         if(e.previousElementSibling.type=="password"){
            e.previousElementSibling.type="text"
         }else{
            e.previousElementSibling.type="password"
         }
      })
   })
   

   // validate
   let inp=false
   let pas=false
   let repass=false
   let emal=false

inputName.onblur=function(){
   error.innerHTML=""
   if(!inputName.value){
      set.add("name feild should have two chars at least")
   }else{
      set.delete("name feild should have two chars at least")
      inp=true
   }
   if(!Number.isNaN(+inputName.value) && inputName.value  ){
      set.add("inputName should have 2 alpha at leest")
   }else{
      set.delete("inputName should have 2 alpha at leest")
      inp=true
   }
   error.innerHTML += [...set].join("  &  ")

}
pass.onblur=function(){
   error.innerHTML=""
   if(!pass.value){
      set.add("password feild should have two chars at least")
   }else{
      set.delete("password feild should have two chars at least")
      pas=true
   }
   error.innerHTML += [...set].join("  &  ")
}
rePass.onblur=function(){
   error.innerHTML=""
   if(rePass.value!=pass.value){
      set.add("passwords not same")
   }else{
      set.delete("passwords not same")
      repass=true
   }
   error.innerHTML += [...set].join("  &  ")
}

email.onblur=function(){
   error.innerHTML=""
   if(!email.value){
      set.add("email feild should have two chars at least")
   }else{
      set.delete("email feild should have two chars at least")
      emal=true
   }
   error.innerHTML += [...set].join("  &  ")
}

btn.classList.remove("change")
form.onsubmit=function(e){

   if(inp && pas && emal ){
      return true
   }else{



      // ***********************************************************

      // btn.classList.add("change")
      // if(btn.classList.contains("change")){
      //    btn.addEventListener("mouseup" , ()=>{
      //       btn.style.transform=`translate(${Math.random() * 150}px , ${Math.random() * 150}px)`
      //    })
      //    btn.addEventListener("mouseenter" , ()=>{
      //       btn.style.transform=`translate(${Math.random() * 150}px , ${Math.random() * 150}px)`
      //    })
      // }else{
      //    btn.style.transform=`translate(0 , 0)`
      // }
      e.preventDefault()
   }

}

document.addEventListener("click" , function (e){
   if(e.target.classList.contains("submit")){
      if(inp && pas && emal ){
         btn.innerHTML="Submit"
         return true
      }else{
         btn.innerHTML="Fu*k U Input All Feilds"
         if(btn.classList.contains("left")){
            btn.classList.add("right")
            btn.classList.remove("left")
         }else{
            btn.classList.add("left")
            btn.classList.remove("right")
         }
      }
   }
} )