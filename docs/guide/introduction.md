# Pengenalan

**BSrE Design System** merupakan sebuah sistem desain yang menyediakan standar teknis, panduan implementasi, dan sumber daya siap pakai yang dirancang untuk mengoptimalkan alur kerja desainer dan pengembang di seluruh ekosistem **Balai Besar Sertifikasi Elektronik (BSrE)**.

**BSrE Design System** menjadi **_single source of truth_** (acuan utama) dalam membangun aplikasi yang konsisten dan efisien. Sistem ini menyediakan bahasa desain dan struktur kode yang selaras, guna menjembatani kesenjangan antara desainer dan pengembang agar dapat bekerja dalam satu frekuensi yang sama.

**BSrE Design System** merupakan sebuah ekosistem hidup yang terus berkembang. Untuk mempermudah pemeliharaan dan skalabilitas, seluruh aset dan komponen dikelola dan didistribusikan secara terpusat:

- melalui **Figma** untuk tim desainer.
- melalui **Package Manager** (npm dan pub.dev) untuk tim pengembang.

Dengan pendekatan dua arah ini, setiap perubahan desain dapat tersinkronisasi dengan cepat dan diimplementasikan secara presisi ke seluruh produk digital BSrE tanpa perlu perombakan manual.

## Latar Belakang

Seiring berkembangnya organisasi dan bertambahnya pengguna, **BSrE** senantiasa berkomitmen memberikan layanan terbaik melalui berbagai aplikasi yang dapat memberikan kemudahan bagi pengguna. Namun, peningkatan jumlah aplikasi ini menghadirkan tantangan yang semakin kompleks dalam menjaga konsistensi visual (UI) dan kualitas pengalaman pengguna (UX).

Sekilas, berbagai aplikasi yang dimiliki **BSrE** saat ini memang sudah berfungsi dan dapat menjalankan tugasnya dengan baik. Namun, pesatnya pembuatan aplikasi baru ini mulai menimbulkan inefisiensi operasional dan risiko jangka panjang yang sering kali tidak disadari.

### 1. Fragmentasi Pengembangan

Saat ini, **aplikasi dikembangkan oleh beberapa tim secara terpisah dengan _timeline_ dan cara kerja yang berbeda-beda**. Tanpa panduan terpusat, setiap pengembang cenderung mengambil keputusan desain berdasarkan preferensi pribadi atau tren saat itu, menciptakan perbedaan visual yang cukup signifikan antar produk.

Bagi pengguna awam, perbedaan ini membuat mereka harus belajar dari nol setiap kali menggunakan aplikasi BSrE yang baru. Selain membingungkan, wajah aplikasi yang tidak seragam dapat menurunkan citra dan kredibilitas **BSrE** sebagai institusi yang profesional.

### 2. Redundansi Teknis

Pengembang sering kali harus membangun komponen dasar (seperti tombol, input, modal) dari nol berulang kali di setiap proyek baru. Waktu dan tenaga berharga ini seharusnya bisa dihemat dan dialokasikan untuk pengembangan fitur layanan yang lebih krusial.

### 3. Sulitnya Skalabilitas & Pemeliharaan

Karena komponen antarmuka saat ini tidak dikelola secara terpusat, pemeliharaan sistem dalam skala besar akan menjadi sangat sulit. Apabila ada perubahan _branding_ atau pembaruan standar UI, pengembang harus mencari dan merombak kode secara manual satu per satu di setiap aplikasi.

## Tujuan

Pengembangan **BSrE Design System** didasari oleh empat pilar utama untuk menjawab tantangan operasional dan pengembangan produk di lingkungan BSrE.

### 1. Konsistensi Visual

Memastikan setiap aplikasi memiliki bahasa visual dan pola interaksi yang seragam. Hal ini bertujuan untuk mengurangi kurva belajar pengguna awam saat berpindah antar aplikasi, sekaligus memberikan pengalaman dan impresi yang baik bagi pengguna.

### 2. Efisiensi Pengembangan

Menerapkan prinsip _reusability_. Pengembang tidak perlu membangun komponen dasar dari nol untuk setiap proyek baru. Dengan menggunakan komponen yang sudah teruji, tim dapat fokus pada penyelesaian logika bisnis dan fitur utama.

### 3. Kolaborasi yang Lebih Baik

Menjembatani kesenjangan teknis antara desain dan kode. Dengan menggunakan standar yang sama, desainer dan pengembang dapat berkomunikasi dengan bahasa yang selaras, sehingga secara signifikan mengurangi potensi kesalahan interpretasi desain (miskomunikasi).

### 4. Memperkuat Identitas Instansi

Dengan mengintegrasikan komponen visual yang konsisten di seluruh ekosistem **BSrE**. Hal ini mempertegas identitas BSrE sebagai institusi yang profesional dan kredibel.

## Stack Teknologi

**BSrE Design System** dibangun di atas fondasi teknologi modern untuk menjamin performa, aksesibilitas, dan kemudahan pemeliharaan:

| Teknologi          | Peran                               |
| :----------------- | :---------------------------------- |
| **Figma**          | Desain & Prototyping                |
| **Phosphor Icons** | Ikonografi                          |
| **Vue 3**          | Framework Web                       |
| **Tailwind CSS**   | Styling Web                         |
| **npm**            | Distribusi Library Web              |
| **Flutter**        | Framework Mobile & Desktop          |
| **pub.dev**        | Distribusi Library Mobile & Desktop |
| **Vite**           | Build Tool Web                      |

---

**BSrE Design System** hadir untuk menjembatani dan memastikan bahwa siapapun pengembangnya dan kapanpun aplikasinya dibuat, standar kualitasnya tetap sama.
Bukan sekadar untuk mempercantik tampilan, melainkan sebuah investasi infrastruktur.

**BSrE Design System** memastikan pengembangan dan pemeliharaan aplikasi di BSrE menjadi jauh lebih cepat, hemat sumber daya, dan selalu konsisten dalam menjaga citra dan kredibilitas **BSrE** sebagai institusi yang profesional.
