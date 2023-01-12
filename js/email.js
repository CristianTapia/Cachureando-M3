// Enviar email cuando se presione un botón
function sendEmail() {
var correo = document.getElementById("envio-correo").value;
Email.send({
    SecureToken : "5b48b42d-9511-4761-9cb5-66c7bd99f719",
    To : correo,
    From : "ctapia.macaya@gmail.com",
    Subject : "Producto comprado",
    Body : "Gracias por tu compra"
}).then(
  message => alert("Te llegará un correo proximamente")
);
}


