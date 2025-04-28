const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const modal = document.getElementById('qrModal');
const closeModal = document.getElementById('closeModal');
const qrCanvasWrapper = document.getElementById('qrCanvasWrapper');
const downloadBtn = document.getElementById('downloadBtn');

let currentQR = null;

generateBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim();
  if (!inputText) return alert("Please enter text or URL");

  qrCanvasWrapper.innerHTML = '';

  const canvas = document.createElement('canvas');

  QRCode.toCanvas(canvas, inputText, { width: 200 }, function (error) {
    if (error) console.error(error);
    qrCanvasWrapper.appendChild(canvas);
    currentQR = canvas;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

downloadBtn.addEventListener('click', () => {
  if (!currentQR) return;

  const finalCanvas = document.createElement('canvas');
  const ctx = finalCanvas.getContext('2d');

  const width = 300, height = 380;
  finalCanvas.width = width;
  finalCanvas.height = height;

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#1f3c6c";
  ctx.font = "bold 24px Poppins";
  ctx.textAlign = "center";
  ctx.fillText("QRVerse", width / 2, 40);

  ctx.drawImage(currentQR, 50, 60, 200, 200);

  ctx.font = "bold 16px Poppins";
  ctx.fillText("Generate your QR", width / 2, 300);

  const link = document.createElement('a');
  link.href = finalCanvas.toDataURL("image/png");
  link.download = "qrverse.png";
  link.click();
});
