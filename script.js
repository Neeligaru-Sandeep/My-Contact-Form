const firebaseConfig = {
    apiKey: "AIzaSyB3W6FXTQramyGSU6gdsZ8UJC0vVcjm3uU",
    authDomain: "vani-college-student-details.firebaseapp.com",
    databaseURL: "https://vani-college-student-details-default-rtdb.firebaseio.com",
    projectId: "vani-college-student-details",
    storageBucket: "vani-college-student-details.appspot.com",
    messagingSenderId: "342784643235",
    appId: "1:342784643235:web:d5792917abba3fe51aef16"
  };
  
  firebase.initializeApp(firebaseConfig);
  


let form =document.querySelector("#form");

	/* Preventing the Page Reload On Submitting The Form */
	form.addEventListener("submit",(e)=>{
	e.preventDefault();	
	
	/* Getting Inputs From Document and Collecting Value */
		let name =document.querySelector("#name").value;
		let email =document.querySelector("#email").value;
		let message =document.querySelector("#message").value;
	
	saveData(name,email,message);
	
	/* On Submit Showing The Result As Success */
	let success =document.querySelector(".success");
	success.style.display="block";
	
	/*Reset The Form After 3 Seconds */
	setTimeout(()=>{
		success.style.display="none";
		form.reset();
	},5000);
	
})


const contactDb=firebase.database().ref("Contact Form Details");

const saveData=(name,email,message)=>{
	var newContactForm = contactDb.push();
		newContactForm.set({
		name:name,
		email:email,
		message:message
	});
}



