export default function Select({ label, value, onChange, options = [], error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded-lg border 
          ${error ? "border-red-500" : "border-gray-300"} 
          bg-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
