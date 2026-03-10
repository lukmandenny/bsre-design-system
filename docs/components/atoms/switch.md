<script setup>
import { ref } from 'vue'
import SwitchPlayground from '../../demos/atoms/SwitchPlayground.vue'

const notifications = ref(false)
const darkMode = ref(true)
const autoUpdate = ref(true)
</script>

# Switch (Toggle)

Komponen _Switch_ digunakan untuk mengaktifkan atau menonaktifkan status tunggal dengan segera. Sangat cocok untuk halaman pengaturan (_Settings_) atau preferensi pengguna.

<div class="mb-10 mt-6">
<SwitchPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Gunakan `v-model` untuk mengikat status _switch_. Sama seperti _checkbox_, tipe data yang dihasilkan adalah `Boolean` (`true` atau `false`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-6">
<BaseSwitch v-model="notifications" label="Aktifkan Notifikasi Push" />
<BaseSwitch v-model="darkMode" label="Gunakan Mode Gelap (Dark Mode)" />
<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 text-[13px] font-mono text-[#2FAAE1] font-bold">
<div>Notifikasi: {{ notifications }}</div>
<div>Dark Mode: {{ darkMode }}</div>
</div>
</div>
</div>

```vue
<script setup>
import { ref } from 'vue';

const notifications = ref(false);
const darkMode = ref(true);
</script>

<template>
  <div class="flex flex-col gap-5">
    <BaseSwitch v-model="notifications" label="Aktifkan Notifikasi Push" />
    <BaseSwitch v-model="darkMode" label="Gunakan Mode Gelap (Dark Mode)" />
  </div>
</template>
```

## Teks Bantuan (Helper Text)

Tambahkan prop `hint` untuk memberikan penjelasan tambahan tentang apa yang terjadi jika pengaturan ini diaktifkan.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm">
<BaseSwitch v-model="autoUpdate" label="Pembaruan Otomatis" hint="Aplikasi akan mengunduh versi terbaru di latar belakang saat terhubung ke Wi-Fi." />
</div>
</div>

```vue
<BaseSwitch
  v-model="autoUpdate"
  label="Pembaruan Otomatis"
  hint="Aplikasi akan mengunduh versi terbaru di latar belakang saat terhubung ke Wi-Fi."
/>
```

## Status Nonaktif (Disabled State)

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-6">
<BaseSwitch label="Fitur Beta" disabled />
<BaseSwitch :model-value="true" label="Keamanan Berlapis (Wajib)" disabled />
</div>
</div>

```vue
<BaseSwitch label="Fitur Beta" disabled />
<BaseSwitch :model-value="true" label="Keamanan Berlapis (Wajib)" disabled />
```

## API Reference (Props)

| Prop       | Type      | Default | Deskripsi                                             |
| :--------- | :-------- | :------ | :---------------------------------------------------- |
| `v-model`  | `Boolean` | `false` | Status aktif (`true`) atau nonaktif (`false`).        |
| `label`    | `String`  | `null`  | Teks utama di samping tuas _switch_.                  |
| `hint`     | `String`  | `null`  | Teks deskripsi tambahan di bawah label utama.         |
| `disabled` | `Boolean` | `false` | Menonaktifkan interaksi klik pada komponen.           |
| `id`       | `String`  | `Acak`  | ID HTML unik (otomatis dibuat jika tidak disertakan). |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Gunakan <b>Switch</b> untuk pengaturan yang efeknya <b>langsung terjadi</b> (seperti menyalakan Wi-Fi atau mengubah tema).</li>
<li>Gunakan <b>Checkbox</b> jika pengguna perlu menekan tombol <b>Simpan</b> (Submit) di akhir form agar perubahannya diterapkan.</li>
</ul>
</div>
