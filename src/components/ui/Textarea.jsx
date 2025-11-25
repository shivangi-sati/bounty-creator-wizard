export default function Textarea({ label, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        className={`w-full px-3 py-2 rounded-lg border 
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
