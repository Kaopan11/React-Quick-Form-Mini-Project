import { movies } from "../constants/movies";

export default function MovieRadioGroup({ selectedMovie, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        เลือกหนังที่คุณชอบ 🎬 <span className="text-red-500">*</span>
      </label>
      
      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
        {movies.map((movie) => (
          <label 
            key={movie.id} 
            className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedMovie === movie.id 
                ? "border-indigo-600 bg-indigo-50" 
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <input
              type="radio"
              name="selectedMovie"
              value={movie.id}
              checked={selectedMovie === movie.id}
              onChange={onChange}
              className="mt-1 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="text-sm">
              <p className="font-semibold text-slate-800">{movie.title}</p>
              <p className="text-xs text-slate-500">
                ปี: {movie.year} | ผู้กำกับ: {movie.director}
              </p>
            </div>
          </label>
        ))}
      </div>
      
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}