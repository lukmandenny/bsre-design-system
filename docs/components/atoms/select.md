<script setup>
import { ref } from 'vue'
import SelectPlayground from '../../demos/atoms/SelectPlayground.vue'

const selectedRole = ref('')
const selectedCity = ref('')
const selectedStatus = ref('aktif')

const roles = ['Administrator', 'Penerbit Sertifikat', 'Verifikator', 'Pengguna Biasa']
const cities = [
  { label: 'Jakarta Selatan', value: 'JKT-SEL' },
  { label: 'Depok', value: 'DPK' },
  { label: 'Bogor', value: 'BGR' }
]
</script>

# Select (Dropdown)

Komponen _Select_ memungkinkan pengguna untuk memilih satu opsi dari sebuah daftar panjang yang tersembunyi. Sangat menghemat ruang antarmuka dibandingkan menggunakan banyak _Radio Button_.

<div class="mb-10 mt-6">
<SelectPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Anda dapat mengirimkan data ke prop `options` dalam bentuk **Array String** biasa (jika label dan _value_ sama) atau **Array Object** (jika label yang ditampilkan berbeda dengan _value_ yang disimpan di _database_).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-6">
<BaseSelect v-model="selectedRole" :options="roles" label="Pilih Peran" placeholder="Pilih peran pengguna..." />
<BaseSelect v-model="selectedCity" :options="cities" label="Kota Domisili" placeholder="Pilih kota domisili..." />
<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 text-[13px] font-mono text-[#2FAAE1] font-bold">
<div>Role: "{{ selectedRole }}"</div>
<div>City: "{{ selectedCity }}"</div>
</div>
</div>
</div>

```vue
<script setup>
import { ref } from 'vue';

const selectedRole = ref('');
const selectedCity = ref('');

// Format 1: Array of Strings
const roles = ['Administrator', 'Penerbit Sertifikat', 'Verifikator'];

// Format 2: Array of Objects
const cities = [
  { label: 'Jakarta Selatan', value: 'JKT-SEL' },
  { label: 'Depok', value: 'DPK' },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <BaseSelect v-model="selectedRole" :options="roles" label="Pilih Peran" />

    <BaseSelect
      v-model="selectedCity"
      :options="cities"
      label="Kota Domisili"
    />
  </div>
</template>
```

## Status Form (Form States)

Komponen Select terintegrasi penuh dengan sistem validasi form. Gunakan prop `state` untuk memberikan _feedback_ visual kepada pengguna.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-6">
<BaseSelect :options="['Aktif']" label="Status Akun (Disabled)" disabled value="Aktif" />
<BaseSelect :options="cities" label="Cabang Penempatan" state="error" error-message="Cabang penempatan wajib dipilih." />
<BaseSelect v-model="selectedStatus" :options="['Aktif', 'Nonaktif']" label="Status Validasi" state="success" hint="Status berhasil diperbarui." />
</div>
</div>

```vue
<BaseSelect :options="['Aktif']" label="Status Akun" value="Aktif" disabled />

<BaseSelect
  :options="cities"
  label="Cabang Penempatan"
  state="error"
  error-message="Cabang penempatan wajib dipilih."
/>

<BaseSelect
  v-model="status"
  :options="['Aktif', 'Nonaktif']"
  label="Status Validasi"
  state="success"
  hint="Status berhasil diperbarui."
/>
```

## API Reference (Props)

| Prop           | Type               | Default                 | Deskripsi                                                                          |
| :------------- | :----------------- | :---------------------- | :--------------------------------------------------------------------------------- |
| `v-model`      | `String`, `Number` | `''`                    | Nilai dari opsi yang terpilih.                                                     |
| `options`      | `Array`            | **(Required)**          | Daftar opsi pilihan (bisa Array String/Number atau Array Object `{label, value}`). |
| `label`        | `String`           | `null`                  | Teks judul di atas kotak _select_.                                                 |
| `placeholder`  | `String`           | `'Pilih salah satu...'` | Teks bawaan saat belum ada opsi yang dipilih.                                      |
| `state`        | `String`           | `'default'`             | Status validasi form: `default`, `success`, `error`.                               |
| `hint`         | `String`           | `null`                  | Teks penjelasan di bawah _select_.                                                 |
| `errorMessage` | `String`           | `null`                  | Pesan _error_ (hanya tampil jika `state="error"`).                                 |
| `disabled`     | `Boolean`          | `false`                 | Menonaktifkan interaksi pada komponen.                                             |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Jika opsi pilihan kurang dari 5 item, lebih disarankan menggunakan <b>BaseRadio</b> agar pengguna bisa langsung melihat semua opsi tanpa perlu mengklik _dropdown_.</li>
</ul>
</div>
