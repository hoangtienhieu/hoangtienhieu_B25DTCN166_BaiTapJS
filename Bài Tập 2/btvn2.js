let bookStorage = +prompt("Nhập số lượng sách: ");
if (bookStorage < 10) {
    console.log("Thư viện có ít sách");
} else if (10 <= bookStorage && bookStorage <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}