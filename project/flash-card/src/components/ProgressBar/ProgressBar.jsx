export default function ProgressBar({ currentIndex, total }) {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-3xl bg-white px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <div
        className="w-full max-w-md"
        role="progressbar"
        aria-valuenow={currentIndex}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div className="relative h-12 overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
          {/* Bagian yang terisi */}
          <div
            className="absolute inset-y-0 left-0 rounded-2xl bg-linear-to-r from-[#90E0EF] to-[#0077B6] transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />

          {/* Teks "5 of 20" */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-700">
            {currentIndex + 1} of {total}
          </span>
        </div>
      </div>
    </div>
  );
}
