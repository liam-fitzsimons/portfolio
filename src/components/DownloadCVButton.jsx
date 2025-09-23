function DownloadCVButton() {
  return (
    <a
      href="/cv.pdf" // path to your file in public folder
      download // tells the browser to download instead of open
    >
      <button className="download-btn">
        Download My CV
      </button>
    </a>
  );
}

export default DownloadCVButton;
