document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from local storage
    const savedData = localStorage.getItem('savedFormData');
    console.log(savedData);
    // Retrieve data from the server using fetch
    fetch('http://212.227.205.177:8291/getData') // Replace 'getData' with your endpoint
        .then(response => response.json())
        .then(data => {
            // Process the received data
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    document.addEventListener('DOMContentLoaded', function () {
        // Define statusInfo
        const statusInfo = document.getElementById('statusInfo');
    // Display status information if data exists
    if (savedData) {
        const formData = JSON.parse(savedData);

        // Create paragraphs to display form data
        const projectInfo = document.createElement('p');
        projectInfo.textContent = `Project Information: ${formData.projectInformation}`;

        const startDate = document.createElement('p');
        startDate.textContent = `Start Date: ${formData.startDate}`;

        const endDate = document.createElement('p');
        endDate.textContent = `End Date: ${formData.endDate}`;

        // Append form data paragraphs to statusInfo div
        statusInfo.appendChild(projectInfo);
        statusInfo.appendChild(startDate);
        statusInfo.appendChild(endDate);
        // Add display for other form fields as needed
    } else {
        // Display a message if no data is found
        const noData = document.createElement('p');
        noData.textContent = 'No request information found.';
        statusInfo.appendChild(noData);
    }
});
