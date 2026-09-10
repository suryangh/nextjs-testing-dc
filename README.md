# nextjs-testing-dc

Web statis Next.js frontend dummy bertema wisata ("Wisata Nusantara") dengan tampilan modern Light Glassmorphism untuk kebutuhan testing sysadmin dan demo infrastruktur.

## Prasyarat System / Requirements

Sebelum menjalankan aplikasi, pastikan sistem Anda memenuhi kebutuhan berikut:

- **Node.js**: Versi `18.18.0` ke atas (Direkomendasikan **Node.js v20.x** atau **v22.x**)
- **NPM**: Versi `9.x` ke atas (bisa juga menggunakan `yarn` atau `pnpm`)
- **Docker** *(Opsional)*: Untuk pengujian reverse proxy Nginx dalam container

## Fitur Aplikasi

- **Beranda**: Banner hero modern, statistik keindahan Indonesia, serta seksi unggulan
- **Daftar Destinasi**: Fitur pencarian *live search* tempat wisata dan filter berdasarkan kategori
- **Detail Destinasi**: Dynamic route (`/destinasi/[slug]`) dengan gambar HD lokal, daftar aktivitas, & widget booking
- **Halaman Kontak**: Form masukan modern yang responsif
- **Komponen Reusable**: `Navbar`, `Footer`, `DestinationCard`, `Layout`

## Menjalankan Proyek

### 1) Install dependency

```bash
npm install
```

### 2) Jalankan development server

```bash
npm run dev
```

Akses aplikasi di: `http://localhost:3000`

### 3) Build untuk production

```bash
npm run build
```

### 4) Jalankan production server

```bash
npm run start
```

## Catatan

Proyek ini **hanya dummy frontend** untuk kebutuhan demo/testing sysadmin. Semua data destinasi menggunakan data statis lokal tanpa backend/database.
