let productName: string = "สมุดโน้ต";
let pricePerUnit: number = 120;
let quantity: number = 10;
let isMember: boolean = true;

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;

let discountRate: number = hasDiscount ? 0.10 : 0;

let discountAmount: number = totalPrice * discountRate;

let finalPrice: number = totalPrice - discountAmount;

console.log("===== รายงานสรุปการสั่งซื้อ =====");
console.log(`ชื่อสินค้า: ${productName}`);
console.log(`จำนวนที่ซื้อ: ${quantity} ชิ้น`);
console.log(`ราคารวมทั้งหมด: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);
console.log("================================");