function Salam() {
  return <h3>Halo, saya wahyu sedang belajar dasar Reactjs</h3>;
}

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

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
