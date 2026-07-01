/**
 * ตรวจสอบความถูกต้องของข้อมูลฟอร์มสำรวจ
 * @param {Object} formData - ข้อมูลจากฟอร์ม { name, email, selectedMovie }
 * @returns {Object} errors - Object เก็บข้อความข้อผิดพลาด (ถ้าไม่มีข้อผิดพลาดจะเป็น Object ว่าง)
 */
export const validateSurveyForm = (formData) => {
    const errors = {};
  
    // 1. ตรวจสอบชื่อ
    if (!formData.name || formData.name.trim() === "") {
      errors.name = "โปรดใส่ชื่อของคุณ";
    }
  
    // 2. ตรวจสอบอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || formData.email.trim() === "") {
      errors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
  
    // 3. ตรวจสอบการเลือกภาพยนตร์
    if (!formData.selectedMovie) {
      errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }
  
    return errors;
  };