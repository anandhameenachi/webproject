function handleBookingFormSubmit(form, bookingType) {
    event.preventDefault(); 
    
    
    const formData = new FormData(form);
    const bookingDetails = Object.fromEntries(formData.entries());


    handleNavigation('confirmation');

    
    const confirmationMessage = document.querySelector('#confirmation .confirmation-message');
    confirmationMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h2>Thank You!</h2>
        <p>Your ${bookingType} booking has been confirmed.</p>
    `;

    
    const bookingDetailsSection = document.querySelector('#confirmation .booking-details');
    bookingDetailsSection.innerHTML = `
        <h2>Client Details</h2>
        ${Object.entries(bookingDetails).map(([key, value]) => `
            <p><strong>${key}:</strong> ${value}</p>
        `).join('')}
    `;
}

function generateBookingReference() {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let bookingReference = '';
    for (let i = 0; i < 6; i++) {
        bookingReference += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return bookingReference;
}

function handleNavigation(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("submit", function(event) {
        var form = event.target;

        if (form.id.endsWith("Form")) {
            const bookingType = form.id.replace("Form", "");
            handleBookingFormSubmit(form, bookingType);
        }
    });


    handleNavigation('profile');
});
