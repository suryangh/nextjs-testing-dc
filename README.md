# nextjs-testing-dc

Web statis Next.js frontend dummy bertema wisata untuk kebutuhan testing sysadmin.

## Fitur

- Halaman utama (hero + ringkasan destinasi)
- Halaman daftar destinasi wisata (data statis lokal)
- Halaman detail destinasi dengan dynamic route (`/destinasi/[slug]`)
- Halaman kontak sederhana
- Komponen reusable: `Navbar`, `Footer`, `DestinationCard`

## Menjalankan Proyek

### 1) Install dependency

```bash
npm install
```

### 2) Jalankan development server

```bash
npm run dev
```

Akses di: `http://localhost:3000`

### 3) Build untuk production

```bash
npm run build
```

### 4) Jalankan production server

```bash
npm run start
```

## Catatan

Proyek ini **hanya dummy frontend** untuk kebutuhan demo/testing sysadmin.
Semua data destinasi menggunakan data statis lokal, tanpa backend/database.
