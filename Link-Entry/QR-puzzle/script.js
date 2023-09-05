document.addEventListener('DOMContentLoaded', function () {
    const qrCodeDiv = document.getElementById('qr-code');

    // Get the query parameter containing the link
    const urlParams = new URLSearchParams(window.location.search);
    const qrCodeData = urlParams.get('data');

    if (qrCodeData) {
        // Generate the QR code and display it using qrcode.js
        const qr = new QRCode(qrCodeDiv, {
            text: qrCodeData,
            width: 300,
            height: 300,
        });
    }
});
