// Question #3
let userPassword = '';
// เริ่มเขียนโค้ดตรงนี้
// ให้เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
// ถ้า userPassword มีค่าเป็น "swnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"
// ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
// ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"

function checkPasswordStrength(password) {
  // If-Else
  if (password.length < 6) {
    return 'Weak';
  } else if (password.length >= 6 && password.length < 10) {
    return 'Medium';
  } else {
    return 'Strong';
  }
}

// console.log(checkPasswordStrength(userPassword));

userPassword = 'swnalWadqQ';
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = 'TechUp';
console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = 'abcde';
console.log(checkPasswordStrength(userPassword)); // "Weak"
