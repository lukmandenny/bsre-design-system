<script setup>
import { PhStar } from '@phosphor-icons/vue'
import DividerPlayground from '../../demos/atoms/DividerPlayground.vue'
</script>

# Divider (Garis Pemisah)

Komponen _Divider_ digunakan untuk memisahkan konten secara visual dalam antarmuka. Sangat berguna untuk menstrukturkan daftar informasi yang panjang atau memisahkan opsi alternatif (seperti tombol _login_).

<div class="mb-10 mt-6">
  <DividerPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Secara bawaan, _Divider_ akan merender garis horizontal tipis berwarna abu-abu yang memenuhi seluruh lebar area (_container_).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-lg">
<p class="text-sm text-gray-600 mb-0">Konten Bagian Atas</p>
<BaseDivider />
<p class="text-sm text-gray-600 mb-0">Konten Bagian Bawah</p>
</div>
</div>

```vue
<p>Konten Bagian Atas</p>

<BaseDivider />

<p>Konten Bagian Bawah</p>
```

## Teks di Tengah Garis (With Content)

Anda dapat menyisipkan teks atau ikon ke dalam _Divider_ menggunakan tag `slot`. Sangat cocok untuk formulir atau pemisah bagian. Atur posisi konten menggunakan prop `align` (`start`, `center`, atau `end`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-lg flex flex-col gap-2">
<BaseDivider>ATAU</BaseDivider>
<BaseDivider align="start">Bagian 1</BaseDivider>
<BaseDivider align="end">Selesai</BaseDivider>
</div>
</div>

```vue
<BaseDivider>ATAU</BaseDivider>

<BaseDivider align="start">Bagian 1</BaseDivider>

<BaseDivider align="end">Selesai</BaseDivider>
```

## Gaya Garis (Border Styles)

Gunakan prop `type` untuk mengubah gaya coretan garis menjadi putus-putus (`dashed`) atau titik-titik (`dotted`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-lg flex flex-col gap-2">
<BaseDivider type="dashed">Garis Putus-putus</BaseDivider>
<BaseDivider type="dotted">Garis Titik-titik</BaseDivider>
</div>
</div>

```vue
<BaseDivider type="dashed">Garis Putus-putus</BaseDivider>
<BaseDivider type="dotted">Garis Titik-titik</BaseDivider>
```

## Divider Vertikal (Vertical Layout)

Gunakan prop `vertical` jika Anda ingin memisahkan konten yang berjejer ke samping (seperti _menu_ atau _toolbar_).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex items-center h-12 text-sm text-gray-600">
<span>Beranda</span>
<BaseDivider vertical />
<span>Profil</span>
<BaseDivider vertical />
<span>Pengaturan</span>
</div>
</div>

```vue
<div class="flex items-center h-12">
  <span>Beranda</span>
  <BaseDivider vertical />
  <span>Profil</span>
  <BaseDivider vertical />
  <span>Pengaturan</span>
</div>
```

## API Reference (Props)

| Prop       | Type      | Default    | Deskripsi                                                                                             |
| :--------- | :-------- | :--------- | :---------------------------------------------------------------------------------------------------- |
| `vertical` | `Boolean` | `false`    | Mengubah orientasi menjadi vertikal.                                                                  |
| `align`    | `String`  | `'center'` | Posisi teks/konten di dalam garis (`start`, `center`, `end`). _Hanya berlaku untuk garis horizontal._ |
| `type`     | `String`  | `'solid'`  | Gaya garis (`solid`, `dashed`, `dotted`).                                                             |
| `<slot>`   | `Node`    | `null`     | Area untuk menyisipkan teks atau elemen (seperti `BaseIcon`).                                         |
