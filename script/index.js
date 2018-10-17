let form = $(".form-contato");
console.log(form);

form.validate({
  rules: {
    email: {
        required: true,
        email: true
    },
    tel: 'required',
    text: 'required'
  }
})