let number = +prompt("Nhập số nguyên dương n: ");
for (let i = 0; i < number; i++){
    if (number % 2 === 0){
        console.log("Số bạn vừa nhập là số chẵn");
    } else {
        console.log("Số bạn vừa nhập là số lẻ");
    }
}