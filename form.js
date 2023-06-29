document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_yxg11nf", "template_fwv11vg", params).then(function (res){
    alert(`Thank you ${params.name}. Your message has been successfully sent`)
    // alert("Thank you "+ name + "Your message has been successfully sent!");
  })
}