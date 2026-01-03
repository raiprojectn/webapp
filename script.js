const form = document.getElementById("formTransaksi");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const jumlah = document.getElementById("jumlah").value.trim();
  const kategori = document.getElementById("kategori").value;

  if (!nama || !jumlah || !kategori) {
    alert("Wajib mengisi form transaksi sebelum dikirim.");
    return;
  }

  alert("transaksi berhasil disimpan, terima kasih.");
  form.reset();

});

