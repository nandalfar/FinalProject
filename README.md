# FinalProject - KSM Android / 🎮 Sistem Pengelolaan Data Spesifikasi Minimum Game

**Deskripsi singkat**  
Proyek ini adalah implementasi “Final Project” untuk KSM Android. Backend ditulis dengan JavaScript/Node.js. Sistem ini dirancang sebagai layanan untuk mengelola data Spesifikasi Minimum Game, mulai dari membaca daftar game, menambahkan data baru, memperbarui, menghapus, hingga melakukan pencarian berdasarkan nama atau harga.

Tema proyek ini adalah “Sistem Pengelolaan Data Spesifikasi Minimum Game”, di mana setiap game memiliki informasi dasar seperti nama, harga, dan spesifikasi yang dibutuhkan untuk menjalankannya.


---

## 📁 Struktur Project
```
FinalProject/
├── controllers/ ← logic kontroler (request → response)
├── routes/ ← definisi route / endpoint API
├── services/ ← layananuntuk business logic, DB, dsb
├── data.js ← data awal
├── index.js ← entry point server
└── .gitignore
```

---

## 💾 Format Data Game

Setiap game disimpan dalam bentuk **objek** dengan struktur sebagai berikut:

```js
{
  Nama: "Red Dead Redemption 2",
  OS: "Windows 10 64-Bit",
  Processor: ["Intel Core i5-2500K", "AMD FX-6300"],
  Memory: 8, // dalam GB
  Graphics: ["NVIDIA GeForce GTX 770 2GB", "AMD Radeon R9 280 3GB"],
  Storage: 150, // dalam GB
  Harga: 879.000 // atau "Free"
}
```

### 🧩 Keterangan Field:

| Field         | Tipe Data           | Keterangan                                   |
| ------------- | ------------------- | -------------------------------------------- |
| **Nama**      | `String`            | Nama game                                    |
| **OS**        | `String`            | Sistem operasi minimum                       |
| **Processor** | `Array<String>`     | Daftar prosesor yang memenuhi syarat minimum |
| **Memory**    | `Number`            | Kapasitas RAM minimum (dalam GB)             |
| **Graphics**  | `Array<String>`     | GPU minimum yang didukung                    |
| **Storage**   | `Number`            | Ruang penyimpanan minimum (dalam GB)         |
| **Harga**     | `Number` / `String` | Harga game dalam Rupiah atau “Free”          |

---

## API Routes

### 1. GET `/games`
Mengambil seluruh data game.

Endpoint ini mendukung **filter** melalui query parameter:

| Query | Tipe | Contoh | Keterangan |
|-------|------|--------|------------|
| `Nama` | String | `/games?Nama=shadow` | Mencari game berdasarkan nama (partial match) |
| `Harga` | Number | `/games?Harga=300000` | Menampilkan game dengan harga **≤ nilai tersebut** |

**Contoh penggunaan:**
- `/games`
- `/games?Nama=red`
- `/games?Harga=500000`

**Catatan:**
- Hanya filter **Nama** dan **Harga** yang diizinkan.  
- Jika query selain itu diberikan, server mengembalikan error:  
  `Permitted filters Only Nama and Harga`  
- Jika dua filter dikirim bersamaan, hanya satu yang diproses (sesuai urutan kode).

---

### 2. GET `/games/:ID`
Menampilkan data game berdasarkan ID.  
Jika ID tidak ditemukan, mengembalikan pesan “Game Not Found”.

---

### 3. POST `/games`
Menambahkan game baru.

Contoh body JSON:

```json
{
  "Nama": "New Game",
  "OS": "Windows 10",
  "Processor": ["Intel i3"],
  "Memory": 4,
  "Graphics": ["GTX 650"],
  "Storage": 20,
  "Harga": 150000
}
```

---

### 4. PATCH `/games/:ID`
Memperbarui field tertentu pada game.

Contoh:

```json
{
  "Harga": 200000
}
```

---

### 5. DELETE `/games/:ID`
Menghapus game berdasarkan ID.

---

## Cara Menjalankan Program

1. Instal dependensi:

```bash
npm install
```

2. Jalankan server:

```bash
npm start
```

3. Akses API melalui Postman atau browser.

---

## Pembuat

Nama: **Nanda Alfarizi**  
Tema: Sistem Pengelolaan Data Spesifikasi Minimum Game  
Bahasa: **JavaScript (Node.js)**




