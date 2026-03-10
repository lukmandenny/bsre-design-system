<script setup>
import AvatarPlayground from '../../demos/atoms/AvatarPlayground.vue'
</script>

# Avatar (Profil Pengguna)

Komponen _Avatar_ digunakan untuk menampilkan representasi visual dari pengguna atau entitas. Dilengkapi dengan fitur _fallback_ otomatis yang akan menampilkan inisial nama jika gambar gagal dimuat.

<div class="mb-10 mt-6">
  <AvatarPlayground />
</div>

## Dasar Penggunaan (Basic Usage)

Anda dapat mengirimkan URL gambar melalui prop `src`. Jika `src` kosong atau gambar rusak/gagal diunduh, komponen akan otomatis mengekstrak inisial dari prop `name`.

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex items-center gap-6">
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABTEvySXa69fsXqgjfLODrp5ls7f0uyj7O3NpD58cMyuI--tZbpfQiNB43UrVVFLs1wV-AFvLuM0HNHfohx6FV4yArbQWRba6dg.png?r=c23" name="Avatar Aang" size="lg" />
<BaseAvatar name="Pangeran Zuko" size="lg" />
<BaseAvatar name="Katara" size="lg" />
</div>
</div>

```vue
<BaseAvatar
  src="[https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABTEvySXa69fsXqgjfLODrp5ls7f0uyj7O3NpD58cMyuI--tZbpfQiNB43UrVVFLs1wV-AFvLuM0HNHfohx6FV4yArbQWRba6dg.png?r=c23](https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABTEvySXa69fsXqgjfLODrp5ls7f0uyj7O3NpD58cMyuI--tZbpfQiNB43UrVVFLs1wV-AFvLuM0HNHfohx6FV4yArbQWRba6dg.png?r=c23)"
  name="Avatar Aang"
/>

<BaseAvatar name="Pangeran Zuko" />

<BaseAvatar name="Katara" />
```

## Ukuran & Bentuk (Sizes & Shapes)

Tersedia empat ukuran bawaan (`sm`, `md`, `lg`, `xl`) dan dua bentuk dasar (`circle` atau `square`).

<div class="flex justify-center p-8 border border-gray-200 rounded-xl bg-white mt-4 mb-4 shadow-sm w-full">
<div class="flex flex-col items-center gap-8">
<div class="flex items-end gap-4">
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABXU1NSnq_L7osoEYFvhW26botwawo51837uDeWUyNM8bDbn0gWvxcTMKkaOgruOofGhtM55KelJWUHjUXhsqnvu8RCqs1DmfGQ.png?r=0ca" name="Katara" size="xl" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABXU1NSnq_L7osoEYFvhW26botwawo51837uDeWUyNM8bDbn0gWvxcTMKkaOgruOofGhtM55KelJWUHjUXhsqnvu8RCqs1DmfGQ.png?r=0ca" name="Katara" size="lg" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABXU1NSnq_L7osoEYFvhW26botwawo51837uDeWUyNM8bDbn0gWvxcTMKkaOgruOofGhtM55KelJWUHjUXhsqnvu8RCqs1DmfGQ.png?r=0ca" name="Katara" size="md" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABXU1NSnq_L7osoEYFvhW26botwawo51837uDeWUyNM8bDbn0gWvxcTMKkaOgruOofGhtM55KelJWUHjUXhsqnvu8RCqs1DmfGQ.png?r=0ca" name="Katara" size="sm" />
</div>
<div class="flex items-end gap-4">
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABVX66eoLkGB0Ynfhpt3o6VrWw-WoFL_kdTalSbYlLtHB9_RSAxBontgXz1jW68_aOkV-fC06bC3t61vx_QjZVNDE4ur6HyP9Qw.png?r=1d5" name="Zuko" shape="square" size="xl" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABVX66eoLkGB0Ynfhpt3o6VrWw-WoFL_kdTalSbYlLtHB9_RSAxBontgXz1jW68_aOkV-fC06bC3t61vx_QjZVNDE4ur6HyP9Qw.png?r=1d5" name="Zuko" shape="square" size="lg" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABVX66eoLkGB0Ynfhpt3o6VrWw-WoFL_kdTalSbYlLtHB9_RSAxBontgXz1jW68_aOkV-fC06bC3t61vx_QjZVNDE4ur6HyP9Qw.png?r=1d5" name="Zuko" shape="square" size="md" />
<BaseAvatar src="https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABVX66eoLkGB0Ynfhpt3o6VrWw-WoFL_kdTalSbYlLtHB9_RSAxBontgXz1jW68_aOkV-fC06bC3t61vx_QjZVNDE4ur6HyP9Qw.png?r=1d5" name="Zuko" shape="square" size="sm" />
</div>
</div>
</div>

```vue
<BaseAvatar src="..." name="Katara" size="xl" />
<BaseAvatar src="..." name="Katara" size="lg" />
<BaseAvatar src="..." name="Katara" size="md" />
<BaseAvatar src="..." name="Katara" size="sm" />

<BaseAvatar src="..." name="Zuko" shape="square" />
```

## API Reference (Props)

| Prop    | Type     | Default    | Deskripsi                                                      |
| :------ | :------- | :--------- | :------------------------------------------------------------- |
| `src`   | `String` | `''`       | URL gambar profil.                                             |
| `name`  | `String` | `'User'`   | Nama pengguna. Digunakan untuk atribut `alt` dan inisial teks. |
| `size`  | `String` | `'md'`     | Ukuran komponen (`sm`, `md`, `lg`, `xl`).                      |
| `shape` | `String` | `'circle'` | Bentuk avatar (`circle`, `square`).                            |

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">💡 Praktik Terbaik (Best Practices)</p>
<ul>
<li>Selalu sertakan prop <code>name</code> meskipun Anda sudah memiliki <code>src</code>. Ini penting untuk aksesibilitas (Screen Reader) dan sebagai cadangan jika gambar gagal dimuat.</li>
</ul>
</div>
