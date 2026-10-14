const dataProduk = [
    // Elektronik
    {
        nama : "iPhone 17",
        harga : "Rp 20.499.000",
        deksripsi : "iPhone 17 premium ini ditenagai oleh chip Apple A19 terbaru dan RAM 8GB untuk mendukung pemrosesan Apple Intelligence yang cerdas serta responsif.",
        gambar : "Image/E-Product-Iphone.jpg",
        kategori : "Elektronik"
    },
    {
        nama : "Laptop 2-in-1 Microsoft Surfac Pro",
        harga : "Rp 6.500.000",
        deksripsi : "Laptop 2-in-1 Microsoft Surface Pro yang fleksibel ini memadukan mobilitas tablet dan performa PC ringkas untuk mendukung produktivitas kerja di mana saja.",
        gambar : "Image/E-Product-Laptop.jpg",
        kategori : "Elektronik"
    },
    // Pakaian
    {
        nama : "Sweater Crewneck",
        harga : "Rp 620.000",
        deksripsi : "Sweater crewneck kasual berwarna hijau botol ini menampilkan grafis retro tebal bertuliskan 'Free Smoke! for your pleasure' yang memberikan kesan santai namun tetap trendi.",
        gambar : "Image/E-Product-Pakaian.jpg",
        kategori : "Pakaian"
    },
    {
        nama : "Kaos streetwear",
        harga : "Rp 545.000",
        deksripsi : "Kaos streetwear KiiKii Osaka Japan berwarna hitam ini menonjolkan grafis angka '3' monokrom berukuran besar dengan ilustrasi kucing Maneki-neko yang memberikan kesan urban estetik khas Jepang.",
        gambar : "Image/E-Product-Pakaian-2.jpg",
        kategori : "Pakaian"
    },
    // Sepatu
    {
        nama : "Nike Air Max Bolt (Black/White)",
        harga : " Rp 1.459.000",
        deksripsi : "Sneakers kasual ini memadukan material jaring (mesh) berpori dan lapisan sintetis yang kokoh, dilengkapi teknologi bantalan udara Air Max yang mencolok di bagian tumit untuk kenyamanan melangkah harian Anda.",
        gambar : "Image/E-Product-Sepatu-2.jpg",
        kategori : "Sepatu"
    },
    {
        nama : "Nike Air Force 1 Low 'Triple White'",
        harga : "Rp 1.939.000",
        deksripsi : "Menjadi salah satu siluet sneakers paling ikonik dan tak lekang oleh waktu di dunia, sepatu kulit berwarna putih polos ini menawarkan gaya streetwear klasik tahun '80-an yang bersih dan sangat mudah dipadukan dengan pakaian apa saja.",
        gambar : "Image/E-Product-Sepatu.jpg",
        kategori : "Sepatu"
    }
]

// 1b. Fungsi untuk menampilkan produk menggunakan Looping (forEach)
function tampilanProduct(productYangDipilih) {
    const wadahProduct = document.getElementById("product-list");

    // Kosongkan wadah terlebih dahulu sebelum menampilkan data baru
    wadahProduct.innerHTML = "";

    // Melakukan looping pada array produk
    productYangDipilih.forEach(produk => {
        // Membuat elemen card produk
        const card = document.createElement("div");
        card.classList.add("product-card");

        // Memasukkan struktur HTML ke dalam card
        card.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h3>${produk.nama}</h3>
        <p class="price">${produk.harga}</p>
        <p class="desc">${produk.deksripsi}</p>
        `;

        // Memasukkan card ke dalam container utama di halaman web
        wadahProduct.appendChild(card);
    });
}
    // 2. Fungsi untuk memfilter produk berdasarkan kategori
    function filterProduk(Kategori) {
        if (Kategori === "semua") {
            tampilanProduct(dataProduk);
        } else {
            const productYangDisaring = dataProduk.filter(product => product.kategori === Kategori);
            tampilanProduct(productYangDisaring);
        }
    }

tampilanProduct(dataProduk);