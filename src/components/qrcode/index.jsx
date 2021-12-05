import "./styles.css";

const QRCode = ({ imagePath, imageLegendUrl, url }) => {
  return (
    <div
      className="qrcode-item-container"
      onClick={() => {
        window.open(url);
      }}
    >
      <img src={imageLegendUrl} className="qr-code-item-legend" />
      <img src={imagePath} className="qr-code-item-image" />
    </div>
  );
};

export default QRCode;
