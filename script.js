const congrate=document.querySelector(".congrate");
const gif=document.querySelector(".gif");
const png=document.querySelector(".png")
const yesbtn=document.querySelector(".yes-btn");
const nobtn=document.querySelector(".no-btn");
const hiden=document.querySelector(".hide");
const editing=document.querySelector(".edit")

yesbtn.addEventListener("click", ()=>{
    congrate.innerHTML="My little gift for you🎂";
    hiden.innerHTML="";
    yesbtn.innerHTML="";
    nobtn.innerHTML="";
    gif.src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JwbzFkb3J5MTk1cXJ4MzhoajR1dnZvN3BvcWxvdzQ0aWpvZ3l6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SCkcabfef5xZBETH26/giphy.gif";
   /* gif.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZjM3F0N3F4bW8zMXZyN2drcDdrMG5ubjlsaXgyMXZuamk2cmJvNSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/10a8AOSeP6Rqfu/giphy.webp";*/
})
nobtn.addEventListener("click", ()=>{
    congrate.innerHTML="Thanks for join this link>.<";
    hiden.innerHTML="";
    gif.src="https://i.pinimg.com/originals/ec/2e/c8/ec2ec8760d3743c03ca308c79e93a6b5.gif";
    editing.classList.add("edit");
})
