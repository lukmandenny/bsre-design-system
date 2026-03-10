<script setup>
import { ref } from 'vue'
import TextareaPlayground from '../../demos/atoms/TextareaPlayground.vue'

const address = ref('')
const feedback = ref('')
</script>

# Textarea (Teks Multi-baris)

Komponen _Textarea_ digunakan ketika pengguna diharapkan memasukkan teks panjang yang terdiri dari beberapa baris, seperti alamat lengkap, deskripsi produk, atau ulasan.

<div class="mb-10 mt-6">
<TextareaPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Gunakan prop `rows` untuk mengatur tinggi awal (jumlah baris) dari _textarea_. Secara bawaan, komponen ini memiliki tinggi 3 baris dan dapat diperbesar secara vertikal oleh pengguna (menggunakan sudut kanan bawah).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-6">
<BaseTextarea v-model="address" label="Alamat Lengkap" placeholder="Masukkan nama jalan, RT/RW, dan patokan..." rows="3" />
<BaseTextarea v-model="feedback" label="Ulasan Anda" placeholder="Ceritakan pengalaman Anda menggunakan layanan kami..." rows="5" hint="Maksimal 500 karakter." />
</div>
</div>

```vue
<script setup>
import { ref } from 'vue';

const address = ref('');
const feedback = ref('');
</script>

<template>
  <div class="flex flex-col gap-5">
    <BaseTextarea
      v-model="address"
      label="Alamat Lengkap"
      placeholder="Masukkan nama jalan, RT/RW..."
      rows="3"
    />

    <BaseTextarea
      v-model="feedback"
      label="Ulasan Anda"
      placeholder="Ceritakan pengalaman Anda..."
      rows="5"
      hint="Maksimal 500 karakter."
    />
  </div>
</template>
```

## Status Form (Form States)

Komponen ini mendukung visualisasi status form (`success`, `error`, dan `disabled`) yang seragam dengan komponen `BaseInput`.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-6">
<BaseTextarea label="Catatan Internal" disabled value="Dokumen ini telah diverifikasi dan dikunci oleh sistem." />
<BaseTextarea label="Deskripsi Penolakan" state="error" error-message="Alasan penolakan wajib diisi jika dokumen ditolak." />
<BaseTextarea label="Ringkasan Rapat" state="success" hint="Ringkasan berhasil disimpan otomatis." />
</div>
</div>

```vue
<BaseTextarea
  label="Catatan Internal"
  value="Dokumen ini telah diverifikasi..."
  disabled
/>

<BaseTextarea
  label="Deskripsi Penolakan"
  state="error"
  error-message="Alasan penolakan wajib diisi jika dokumen ditolak."
/>

<BaseTextarea
  label="Ringkasan Rapat"
  state="success"
  hint="Ringkasan berhasil disimpan otomatis."
/>
```

## API Reference (Props)

| Prop           | Type               | Default     | Deskripsi                                            |
| :------------- | :----------------- | :---------- | :--------------------------------------------------- |
| `v-model`      | `String`, `Number` | `''`        | Nilai dari teks input.                               |
| `label`        | `String`           | `null`      | Teks judul di atas _textarea_.                       |
| `placeholder`  | `String`           | `''`        | Teks bayangan saat kotak kosong.                     |
| `rows`         | `Number`, `String` | `3`         | Jumlah baris untuk tinggi awal komponen.             |
| `state`        | `String`           | `'default'` | Status validasi form: `default`, `success`, `error`. |
| `hint`         | `String`           | `null`      | Teks penjelasan di bawah kotak.                      |
| `errorMessage` | `String`           | `null`      | Pesan _error_ (tampil jika `state="error"`).         |
| `disabled`     | `Boolean`          | `false`     | Menonaktifkan interaksi pada komponen.               |
