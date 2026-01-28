let bookName = prompt("Nhập tên sách: ");
let authorBook = prompt("Tên tác giả: ");
let yearPublication = +prompt("Năm xuất bản: ");
let bookAge = +2026 - yearPublication;
if (yearPublication === 2026) {
    console.log("Đây là sách mới!");
} else if (bookAge <=5) {
    console.log("Sách khá mới.");
} else {
    console.log("Sách đã cũ.");
}