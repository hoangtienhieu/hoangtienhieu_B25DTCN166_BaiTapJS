
let totalBorrows = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");
let count = 0; 
for (let i = 1; i <= totalBorrows; i++) {
    console.log(`--- Lượt mượn thứ ${i} ---`);
    let borrowerName = prompt("Tên người mượn:");
    let bookName = prompt("Tên sách:");
    let borrowDays = +prompt("Số ngày mượn (1 - 30 ngày):");
    if (borrowDays > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        console.log("Mượn thành công");
    }
    count++;
}
console.log("====== THỐNG KÊ ======");
console.log("Tổng số lượt mượn:", count);
