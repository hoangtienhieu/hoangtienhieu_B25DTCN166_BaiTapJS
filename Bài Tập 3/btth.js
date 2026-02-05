        let password;
        let checkPassword = 0;
        let choice;
        let isLogin = false;
        while (checkPassword<3) {
            let password = prompt("Nhập mật khẩu");
            checkPassword++;
            
            if (password === "admin@123") {
                alert(`Đăng nhập thành công`);
                isLogin=true;
            } else {
                alert(`Đăng nhập không thành công!`); 
                
            }
            if (isLogin===true){
                break;
            }
        }
        if(checkPassword===3){
            alert(`Hệ thống bị khóa`);
        } else {
            do {
            let choice=prompt(`
            Chọn chức năng
            1. Nhập lô sách mới
            2. Vẽ sơ đồ kệ sách
            3. Thoát.`)
            switch (choice) {
                case '1':
                    let numberBook = +prompt(`Bạn muốn nhập bao nhiêu cuốn sách?`);
                    let total=0;
                    for(i = 1; i <= numberBook; i++){
                        let priceBook = +prompt(`Nhập giá tiền của cuốn sách thứ ${i}`);
                        if(priceBook <= 0){
                            continue;
                        }
                       total+=priceBook;
                    }
                    alert(`Tổng giá trị nhập kho đợt này: ${total.toLocaleString("vi-VN")} VNĐ`);
                    break;
                case '2':
                    for (let i = 1; i <= 3; i++) {
                        for (let j = 1; j <= 5; j++) {

                            if (i === 2 && j === 3) {
                                console.log(`Khu vực ${i} - Kệ ${j} (Đang sửa chữa)`);
                                continue;
                            }
                            console.log(`Khu vực ${i} - Kệ ${j}`);
                        }
                    }
                    break;
                default:
                }
                    alert(`Thoát chương trình`);   
            } while (choice !== "3");
        }