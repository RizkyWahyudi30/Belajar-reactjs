# Pelajaran 1: Konsep Inti React

Kita akan belajar satu per satu. Setiap materi punya penjelasan, contoh, praktik yang baik, dan hal yang harus dihindari.

**Persiapan**
Supaya bisa langsung mencoba contoh kode, buat project dengan Vite:

```sh
npm create vite@latest belajar-react -- --template react
cd belajar-react
npm install
npm run dev

```

Buka `src/App.jsx`, hapus isinya, lalu tulis contoh-contoh di bawah ini di sana.

## 1. Component

**Penjelasan**: Component adalah potongan UI yang bisa dipakai berulang. Bayangkan LEGO: sebuah website dibangun dari balok-balok kecil (tombol, kartu, navbar) yang disusun jadi satu halaman utuh.

Di React modern, component adalah **fungsi JavaScript biasa** yang mengembalikan tampilan.

```jsx
function Salam() {
  return <h1>Halo, selamat belajar React!</h1>;
}

function App() {
  return (
    <div>
      <Salam />
      <Salam />
    </div>
  );
}

export default App;
```

Component `Salam` dipakai dua kali dengan menulis `<Salam />`. Cukup tulis sekali, pakai di mana saja.

**Praktik yang baik:**

- Nama component wajib **diawali huruf kapital** (`Salam`, bukan `salam`). React memakai huruf kapital untuk membedakan component dari tag HTML biasa.
- Satu component sebaiknya **punya satu tugas jelas**. Jika sudah terlalu panjang, pecah jadi component yang lebih kecil.
