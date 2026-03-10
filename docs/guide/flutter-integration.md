# Integrasi Flutter

Panduan ini akan membantumu mengintegrasikan **BSrE Design System** ke dalam proyek Flutter. Pastikan mengikuti setiap langkah agar komponen (_widget_) dan gaya visual dapat berjalan dengan optimal.

## Prasyarat

Sebelum memulai instalasi, pastikan lingkungan pengembangan (_development environment_) memenuhi syarat berikut:

- **Flutter SDK** versi 3.10.0 atau lebih baru.
- **Dart SDK** versi 3.0.0 atau lebih baru.

## 1. Instalasi Paket

Jalankan perintah berikut di terminal proyek untuk mengunduh paket _design system_ langsung dari repositori `pub.dev`:

```bash
flutter pub add bsre_ui_kit
```

Atau, kita juga bisa menambahkannya secara manual ke dalam file `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  bsre_ui_kit: ^1.0.0 # Pastikan menggunakan versi terbaru
```

Setelah itu, jalankan `flutter pub get` untuk memastikan semua dependensi terunduh dengan benar.

> **Catatan:** Jika ekosistem aplikasi menggunakan Phosphor Icons, pastikan juga menambahkan _package_ `phosphor_flutter` agar ikon yang ditampilkan selaras dengan panduan desain resmi.

## 2. Konfigurasi Tema (Theme)

Setelah paket terinstal, kita perlu menerapkan tema bawaan BSrE ke dalam _root_ aplikasi (biasanya di `main.dart`).

Kita hanya perlu membungkus parameter `theme` di dalam `MaterialApp` dengan kelas tema yang sudah disediakan oleh _library_.

```dart {2,16}
import 'package:flutter/material.dart';
// 1. Import library BSrE UI Kit
import 'package:bsre_ui_kit/bsre_ui_kit.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplikasi BSrE',
      // 2. Terapkan tema resmi BSrE di sini
      theme: BsreTheme.light(),
      home: const HomePage(),
    );
  }
}
```

## 3. Penggunaan Komponen

Jika tema sudah terpasang, kita bisa langsung menggunakan berbagai _widget_ yang tersedia di mana pun dalam proyek. Cukup pastikan _library_ sudah di-_import_ di file yang bersangkutan.

```dart
import 'package:flutter/material.dart';
import 'package:bsre_ui_kit/bsre_ui_kit.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Uji Coba Komponen')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Uji Coba Komponen',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),

            // Contoh penggunaan Button BSrE
            BsreButton(
              text: 'Simpan Data',
              variant: BsreButtonVariant.primary,
              onPressed: () {},
            ),

            const SizedBox(height: 16),

            // Contoh penggunaan Input/TextField BSrE
            const BsreTextField(
              label: 'Nomor Induk Pegawai',
              hintText: 'Masukkan NIP',
            ),
          ],
        ),
      ),
    );
  }
}
```

## Penyelesaian Masalah (Troubleshooting)

Jika terdapat kendala saat atau setelah instalasi, periksa beberapa hal berikut:

1. **Widget tidak ditemukan atau Error import?** Pastikan sudah menjalankan perintah `flutter pub get` dan penulisan _import_ `package:bsre_ui_kit/bsre_ui_kit.dart` sudah benar di bagian atas file.
2. **Warna atau Font bawaan tidak berubah?** Pastikan `MaterialApp` sudah menggunakan properti `theme:` yang merujuk pada pengaturan dari _library_. Kadang kita perlu melakukan `flutter clean` lalu _rebuild_ aplikasi agar aset _font_ bawaan _library_ terbaca dengan baik.
3. **Peringatan versi (Version Conflict)?** Jika muncul pesan _version solving failed_, cek kembali versi Flutter dan Dart yang terinstal. Library modern umumnya membutuhkan lingkungan Dart minimal versi 3.

Jika masalah masih berlanjut, silakan laporkan kendala melalui tim UI/UX Engineer.
