let bookName = prompt("Nhập tên sách: ");
let bookNumber = +prompt("Nhập số thứ tự của sách trong thư viện: ");
let bookNameStandardization = bookName.trim().toUpperCase();
let bookCode = `LIB - ${bookNameStandardization} - ${bookNumber}`;
console.log("Tên sách gốc:" + " " + bookName);
console.log("Mã sách sau chuẩn hóa:" + " " + bookCode);
