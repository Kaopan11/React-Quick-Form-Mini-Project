// ต้องมี Function Wrapper และประกาศรับอาร์กิวเมนต์แบบ Object Destructuring เพื่อรับ Props
export default function SubmissionList({ submissions, onDelete }) {
  
    // ป้องกันการเรนเดอร์กล่องเปล่า ๆ ถ้ายังไม่มีข้อมูลใน Array State
    if (submissions.length === 0) return null;
  
    // ต้องมีคำสั่ง return ครอบตัวโค้ด JSX เสมอ
    return (
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-bold text-slate-700 mb-3 border-b pb-2">
          📊 ประวัติการตอบแบบสำรวจ ({submissions.length})
        </h2>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {submissions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600"
            >
              <div className="space-y-1 pr-2">
                <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                <p>🎬 เรื่องที่ชอบ: <span className="text-indigo-600 font-medium">{item.movieTitle}</span></p>
                {item.comment && <p className="italic text-slate-400">" {item.comment} "</p>}
              </div>
              
              <button
                // 🔄 เปลี่ยนมาใช้ onDelete(item.id) ตามชื่อตัวแปรที่รับมาจาก Props
                onClick={() => onDelete(item.id)}
                className="text-red-400 hover:text-red-600 font-medium px-2 py-1 hover:bg-red-50 rounded transition-colors"
                title="ลบข้อมูลนี้"
              >
                ลบ
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }