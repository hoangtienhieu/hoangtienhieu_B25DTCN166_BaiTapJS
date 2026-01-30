let userName = prompt("Tên người dùng: ").trim();
let role = prompt("Vai trò (admin / student / guest): ").trim().toLowerCase();
let accountBalance = +prompt("Số dư tài khoản thẻ: ");
let libraryCardStatus = prompt("Trạng thái thẻ thư viện (true/false): ").trim().toLowerCase();
let dueDate = +prompt("Số ngày quá hạn trả sách: ");

let roleMessage = "";
let borrowResult = "";
let fine = 0;
let warning = "";
let bookStatus = "";
switch (role) {
    case "admin":
        roleMessage = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        roleMessage = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        roleMessage = "Lỗi: Vai trò không hợp lệ!";
}
if (userName && (role === "student" || role === "admin")) {
    if (accountBalance > 0 && libraryCardStatus === "true") {
        borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
    } else {
        borrowResult = "YÊU CẦU BỊ TỪ CHỐI (Thẻ bị khóa hoặc không đủ tiền)";
    }
} else {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI (Sai thông tin người dùng)";
}
if (dueDate <= 0) {
    bookStatus = "Đã trả đúng hạn";
} else if (dueDate <= 5) {
    fine = dueDate * 5000;
    bookStatus = `Quá hạn ${dueDate} ngày`;
} else if (dueDate <= 10) {
    fine = dueDate * 10000;
    bookStatus = `Quá hạn ${dueDate} ngày`;
} else {
    fine = 200000;
    bookStatus = `Quá hạn ${dueDate} ngày`;
    warning = " TÀI KHOẢN BỊ KHÓA";
}
console.log(`--- HỆ THỐNG MƯỢN TRẢ ---`);
console.log(`Người dùng: ${userName.toUpperCase()}`);
console.log(`Quyền hạn: ${roleMessage}`);
console.log(`Kết quả mượn: ${borrowResult}`);
console.log(`Tình trạng trả sách: ${bookStatus}`);
console.log(`Tiền phạt: ${fine} VNĐ`);
if (warning) {
    console.log(warning);
}
