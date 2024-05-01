## INSTALATION

Pastikan git cli sudah terinstall, kemudian jalankan perintah dibawah
```
1. clone repository
2. copy .env.example rename menjadi .env kemudian atur database di .env
3. composer install
4. php artisan key:generate
5. php artisan migrate --seed
```

## ADMIN ACCOUNT
```
email : admin@gmail.com
password : password
```

## FEATURE
- Terdapat 2 role yaitu : admin dan member
- Mengelola Tags (Admin)
- Mengelola Course (Admin)
- Mengelola Video (Admin)
- Mengelola User (Admin)
- Mengelola Transaksi (Admin)
- Mengelola Roles & Permission (Admin)
- Halaman Dashboard dengan berbagai fitur seperti : (Admin) 
   - Total pendapatan 
   - Notifikasi pembayaran belum terverifikasi
   - Jumlah course
   - Jumlah member
   - Jumlah artikel
- Pembelian Course
- Preview Course
- Keranjang
- Full akses untuk course yang di beli (Member)
- Mengubah Password dan Profile (Member)
- List Transaksi (Member)
- Search Data
- Responsive
