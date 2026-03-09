document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('visitorName').value;
    const interest = document.getElementById('interest').value;
    const responseDiv = document.getElementById('formResponse');

    // Simulating a response for the tourist
    responseDiv.innerHTML = `<p style="color: #e64a19; font-weight: bold; margin-top: 15px;">
        Thank you, ${name}! We have received your inquiry about ${interest}. 
        Our Solapur travel guide team will contact you soon with more details about our local traditions and regional cuisine!
    </p>`;

    // Clear form
    document.getElementById('enquiryForm').reset();
});
