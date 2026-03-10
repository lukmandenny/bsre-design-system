<script setup>
import BadgePlayground from '../../demos/atoms/BadgePlayground.vue'
</script>

# Badge (Label Status)

Komponen _Badge_ digunakan untuk menyoroti status sebuah item, menampilkan jumlah notifikasi, atau mengkategorikan data. Sangat esensial untuk digunakan di dalam tabel data atau daftar kartu.

<div class="mb-10 mt-6">
  <BadgePlayground />
</div>

## Warna Semantik (Semantic Colors)

Gunakan prop `color` untuk memberikan konteks visual pada status yang ingin ditampilkan. Warna yang tersedia dirancang dengan gaya "Soft" agar tetap nyaman dibaca meskipun ditampilkan dalam jumlah banyak.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex flex-wrap gap-3">
<BaseBadge color="primary">Primary</BaseBadge>
<BaseBadge color="success">Success</BaseBadge>
<BaseBadge color="danger">Danger</BaseBadge>
<BaseBadge color="warning">Warning</BaseBadge>
<BaseBadge color="info">Info</BaseBadge>
<BaseBadge color="gray">Gray</BaseBadge>
</div>
</div>

```vue
<BaseBadge color="primary">Primary</BaseBadge>
<BaseBadge color="success">Success</BaseBadge>
<BaseBadge color="danger">Danger</BaseBadge>
<BaseBadge color="warning">Warning</BaseBadge>
<BaseBadge color="info">Info</BaseBadge>
<BaseBadge color="gray">Gray</BaseBadge>
```

## Ukuran & Bentuk (Sizes & Shapes)

Tersedia dua ukuran (`sm` dan `md`) untuk menyesuaikan dengan hierarki tipografi Anda. Tambahkan prop `pill` jika Anda ingin sudut _badge_ berbentuk oval penuh seperti kapsul.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex flex-col items-center gap-6">
<div class="flex items-center gap-3">
<BaseBadge color="success" size="md">Ukuran Medium</BaseBadge>
<BaseBadge color="success" size="sm">Ukuran Small</BaseBadge>
</div>
<div class="flex items-center gap-3">
<BaseBadge color="primary" pill>Bentuk Pill</BaseBadge>
<BaseBadge color="warning" size="sm" pill>Bentuk Pill</BaseBadge>
</div>
</div>
</div>

```vue
<BaseBadge color="success" size="md">Ukuran Medium</BaseBadge>
<BaseBadge color="success" size="sm">Ukuran Small</BaseBadge>

<BaseBadge color="primary" pill>Bentuk Pill</BaseBadge>
<BaseBadge color="warning" size="sm" pill>Bentuk Pill</BaseBadge>
```

## API Reference (Props)

| Prop    | Type      | Default     | Deskripsi                                                               |
| :------ | :-------- | :---------- | :---------------------------------------------------------------------- |
| `color` | `String`  | `'primary'` | Tema warna (`primary`, `success`, `danger`, `warning`, `info`, `gray`). |
| `size`  | `String`  | `'md'`      | Ukuran komponen (`sm`, `md`).                                           |
| `pill`  | `Boolean` | `false`     | Menjadikan sudut oval membulat penuh (`rounded-full`).                  |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Gunakan teks sependek mungkin pada <b>Badge</b> (idealnya 1 hingga 2 kata).</li>
<li>Konsistenlah dengan arti warna! (Misal: Merah selalu untuk <i>Error/Gagal</i>, Hijau untuk <i>Sukses/Aktif</i>).</li>
</ul>
</div>
