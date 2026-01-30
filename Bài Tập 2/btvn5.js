let bookName = prompt("Nhập tên sách: ");
let bookStatus = prompt("Trạng thái sách: ").trim().toLowerCase();
let yearPublication = +prompt("Năm xuất bản: ");
let bookAge = +2026 - yearPublication;
if (bookStatus === "có sẵn") {
    if (bookAge <= 5) {
        console.log("Sách này mới và có sẵn để mượn");
    } else if (bookAge > 5) {
        console.log("Sách này có sẵn nhưng đã lâu năm");
    }
} else if (bookStatus === "đã mượn") {
    if (bookAge <= 10) {
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    } else if (bookAge > 10) {
        console.log("Sách này đã mượn và khá cũ");
    }
}