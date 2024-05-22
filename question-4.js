// Question #4
const inventory = [
  { name: 'Apple', price: 35, quantity: 100 },
  { name: 'Banana', price: 10, quantity: 50 },
  { name: 'Orange', price: 30, quantity: 60 }
];
// เริ่มเขียนโค้ดตรงนี้
// - ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
// - ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
// สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น

function findMinQuantity(array) {
  // Built-in Array
  // let min = array.reduce(
  //   (acc, curr) => {
  //     if (acc.quantity > curr.quantity) {
  //       acc.name = curr.name;
  //       acc.quantity = curr.quantity;
  //     }
  //     return acc;
  //   },
  //   { name: array[0].name, quantity: array[0].quantity }
  // );

  // For Loop
  let minQuantity = array[0].quantity;
  let minName = array[0].name;

  for (let i = 1; i < array.length; i++) {
    if (minQuantity > array[i].quantity) {
      minQuantity = array[i].quantity;
      minName = array[i].name;
    }
  }

  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`;
  // return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${min.name} ซึ่งมี ${min.quantity} ชิ้น`;
}

console.log(findMinQuantity(inventory));
