<script setup>
import SpinnerPlayground from '../../demos/atoms/SpinnerPlayground.vue'
</script>

# Spinner (Indikator Loading)

Komponen _Spinner_ digunakan untuk memberi tahu pengguna bahwa sistem sedang memproses data di latar belakang. Sangat esensial untuk mencegah pengguna mengklik tombol secara berulang.

<div class="mb-10 mt-6">
  <SpinnerPlayground />
</div>

## Variasi Ukuran (Sizes)

Gunakan prop `size` untuk menyesuaikan dimensi _spinner_. Ukuran `sm` sangat ideal untuk diletakkan di dalam `BaseButton`, sementara `xl` cocok untuk indikator _loading_ halaman penuh.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex items-end justify-center gap-8">
<div class="flex flex-col items-center gap-2"><BaseSpinner size="sm" /><span class="text-xs text-gray-400">sm</span></div>
<div class="flex flex-col items-center gap-2"><BaseSpinner size="md" /><span class="text-xs text-gray-400">md</span></div>
<div class="flex flex-col items-center gap-2"><BaseSpinner size="lg" /><span class="text-xs text-gray-400">lg</span></div>
<div class="flex flex-col items-center gap-2"><BaseSpinner size="xl" /><span class="text-xs text-gray-400">xl</span></div>
</div>
</div>

```vue
<BaseSpinner size="sm" />
<BaseSpinner size="md" />
<BaseSpinner size="lg" />
<BaseSpinner size="xl" />
```

## Variasi Warna (Colors)

Prop `color` dapat digunakan untuk menyesuaikan _spinner_ dengan konteks aksi. Jika Anda meletakkannya di atas latar belakang gelap (seperti tombol Primary), gunakan `color="white"`.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex flex-wrap justify-center gap-6">
<BaseSpinner color="primary" />
<BaseSpinner color="success" />
<BaseSpinner color="danger" />
<BaseSpinner color="warning" />
<BaseSpinner color="info" />
<BaseSpinner color="gray" />
<div class="bg-gray-800 p-2 rounded-lg flex items-center justify-center">
<BaseSpinner color="white" />
</div>
</div>
</div>

```vue
<BaseSpinner color="primary" />
<BaseSpinner color="success" />
<BaseSpinner color="danger" />
<BaseSpinner color="warning" />
<BaseSpinner color="info" />
<BaseSpinner color="gray" />

<BaseSpinner color="white" />
```

## API Reference (Props)

| Prop    | Type     | Default     | Deskripsi                                                                                  |
| :------ | :------- | :---------- | :----------------------------------------------------------------------------------------- |
| `size`  | `String` | `'md'`      | Ukuran komponen (`sm`, `md`, `lg`, `xl`).                                                  |
| `color` | `String` | `'primary'` | Tema warna _spinner_ (`primary`, `white`, `success`, `danger`, `warning`, `info`, `gray`). |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Saat pengguna mengirimkan form (Submit), selalu ubah status tombol menjadi <b>disabled</b> dan munculkan <b>BaseSpinner</b> ukuran <code>sm</code> di dalam tombol tersebut.</li>
</ul>
</div>
