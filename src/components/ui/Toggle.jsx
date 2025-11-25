export default function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-700">{label}</span>

      <button
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 rounded-full flex items-center transition
        ${checked ? "bg-blue-600" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow transform transition
          ${checked ? "translate-x-6" : "translate-x-1"}`}
        ></div>
      </button>
    </div>
  );
}
