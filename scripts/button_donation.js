const button_donations = document.querySelectorAll('.button_donation');

button_donations.forEach(button_donation => {
    button_donation.addEventListener("click", () => {
        button_donations.forEach(button_donation => 
            button_donation.classList.remove('active'));
            button_donation.classList.add('active');
    });
})
