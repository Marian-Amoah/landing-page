function validation(){
	var index = document.getElementById("index").value;
	var password = document.getElementById("password").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

	if (index.length <8){
		text = "Please Enter Valid Id number";
		error_message.innerHTML = text;
		return false;
	}
	if (isNaN(password) || password.length != 5){
		text = "Please Enter a Valid password";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully!")


	return true;
}