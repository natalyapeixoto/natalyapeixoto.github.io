let form = $(".form-contato");
console.log(form);

form.validate({
  errorElement: 'span',
  rules: {
    email: {
        required: true,
        email: true
    },
    tel: 'required',
    text: 'required'
  }, 
  messages: {
    email: {
      required: "Por favor, digite seu e-mail.",
      email: "Por favor, digite um e-mail válido"
      }, 
    tel: 'Por favor, digite seu número de telefone',
  text: 'Me manda uma pequena mensagem'
    }
})


const button = document.getElementById("arrowTop")
button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
})
window.addEventListener("scroll", function(){
  if (window.screen.availWidth < 800) {
    return false;
  }
    if(pageYOffset > 450){
        button.hidden = false;
        return false;
    }
    button.hidden = true;
})


//scrol reveal 
console.log(window.screen.availWidth);
const sobre = document.querySelector("#sobre");
window.addEventListener("scroll", function(){
  console.log(pageXOffset)
  if (window.screen.availWidth < 800){
    sobre.classList.add("sobre-show")
    sobre.classList.remove("sobre-hidden")
    return false;
  }
  
  if(pageYOffset >= 300){
     sobre.classList.add("sobre-show")
     sobre.classList.remove("sobre-hidden")
  }
  else{
    sobre.classList.remove("sobre-show")
     sobre.classList.add("sobre-hidden")
  }
})
const portfolioTop = document.querySelector(".rowTop");
window.addEventListener("scroll", function(){
  if (window.screen.availWidth < 800){
    portfolioTop.classList.add("portfolio-rowTop-show")
    portfolioTop.classList.remove("portfolio-rowTop-hidden")
    return false;
  }
  if(pageYOffset >= 400){
    portfolioTop.classList.add("portfolio-rowTop-show")
    portfolioTop.classList.remove("portfolio-rowTop-hidden")
  }
  else{
    portfolioTop.classList.remove("portfolio-rowTop-show")
    portfolioTop.classList.add("portfolio-rowTop-hidden")
  }
})
const portfolioM = document.querySelector(".rowMiddle");
window.addEventListener("scroll", function(){
  if (window.screen.availWidth< 800){
    portfolioM.classList.add("portfolio-rowMiddle-show")
    portfolioM.classList.remove("portfolio-rowMiddle-hidden")
    return false;
  }
  if(pageYOffset >= 600){
    portfolioM.classList.add("portfolio-rowMiddle-show")
    portfolioM.classList.remove("portfolio-rowMiddle-hidden")
  }
  else{
    portfolioM.classList.remove("portfolio-rowMiddle-show")
    portfolioM.classList.add("portfolio-rowMiddle-hidden")
  }
})

const portfolioB = document.querySelector(".rowBottom");
window.addEventListener("scroll", function(){
  if (window.screen.availWidth < 800){
    portfolioB.classList.add("portfolio-rowBottom-show")
    portfolioB.classList.remove("portfolio-rowBottom-hidden")
    return false;
  }
  if(pageYOffset >= 700){
    portfolioB.classList.add("portfolio-rowBottom-show")
    portfolioB.classList.remove("portfolio-rowBottom-hidden")
  }
  else{
    portfolioB.classList.remove("portfolio-rowBottom-show")
    portfolioB.classList.add("portfolio-rowBottom-hidden")
  }
})


