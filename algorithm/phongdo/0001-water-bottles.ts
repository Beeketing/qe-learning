/*
Quá trình solve:
- Đầu tiên nghĩ tới đệ quy
- Làm 1 lúc thấy sai sai, có vẻ k cần đệ quy lắm vẫn work =))
- Đại khái cách giải như sau:
    - Đặt 1 biến lưu tổng số chai đổi được. Ban đầu = chính số chai (vì uống hết)
    - Lặp:
        - Mỗi lần rỗng thì đem đi đổi -> cộng với (số chai/ số chai mỗi lần đổi)
        - Tính lại tổng số chai đổi được
            - Nhớ cộng thêm chai rỗng cũ chưa đổi được
 */

function numWaterBottles(numBottles: number, numExchange: number): number {
    let res = numBottles;

    while (numBottles >= numExchange) {
        res += Math.floor(numBottles/numExchange);
        numBottles = Math.floor(numBottles/numExchange) + numBottles%numExchange;
    }

    return res;
};