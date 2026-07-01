import { useState } from "react";
import { movies } from "./constants/movies";
import { validateSurveyForm } from "./utils/validation";
import SurveyForm from "./components/SurveyForm";
import SubmissionList from "./components/SubmissionList"; 

function App() {
  // 💾 เก็บ State ทั้งหมด
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedMovie: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  // ⚙️ เก็บฟังก์ชัน Logic ทั้งหมดไว้คุมระบบ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", selectedMovie: "", comment: "" });
    setErrors({});
  };

  const handleRestart = () => {
    handleReset();
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSurveyForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      
      const targetMovie = movies.find((m) => m.id === formData.selectedMovie);
      const newRecord = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        movieTitle: targetMovie ? targetMovie.title : "ไม่ได้เลือก",
        comment: formData.comment,
      };

      setSubmissions((prevSubmissions) => [...prevSubmissions, newRecord]);
      setIsSubmitted(true);
    }
  };

  const handleDeleteSubmission = (id) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.filter((item) => item.id !== id)
    );
  };

  const selectedMovieData = movies.find((m) => m.id === formData.selectedMovie);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start p-6 space-y-6">
      {/* การแสดงผลฟอร์มและหน้าสรุปหลักในกรอบสีขาวคงไว้เหมือนเดิม */}
      <main className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        {!isSubmitted ? (
          <div>
            <h1 className="text-2xl font-bold text-slate-800 text-center mb-4">
              แบบสำรวจความชอบภาพยนตร์ 🎬
            </h1>
            <SurveyForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-emerald-600 text-center mb-4">
              ส่งแบบสำรวจสำเร็จ! 🎉
            </h1>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-4 text-sm text-slate-600 space-y-2">
              <p><strong>ชื่อ:</strong> {formData.name}</p>
              <p><strong>อีเมล:</strong> {formData.email}</p>
              <p>
                <strong>หนังที่เลือก:</strong>{" "}
                {selectedMovieData 
                  ? `${selectedMovieData.title} (${selectedMovieData.year})` 
                  : "ไม่ได้เลือก"}
              </p>
              <p><strong>ความคิดเห็น:</strong> {formData.comment || "-"}</p>
            </div>

            <button
              onClick={handleRestart}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 font-medium transition-colors"
            >
              ทำแบบสำรวจอีกครั้ง
            </button>
          </div>
        )}
      </main>

      {/* ➕ 2. นำคอมโพเนนต์ย่อยมาแปะแทนที่ก้อนเดิม ส่งผ่านข้อมูลและฟังก์ชันทาง Props */}
      <SubmissionList 
        submissions={submissions} 
        onDelete={handleDeleteSubmission} 
      />
    </div>
  );
}

export default App;