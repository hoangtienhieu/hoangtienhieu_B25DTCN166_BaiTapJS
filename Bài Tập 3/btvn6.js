let totalFeedback = 0;
let severeCount = 0;
let averageCount = 0;
let mildCount = 0;
let improvementCount = 0;
let positiveCount = 0;
let choice;
function getValidNumber(message, min, max) {
    let value;
    do {
        value = +prompt(message);
    } while (!Number.isInteger(value) || value < min || value > max);
    return value;
    }
    do {
        choice = prompt("Có khiếu nại/ phản hồi mới từ bạn đọc không? (có/không)").trim().toLowerCase();
        if (choice !== "có" && choice !== "không") {
            alert("Lựa chọn không phù hợp. Hãy nhập 'có' hoặc 'không'");
            continue;
        }
    if (choice === "có") {
        let yourName;
        do {
            yourName = prompt("Tên bạn đọc").trim();
        } while (!yourName);
        let id = prompt("Mã thẻ");
        let feedbackType = getValidNumber(
            `1. Phản hồi / Khiếu nại
            2. Đề xuất cải thiện
            3. Phản hồi tích cực / Khen ngợi`,
                            1,
                            3
        );
        if (feedbackType === 1) {
            let severity = getValidNumber(
                `Mức độ nghiêm trọng
                1. Nhẹ
                2. Trung bình
                3. Nghiêm trọng`,
                                1,
                                3
            );
            if (severity === 3) {
                console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                severeCount++;
            } else if (severity === 2) {
                console.log("Ghi nhận, sẽ xử lý trong ngày");
                averageCount++;
            } else {
                console.log("Xử lý ngay");
                mildCount++;
            }
        } else if (feedbackType === 2) {
            console.log("Cảm ơn! Đề xuất được ghi nhận");
            improvementCount++;
        } else {
            console.log("Cảm ơn bạn đã phản hồi tích cực");
            positiveCount++;
        }

        totalFeedback++;
    }
} while (choice !== "không");
console.log(`
Tổng số phản hồi/khiếu nại đã xử lý: ${totalFeedback}
Số khiếu nại nghiêm trọng (mức 3): ${severeCount}
Số khiếu nại trung bình (mức 2): ${averageCount}
Số khiếu nại nhẹ (mức 1): ${mildCount}
Số đề xuất cải thiện: ${improvementCount}
Số phản hồi tích cực: ${positiveCount}
`);
