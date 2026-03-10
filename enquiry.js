document.getElementById('touristForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const status = document.getElementById('status');
    
    // Simple simulation of data processing
    status.innerText = "Processing your enquiry...";
    status.style.color = "#6A1B9A";

    setTimeout(() => {
        status.innerText = `Thank you, ${name}! Your enquiry has been sent. Our Solapur travel experts will contact you soon.`;
        status.style.color = "#FF5722";
        document.getElementById('touristForm').reset();
    }, 1500);
});
