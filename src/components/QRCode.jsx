import React from 'react';

const QRCode = ({ imagePath, imageLegendUrl, url }) => {

    return (
        <div class="main-content-item" onClick={() => {
            window.open("http://www.google.com")
        }}>
            <img src={imageLegendUrl} class="qr-code-legend" />
            <img src={imagePath} class="qr-code"  />
        </div>
    );
}

export default QRCode;