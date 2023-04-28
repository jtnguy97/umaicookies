const initControllers = function(){
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
   const formData = new Object();
   formData[entry1] = document.getElementById('name').value;
   formData[entry2] = document.getElementById('email').value;
   formData[entry3] = document.getElementById('message').value;
   
   postToGoogleDB(formData);
} 

initControllers(); // must be last line of code