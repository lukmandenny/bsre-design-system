# Corner Radius

Kelengkungan sudut (_corner radius_) pada elemen antarmuka bukan sekadar pemanis visual. Radius membantu kita membedakan interaktivitas elemen, menciptakan hierarki ruang, dan memberikan kesan modern serta ramah pada aplikasi BSrE.

Sistem kita menggunakan set token radius yang tetap (_fixed_) untuk memastikan konsistensi di seluruh komponen.

## Token Radius

Berikut adalah skala token radius yang tersedia. Jika menggunakan Tailwind CSS, kita cukup memanggil nama token ini dengan awalan `rounded-` (contoh: `rounded-base`).

<div class="overflow-x-auto border border-gray-200 rounded-xl mt-6 mb-8 bg-white shadow-sm">
  <table class="w-full text-left border-collapse min-w-[600px] m-0">
    <thead>
      <tr class="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
        <th class="p-4 font-bold w-24">Preview</th>
        <th class="p-4 font-bold">Token name</th>
        <th class="p-4 font-bold">Value (px)</th>
        <th class="p-4 font-bold">Tailwind Class</th>
        <th class="p-4 font-bold">Rekomendasi Penggunaan</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 text-sm">
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-gray-200 border border-gray-300" style="border-radius: 0px;"></div></td>
        <td class="p-4 font-bold text-gray-900">0</td>
        <td class="p-4 text-gray-600">0px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-0</code></td>
        <td class="p-4 text-gray-500">Elemen yang menempel penuh di tepi layar (seperti Navbar/Footer).</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 2px;"></div></td>
        <td class="p-4 font-bold text-gray-900">xxs</td>
        <td class="p-4 text-gray-600">2px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-xxs</code></td>
        <td class="p-4 text-gray-500">Elemen interaktif mikro: Checkbox, Scrollbar tipis.</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 4px;"></div></td>
        <td class="p-4 font-bold text-gray-900">xs</td>
        <td class="p-4 text-gray-600">4px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-xs</code></td>
        <td class="p-4 text-gray-500">Elemen kecil: Tooltip, Badge kecil, Tag.</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 6px;"></div></td>
        <td class="p-4 font-bold text-gray-900">sm</td>
        <td class="p-4 text-gray-600">6px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-sm</code></td>
        <td class="p-4 text-gray-500">Elemen pendukung dalam wadah: Menu dropdown, List item, Gambar *thumbnail*.</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 12px;"></div></td>
        <td class="p-4 font-bold text-gray-900">base</td>
        <td class="p-4 text-gray-600">12px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-base</code></td>
        <td class="p-4 text-gray-500">Elemen kontrol utama & wadah sedang: <strong>Buttons</strong>, Form Inputs, Cards, Alert banners.</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 16px;"></div></td>
        <td class="p-4 font-bold text-gray-900">lg</td>
        <td class="p-4 text-gray-600">16px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-lg</code></td>
        <td class="p-4 text-gray-500">Wadah konten besar: Modal dialogs, Bottom sheets, Layout panels.</td>
      </tr>
      <tr>
        <td class="p-4"><div class="w-12 h-12 bg-[#2FAAE1] border border-[#2FAAE1]" style="border-radius: 9999px;"></div></td>
        <td class="p-4 font-bold text-gray-900">full</td>
        <td class="p-4 text-gray-600">9999px</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">rounded-full</code></td>
        <td class="p-4 text-gray-500">Bentuk bulat sempurna: Avatar, Radio button, Pill tags.</td>
      </tr>
    </tbody>
  </table>
</div>

## Pedoman Penggunaan (_Do's & Don'ts_)

Menerapkan _corner radius_ membutuhkan logika proporsi. Ikuti pedoman berikut agar antarmuka tidak terlihat aneh atau tidak seimbang.

### 1. Sesuaikan dengan Ukuran Elemen

Aturan emasnya adalah: **Semakin besar ukuran fisik elemen, semakin besar pula radius yang dibutuhkan.** Jika Button menggunakan ukuran `base (12px)`, maka wadah besar seperti Modal atau Card Utama harus menggunakan ukuran yang lebih besar, yaitu `lg (16px)`.

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-8">
  <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
    <div class="h-32 bg-gray-50 flex items-center justify-center p-6 gap-4">
      <div class="bg-white border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm flex items-center justify-center" style="border-radius: 12px; height: 40px;">Button</div>
      <div class="bg-white border border-gray-200 w-32 h-24 shadow-sm" style="border-radius: 16px;"></div>
    </div>
    <div class="p-4 bg-green-50 border-t border-green-100">
      <div class="flex items-center gap-2 text-green-700 font-bold mb-1">✅ Benar (Proporsional)</div>
      <p class="text-xs text-green-800 m-0">Button menggunakan <code>base (12px)</code>, sedangkan Card wadah konten menggunakan <code>lg (16px)</code>.</p>
    </div>
  </div>

  <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
    <div class="h-32 bg-gray-50 flex items-center justify-center p-6 gap-4">
      <div class="bg-white border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm flex items-center justify-center" style="border-radius: 16px; height: 40px;">Button</div>
      <div class="bg-white border border-gray-200 w-32 h-24 shadow-sm" style="border-radius: 4px;"></div>
    </div>
    <div class="p-4 bg-red-50 border-t border-red-100">
      <div class="flex items-center gap-2 text-red-700 font-bold mb-1">❌ Salah (Tertukar)</div>
      <p class="text-xs text-red-800 m-0">Button diberi radius terlalu besar (hampir oval), sedangkan Card wadah besar diberi radius terlalu kecil.</p>
    </div>
  </div>
</div>

### 2. Aturan _Nesting_ (Radius Bersarang)

Ketika kita meletakkan elemen bersudut lengkung di dalam wadah (_container_) yang juga bersudut lengkung, jarak antara keduanya akan menciptakan ilusi optik.

Agar terlihat harmonis, **radius elemen dalam harus lebih kecil daripada radius wadah luar**. Secara matematis: `Outer Radius - Padding = Inner Radius`.

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-8">
  <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
    <div class="h-32 bg-gray-50 flex items-center justify-center p-6">
      <div class="bg-white border border-gray-200 p-1 shadow-sm" style="border-radius: 16px; width: 140px;">
        <div class="bg-gray-300 w-full h-16" style="border-radius: 12px;"></div>
        <div class="h-2 mt-2 ml-1 bg-gray-200 w-1/2 rounded-full mb-1"></div>
      </div>
    </div>
    <div class="p-4 bg-green-50 border-t border-green-100">
      <div class="flex items-center gap-2 text-green-700 font-bold mb-1">✅ Benar (Harmonis)</div>
      <p class="text-xs text-green-800 m-0">Radius card luar <code>lg (16px)</code>, elemen gambar di dalamnya menggunakan radius yang lebih kecil <code>base (12px)</code>.</p>
    </div>
  </div>

  <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
    <div class="h-32 bg-gray-50 flex items-center justify-center p-6">
      <div class="bg-white border border-gray-200 p-1 shadow-sm" style="border-radius: 12px; width: 140px;">
        <div class="bg-gray-300 w-full h-16" style="border-radius: 16px;"></div>
        <div class="h-2 mt-2 ml-1 bg-gray-200 w-1/2 rounded-full mb-1"></div>
      </div>
    </div>
    <div class="p-4 bg-red-50 border-t border-red-100">
      <div class="flex items-center gap-2 text-red-700 font-bold mb-1">❌ Salah (Konflik)</div>
      <p class="text-xs text-red-800 m-0">Radius gambar di dalam <code>lg (16px)</code> lebih besar daripada card wadahnya <code>base (12px)</code>.</p>
    </div>
  </div>
</div>

## Cara Implementasi

### 1. Web (Tailwind CSS)

Pastikan token-token di atas sudah didaftarkan pada konfigurasi Tailwind proyekmu.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        0: '0',
        xxs: '2px',
        xs: '4px',
        sm: '6px',
        base: '12px',
        lg: '16px',
        full: '9999px',
      },
    },
  },
};
```

Setelah itu, gunakan secara langsung di HTML/Vue:

```html
<button class="rounded-base bg-blue-600 text-white px-4 py-2">Simpan</button>

<div class="rounded-lg bg-white p-6 shadow-md">Ini adalah Modal Dialog</div>
```

### 2. Mobile (Flutter)

Di Flutter, kelengkungan sudut diatur menggunakan `BorderRadius.circular()`. Sangat disarankan untuk membuat _static class_ khusus token agar nilainya terpusat.

```dart
// Definisi Token
class BsreRadius {
  static const double none = 0.0;
  static const double xxs = 2.0;
  static const double xs = 4.0;
  static const double sm = 6.0;
  static const double base = 12.0;
  static const double lg = 16.0;
  static const double full = 9999.0;
}

// Cara Penggunaan
Container(
  decoration: BoxDecoration(
    color: Colors.white,
    // Gunakan token di sini
    borderRadius: BorderRadius.circular(BsreRadius.base),
  ),
  child: Text('Konten Card'),
)
```
