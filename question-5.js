// Question #5
const products = [
  {
    name: 'เสื้อยืด',
    price: 10,
    quantity: 2
  },
  {
    name: 'กางเกงยีนส์',
    price: 5,
    quantity: 3
  },
  {
    name: 'เสื้อเชิ้ต',
    price: 10,
    quantity: 5
  }
];

let promotionCode = '';
// เริ่มเขียนโค้ดตรงนี้
// - ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument
// - โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
// - ตัวอย่างเช่น
//     - ถ้า `promotionCode` มีค่าเป็น `""` ฟังก์ชันจะ Return ค่า `85`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE20"` ฟังก์ชันจะ Return ค่า `68`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE50"` ฟังก์ชันจะ Return ค่า `42.5`

function calculateTotalPrice(prod, promoCode) {
  // Built-in Array Function
  // let totalPrice = prod.reduce(
  //   (acc, curr) => (acc += curr.price * curr.quantity),
  //   0
  // );

  // For Loop
  let totalPrice = 0;

  for (let i = 0; i < prod.length; i++) {
    totalPrice = totalPrice + prod[i].price * prod[i].quantity;
  }

  let discount = 1;

  // If-Else
  if (promoCode === 'SALE20') {
    discount = 0.8;
  } else if (promoCode === 'SALE50') {
    discount = 0.5;
  }

  let totalPriceWithPromotionCode = totalPrice * discount;

  return totalPriceWithPromotionCode;
}

console.log(calculateTotalPrice(products, promotionCode)); // 85

promotionCode = 'SALE20';
console.log(calculateTotalPrice(products, promotionCode)); // 68

promotionCode = 'SALE50';
console.log(calculateTotalPrice(products, promotionCode)); // 42.5
