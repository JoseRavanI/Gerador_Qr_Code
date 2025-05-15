const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

function generateQrCode() {
  const value = qrCodeInput.value.trim();
  if (!value) return;

  qrCodeBtn.innerText = "⏳ Gerando...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;

  qrCodeImg.onload = () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "✅ Código criado!";
  };
}

qrCodeBtn.addEventListener("click", generateQrCode);

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateQrCode();
});

qrCodeInput.addEventListener("input", () => {
  if (!qrCodeInput.value.trim()) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "🔄 Gerar QR Code";
  }
});
