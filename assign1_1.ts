let productName: string = "Laptop";
let pricePerUnit: number = 15000;
let quantity: number = 1;
let isMember: boolean = true;

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;

let discount: number = hasDiscount ? totalPrice * 0.10 : 0;

let finalPrice: number = totalPrice - discount;

console.log(`สินค้า: ${productName}`);
console.log(`จำนวนที่ซื้อ: ${quantity}`);
console.log(`ราคารวม: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลด: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);