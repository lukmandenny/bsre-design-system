# Panduan Copywriting

Desain visual yang indah tidak akan maksimal jika teks di dalamnya membingungkan. Panduan ini dibuat untuk memastikan setiap teks dalam aplikasi BSrE memiliki gaya bahasa yang seragam: **Jelas, Ringkas, dan Membantu pengguna**.

## Prinsip Dasar

Saat menulis teks untuk antarmuka (_User Interface_), selalu ingat 3 prinsip utama ini:

### 1. Jelas (Clear)

Gunakan bahasa yang mudah dipahami. Hindari jargon teknis yang hanya dimengerti oleh _developer_. Jangan membuat pengguna menebak-nebak apa yang terjadi.

### 2. Ringkas (Concise)

Orang tidak membaca teks di aplikasi, mereka memindai (_scanning_). Buat kalimat sependek mungkin tanpa menghilangkan makna utamanya.

### 3. Solutif (Useful)

Jika terjadi _error_, jangan hanya menyalahkan pengguna atau sistem. Selalu berikan jalan keluar atau langkah selanjutnya yang harus dilakukan pengguna.

## Karakter Suara & Nada (_Voice & Tone_)

**Suara (Voice)** aplikasi BSrE adalah: **Profesional, Terpercaya, dan Membantu.**
Suara ini tidak pernah berubah. Namun, **Nada (Tone)** bisa berubah menyesuaikan situasi pengguna:

- **Netral/Informatif:** Saat memberikan instruksi atau deskripsi fitur.
- **Empati:** Saat pengguna mengalami masalah atau _error_.
- **Positif:** Saat pengguna berhasil menyelesaikan suatu tindakan krusial.

## Panduan Penulisan & Contoh (_Do's & Don'ts_)

Berikut adalah panduan praktis penulisan untuk elemen-elemen UI beserta contohnya:

### 1. Tombol (Call to Action)

Tombol harus memuat kata kerja aktif yang menjelaskan apa yang akan terjadi jika ditekan. Hindari kata-kata yang terlalu umum.

::: tip Aturan
Gunakan **Title Case** (Huruf besar di awal kata) untuk tombol. Maksimal 2-3 kata.
:::

| ❌ Hindari (Don't) | ✅ Gunakan (Do)   | Alasan                          |
| :----------------- | :---------------- | :------------------------------ |
| Klik di Sini       | **Lihat Dokumen** | Lebih spesifik ke aksi.         |
| Oke / Ya           | **Simpan Data**   | Memperjelas apa yang disetujui. |
| Batal Tambah       | **Batal**         | Lebih ringkas.                  |

### 2. Pesan Error (_Error Messages_)

Jangan membuat pengguna merasa bodoh. Beritahu apa yang salah secara spesifik dan bagaimana cara memperbaikinya. Hindari bahasa teknis sistem (seperti _Null Pointer Exception_ atau _500 Internal Server Error_).

| ❌ Hindari (Don't)                              | ✅ Gunakan (Do)                                         | Alasan                  |
| :---------------------------------------------- | :------------------------------------------------------ | :---------------------- |
| Input salah!                                    | **NIP harus terdiri dari 18 angka.**                    | Spesifik dan solutif.   |
| Server Timeout.                                 | **Gagal memuat data. Silakan coba beberapa saat lagi.** | Bahasa lebih manusiawi. |
| NIK tidak terdaftar dalam sistem database BSrE. | **NIK tidak ditemukan.**                                | Lebih ringkas.          |

### 3. Pesan Sukses (_Success Messages_)

Berikan konfirmasi yang jelas saat pengguna berhasil melakukan sesuatu, terutama untuk aksi yang mengubah data penting.

| ❌ Hindari (Don't) | ✅ Gunakan (Do)                      | Alasan                                       |
| :----------------- | :----------------------------------- | :------------------------------------------- |
| Sukses!            | **Dokumen berhasil ditandatangani.** | Menjelaskan secara spesifik apa yang sukses. |
| Data diupdate.     | **Profil berhasil diperbarui.**      | Bahasa lebih natural dan baku.               |

### 4. Placeholder & Label Input

Label input harus singkat dan deskriptif. Gunakan _placeholder_ (teks bayangan di dalam kolom) sebagai contoh format isian, bukan sebagai pengulangan label.

- **Label:** Nomor Induk Pegawai (NIP)
- **Placeholder:** Contoh: 199001012014021001

## Tata Bahasa dan Tanda Baca

Agar konsisten di seluruh aplikasi, ikuti aturan mekanik penulisan berikut:

1. **Sentence case:** Gunakan format ini (hanya huruf pertama di awal kalimat yang kapital) untuk judul halaman, deskripsi, pesan _error_, dan _tooltip_.
   - _Contoh: "Pilih dokumen yang ingin ditandatangani."_
2. **Title Case:** Gunakan format ini untuk menu navigasi, label kolom tabel, dan tombol.
   - _Contoh: "Tambah Pengguna", "Riwayat Aktivitas"._
3. **Titik di akhir kalimat:** Gunakan titik hanya untuk kalimat yang terdiri dari dua baris atau lebih (paragraf/deskripsi). **Jangan gunakan titik** pada tombol, label input, _toast notification_ singkat, atau judul.
4. **Format Tanggal:** Gunakan format "DD Bulan YYYY" untuk bahasa Indonesia.
   - _Contoh: 17 Agustus 2026._ (Hindari: 17/08/2026 jika memungkinkan, agar tidak membingungkan).

> **💡 Tips Cepat:** > Bacalah teks UI yang kamu buat dengan suara lantang. Jika terdengar kaku atau aneh saat diucapkan, kemungkinan besar teks tersebut perlu direvisi.
