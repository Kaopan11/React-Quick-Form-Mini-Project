import TextField from "./TextField";
import MovieRadioGroup from "./MovieRadioGroup";

export default function SurveyForm({ formData, errors, onChange, onSubmit, onReset }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* 1. ช่องกรอกชื่อ (Concept: Components & Props) */}
      <TextField
        label="ชื่อ-นามสกุล"
        name="name"
        value={formData.name}
        onChange={onChange}
        error={errors.name}
      />

      {/* 2. ช่องกรอกอีเมล */}
      <TextField
        label="อีเมล"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />

      {/* 3. ส่วนเลือกภาพยนตร์ (Concept: Rendering List Items ผ่านคอมโพเนนต์ย่อย) */}
      <MovieRadioGroup
        selectedMovie={formData.selectedMovie}
        onChange={onChange}
        error={errors.selectedMovie}
      />

      {/* 4. ช่องความคิดเห็นเพิ่มเติม (Concept: Form Handling) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          ความคิดเห็นเพิ่มเติม (ถ้ามี)
        </label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={onChange}
          rows="3"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          placeholder="พิมพ์ความรู้สึกหรือความคิดเห็นของคุณ..."
        />
      </div>

      {/* 5. ปุ่มกดควบคุมฟอร์ม */}
      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 font-medium transition-colors"
        >
          ส่งแบบสำรวจ
        </button>
        <button
          type="button"
          onClick={onReset}
          className="px-4 bg-slate-200 text-slate-700 py-2 rounded-lg hover:bg-slate-300 font-medium transition-colors"
        >
          รีเซ็ต
        </button>
      </div>
    </form>
  );
}