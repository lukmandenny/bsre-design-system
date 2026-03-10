<script setup>
import { ref } from 'vue'
// Nanti kita buat RadioPlayground.vue, sementara di-comment dulu
import RadioPlayground from '../../demos/atoms/RadioPlayground.vue'

const selectedGender = ref('pria')
const selectedAuth = ref('sms')
const selectedPlan = ref('premium')
</script>

# Radio Button

Komponen _radio button_ digunakan ketika pengguna harus memilih **hanya satu opsi** dari sekumpulan pilihan yang tersedia secara eksklusif.

<div class="mb-10 mt-6">
  <RadioPlayground /> 
</div>

## Dasar Penggunaan (Basic Usage)

Grup _radio button_ harus berbagi `v-model` yang sama. Nilai dari `v-model` akan berubah sesuai dengan prop `value` pada opsi yang dipilih.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-5">
<BaseRadio v-model="selectedGender" value="pria" label="Pria" />
<BaseRadio v-model="selectedGender" value="wanita" label="Wanita" />
<div class="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200 text-[13px] font-mono text-[#2FAAE1] font-bold">Terpilih: {{ selectedGender }}</div>
</div>
</div>

```vue
<script setup>
import { ref } from 'vue';
const selectedGender = ref('pria');
</script>

<template>
  <div class="flex flex-col gap-5">
    <BaseRadio v-model="selectedGender" value="pria" label="Pria" />
    <BaseRadio v-model="selectedGender" value="wanita" label="Wanita" />
  </div>
</template>
```

## Teks Bantuan (Helper Text)

Tambahkan prop `hint` untuk memberikan deskripsi tambahan yang membantu pengguna memahami konsekuensi dari pilihan tersebut.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-4">
<BaseRadio v-model="selectedAuth" value="app" label="Aplikasi Authenticator" hint="Gunakan Google Authenticator atau Authy (Disarankan)." />
<BaseRadio v-model="selectedAuth" value="sms" label="SMS OTP" hint="Kode akan dikirimkan ke nomor ponsel terdaftar." />
</div>
</div>

```vue
<BaseRadio
  v-model="selectedAuth"
  value="app"
  label="Aplikasi Authenticator"
  hint="Gunakan Google Authenticator atau Authy (Disarankan)."
/>
<BaseRadio
  v-model="selectedAuth"
  value="sms"
  label="SMS OTP"
  hint="Kode akan dikirimkan ke nomor ponsel terdaftar."
/>
```

## Status Nonaktif (Disabled State)

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-md flex flex-col gap-5">
<BaseRadio v-model="selectedPlan" value="basic" label="Paket Basic (Gratis)" disabled />
<BaseRadio v-model="selectedPlan" value="premium" label="Paket Premium" disabled />
</div>
</div>

```vue
<BaseRadio
  v-model="selectedPlan"
  value="basic"
  label="Paket Basic (Gratis)"
  disabled
/>
<BaseRadio
  v-model="selectedPlan"
  value="premium"
  label="Paket Premium"
  disabled
/>
```

## API Reference (Props)

| Prop       | Type                          | Default        | Deskripsi                                                         |
| :--------- | :---------------------------- | :------------- | :---------------------------------------------------------------- |
| `v-model`  | `String`, `Number`, `Boolean` | `null`         | Nilai aktif dari grup radio saat ini.                             |
| `value`    | `Any`                         | **(Required)** | Nilai unik yang akan dikirim ke `v-model` jika radio ini dipilih. |
| `label`    | `String`                      | `null`         | Teks utama opsi pilihan.                                          |
| `hint`     | `String`                      | `null`         | Teks deskripsi tambahan.                                          |
| `disabled` | `Boolean`                     | `false`        | Menonaktifkan interaksi klik.                                     |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Selalu tentukan opsi <i>default</i> (bawaan) yang terpilih untuk radio button. Hindari menampilkan form dengan grup radio yang kosong sepenuhnya.</li>
<li>Jika pilihan lebih dari 5 item, pertimbangkan untuk menggunakan komponen <b>Select (Dropdown)</b> agar tampilan lebih ringkas.</li>
</ul>
</div>
