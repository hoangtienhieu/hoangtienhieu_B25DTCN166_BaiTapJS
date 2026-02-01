let success = 0;
let fail = 0;
let choice;
    do {
        let choice = prompt("Bạn có yêu cầu gia hạn không?(có/không)").trim().toLowerCase();
        switch(choice){
            case "có":
                let yourName=prompt(`Tên bạn đọc`);
                let nameBook=prompt(`Tên sách`);
                let borrowingDay=+prompt(`Số ngày đã mượn hiện tại (>=1)`);
                let extension=+prompt(`Số ngày muốn gia hạn(>1)`);
                if (borrowingDay<1 || extension<1 || !Number.isInteger(borrowingDay)||!Number.isInteger(extension)) {
                    alert(`Số ngày mượn hoặc trả không hợp lệ!`);
                } else {
                    if (borrowingDay+extension>60) {
                        alert(`Không được phép gia hạn: Tổng thời gian vượt quá 60 ngày`);
                        fail++;
                    } else if(borrowingDay>45){
                        alert(`Không được gia hạn: Số ngày mượn quá lâu`);
                        fail++;
                    } else{
                        alert(`Gia hạn thành công!`);
                        success++;
                    }
                }
            break;
            case "không":
                alert(`Kết thúc chương trình`);
            break;
            default:
                alert( `Lựa chọn không hợp lệ`);
            }
        } while (choice!="không");
        console.log(`
        ---THỐNG KÊ CA LÀM VIỆC---
        Số lần gia hạn thành công: ${success}
        Số lần gia hạn không thành công: ${fail}`);