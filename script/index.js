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
    if(pageYOffset > 450){
        button.hidden = false;
        return false;
    }
    button.hidden = true;
})