<script setup>
import InputPlayground from '../../demos/atoms/InputPlayground.vue'
</script>

# Input (Text Field)

Komponen _input_ memungkinkan pengguna untuk memasukkan teks, angka, atau data berformat khusus (seperti kata sandi atau email) ke dalam antarmuka aplikasi.

<div class="mb-10 mt-6">
  <InputPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Bentuk dasar dari _input field_ selalu disarankan untuk disandingkan dengan sebuah _label_ agar pengguna memahami data apa yang perlu diisi. Fokus _input_ menggunakan warna utama _brand_ (BSrE Blue).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
  <div class="w-full max-w-md">
    <label for="email_basic" class="block !m-0 !mb-1.5 text-sm font-medium text-gray-900 leading-tight">Alamat Email</label>
    <input type="email" id="email_basic" class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-base focus:ring-0 focus:border-bsre-blue block w-full p-2.5 transition-colors outline-none" placeholder="nama@bsre.bssn.go.id">
  </div>
</div>

```vue
<template>
  <BaseInput
    v-model="email"
    label="Alamat Email"
    placeholder="nama@bsre.bssn.go.id"
    type="email"
  />
</template>
```

## Ukuran (Sizes)

Komponen input tersedia dalam tiga ukuran utama: `sm` (Small), `md` (Medium/Default), dan `lg` (Large).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
  <div class="w-full max-w-md flex flex-col gap-6">
    <div>
      <label class="block !m-0 !mb-1.5 text-xs font-medium text-gray-900 leading-tight">Small (sm)</label>
      <input type="text" class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-xs rounded-base focus:ring-0 focus:border-bsre-blue block w-full p-2 transition-colors outline-none" placeholder="Ukuran kecil...">
    </div>
    <div>
      <label class="block !m-0 !mb-1.5 text-sm font-medium text-gray-900 leading-tight">Medium (md)</label>
      <input type="text" class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-base focus:ring-0 focus:border-bsre-blue block w-full p-2.5 transition-colors outline-none" placeholder="Ukuran standar...">
    </div>
    <div>
      <label class="block !m-0 !mb-1.5 text-base font-medium text-gray-900 leading-tight">Large (lg)</label>
      <input type="text" class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-base rounded-base focus:ring-0 focus:border-bsre-blue block w-full p-3.5 transition-colors outline-none" placeholder="Ukuran besar...">
    </div>
  </div>
</div>

```vue
<BaseInput size="sm" label="Small (sm)" placeholder="Ukuran kecil..." />
<BaseInput size="md" label="Medium" placeholder="Ukuran standar..." />
<BaseInput size="lg" label="Large (lg)" placeholder="Ukuran besar..." />
```

## Status Form (Form States)

Berikan umpan balik visual kepada pengguna terutama saat terjadi kesalahan validasi.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
  <div class="w-full max-w-md flex flex-col gap-8">
  
  <div>
    <label class="block !m-0 !mb-1.5 text-sm font-medium text-gray-400 leading-tight">Disabled State</label>
    <input type="text" disabled class="bg-gray-100 border border-solid border-gray-200 text-gray-400 text-sm rounded-base block w-full p-2.5 cursor-not-allowed opacity-80" value="Tidak bisa diubah">
  </div>

  <div>
    <label class="block !m-0 !mb-1.5 text-sm font-medium text-gray-900 leading-tight">Readonly State</label>
    <input type="text" readonly class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-base block w-full p-2.5 outline-none" value="Hanya bisa dibaca">
  </div>

  <div>
    <label class="block !m-0 !mb-1.5 text-sm font-medium text-green-700 leading-tight">Success State</label>
    <input type="text" class="bg-green-50 border border-solid border-green-500 text-green-900 placeholder-green-700 text-sm rounded-base focus:ring-0 focus:border-green-500 block w-full p-2.5 outline-none" value="Data valid!">
    <p class="!m-0 !mt-1.5 text-xs text-green-600 font-medium leading-tight">Username tersedia.</p>
  </div>

  <div>
    <label class="block !m-0 !mb-1.5 text-sm font-medium text-red-700 leading-tight">Error State</label>
    <input type="text" class="bg-red-50 border border-solid border-red-500 text-red-900 placeholder-red-700 text-sm rounded-base focus:ring-0 focus:border-red-500 block w-full p-2.5 outline-none" value="12345">
    <p class="!m-0 !mt-1.5 text-xs text-red-600 font-medium leading-tight">NIK harus terdiri dari 16 digit angka.</p>
  </div>
</div>
</div>

```vue
<BaseInput label="Disabled" value="Tidak bisa diubah" disabled />

<BaseInput label="Readonly" value="Hanya bisa dibaca" readonly />

<BaseInput label="Success" state="success" hint="Username tersedia." />

<BaseInput
  label="Error"
  state="error"
  error-message="NIK harus terdiri dari 16 digit angka."
/>
```

## API Reference (Props)

| Prop           | Type               | Default     | Deskripsi                                                  |
| :------------- | :----------------- | :---------- | :--------------------------------------------------------- |
| `v-model`      | `String`, `Number` | `''`        | Nilai (_value_) dari input (mendukung _two-way binding_).  |
| `type`         | `String`           | `'text'`    | Tipe native HTML input (`text`, `password`, `email`, dll). |
| `label`        | `String`           | `null`      | Teks label yang muncul di atas kolom input.                |
| `placeholder`  | `String`           | `null`      | Teks panduan sementara di dalam input.                     |
| `size`         | `String`           | `'md'`      | Ukuran input: `sm`, `md`, `lg`.                            |
| `state`        | `String`           | `'default'` | Status validasi form: `default`, `success`, `error`.       |
| `hint`         | `String`           | `null`      | Teks bantuan kecil di bawah input (saat sukses/default).   |
| `errorMessage` | `String`           | `null`      | Pesan error di bawah input (hanya jika `state="error"`).   |
| `disabled`     | `Boolean`          | `false`     | Menonaktifkan input dan interaksi pengguna.                |
| `readonly`     | `Boolean`          | `false`     | Membuat input hanya bisa dibaca.                           |

<div class="tip custom-block" style="padding-top: 8px">
  <p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
  <ul>
    <li>Selalu sertakan <b>Label</b>. Jangan hanya mengandalkan <i>Placeholder</i> sebagai instruksi.</li>
    <li>Gunakan <b>Tipe Input yang Tepat</b> untuk mengoptimalkan keyboard di perangkat mobile.</li>
  </ul>
</div>
