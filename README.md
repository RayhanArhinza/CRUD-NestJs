# CRUD NestJS dengan SQLite

![NestJS](https://nestjs.com/img/logo-small.svg) 

> Aplikasi CRUD sederhana menggunakan [NestJS](https://nestjs.com/) dan database **SQLite**.

## 🚀 Fitur

✅ **Membuat, Membaca, Memperbarui, dan Menghapus (CRUD) Category & Product**  
✅ **Menggunakan TypeORM sebagai ORM**  
✅ **Database SQLite untuk penyimpanan data**  
✅ **Modular dan scalable dengan struktur proyek yang rapi**  
✅ **Dapat diuji dengan Postman**

## 📂 Struktur Folder

```
CRUD-NestJS/
│── src/
│   ├── category/
│   │   ├── category.controller.ts
│   │   ├── category.module.ts
│   │   ├── category.service.ts
│   │   ├── category.entity.ts
│   ├── product/
│   │   ├── product.controller.ts
│   │   ├── product.module.ts
│   │   ├── product.service.ts
│   │   ├── product.entity.ts
│   ├── app.module.ts
│── test/
│── db.sqlite  (Database SQLite)
│── package.json
│── tsconfig.json
│── README.md
```

## ⚙️ Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/RayhanArhinza/CRUD-NestJs.git
   cd CRUD-NestJs
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server**
   ```bash
   npm run start
   ```
   Aplikasi akan berjalan di **http://localhost:3000** 🚀

## 🔥 API Endpoint

### **Category API**
- **GET** `/categories` → Ambil semua kategori
- **POST** `/categories` → Tambah kategori baru
- **GET** `/categories/:id` → Ambil kategori berdasarkan ID
- **PUT** `/categories/:id` → Update kategori
- **DELETE** `/categories/:id` → Hapus kategori

### **Product API**
- **GET** `/products` → Ambil semua produk
- **POST** `/products` → Tambah produk baru
- **GET** `/products/:id` → Ambil produk berdasarkan ID
- **PUT** `/products/:id` → Update produk
- **DELETE** `/products/:id` → Hapus produk

 

## 🎯 Teknologi yang Digunakan
- [NestJS](https://nestjs.com/) - Backend Framework
- [TypeORM](https://typeorm.io/) - ORM untuk Database
- [SQLite](https://www.sqlite.org/) - Database ringan
- [Postman](https://www.postman.com/) - API Testing

## 💡 Kontributor
**Rayhan Saneval Arhinza**  
📌 *Junior Web Programmer*  
📌 *GitHub:* [RayhanArhinza](https://github.com/RayhanArhinza)

---
⭐ Jangan lupa untuk memberikan **star** jika proyek ini bermanfaat! ⭐
