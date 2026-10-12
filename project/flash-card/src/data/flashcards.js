const flashcards = [
  {
    id: 1,
    question: "Apa bedanya `let`, `const`, dan `var` di JavaScript?",
    answer:
      "`var` memiliki scope fungsi (function-scoped) dan bisa di-hoist. `let` dan `const` memiliki scope blok (block-scoped). Nilai `const` tidak dapat diubah setelah diinisialisasi, sedangkan `let` nilainya bisa diubah.",
    level: "low",
    tags: ["JavaScript", "Variables", "Basics"],
  },
  {
    id: 2,
    question: "Apa fungsi dari `JSON.stringify()` dan `JSON.parse()`?",
    answer:
      "`JSON.stringify()` mengubah objek/array JavaScript menjadi string JSON. `JSON.parse()` mengubah string JSON kembali menjadi objek/array JavaScript.",
    level: "low",
    tags: ["JavaScript", "JSON", "Data"],
  },
  {
    id: 3,
    question: "Apa perbedaan antara `==` dan `===` dalam JavaScript?",
    answer:
      "`==` (equality) membandingkan nilai setelah melakukan konversi tipe data (type coercion), sedangkan `===` (strict equality) membandingkan nilai dan tipe data tanpa konversi.",
    level: "low",
    tags: ["JavaScript", "Operators", "Basics"],
  },
  {
    id: 4,
    question: "Apa yang dimaksud dengan Closure dalam JavaScript?",
    answer:
      "Closure adalah kombinasi antara sebuah fungsi dan lingkungan leksikal (lexical environment) tempat fungsi tersebut dideklarasikan, sehingga fungsi bisa mengakses variabel dari fungsi induknya meskipun fungsi induk telah selesai dieksekusi.",
    level: "high",
    tags: ["JavaScript", "Advanced", "Functions"],
  },
  {
    id: 5,
    question: "Apa itu DOM dalam pengembangan web?",
    answer:
      "DOM (Document Object Model) adalah antarmuka pemograman yang merepresentasikan struktur dokumen HTML/XML sebagai pohon objek, sehingga dapat diakses dan diubah oleh JavaScript.",
    level: "low",
    tags: ["Web", "DOM", "HTML"],
  },
  {
    id: 6,
    question: "Apa kegunaan dari metode `map()` pada Array JavaScript?",
    answer:
      "Metode `map()` digunakan untuk membuat array baru yang berisi hasil dari pemanggilan fungsi pada setiap elemen array asal.",
    level: "medium",
    tags: ["JavaScript", "Arrays", "Methods"],
  },
  {
    id: 7,
    question: "Apa perbedaan antara `null` dan `undefined`?",
    answer:
      "`undefined` berarti variabel telah dideklarasikan tetapi belum diberi nilai. `null` adalah nilai eksplisit yang ditetapkan untuk menunjukkan tidak adanya nilai atau variabel kosong.",
    level: "low",
    tags: ["JavaScript", "Data Types", "Basics"],
  },
  {
    id: 8,
    question:
      "Apa perbedaan utama antara Synchronous dan Asynchronous dalam eksekusi kode?",
    answer:
      "Synchronous mengeksekusi baris kode secara berurutan dan memblokir proses selanjutnya hingga kode selesai. Asynchronous mengeksekusi tugas di latar belakang tanpa memblokir baris kode lainnya.",
    level: "medium",
    tags: ["JavaScript", "Async", "Concepts"],
  },
  {
    id: 9,
    question: "Apa itu Promise di JavaScript?",
    answer:
      "Promise adalah objek yang mewakili hasil akhirnya (berhasil atau gagal) dari suatu operasi asynchronous.",
    level: "medium",
    tags: ["JavaScript", "Async", "Promise"],
  },
  {
    id: 10,
    question: "Apa kegunaan `async/await` di JavaScript?",
    answer:
      "`async/await` adalah fitur syntactic sugar untuk bekerja dengan Promise, membuat penulisan kode asynchronous terlihat dan mudah dibaca seperti kode synchronous.",
    level: "medium",
    tags: ["JavaScript", "Async", "ES6"],
  },
  {
    id: 11,
    question: "Apa itu API (Application Programming Interface)?",
    answer:
      "API adalah kumpulan aturan dan protokol yang memungkinkan satu aplikasi/sistem untuk berkomunikasi dan berbagi data dengan aplikasi/sistem lainnya.",
    level: "low",
    tags: ["Web", "API", "Network"],
  },
  {
    id: 12,
    question: "Apa itu Rest Parameter (`...args`) di JavaScript?",
    answer:
      "Rest parameter memungkinkan fungsi untuk menerima jumlah argumen yang tidak terbatas dan menggabungkannya ke dalam sebuah array.",
    level: "medium",
    tags: ["JavaScript", "Functions", "ES6"],
  },
  {
    id: 13,
    question: "Apa bedanya HTTP method GET dan POST?",
    answer:
      "GET digunakan untuk mengambil/meminta data dari server tanpa mengubah state. POST digunakan untuk mengirimkan data ke server untuk membuat data baru.",
    level: "low",
    tags: ["Web", "HTTP", "API"],
  },
  {
    id: 14,
    question: "Apa fungsi dari `localStorage` di web browser?",
    answer:
      "`localStorage` digunakan untuk menyimpan data berbentuk key-value di browser tanpa batas waktu kadaluarsa, bahkan setelah browser ditutup.",
    level: "medium",
    tags: ["Web", "Storage", "Browser"],
  },
  {
    id: 15,
    question: "Apa yang dimaksud dengan Event Bubbling?",
    answer:
      "Event Bubbling adalah mekanisme saat sebuah event dipicu pada elemen DOM paling dalam, event tersebut akan merambat naik ke elemen-elemen di atasnya (parent).",
    level: "high",
    tags: ["JavaScript", "DOM", "Events"],
  },
  {
    id: 16,
    question: "Apa perbedaan antara variabel global dan lokal?",
    answer:
      "Variabel global dideklarasikan di luar fungsi/blok dan dapat diakses di mana saja. Variabel lokal dideklarasikan di dalam fungsi/blok dan hanya bisa diakses di dalam blok tersebut.",
    level: "low",
    tags: ["JavaScript", "Variables", "Scope"],
  },
  {
    id: 17,
    question: "Apa kegunaan operator Ternary `? :` di JavaScript?",
    answer:
      "Operator Ternary adalah bentuk singkat dari pernyataan `if-else` dengan sintaks: `kondisi ? ekspresi_jika_benar : ekspresi_jika_salah`.",
    level: "low",
    tags: ["JavaScript", "Operators", "Basics"],
  },
  {
    id: 18,
    question: "Apa itu Destructuring Assignment di JavaScript?",
    answer:
      "Sintaks khusus yang memungkinkan kita untuk membongkar nilai dari array atau properti dari objek ke dalam variabel yang terpisah secara mudah.",
    level: "medium",
    tags: ["JavaScript", "ES6", "Syntax"],
  },
  {
    id: 19,
    question: "Apa kegunaan dari method `filter()` pada Array?",
    answer:
      "Metode `filter()` membuat array baru berisi elemen-elemen dari array asal yang lolos kualifikasi/uji dari fungsi callback yang diberikan.",
    level: "medium",
    tags: ["JavaScript", "Arrays", "Methods"],
  },
  {
    id: 20,
    question: "Apa fungsi kata kunci `this` dalam JavaScript?",
    answer:
      "Kata kunci `this` merujuk pada objek tempat fungsi tersebut dipanggil atau konteks eksekusi kode saat itu.",
    level: "high",
    tags: ["JavaScript", "Advanced", "Context"],
  },
];

export default flashcards;
