export default function RadioGroup({ label, value, onChange, options = [] }) {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>

      <div className="flex gap-6">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 capitalize">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
