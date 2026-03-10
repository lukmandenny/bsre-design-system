# Tipografi (Typography)

Tipografi dalam BSrE Design System dirancang untuk menjaga keterbacaan (_readability_) yang optimal, menciptakan hierarki informasi yang logis, dan memberikan kesan antarmuka yang modern namun tetap profesional.

## 1. Font Utama (Typeface)

Kita menggunakan **DM Sans** sebagai satu-satunya _font_ utama (_Primary Font_) di seluruh ekosistem aplikasi BSrE, baik untuk platform Web maupun Mobile. DM Sans dipilih karena memiliki bentuk geometris yang bersih, jarak antar huruf yang proporsional, dan sangat mudah dibaca pada layar beresolusi rendah maupun tinggi.

<div class="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-6 mb-8 shadow-sm">
  <div class="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-[#2FAAE1]/5 border-b border-gray-100" style="font-family: 'DM Sans', sans-serif;">
    <div class="text-[120px] leading-none font-bold text-[#2FAAE1] tracking-tighter">
      Aa
    </div>
    <div class="flex-1">
      <h3 class="text-3xl font-bold text-gray-900 mb-2 mt-0">DM Sans</h3>
      <p class="text-gray-500 text-lg m-0">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br> a b c d e f g h i j k l m n o p q r s t u v w x y z <br> 0 1 2 3 4 5 6 7 8 9 & @ # % * ! ?</p>
    </div>
  </div>
  <div class="p-6 bg-gray-50 text-sm text-gray-600 flex justify-between items-center">
    <span>Dirancang oleh Colophon Foundry.</span>
    <a href="https://fonts.google.com/specimen/DM+Sans" target="_blank" class="font-bold text-[#2FAAE1] hover:underline flex items-center gap-1">
      Unduh di Google Fonts
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h80a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V56h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,56V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg>
    </a>
  </div>
</div>

## 2. Ketebalan (Font Weights)

Untuk menjaga _file size_ tetap ringan dan performa aplikasi tetap cepat, kita hanya menggunakan **tiga tingkat ketebalan** dari DM Sans. Hindari penggunaan varian ketebalan lain di luar tiga opsi ini.

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8" style="font-family: 'DM Sans', sans-serif;">
  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div class="text-4xl mb-4 font-normal text-gray-900">Regular</div>
    <div class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Weight: 400</div>
    <p class="text-sm text-gray-600 m-0 leading-relaxed font-normal">Digunakan untuk hampir semua teks paragraf (Body), deskripsi, dan elemen antarmuka standar yang tidak membutuhkan penekanan.</p>
  </div>
  
  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div class="text-4xl mb-4 font-medium text-gray-900">Medium</div>
    <div class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Weight: 500</div>
    <p class="text-sm text-gray-600 m-0 leading-relaxed font-medium">Digunakan untuk tombol utama (Buttons), label input (Forms), dan teks yang membutuhkan sedikit penekanan di atas latar berwarna.</p>
  </div>

  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm ring-1 ring-[#2FAAE1]">
    <div class="text-4xl mb-4 font-bold text-gray-900">Bold</div>
    <div class="text-sm font-bold text-[#2FAAE1] uppercase tracking-wider mb-2">Weight: 700</div>
    <p class="text-sm text-gray-600 m-0 leading-relaxed font-bold">Digunakan eksklusif untuk Judul Halaman (Headings), angka statistik penting, dan peringatan kritis.</p>
  </div>
</div>

## 3. Skala Hierarki (Type Scale)

Skala tipografi kita dikalibrasi menggunakan sistem _rem_ (dengan basis 16px) yang dipadukan dengan _Line Height_ (jarak antar baris) yang proporsional.

Jika menggunakan Tailwind CSS, kita cukup memanggil _utility class_ yang sudah terstandarisasi.

### Headings (Judul)

Digunakan untuk menstrukturkan halaman. Jangan pernah melewati urutan heading (misal: dari H1 langsung ke H3) hanya demi mendapatkan ukuran yang lebih kecil.

<div class="overflow-x-auto border border-gray-200 rounded-xl mt-4 mb-8 bg-white">
  <table class="w-full text-left border-collapse min-w-[600px] m-0">
    <thead>
      <tr class="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
        <th class="p-4 font-bold">Contoh Visual</th>
        <th class="p-4 font-bold">Penggunaan</th>
        <th class="p-4 font-bold">Tailwind Class</th>
        <th class="p-4 font-bold">Size / Line-height</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100" style="font-family: 'DM Sans', sans-serif;">
      <tr>
        <td class="p-4"><div class="text-4xl font-bold text-gray-900">Heading 1</div></td>
        <td class="p-4 text-sm text-gray-600">Judul utama halaman (Page Title).</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-4xl font-bold</code></td>
        <td class="p-4 text-sm text-gray-500">36px / 40px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-3xl font-bold text-gray-900">Heading 2</div></td>
        <td class="p-4 text-sm text-gray-600">Judul seksi/bagian utama.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-3xl font-bold</code></td>
        <td class="p-4 text-sm text-gray-500">30px / 36px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-2xl font-bold text-gray-900">Heading 3</div></td>
        <td class="p-4 text-sm text-gray-600">Judul Card atau Modal/Popup.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-2xl font-bold</code></td>
        <td class="p-4 text-sm text-gray-500">24px / 32px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-xl font-bold text-gray-900">Heading 4</div></td>
        <td class="p-4 text-sm text-gray-600">Sub-judul dari sebuah Card.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-xl font-bold</code></td>
        <td class="p-4 text-sm text-gray-500">20px / 28px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-lg font-bold text-gray-900">Heading 5</div></td>
        <td class="p-4 text-sm text-gray-600">Grup elemen dalam satu *section*.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-lg font-bold</code></td>
        <td class="p-4 text-sm text-gray-500">18px / 28px</td>
      </tr>
    </tbody>
  </table>
</div>

### Body & Utilities (Teks Paragraf)

Ukuran dasar yang digunakan untuk membaca informasi detail. Sangat disarankan untuk membatasi panjang karakter maksimal 70-80 karakter per baris agar mata pengguna tidak kelelahan.

<div class="overflow-x-auto border border-gray-200 rounded-xl mt-4 mb-8 bg-white">
  <table class="w-full text-left border-collapse min-w-[600px] m-0">
    <thead>
      <tr class="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
        <th class="p-4 font-bold">Contoh Visual</th>
        <th class="p-4 font-bold">Penggunaan</th>
        <th class="p-4 font-bold">Tailwind Class</th>
        <th class="p-4 font-bold">Size / Line-height</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100" style="font-family: 'DM Sans', sans-serif;">
      <tr>
        <td class="p-4 w-1/3"><div class="text-base font-normal text-gray-900 leading-relaxed">Ini adalah teks Body 1. Ukuran standar yang paling direkomendasikan untuk paragraf yang panjang.</div></td>
        <td class="p-4 text-sm text-gray-600">Paragraf utama (Default).</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-base</code></td>
        <td class="p-4 text-sm text-gray-500">16px / 24px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-sm font-normal text-gray-900 leading-normal">Ini adalah teks Body 2. Digunakan untuk deskripsi pendek atau teks bantuan pada form input.</div></td>
        <td class="p-4 text-sm text-gray-600">Teks sekunder / Data tabel.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-sm</code></td>
        <td class="p-4 text-sm text-gray-500">14px / 20px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-xs font-normal text-gray-500">Ini adalah teks Caption. Gunakan seperlunya.</div></td>
        <td class="p-4 text-sm text-gray-600">Timestamp, tooltip, hak cipta.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">text-xs</code></td>
        <td class="p-4 text-sm text-gray-500">12px / 16px</td>
      </tr>
      <tr>
        <td class="p-4"><div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">OVERLINE TEXT</div></td>
        <td class="p-4 text-sm text-gray-600">Label di atas Heading, badge.</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded break-all">text-[10px] font-bold uppercase tracking-widest</code></td>
        <td class="p-4 text-sm text-gray-500">10px / 16px</td>
      </tr>
    </tbody>
  </table>
</div>

## Integrasi DM Sans ke Proyek

Jika _tech stack_ proyek belum memiliki font **DM Sans**, pastikan untuk mengimpornya terlebih dahulu.

### 1. Proyek Web (Vue / HTML)

Tambahkan baris berikut ke dalam file `index.html` (di dalam tag `<head>`):

```html
<link
  rel="preconnect"
  href="[https://fonts.googleapis.com](https://fonts.googleapis.com)"
/>
<link
  rel="preconnect"
  href="[https://fonts.gstatic.com](https://fonts.gstatic.com)"
  crossorigin
/>
<link
  href="[https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap](https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap)"
  rel="stylesheet"
/>
```

Lalu pastikan konfigurasi `tailwind.config.js` sudah diatur untuk menjadikan DM Sans sebagai font utama:

```javascript
module.exports = {
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif'],
    },
  },
};
```

### 2. Proyek Mobile (Flutter)

Unduh aset font DM Sans berformat `.ttf` dari Google Fonts, simpan di folder `assets/fonts/`, lalu daftarkan di `pubspec.yaml`:

```yaml
flutter:
  fonts:
    - family: DMSans
      fonts:
        - asset: assets/fonts/DMSans-Regular.ttf
        - asset: assets/fonts/DMSans-Medium.ttf
          weight: 500
        - asset: assets/fonts/DMSans-Bold.ttf
          weight: 700
```
