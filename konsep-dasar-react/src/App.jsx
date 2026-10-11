import { use, useState } from "react";

// Materi Awal: Component
function Salam() {
  return <h3>Halo, saya wahyu sedang belajar dasar Reactjs</h3>;
}

// Materi Kedua: JSX
function Profile() {
  const nama = "Budi";
  const umur = 30;

  return (
    // ini yang pakai div
    // <div className="kartu">
    //   <h2>Nama: {nama}</h2>
    //   <p>Tahun depan umur: {umur + 1}</p>
    //   <label htmlFor="email">email</label>
    //   <input type="email" id="email" />
    //   <br />
    // </div>

    // ini yang pakai fragemnt
    <>
      <h2>Nama: {nama}</h2>
      <p>Tahun depan umur: {umur + 1}</p>
      <label htmlFor="email">email</label>
      <input type="email" id="email" />
      <br />
    </>
  );
}

// Materi Ketiga: Props (tanpa children)
// function KartuProfile({ nama, pekerjaan }) {
//   return (
//     <div className="">
//       <h3>{nama}</h3>
//       <p>{pekerjaan}</p>
//     </div>
//   );
// }

function KartuProfile({ nama, pekerjaan, children }) {
  return (
    <div className="">
      <h3>{nama}</h3>
      <p>{pekerjaan}</p>

      <div className="">{children}</div>
    </div>
  );
}

// Materi Keempat: useState
function Penghitung() {
  const [angka, setAngka] = useState(0);

  return (
    <>
      <div>
        <p>Angka: {angka}</p>
        <button onClick={() => setAngka(angka + 1)}>Tambah</button>
      </div>
    </>
  );
}

// Materi Kelima: Event Handling
function Tombol() {
  function handleKlik() {
    alert("Tombol di klik!");
  }

  return <button onClick={handleKlik}>Klik aku</button>;
}

// bisa juga untuk mengakses informasi event
function Input() {
  const [teks, setTeks] = useState("");

  function handleInput(e) {
    setTeks(e.target.value);
  }

  return (
    <>
      <div>
        <form action="">
          <input type="text" onChange={handleInput} />
          <p>Kamu mengetik: {teks}</p>
        </form>
      </div>
    </>
  );
}

// Materi Keenam: Conditional Rendering
function StatusLogin({ isLogin }) {
  // ini contoh early return
  if (!isLogin) {
    return <p>Silahkan login terdahulu untuk melihat konten</p>;
  }

  return <p>Selamat datang!</p>;
}

// Materi Ketujuh: List and Key
function DaftarBuah() {
  const buah = [
    { id: 1, nama: "Apel" },
    { id: 2, nama: "Mangga" },
    { id: 3, nama: "Pepaya" },
  ];

  return (
    <>
      <div>
        <ul>
          {buah.map((item) => (
            <li key={item.id}>{item.nama}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Materi kedelapan: Controlled Component
function FormPendaftaran() {
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // cegah halaman reload
    console.log({ isName, isEmail });

    setIsName("");
    setIsEmail("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={isName}
        onChange={(e) => setIsName(e.target.value)}
        placeholder="name"
      />
      <input
        type="email"
        value={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
        placeholder="email"
      />
      <button type="submit">Daftar</button>
    </form>
  );
}

// Materi Kesembilan: Lifting Up
function InputSuhu({ nilai, onUbah }) {
  return (
    <input
      type="text"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
      placeholder="Ketik sesuatu"
    />
  );
}

function Tampilan({ teks }) {
  return <p>Kamu mengetik: {teks}</p>;
}

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  const [teks, setTeks] = useState(""); // state dipegang parent

  return (
    <>
      <div>
        {/* Mengirim selain string: string pakai tanda kutip, selain itu pakai {}: */}

        {/* KartuProfile pertama dengan children berupa teks biasa */}
        {/* <KartuProfile nama="Budi" pekerjaan="Programmer">
          <p>Status: aktif bekerja saat ini</p>
        </KartuProfile> */}

        {/* KartuProfile kedua dengan children berupa tombol */}
        {/* <KartuProfile nama="Sari" pekerjaan="Desainer">
          <button onClick={() => alert(`Profile diklik!`)}>Lihat!</button>
        </KartuProfile> */}

        {/* <Penghitung /> */}

        {/* <Tombol /> */}

        {/* <Input /> */}

        {/* <h2>Contoh Conditional Rendering</h2>

        <div>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout (ubah ke false)" : "Login (ubah ke true)"}
          </button>

          <button onClick={() => setIsAdmin(!isAdmin)}>
            {isAdmin ? "Admin" : "User biasa"}
          </button>
        </div>

        <hr />

        <div>
          <h3>1. Menggunakan Ternary Operator</h3>
          <p>
            Status akun: {isLogin ? `🟢 Aktif / Sudah Login` : "🔴 Belum Login"}
          </p>
        </div>

        <div>
          <h3>2. Menggunakan Operator &&</h3>
          {isLogin && (
            <div>
              <p>🎉 Selamat! Anda melihat penawaran spesial khusus member.</p>

              <p>
                Hak Akses:{" "}
                {isAdmin
                  ? "👑 Administrator (Akses Penuh)"
                  : "👤 Member Reguler"}
              </p>
            </div>
          )}
        </div>

        <div>
          <h3>3. Menggunakan Early return</h3>
          <StatusLogin isLogin={isLogin} />
        </div> */}

        {/* <DaftarBuah /> */}

        {/* <FormPendaftaran /> */}

        <InputSuhu nilai={teks} onUbah={setTeks} />
        <Tampilan teks={teks} />
      </div>
    </>
  );
}

export default App;
