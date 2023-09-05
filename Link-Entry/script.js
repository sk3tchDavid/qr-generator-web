document.addEventListener('DOMContentLoaded', function () {
    const linkForm = document.getElementById('link-form');

    linkForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const linkInput = document.getElementById('link-input').value;
        
        // Generate QR code and set the link as a query parameter
        const qrCodeData = encodeURIComponent(linkInput);

        // Redirect to the QR-puzzle folder with the link as a query parameter
        window.location.href = `QR-puzzle/index.html?data=${qrCodeData}`;
    });
});