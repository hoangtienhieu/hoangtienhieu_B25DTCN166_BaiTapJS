let bookName = prompt("Nhập tên sách: ");
let bookType = prompt("Thể loại sách: ").trim().toLowerCase();
let bookStatus = prompt("Tình trạng sách: ").trim().toLowerCase();
if (bookType === "khoa học" || bookType === "lịch sử"){
    if (bookStatus === "có sẵn"){
        console.log("Sách có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (bookType === "Văn học" || bookType === "truyện"){
    console.log("Sách này có thể đọc giải trí");
} else {
    console.log("Thể loại sách không tồn tại");
}