// Enviar email cuando se presione un botón
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "ctapia.macaya@gmail.com",
	Password : "",
	To : '',
	From : "ctapia.macaya@gmail.com",
	Subject : "pruebaa",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}