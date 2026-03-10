<script setup>
import { PhHouse, PhTrash, PhUser, PhWarningCircle, PhCheckCircle } from '@phosphor-icons/vue'
import IconPlayground from '../../demos/atoms/IconPlayground.vue'
</script>

# Icon (Ikonografi)

Komponen _Icon_ adalah pembungkus (_wrapper_) terstandarisasi untuk merender ikon di dalam aplikasi. BSrE Design System menggunakan pustaka **[Phosphor Icons](https://phosphoricons.com/)** sebagai pondasi visual ikonografi.

<div class="mb-10 mt-6">
<IconPlayground />
</div>

## Prasyarat (Prerequisites)

Sebelum menggunakan komponen `BaseIcon`, Anda **wajib** menginstal pustaka Phosphor Icons versi Vue ke dalam proyek Anda. Jalankan salah satu perintah berikut di terminal:

::: code-group

```bash [npm]
npm install @phosphor-icons/vue
```

```bash [yarn]
yarn add @phosphor-icons/vue
```

```bash [pnpm]
pnpm add @phosphor-icons/vue
```

:::

## Panduan Penggunaan (Usage Guide)

Untuk menjaga performa aplikasi (_Tree-shaking_), kami menggunakan pendekatan _Component Binding_. Anda harus mengimpor ikon spesifik dari `@phosphor-icons/vue` terlebih dahulu, lalu meneruskannya ke dalam prop `:icon`.

> **💡 Tips Pencarian Ikon:** Kunjungi [Galeri Phosphor Icons](https://phosphoricons.com/). Klik ikon yang Anda inginkan, lalu lihat panel di bagian bawah layar. Pilih tab **"Vue"** untuk melihat nama komponen resminya (contoh: `PhAirplaneInFlight`). Gunakan nama tersebut untuk proses _import_.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex items-center gap-6">
<BaseIcon :icon="PhHouse" size="xl" />
<BaseIcon :icon="PhUser" size="xl" />
<BaseIcon :icon="PhTrash" size="xl" />
</div>
</div>

```vue
<script setup>
// 1. Impor ikon yang dibutuhkan (nama didapat dari tab "Vue" di web Phosphor)
import { PhHouse, PhUser, PhTrash } from '@phosphor-icons/vue';
</script>

<template>
  <BaseIcon :icon="PhHouse" />
  <BaseIcon :icon="PhUser" />
  <BaseIcon :icon="PhTrash" />
</template>
```

## ⚠️ Peringatan Performa & Tree-Shaking

Sangat **TIDAK DISARANKAN** untuk mengimpor seluruh ikon secara general (contoh: `import * as PhosphorIcons from '@phosphor-icons/vue'`). Hal ini akan mematikan fitur _Tree-shaking_ pada _bundler_ (seperti Vite), sehingga seluruh 1.000+ ikon akan dimuat ke dalam aplikasi Anda. Akibatnya, ukuran aplikasi akan membengkak drastis dan waktu _loading_ menjadi sangat lambat.

**Solusi Alternatif (Ikon Global):**
Jika ada beberapa ikon yang **sangat sering digunakan** di seluruh halaman (misalnya ikon _Trash_ atau _Close_), Anda dapat mendaftarkannya secara global di file `main.js` aplikasi utama Anda, sehingga tidak perlu diimpor berulang kali:

```javascript
// Di dalam file main.js
import { createApp } from 'vue';
import App from './App.vue';
import { PhTrash, PhX } from '@phosphor-icons/vue';

const app = createApp(App);

// Daftarkan komponen secara global
app.component('PhTrash', PhTrash);
app.component('PhX', PhX);

app.mount('#app');
```

Setelah didaftarkan secara global, Anda bisa langsung menggunakannya di komponen manapun: `<BaseIcon icon="PhTrash" />`. Untuk ikon lainnya, **tetap wajib diimpor secara spesifik**.

## Variasi Ukuran & Warna (Sizes & Colors)

Alih-alih menebak ukuran pixel atau kode hex, gunakan prop `size` dan `color` untuk memastikan ikon selaras dengan _Design Tokens_ BSrE. Secara bawaan, warna ikon akan mengikuti warna teks di sekitarnya (`color="default"`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex flex-col items-center gap-8">
<div class="flex items-end gap-6">
<BaseIcon :icon="PhHouse" size="sm" />
<BaseIcon :icon="PhHouse" size="md" />
<BaseIcon :icon="PhHouse" size="lg" />
<BaseIcon :icon="PhHouse" size="xl" />
</div>
<div class="flex items-center gap-6">
<BaseIcon :icon="PhCheckCircle" size="lg" color="success" />
<BaseIcon :icon="PhWarningCircle" size="lg" color="warning" />
<BaseIcon :icon="PhTrash" size="lg" color="danger" />
<BaseIcon :icon="PhUser" size="lg" color="primary" />
</div>
</div>
</div>

```vue
<BaseIcon :icon="PhHouse" size="sm" />
<BaseIcon :icon="PhHouse" size="xl" />
<BaseIcon :icon="PhCheckCircle" color="success" />
<BaseIcon :icon="PhTrash" color="danger" />
```

## Ketebalan Ikon (Weights)

Phosphor Icons mendukung 6 tingkat ketebalan. Anda dapat mengubahnya menggunakan prop `weight`.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex items-center gap-6 text-gray-700">
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="thin" /><span class="text-xs">thin</span></div>
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="light" /><span class="text-xs">light</span></div>
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="regular" /><span class="text-xs">regular</span></div>
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="bold" /><span class="text-xs">bold</span></div>
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="fill" /><span class="text-xs">fill</span></div>
<div class="flex flex-col items-center gap-2"><BaseIcon :icon="PhHouse" size="xl" weight="duotone" /><span class="text-xs">duotone</span></div>
</div>
</div>

```vue
<BaseIcon :icon="PhHouse" weight="light" />
<BaseIcon :icon="PhHouse" weight="bold" />
<BaseIcon :icon="PhHouse" weight="fill" />
<BaseIcon :icon="PhHouse" weight="duotone" />
```

## API Reference (Props)

| Prop     | Type               | Default        | Deskripsi                                                                          |
| :------- | :----------------- | :------------- | :--------------------------------------------------------------------------------- |
| `icon`   | `Object`, `String` | **(Required)** | Komponen ikon dari `@phosphor-icons/vue` atau _string_ (jika didaftarkan global).  |
| `size`   | `String`           | `'md'`         | Ukuran komponen (`sm`, `md`, `lg`, `xl`).                                          |
| `color`  | `String`           | `'default'`    | Tema warna (`default`, `primary`, `success`, `danger`, `warning`, `info`, `gray`). |
| `weight` | `String`           | `'regular'`    | Ketebalan garis (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`).           |
