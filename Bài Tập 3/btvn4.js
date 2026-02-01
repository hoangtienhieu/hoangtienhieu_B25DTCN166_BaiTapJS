let choice;
let totalBook = 0;
let lostBook = 0;
let stockBook = 0;
let manyBookInStock = 0;
let currentBookInStock = 0;
do {
    choice = prompt(`Tiếp tục kiểm kê hay không?
                    1. Không.
                    2. Có, tiếp tục nhập.`);
        switch (choice) {
            case '1':
                alert(`Tổng số sách đã kiểm kê: ${totalBook}
                Số sách mất: ${lostBook}
                Số sách hết hàng: ${stockBook}`);
                break;
            case '2':
                let bookId=prompt(`Mã sách`);
                let nameBook=prompt(`Tên sách`);
                let quantity=+prompt(`Số lượng thực tế trong kho(>=0)`);
                if(!Number.isInteger(quantity)|| quantity<0){
                    alert(`Số lượng sách không hợp lệ`);
                    continue;
                }
                let status=+prompt(`Tình trạng sách
                1. Bình thường(có thể mượn)
                2. Mất(Không còn trong kho)`);
                if (status===2) {
                    alert(`Sách mất`);
                    lostBook++;
                    totalBook++;

                } else if (status===1 && quantity===0) {
                    alert(`Sách hết`);
                    stockBook++;
                    totalBook++;

                } else if(status===1 && quantity>=10){
                    alert(`Sách tồn kho nhiều`);
                    manyBookInStock++;
                    totalBook++;
                } else{
                    alert(`Sách tồn kho bình thường`);
                    currentBookInStock++;
                    totalBook++;
                }
                break;
            default:
                alert(`Lựa chọn không phù hợp!`);
                 break;
        }
} while (choice!=="1");