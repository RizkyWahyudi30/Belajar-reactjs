export default function AnswerCard({
  currentIndex,
  total,
  answer,
  isVisible,
  onHide,
}) {
  return (
    <div className="w-full max-w-md rounded-4xl bg-linear-to-b from-[#CAF0F8] via-[#90E0EF] via-45% to-[#0077B6] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Bagian atas: kartu putih */}
      <div className="bg-white rounded-4xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-gray-400">
                Answer {currentIndex + 1} of {total}
              </p>
            </div>
          </div>
        </div>

        {/* Judul & deskripsi */}
        <h2
          className={`mt-3 text-lg text-gray-800 leading-relaxed transition duration-300 ${
            isVisible ? "blur-0" : "blur-sm select-none"
          }`}
          aria-hidden={!isVisible}
        >
          {answer}
        </h2>
        <p className="mt-4 text-[12px] text-gray-400 leading-relaxed">
          Tap "Hide Answer" to the explanation.
        </p>
      </div>

      {/* Bagian bawah: harga/status + tombol */}
      <div className="px-4 pb-4 pt-5">
        <button
          onClick={onHide}
          disabled={!isVisible}
          className={`w-full cursor-pointer rounded-2xl bg-[#0077B6] py-4 text-base font-semibold text-white transition duration-300 hover:bg-[#006499] active:scale-[0.98] disabled:cursor-not-allowed disabled:pointer-events-none ${
            isVisible ? "blur-0" : "blur-sm"
          }`}
        >
          Hide Answer
        </button>
      </div>
    </div>
  );
}
