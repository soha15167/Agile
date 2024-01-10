document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from local storage
    const savedData = localStorage.getItem('savedFormData');
    console.log(savedData);

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
