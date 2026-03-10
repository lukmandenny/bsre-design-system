# Integrasi Vue

Panduan ini akan membantumu mengintegrasikan **BSrE Design System** ke dalam proyek Vue 3. Pastikan mengikuti setiap langkah agar komponen dan gaya visual dapat berjalan dengan optimal.

## Prasyarat

Sebelum memulai instalasi, pastikan lingkungan pengembangan (_development environment_) memenuhi syarat berikut:

- **Node.js** versi 18.0 atau lebih baru.
- **Vue 3** (Direkomendasikan menggunakan Composition API & `<script setup>`).
- Proyek sudah terintegrasi dengan **Tailwind CSS**.

## 1. Instalasi Paket

Jalankan perintah berikut di terminal proyek untuk mengunduh paket _design system_ beserta dependensi ikon yang dibutuhkan:

::: code-group

```bash [npm]
npm install @bsre/design-system phosphor-vue
```

```bash [pnpm]
pnpm add @bsre/design-system phosphor-vue
```

```bash [yarn]
yarn add @bsre/design-system phosphor-vue
```

:::

> **Catatan:** Gunakan **Phosphor Icons** sebagai set ikon standar di seluruh ekosistem BSrE. Pastikan paket tersebut ikut terinstal agar komponen yang memiliki ikon dapat ter-render dengan sempurna.

## 2. Konfigurasi Vue

Setelah paket terinstal, kita perlu mendaftarkan _library_ ke dalam _entry point_ aplikasi (biasanya terletak di `src/main.ts` atau `src/main.js`).

Pada tahap ini, kita juga wajib mengimpor file CSS utama dari _design system_.

```ts {4,7,10,13}
import { createApp } from 'vue';
import App from './App.vue';

// 1. Import CSS bawaan proyek  (opsional jika ada)
import './style.css';

// 2. Import CSS BSrE Design System (Wajib)
import '@bsre/design-system/style.css';

// 3. Import Plugin Library
import BSrEDesignSystem from '@bsre/design-system';

const app = createApp(App);

// 4. Daftarkan Plugin secara global
app.use(BSrEDesignSystem);

app.mount('#app');
```

## 3. Konfigurasi Tailwind CSS

Agar kelas utilitas, variabel warna, dan _design token_ BSrE terbaca oleh proyek , tambahkan _preset_ berikut ke dalam file konfigurasi `tailwind.config.js` atau `tailwind.config.ts`.

```js {2,6,12}
// tailwind.config.js
import bsrePreset from '@bsre/design-system/tailwind-preset';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // Wajib: Agar Tailwind memindai kelas CSS di dalam komponen library
    './node_modules/@bsre/design-system/dist/**/*.js',
  ],
  presets: [
    bsrePreset, // Menggunakan konfigurasi warna dan font standar BSrE
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 4. Penggunaan Komponen

Jika semua konfigurasi di atas sudah selesai, kita dapat langsung memanggil komponen di halaman mana pun tanpa perlu melakukan _import_ manual (karena sudah didaftarkan secara global di `main.ts`).

```vue
<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Uji Coba Komponen</h1>

    <BaseButton variant="primary" size="lg"> Simpan Data </BaseButton>

    <BaseInput
      label="Nomor Induk Pegawai"
      placeholder="Masukkan NIP "
      class="mt-4 max-w-md"
    />
  </div>
</template>
```

## Penyelesaian Masalah (Troubleshooting)

Jika terdapat kendala saat atau setelah instalasi, periksa beberapa hal berikut:

1. **Gaya visual (CSS) berantakan atau tidak muncul?** Pastikan sudah mengimpor `import '@bsre/design-system/style.css'` di dalam file `main.ts`.
2. **Warna khusus Tailwind (seperti `bg-bsre-blue`) tidak terbaca?** Cek kembali file `tailwind.config.js`. Pastikan `bsrePreset` sudah dimasukkan ke dalam _array_ `presets` dan _path_ ke `node_modules` di dalam `content` sudah benar.
3. **Peringatan versi (Version Conflict)?** Pastikan versi `vue` di proyek minimal v3.3.0 untuk mendukung fitur-fitur terbaru Composition API.

Jika masalah masih berlanjut, silakan laporkan kendala melalui tim UI/UX Engineer.
