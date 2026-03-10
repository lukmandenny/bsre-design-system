<script setup>
import ButtonPlayground from '../../demos/atoms/ButtonPlayground.vue'
</script>

# Button (Tombol)

Tombol digunakan untuk memicu sebuah aksi atau peristiwa, seperti mengirimkan formulir, membuka dialog, membatalkan tindakan, atau melakukan navigasi.

<div class="mb-10 mt-6">
  <ButtonPlayground />
</div>

## Variasi Utama (Variants)

BSrE Design System menyediakan beberapa variasi tombol untuk mengkomunikasikan tingkat hierarki aksi. Gunakan prop `variant` untuk mengubah gaya tombol.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full overflow-x-auto">
  <div class="flex flex-wrap justify-center items-center gap-4 min-w-max">
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-blue hover:bg-bsre-blue-dark transition-all">Primary</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all">Secondary</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-bsre-blue bg-blue-50 hover:bg-blue-100 transition-all">Secondary Blue</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-bsre-red bg-transparent border border-solid border-bsre-red hover:bg-red-50 transition-all">Outline Danger</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-gray-700 bg-transparent hover:bg-gray-100 transition-all">Ghost</button>
</div>
</div>

```vue
<template>
  <div class="flex gap-4">
    <BaseButton variant="primary">Primary</BaseButton>

    <BaseButton variant="secondary">Secondary</BaseButton>

    <BaseButton variant="secondary-blue">Secondary Blue</BaseButton>

    <BaseButton variant="outline-danger">Outline Danger</BaseButton>

    <BaseButton variant="ghost">Ghost</BaseButton>
  </div>
</template>
```

## Warna Semantik (Semantic Colors)

Selain warna _brand_, kita juga menyediakan warna semantik untuk aksi-aksi yang berkaitan dengan status tertentu.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full overflow-x-auto">
  <div class="flex flex-wrap justify-center items-center gap-4 min-w-max">
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-green hover:bg-green-700 transition-all">Success</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-yellow hover:bg-yellow-600 transition-all">Warning</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-red hover:bg-red-700 transition-all">Danger</button>
</div></div>

```vue
<BaseButton variant="success">Success</BaseButton>
<BaseButton variant="warning">Warning</BaseButton>
<BaseButton variant="danger">Danger</BaseButton>
```

## Ukuran (Sizes)

Gunakan prop `size` untuk mengubah dimensi tombol. Ukuran `md` (Medium) adalah ukuran bawaan (_default_) yang paling sering digunakan.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full overflow-x-auto">
  <div class="flex flex-wrap justify-center items-center gap-4 min-w-max">
  <button class="px-3 py-1.5 text-xs font-medium rounded-base text-white bg-bsre-blue">Extra Small</button>
  <button class="px-3 py-2 text-sm font-medium rounded-base text-white bg-bsre-blue">Small</button>
  <button class="px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-blue">Medium (Default)</button>
  <button class="px-5 py-3 text-base font-medium rounded-base text-white bg-bsre-blue">Large</button>
  <button class="px-6 py-3.5 text-base font-medium rounded-base text-white bg-bsre-blue">Extra Large</button>
</div></div>

```vue
<BaseButton size="xs">Extra Small</BaseButton>
<BaseButton size="sm">Small</BaseButton>
<BaseButton size="md">Medium (Default)</BaseButton>
<BaseButton size="lg">Large</BaseButton>
<BaseButton size="xl">Extra Large</BaseButton>
```

## Status & Perilaku (States & Behaviors)

### Loading State

Tambahkan prop `loading` untuk memberikan indikator bahwa sistem sedang memproses aksi dari pengguna. Tombol akan secara otomatis dinonaktifkan (_disabled_) dan menampilkan animasi _spinner_ putar.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full overflow-x-auto">
  <div class="flex flex-wrap justify-center items-center gap-4 min-w-max">
  <button class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-blue opacity-75 cursor-not-allowed">
    <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
    Memproses...
  </button>
</div></div>

```vue
<BaseButton loading>Memproses...</BaseButton>
```

### Block (Penuh Lebar)

Gunakan prop `block` jika tombol perlu membentang memenuhi 100% lebar dari kontainer (_parent div_) yang menaunginya. Sangat cocok untuk tampilan _mobile_ atau formulir _login_.

<div class="p-6 border border-gray-200 rounded-xl bg-white flex gap-4 mt-4 mb-4 shadow-sm">
  <button class="w-full px-4 py-2.5 text-sm font-medium rounded-base text-white bg-bsre-blue hover:bg-bsre-blue-dark transition-all">Masuk Aplikasi</button>
</div>

```vue
<BaseButton block>Masuk Aplikasi</BaseButton>
```

### Tombol sebagai Link (Anchor)

Jika kita perlu membuat tombol yang berfungsi sebagai tautan perpindahan halaman, cukup berikan prop `href`. Komponen akan secara otomatis merender tag `<a>` alih-alih `<button>`.

```vue
<BaseButton
  href="[https://bsre.bssn.go.id](https://bsre.bssn.go.id)"
  target="_blank"
  variant="outline"
>
  Kunjungi Situs Web BSrE
</BaseButton>
```

## API Reference (Props)

Berikut adalah daftar lengkap properti (_props_) yang dapat diterima oleh komponen `BaseButton`.

| Prop       | Tipe Data | Nilai Default | Deskripsi                                                                       |
| :--------- | :-------- | :------------ | :------------------------------------------------------------------------------ |
| `variant`  | `String`  | `'primary'`   | Mengubah gaya visual tombol (`primary`, `secondary`, `danger`, `outline`, dll). |
| `size`     | `String`  | `'md'`        | Mengubah ukuran tombol (`xs`, `sm`, `md`, `lg`, `xl`).                          |
| `disabled` | `Boolean` | `false`       | Menonaktifkan interaksi tombol dan menurunkan opasitasnya.                      |
| `loading`  | `Boolean` | `false`       | Menampilkan indikator _loading_ dan otomatis menonaktifkan tombol.              |
| `block`    | `Boolean` | `false`       | Membuat tombol memanjang 100% mengikuti lebar wadahnya.                         |
| `href`     | `String`  | `null`        | Jika diisi, tombol akan di-render sebagai elemen `<a>` (tautan).                |
| `type`     | `String`  | `'button'`    | Tipe HTML standar untuk tombol (opsi: `button`, `submit`, `reset`).             |

<div class="tip custom-block" style="padding-top: 8px">
  <p class="custom-block-title">💡 Panduan Copywriting</p>
  <p>Ingat, gunakan maksimal 2-3 kata dengan format <b>Title Case</b> untuk label tombol. Pastikan kata kerja yang digunakan jelas (misal: "Simpan Data", bukan "Oke"). Rujuk kembali halaman <a href="/resources/copywriting">Panduan Copywriting</a> jika ragu.</p>
</div>
