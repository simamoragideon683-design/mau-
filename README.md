# For Gita ❤️

Website confess romantis siap deploy ke Vercel.

## Cara deploy
1. Upload folder ini ke repository GitHub pribadi.
2. Import repository ke Vercel sebagai proyek **Other** (tanpa build command).
3. Di Vercel → Project Settings → Environment Variables, buat:
   - `TELEGRAM_BOT_TOKEN`: token dari @BotFather
   - `TELEGRAM_CHAT_ID`: chat ID Telegram penerima
4. Redeploy. Buka URL Vercel dan uji pengiriman pesan.

Untuk mendapatkan chat ID, kirim `/start` ke botmu, lalu cek `https://api.telegram.org/bot<TOKEN>/getUpdates` secara pribadi. Jangan pernah membagikan token atau memasukkannya ke repository.

## Catatan keamanan
Backend memvalidasi panjang input dan menjaga token bot di server. Sebelum membagikan link secara publik, tambahkan rate limiting / CAPTCHA di endpoint `/api/confess` untuk mencegah spam. Tombol "Enggak" dibuat sebagai gimmick; opsi "Aku mau pikir dulu" tetap tersedia agar penerima bebas menentukan jawabannya.
