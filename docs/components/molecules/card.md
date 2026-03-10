<script setup>
import { PhSignature } from '@phosphor-icons/vue'
import CardPlayground from '../../demos/molecules/CardPlayground.vue'
</script>

# Card (Kartu Konten)

Komponen _Card_ adalah wadah fleksibel (Molekul) yang digunakan untuk mengelompokkan informasi terkait. Desain ini telah disesuaikan dengan standar visual modern BSrE.

<div class="mb-10 mt-6">
<CardPlayground />
</div>

## Dasar Penggunaan (Default)

Penggunaan paling sederhana adalah kartu berisi teks. Secara bawaan, teks akan rata kiri (`align="left"`).

<div class="flex justify-center p-8 border border-gray-100 rounded-2xl bg-slate-50 mt-4 mb-4 shadow-sm w-full">
<BaseCard class="max-w-sm w-full">
<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Tanda Tangan Elektronik</h5>
<p class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px]">Tanda tangan yang terdiri atas Informasi Elektronik yang dilekatkan, terasosiasi atau terkait dengan Informasi Elektronik lainnya.</p>
<BaseButton class="w-fit">Read More</BaseButton>
</BaseCard>
</div>

```vue
<BaseCard class="max-w-sm">
  <h5 class="mb-2 text-xl font-bold text-gray-900">
    Tanda Tangan Elektronik
  </h5>
  <p class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px]">
    Tanda tangan yang terdiri atas Informasi Elektronik yang dilekatkan...
  </p>
  <BaseButton class="w-fit">Read More</BaseButton>
</BaseCard>
```

## Kartu dengan Gambar (Cover Image)

Gunakan prop `imgSrc` untuk menambahkan gambar penutup (_cover_). Secara otomatis, tipe media akan disetel sebagai `cover`.

<div class="flex justify-center p-8 border border-gray-100 rounded-2xl bg-slate-50 mt-4 mb-4 shadow-sm w-full">
<BaseCard 
  class="max-w-sm w-full" 
  imgSrc="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABSWBK5knIKLn5TGHvm2tf8mf_ycPLh8jEoARZ-grZqdlW9EG5BNtdNkZYZzHyMWwQAkJrFFQUy1HNygIt8UfA0nr-5qaXilfLA.png?r=880" 
  imgAlt="Cloud Server"
>
<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Infrastruktur Server</h5>
<p class="font-normal text-gray-700 leading-relaxed text-[15px]">Peningkatan kapasitas penyimpanan data untuk mendukung integrasi TTE di seluruh instansi pemerintah.</p>
</BaseCard>
</div>

```vue
<BaseCard
  class="max-w-sm"
  imgSrc="[https://url-gambar-anda.com/gambar.png](https://url-gambar-anda.com/gambar.png)"
  imgAlt="Cloud Server"
>
  <h5 class="mb-2 text-xl font-bold text-gray-900">Infrastruktur Server</h5>
  <p class="text-gray-700 text-[15px]">Peningkatan kapasitas penyimpanan data...</p>
</BaseCard>
```

## Kartu dengan Ikon & Rata Tengah (Centered Icon)

Untuk membuat kartu yang berpusat pada ikon (seperti desain fitur aplikasi), gunakan prop `align="center"` dan manfaatkan `<template #image>` untuk memasukkan komponen SVG dari **Phosphor Icons**.

<div class="flex justify-center p-8 border border-gray-100 rounded-2xl bg-slate-50 mt-4 mb-4 shadow-sm w-full">
<BaseCard class="max-w-sm w-full" align="center">
<template #image>
<PhSignature :size="64" weight="duotone" class="text-[#2FAAE1] mt-8 shrink-0 mx-auto" />
</template>
<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Verifikasi Dokumen</h5>
<p class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px]">Pastikan integritas dan keaslian dokumen Anda menggunakan sertifikat elektronik yang sah.</p>
<BaseButton class="w-fit">Mulai Verifikasi</BaseButton>
</BaseCard>
</div>

```vue
<script setup>
import { PhSignature } from '@phosphor-icons/vue';
</script>

<template>
  <BaseCard class="max-w-sm" align="center">
    <template #image>
      <PhSignature
        :size="64"
        weight="duotone"
        class="text-[#2FAAE1] mt-8 shrink-0 mx-auto"
      />
    </template>

    <h5 class="mb-2 text-xl font-bold text-gray-900">Verifikasi Dokumen</h5>
    <p class="mb-4 text-gray-700 text-[15px]">
      Pastikan integritas dan keaslian dokumen Anda...
    </p>
    <BaseButton class="w-fit">Mulai Verifikasi</BaseButton>
  </BaseCard>
</template>
```

## Kartu Horizontal (Landscape Layout)

Tambahkan prop `horizontal` untuk mengubah tata letak menjadi berdampingan. Sangat cocok untuk daftar artikel atau _list_ yang memanjang.

<div class="flex justify-center p-8 border border-gray-100 rounded-2xl bg-slate-50 mt-4 mb-4 shadow-sm w-full">
<BaseCard 
  class="max-w-2xl w-full"
  horizontal
  imgSrc="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABSWBK5knIKLn5TGHvm2tf8mf_ycPLh8jEoARZ-grZqdlW9EG5BNtdNkZYZzHyMWwQAkJrFFQUy1HNygIt8UfA0nr-5qaXilfLA.png?r=880" 
>
<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Pembaruan Sistem</h5>
<p class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px]">Sistem telah diperbarui ke versi 2.4. Terdapat beberapa peningkatan performa pada modul tanda tangan masal.</p>
<BaseButton class="w-fit">Lihat Detail</BaseButton>
</BaseCard>
</div>

```vue
<BaseCard horizontal imgSrc="/path/to/image.png" class="max-w-2xl">
  <h5 class="mb-2 text-xl font-bold text-gray-900">Pembaruan Sistem</h5>
  <p class="mb-4 text-gray-700">Sistem telah diperbarui ke versi 2.4...</p>
  <BaseButton class="w-fit">Lihat Detail</BaseButton>
</BaseCard>
```

## API Reference (Props)

| Prop         | Type      | Default   | Deskripsi                                                                        |
| :----------- | :-------- | :-------- | :------------------------------------------------------------------------------- |
| `href`       | `String`  | `null`    | Jika diisi, merender kartu sebagai `<a href="...">` dan mengaktifkan efek hover. |
| `imgSrc`     | `String`  | `null`    | URL gambar sampul kartu (jika tidak menggunakan slot `#image`).                  |
| `imgAlt`     | `String`  | `''`      | Teks alternatif (Aksesibilitas) untuk gambar.                                    |
| `horizontal` | `Boolean` | `false`   | Mengubah orientasi menjadi lanskap (kiri-kanan).                                 |
| `align`      | `String`  | `'left'`  | Penjajaran teks konten. Opsi: `'left'`, `'center'`.                              |
| `imageType`  | `String`  | `'cover'` | Perilaku _styling_ media bawaan. Opsi: `'cover'`, `'icon'`.                      |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Info Slot</p>
<p>
Gunakan <code>&lt;template #image&gt;</code> untuk menyuntikkan komponen SVG kustom (seperti Phosphor Icons), dan gunakan slot <i>default</i> untuk menyusun konten utama (teks, tombol, dsb).
</p>
</div>
