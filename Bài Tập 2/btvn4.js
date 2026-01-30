let bookName = prompt("Nhập tên sách: ");
let name = prompt("Nhập tên người mượn: ");
let like = +prompt("Mức độ yêu thích: ");
// if (like === 5 || like === 4){
//     console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
// } else if (like === 3) {
//     console.log("Sách này khá ổn, có thể mượn");
// } else if (like === 2 || like === 1){
//     console.log("Sách này bạn có thể cân nhắc mượn lại sau");
// }
switch (like) {
    case 1:
    case 2:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case 3:
        console.log("Sách này khá ổn, có thể mượn");
        break;
    case 4:
    case 5:
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
        break;
    default:
        console.log("Lựa chọn không hợp lệ!");
}