let totalBorrows = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
let count = 0;
for (let i=1;i<totalBorrows;i++){
    console.log(`--- Lượt mượn sách thứ ${i} ---`);
    let name = prompt("Nhập tên người trả sách: ");
    let nameBook = prompt("Nhập tên sách trả: ");
    let borrowDay = +prompt("Số ngày đã mượn thực tế (người dùng nhập số nguyên từ 1 trở lên): ");
    do {
        borrowedDays = +prompt("Số ngày đã mượn thực tế (>= 1):");
    } while (!Number.isInteger(borrowedDays) || borrowedDays < 1);
    if (borrowDay <= 14){
        console.log("Trả đúng hạn");
    } else if (borrowDay <= 21){
        console.log("Trả muộn nhẹ" + "." + " Phạt nhắc nhở");  
        count++; 
    } else {
        console.log( "Quá hạn nghiêm trọng" + "." + " Cần ghi biên bản phạt");
        count++;
    }
}
console.log("===== Thống kê =====");
console.log("Tổng số lượt trả sách: ", totalBorrows);
console.log("Số lượt trả muộn: ", count);


