export default function QuestionCard({
  question,
  tags,
  level,
  currentIndex,
  total,
  isFirst,
  isLast,
  onPrev,
  onNext,
  onShow,
}) {
  const levelStyle = {
    low: "bg-green-100 text-green-600",
    medium: "bg-[#fcf6d8e3] text-[#fac105]",
    high: "bg-red-100 text-red-500",
  };

  return (
    <div className="w-full max-w-md rounded-4xl bg-linear-to-b from-[#CAF0F8] via-[#90E0EF] via-45% to-[#0077B6] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Bagian atas: kartu putih */}
      <div className="bg-white rounded-4xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-lg font-semibold text-gray-900 leading-tight">
                JavaScript Basics
              </p>
              <p className="text-sm text-gray-400">
                Question {currentIndex + 1} of {total}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-[#f4f4f7] text-gray-500 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Judul & deskripsi */}
        <h2 className="mt-6 text-4xl font-semibold text-gray-900 leading-snug">
          {question}
        </h2>
        <p className="mt-4 text-[12px] text-gray-400 leading-relaxed">
          Tap "Show Answer" to reveal the explanation.
        </p>
      </div>

      {/* Bagian bawah: harga/status + tombol */}
      <div className="px-6 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-white">
            {/* Active */}
            {/* <span className="text-xl font-medium text-white">/now</span> */}
          </p>
          <span
            className={`px-5 py-2.5 rounded-full bg-[#fcf6d8e3] text-[#fac105] text-sm font-bold capitalize ${levelStyle[level]}`}
          >
            {level}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-3">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className="cursor-pointer rounded-2xl border border-white/40 bg-white/20 px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md transition hover:bg-white/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            &lt; Prev
          </button>
          <button
            onClick={onShow}
            className="cursor-pointer rounded-2xl border border-white/40 bg-white/30 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition hover:bg-white/40 active:scale-[0.98]"
          >
            Show Answer
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className="cursor-pointer rounded-2xl border border-white/40 bg-white/20 px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md transition hover:bg-white/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
