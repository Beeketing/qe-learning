//Bài2
function checkNumber(number) {
    if (number % 2 == 0) {
        console.log(number + ' là số chẵn');
        return number * 2;
    } else {
        console.log(number + ' là số lẻ');
        return number * 3;
    }
    return number
}
checkNumber(2);

//Bài3
function checkDiem(diemToan, diemLi, diemHoa) {
    var diemTB = (diemToan + diemLi + diemHoa) / 3;
    console.log('Điểm trung bình là:', diemTB);
    if (diemTB >= 0 && diemTB < 4) {
        console.log('Yếu');
    } else if (diemTB >= 4 && diemTB < 6) {
        console.log('Trung bình');
    } else if (diemTB >= 6 && diemTB < 8) {
        console.log('Khá');
    } else if (diemTB >= 8 && diemTB <= 10) {
        console.log('Giỏi');
    }
}
checkDiem(3, 8, 9);