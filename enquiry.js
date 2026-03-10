<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquiry | Plan Your Visit</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="content-wrapper">
        <h1>Tourist Enquiry</h1>
        <div class="card">
            <form id="enquiryForm">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                
                <label for="interest">What interests you most?</label>
                <select id="interest">
                    <option value="Spiritual">Spiritual Centers [cite: 6]</option>
                    <option value="History">Historic Monuments [cite: 28]</option>
                    <option value="Textiles">Traditional Textiles [cite: 9]</option>
                    <option value="Food">Regional Cuisine [cite: 10]</option>
                </select>
                
                <button type="button" onclick="submitEnquiry()">Submit Enquiry</button>
            </form>
            <p id="responseMessage"></p>
        </div>
    </main>
    <script src="enquiry.js"></script>
</body>
</html>
