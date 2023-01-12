// Enviar email cuando se presione un botón
function sendEmail() {
	var correo = document.getElementById ("#envio_correo");
	Email.send({
	//Host: "smtp.gmail.com",
	//Username : "<sender’s email address>",
	//Password : "<email password>",
	To : correo,
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
	console.log("holi")
}
console.dir(correo)