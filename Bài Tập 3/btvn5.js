let choice;
let totalRequirements = 0;
let totalSuccess = 0;
let totalRefuse = 0;
let awaitingApproval = 0;
do {
    choice = prompt(`Có yêu cầu đặt mượn trước mới không?(có/không)`).trim().toLowerCase();;
    if (choice!=="có" && choice!=="không"){
        alert(`Lựa chọn không phù hợp. Hãy nhập 'có' hoặc 'không'`);
        continue;
    }
    switch (choice) {
        case "có":
            let yourName=prompt(`Tên bạn đọc`);
            let bookId=prompt(`Mã sách muốn đặt trước`);
            let nameBook=prompt(`Tên sách`);
            let numberOfDaysExpected=+prompt(`Số ngày dự kiến chờ`);
            let prioritize=+prompt(`
            1.Sinh viên bình thường
            2. Giảng viên /Nghiên cứu sinh
            3. Nhân viên thư viện / Đặc cách`);
            if (numberOfDaysExpected>45) {
                alert(`Từ chối: Thời gian chờ quá lâu.`);
                totalRefuse++;
            } else  if(prioritize===3) {
                alert("Đặt trước thành công- Ưu tiên cao nhất");
                totalSuccess++;
            } else if(prioritize===2 && numberOfDaysExpected<=30){
                alert("Đặt trước thành công- Ưu tiên giảng viên, nghiên cứu sinh");
                totalSuccess++;
            } else if(prioritize===1&& numberOfDaysExpected<=21){
                alert("Đặt trước thành công");
                totalSuccess++;
            } else {
                alert("Đặt trước tạm thời- Chờ xét duyệt");
                awaitingApproval++;
            }
            totalRequirements++;
            break;
        case "không":
            console.log(`
            Tổng yêu cầu đã xử lí: ${totalRequirements}
            Số yêu cầu đặt trước thành công: ${totalSuccess}
            Số yêu cầu bị từ chối: ${totalRefuse}
            Số êu cầu chờ phê duyệt: ${awaitingApproval}`);
            break;
        default:
            alert(" Lựa chọn không phug hợp!");
            break;
    }
} while (choice!=="không");