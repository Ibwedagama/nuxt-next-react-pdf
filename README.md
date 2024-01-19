## Render React PDF inside Nuxt using iframe

### Overview

Menggunakan react.pdf kita dapat melakukan rendering PDF dengan mudah lengkap dengan fitur page break. Yang menjadi tantangan adalah bagaimana kita dapat menampilkan PDF dari react.pdf ke dalam aplikasi Nuxt.js?

Untuk mengatasi isu ini kita dapat menggunakan iframe kemudian mengirim data ke aplikasi Next.js menggunakan window.postMessage

### How to run this project

Kita perlu menyiapkan dua buah terminal

```bash
# Terminal 1

cd next
npm run install
npm run dev
```

```bash

# Terminal 2

cd nuxt
npm run install
npm run dev
```

Next akan berjalan pada port 3000 dan Nuxt akan berjalan ada port 3001
