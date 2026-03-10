<script setup>
import SkeletonPlayground from '../../demos/atoms/SkeletonPlayground.vue'
</script>

# Skeleton (Kerangka Loading)

Komponen _Skeleton_ digunakan untuk menampilkan visualisasi kerangka konten (_placeholder_) selagi data asli sedang diambil dari server. Ini membantu mengurangi _cognitive load_ dan membuat aplikasi terasa lebih responsif dibandingkan menggunakan _Spinner_ biasa.

<div class="mb-10 mt-6">
  <SkeletonPlayground />
</div>

## Tipe Dasar (Basic Types)

Terdapat 3 tipe dasar untuk mencocokkan berbagai elemen UI: `text` (untuk baris kalimat), `circular` (untuk avatar/ikon), dan `rectangular` (untuk gambar/kartu).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-6">
<div>
<p class="text-xs text-gray-400 mb-2 font-mono">type="text"</p>
<BaseSkeleton type="text" />
</div>
<div>
<p class="text-xs text-gray-400 mb-2 font-mono">type="circular"</p>
<BaseSkeleton type="circular" />
</div>
<div>
<p class="text-xs text-gray-400 mb-2 font-mono">type="rectangular"</p>
<BaseSkeleton type="rectangular" />
</div>
</div>
</div>

```vue
<BaseSkeleton type="text" />

<BaseSkeleton type="circular" />

<BaseSkeleton type="rectangular" />
```

## Ukuran Kustom (Custom Dimensions)

Gunakan prop `width` dan `height` untuk menyesuaikan ukuran. Anda dapat menggunakan angka (otomatis menjadi `px`) atau _string_ (seperti `100%`, `5rem`, dll).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm flex flex-col gap-3">
<BaseSkeleton type="text" width="80%" height="20" />
<BaseSkeleton type="text" width="60%" />
<BaseSkeleton type="text" width="40%" />
</div>
</div>

```vue
<BaseSkeleton type="text" width="80%" height="20" />
<BaseSkeleton type="text" width="60%" />
<BaseSkeleton type="text" width="40%" />
```

## Contoh Implementasi Nyata (Real-world Use Case)

Komponen ini dirancang untuk digabungkan agar membentuk replika UI yang utuh. Berikut adalah contoh _loading state_ untuk sebuah kartu profil pengguna.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="w-full max-w-sm p-4 border border-gray-100 rounded-2xl shadow-sm flex items-center gap-4">
<BaseSkeleton type="circular" width="50" height="50" />
<div class="flex-1 flex flex-col gap-2">
<BaseSkeleton type="text" width="70%" />
<BaseSkeleton type="text" width="40%" height="12" />
</div>
</div>
</div>

```vue
<div class="flex items-center gap-4 p-4 border rounded-2xl">
  <BaseSkeleton type="circular" width="50" height="50" />

  <div class="flex-1 flex flex-col gap-2">
    <BaseSkeleton type="text" width="70%" />
    <BaseSkeleton type="text" width="40%" height="12" />
  </div>
</div>
```

## API Reference (Props)

| Prop       | Type               | Default  | Deskripsi                                                  |
| :--------- | :----------------- | :------- | :--------------------------------------------------------- |
| `type`     | `String`           | `'text'` | Bentuk dasar skeleton (`text`, `circular`, `rectangular`). |
| `width`    | `String`, `Number` | `null`   | Lebar kustom (contoh: `200`, `'50%'`, `'4rem'`).           |
| `height`   | `String`, `Number` | `null`   | Tinggi kustom (contoh: `16`, `'100px'`).                   |
| `animated` | `Boolean`          | `true`   | Mengaktifkan/menonaktifkan animasi berkedip (_pulse_).     |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Gunakan lebar (_width_) yang sedikit bervariasi (misal 80% dan 60%) untuk beberapa baris teks agar terlihat lebih natural seperti paragraf sungguhan.</li>
</ul>
</div>
