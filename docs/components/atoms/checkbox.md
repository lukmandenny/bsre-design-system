<script setup>
import { ref } from 'vue'
import CheckboxPlayground from '../../demos/atoms/CheckboxPlayground.vue'

// Reactive state untuk pratinjau yang interaktif
const rememberMe = ref(false)
const subscribe = ref(true)
const enable2fa = ref(true)
const selectedFrameworks = ref(['Vue'])
</script>

# Checkbox (Kotak Centang)

Komponen _checkbox_ memungkinkan pengguna untuk memilih satu atau beberapa opsi dari sekumpulan daftar, atau sekadar menyetujui sebuah pernyataan (seperti Syarat & Ketentuan).

<div class="mb-10 mt-6">
<CheckboxPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Gunakan `v-model` untuk mengikat status _checkbox_. Jika digunakan secara tunggal (tanpa nilai spesifik), tipe data yang dihasilkan adalah `Boolean` (`true` atau `false`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-5">
<BaseCheckbox v-model="rememberMe" label="Ingat saya di perangkat ini" />
<BaseCheckbox v-model="subscribe" label="Berlangganan Newsletter" />
</div>
</div>

```vue
<template>
  <div class="flex flex-col gap-5">
    <BaseCheckbox v-model="rememberMe" label="Ingat saya di perangkat ini" />
    <BaseCheckbox v-model="subscribe" label="Berlangganan Newsletter" />
  </div>
</template>
```

## Teks Bantuan (Helper Text)

Tambahkan prop `hint` untuk memberikan deskripsi atau konteks tambahan pada opsi yang tersedia. Sangat berguna untuk form pengaturan yang kompleks.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-4">
<BaseCheckbox v-model="enable2fa" label="Autentikasi Dua Langkah (2FA)" hint="Kirimkan kode OTP ke email setiap kali login." />
</div>
</div>

```vue
<BaseCheckbox
  v-model="enable2fa"
  label="Autentikasi Dua Langkah (2FA)"
  hint="Kirimkan kode OTP ke email setiap kali login."
/>
```

## Status Nonaktif (Disabled State)

Berikan prop `disabled` untuk mencegah pengguna berinteraksi dengan _checkbox_. Opasitas komponen akan otomatis diturunkan.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-5">
<BaseCheckbox label="Opsi tidak tersedia" disabled />
<BaseCheckbox label="Opsi terkunci (sudah aktif)" :model-value="true" disabled />
</div>
</div>

```vue
<BaseCheckbox label="Opsi tidak tersedia" disabled />
<BaseCheckbox
  label="Opsi terkunci (sudah aktif)"
  :model-value="true"
  disabled
/>
```

## Grup Pilihan (Checkbox Group)

Jika mengikat `v-model` ke sebuah Array, Anda dapat mengumpulkan beberapa nilai sekaligus. Gunakan prop `value` untuk menentukan data yang akan dimasukkan ke dalam Array saat _checkbox_ dicentang.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-3">
<BaseCheckbox v-model="selectedFrameworks" value="Vue" label="Vue.js" />
<BaseCheckbox v-model="selectedFrameworks" value="React" label="React" />
<BaseCheckbox v-model="selectedFrameworks" value="Svelte" label="Svelte" />
<div class="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-[13px] font-mono text-[#2FAAE1] font-bold">Output Array: {{ selectedFrameworks }}</div>
</div>
</div>

```vue
<script setup>
import { ref } from 'vue';

const selectedFrameworks = ref(['Vue']);
</script>

<template>
  <div class="flex flex-col gap-3">
    <BaseCheckbox v-model="selectedFrameworks" value="Vue" label="Vue.js" />
    <BaseCheckbox v-model="selectedFrameworks" value="React" label="React" />
    <BaseCheckbox v-model="selectedFrameworks" value="Svelte" label="Svelte" />
  </div>
</template>
```

## API Reference (Props)

Daftar properti yang dapat digunakan pada komponen `BaseCheckbox`.

| Prop       | Type               | Default | Deskripsi                                                            |
| :--------- | :----------------- | :------ | :------------------------------------------------------------------- |
| `v-model`  | `Boolean`, `Array` | `false` | Status centang (mendukung array untuk _multiple choices_).           |
| `value`    | `Any`              | `null`  | Nilai unik _checkbox_ (wajib diisi jika tergabung dalam grup Array). |
| `label`    | `String`           | `null`  | Teks utama di samping kotak centang.                                 |
| `hint`     | `String`           | `null`  | Teks deskripsi tambahan di bawah label utama.                        |
| `disabled` | `Boolean`          | `false` | Menonaktifkan interaksi pada komponen.                               |
| `id`       | `String`           | `Acak`  | ID HTML unik (otomatis dibuat jika tidak disertakan).                |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Gunakan <b>Checkbox</b> jika pengguna boleh memilih <b>lebih dari satu</b> opsi. Jika hanya boleh memilih satu, gunakan <b>Radio Button</b>.</li>
<li>Pastikan selalu memberikan <code>label</code> yang jelas agar area yang bisa di-klik lebih besar (meningkatkan aksesibilitas).</li>
</ul>
</div>
