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

## 2. JSX

**Penjelasan**: JSX adalah cara menulis tampilan di dalam JavaScript dengan sintaks yang mirip HTML. Browser tidak paham JSX, jadi alat seperti Vite mengubahnya jadi JavaScript biasa di belakang layar.

Aturan JSX yang harus diingat:

```jsx
function Profil() {
  const nama = "Budi";
  const umur = 20;

  return (
    <div className="kartu">
      <h2>Nama: {nama}</h2>
      <p>Tahun depan umur: {umur + 1}</p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <br />
    </div>
  );
}
```

1. **Kurung kurawal** `{}` dipakai untuk menyisipkan nilai atau ekspresi JavaScript (variabel, perhitungan, pemanggilan fungsi).
2. `className`, bukan `class`, karena class adalah kata khusus di JavaScript.
3. `htmlFor`, bukan `for`, dengan alasan yang sama.
4. **Semua tag harus ditutup**, termasuk `<input />`, `<br />`, dan `<img />`.
5. **Harus ada satu pembungkus** di level paling luar. Jika tidak ingin menambah `<div>`, pakai fragment `<> ... </>`:

```jsx
return (
  <>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </>
);
```

**Hindari**:

1. Memasukkan statement seperti `if` atau `for` langsung di dalam `{}`. Kurung kurawal hanya menerima ekspresi (sesuatu yang menghasilkan nilai). Untuk logika percabangan, pakai `ternary` atau `&&` (dibahas di materi 6).
2. Menulis `style="color: red"` seperti HTML. Di JSX, style berupa objek: `style={{ color: "red" }}`.
3. Menaruh objek langsung sebagai teks: `{user}` jika `user` adalah objek akan error. Tampilkan propertinya: `{user.nama}`.

## 3. Props

**Penjelasan**: _Props_ (kependekan dari properties) adalah data yang dikirim dari component **induk (parent)** ke **component anak (child)**. Analogi: fungsi punya parameter, component punya props. Dengan props, satu component bisa menampilkan hasil berbeda-beda.

```jsx
function KartuProfil({ nama, pekerjaan }) {
  return (
    <div>
      <h3>{nama}</h3>
      <p>{pekerjaan}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <KartuProfil nama="Budi" pekerjaan="Programmer" />
      <KartuProfil nama="Sari" pekerjaan="Desainer" />
    </>
  );
}
```

Pada `{ nama, pekerjaan }` kita memakai destructuring, yaitu cara singkat mengambil properti dari objek. Tanpa itu, kodenya begini:

```jsx

```

`children` adalah props spesial berisi apa pun yang ditulis di antara tag pembuka dan penutup:

```jsx
function Kotak({ children }) {
  return <div className="kotak">{children}</div>;
}

<Kotak>
  <h2>Judul</h2>
  <p>Isi di dalam kotak</p>
</Kotak>;
```

**Mengirim selain string**: string pakai tanda kutip, selain itu pakai {}:

```jsx
<KartuProfil
  nama="Budi"
  umur={20}
  aktif={true}
  hobi={["main bola", "coding"]}
/>
```

Praktik yang baik

- Beri **nilai default** untuk props opsional: `function Tombol({ warna = "biru" }).`
-
