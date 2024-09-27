document.addEventListener("DOMContentLoaded",function(){
    let ans1 = document.querySelector("#ans1");
    let ans2 = document.querySelector("#ans2");
    let ans3 = document.querySelector("#ans3");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    // let qst = document.querySelector(".qst");

btn1.addEventListener("click",function(){         
      toggle(btn1,ans1)
    })

btn2.addEventListener("click",function(){
    toggle(btn2,ans2)
})

btn3.addEventListener("click",function(){
    toggle(btn3,ans3)
})
})

function toggle(btn , ans , qst){
      ans.classList.toggle("show")
      if(ans.classList.contains("show")){
        btn.classList.add("up")
        // qst.classList.add("up")
        
      }
      else{
        btn.classList.remove("up")
        // qst.classList.remove("up")
        
    }
    
}
