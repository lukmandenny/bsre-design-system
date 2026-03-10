# Tata Letak (Layout Grid)

Sistem tata letak (_grid system_) membantu kita membangun antarmuka yang terstruktur, konsisten, dan responsif di berbagai ukuran layar.

Kita menggunakan fondasi **Grid 12-Kolom** yang akan beradaptasi secara otomatis menjadi 8 kolom di _tablet_ dan 4 kolom di layar _mobile_.

## Anatomi Grid

Sebelum menerapkan tata letak, pahami tiga komponen utama yang membentuk sistem _grid_ kita:

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8">
  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div class="w-10 h-10 bg-blue-100 text-bsre-blue rounded-lg flex items-center justify-center mb-4"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,200H40V56H72ZM144,200H112V56h32Zm72,0H184V56h32V200Z"></path></svg></div>
    <h3 class="text-lg font-bold text-gray-900 mb-2 mt-0">1. Kolom (Columns)</h3>
    <p class="text-sm text-gray-600 m-0">Bidang vertikal tempat kita meletakkan konten. Lebar kolom bersifat fleksibel (_fluid_) dan menyesuaikan sisa ruang layar.</p>
  </div>
  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div class="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56ZM40,168V104H216v64ZM40,200V184H216v16Z"></path></svg></div>
    <h3 class="text-lg font-bold text-gray-900 mb-2 mt-0">2. Gutter</h3>
    <p class="text-sm text-gray-600 m-0">Jarak kosong di antara kolom. Berfungsi memberi ruang bernapas antar konten. Ukuran _gutter_ tetap (tetapi berubah berdasarkan _breakpoint_).</p>
  </div>
  <div class="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0ZM96,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path></svg></div>
    <h3 class="text-lg font-bold text-gray-900 mb-2 mt-0">3. Margin (Container)</h3>
    <p class="text-sm text-gray-600 m-0">Ruang kosong di sisi luar kiri dan kanan layar. Melindungi konten agar tidak menyentuh ujung perangkat secara langsung.</p>
  </div>
</div>

## Spesifikasi Breakpoint

Sistem antarmuka kita membagi ukuran layar menjadi tiga kategori utama. Perhatikan perubahan jumlah kolom dan ukuran _margin/gutter_ pada masing-masing _breakpoint_.

<div class="overflow-x-auto border border-gray-200 rounded-xl mt-4 mb-8 bg-white shadow-sm">
  <table class="w-full text-left border-collapse min-w-[700px] m-0">
    <thead>
      <tr class="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
        <th class="p-4 font-bold">Perangkat</th>
        <th class="p-4 font-bold">Breakpoint (Lebar Layar)</th>
        <th class="p-4 font-bold">Jumlah Kolom</th>
        <th class="p-4 font-bold">Gutter (Jarak Kolom)</th>
        <th class="p-4 font-bold">Margin (Tepi Layar)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 text-sm">
      <tr>
        <td class="p-4 font-bold text-gray-900 flex items-center gap-2"><svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"></path></svg> Mobile</td>
        <td class="p-4 text-gray-600">0px - 767px</td>
        <td class="p-4 font-bold text-bsre-blue">4 Kolom</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">16px (gap-4)</code></td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">16px (px-4)</code></td>
      </tr>
      <tr>
        <td class="p-4 font-bold text-gray-900 flex items-center gap-2"><svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A24,24,0,0,0,24,56V200a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V56A24,24,0,0,0,208,32Zm8,168a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z"></path></svg> Tablet</td>
        <td class="p-4 text-gray-600">768px - 1023px <code class="text-[10px] ml-1 text-gray-400">md:</code></td>
        <td class="p-4 font-bold text-bsre-blue">8 Kolom</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">24px (gap-6)</code></td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">32px (px-8)</code></td>
      </tr>
      <tr>
        <td class="p-4 font-bold text-gray-900 flex items-center gap-2"><svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M232,72V152a24,24,0,0,1-24,24H160v16h24a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16H96V176H48a24,24,0,0,1-24-24V72A24,24,0,0,1,48,48H208A24,24,0,0,1,232,72Zm-16,0a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8Z"></path></svg> Desktop</td>
        <td class="p-4 text-gray-600">≥ 1024px <code class="text-[10px] ml-1 text-gray-400">lg:</code></td>
        <td class="p-4 font-bold text-bsre-blue">12 Kolom</td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">24px (gap-6)</code></td>
        <td class="p-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded">Auto (mx-auto)</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Visualisasi Grid Berperilaku (Responsive)

Ubah ukuran jendela _browser_ (_resize window_) untuk melihat bagaimana 12 kolom di bawah ini beradaptasi menjadi 8 kolom pada ukuran tablet, dan menumpuk menjadi 4 kolom pada layar _mobile_.

<div class="bg-gray-100 border border-gray-200 rounded-xl py-8 my-6">
  <div class="max-w-6xl mx-auto px-4 md:px-8">
    <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1]">1</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1]">2</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1]">3</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1]">4</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden md:flex">5</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden md:flex">6</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden md:flex">7</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden md:flex">8</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden lg:flex">9</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden lg:flex">10</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden lg:flex">11</div>
      <div class="bg-[#2FAAE1]/20 border border-[#2FAAE1]/40 h-24 rounded-lg flex items-center justify-center text-xs font-bold text-[#2FAAE1] hidden lg:flex">12</div>
    </div>
  </div>
</div>

## Cara Implementasi

### 1. Web (Vue 3 / Tailwind CSS)

Dengan Tailwind, kita bisa mengimplementasikan perilaku responsif Uber Grid ini dengan mudah menggunakan _utility classes_ bawaan. Tidak perlu menulis CSS kustom.

```html
<div class="max-w-7xl mx-auto px-4 md:px-8">
  <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
    <div class="col-span-4 bg-white p-6 shadow rounded-xl">
      Konten A (Mengambil 4 Kolom)
    </div>

    <div
      class="col-span-4 md:col-span-4 lg:col-span-8 bg-white p-6 shadow rounded-xl"
    >
      Konten B (Lebih lebar di Desktop)
    </div>
  </div>
</div>
```

### 2. Mobile (Flutter)

Dalam pengembangan Flutter, pendekatan _grid_ kolom biasanya digantikan dengan konsep adaptif menggunakan `LayoutBuilder` atau membatasi lebar kontainer di layar besar.

Namun, untuk perilaku _grid_ yang serupa, sangat disarankan untuk menggunakan _package_ responsif (seperti `flutter_staggered_grid_view` atau `responsive_builder`), atau menggunakan konfigurasi batas maksimal lebar manual seperti ini:

```dart
import 'package:flutter/material.dart';

class ResponsiveLayout extends StatelessWidget {
  final Widget child;
  const ResponsiveLayout({Key? key, required this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        // Breakpoint Desktop
        if (constraints.maxWidth >= 1024) {
          return Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 1024),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24.0), // Gutter
                child: child,
              ),
            ),
          );
        }
        // Breakpoint Tablet
        else if (constraints.maxWidth >= 768) {
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 32.0), // Margin Tablet
            child: child,
          );
        }
        // Breakpoint Mobile
        else {
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0), // Margin Mobile
            child: child,
          );
        }
      },
    );
  }
}
```
