// Enviar email cuando se presione un botón
function sendEmail() {
	var correo = document.getElementById ("#envio_correo");
	Email.send({
<<<<<<< HEAD
	Host: "smtp.gmail.com",
	Username : "ctapia.macaya@gmail.com",
	Password : "",
	To : '',
	From : "ctapia.macaya@gmail.com",
	Subject : "pruebaa",
=======
	//Host: "smtp.gmail.com",
	//Username : "<sender’s email address>",
	//Password : "<email password>",
	To : correo,
	From : "<sender’s email address>",
	Subject : "<email subject>",
>>>>>>> dea70c65b6bbc911b8c92035db1ad3f0de119085
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
	console.log("holi")
}
console.dir(correo)