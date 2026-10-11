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

function App() {
  return (
    <>
      <div>
        {/* Mengirim selain string: string pakai tanda kutip, selain itu pakai {}: */}

        {/* KartuProfile pertama dengan children berupa teks biasa */}
        <KartuProfile nama="Budi" pekerjaan="Programmer">
          <p>Status: aktif bekerja saat ini</p>
        </KartuProfile>

        {/* KartuProfile kedua dengan children berupa tombol */}
        <KartuProfile nama="Sari" pekerjaan="Desainer">
          <button onClick={() => alert(`Profile diklik!`)}>Lihat!</button>
        </KartuProfile>
      </div>
    </>
  );
}

export default App;
