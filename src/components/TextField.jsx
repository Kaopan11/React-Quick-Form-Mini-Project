export default function TextField({ label, type = "text", name, value, onChange, error }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
            error 
              ? "border-red-500 focus:ring-red-200" 
              : "border-slate-300 focus:ring-indigo-200 focus:border-indigo-500"
          }`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }