let arrNum = [];

// Tạo sự kiện nhấn thêm số vào mảng
function addNum() {
  let addNum = +document.getElementById("input-num").value;
  arrNum.push(addNum);
  document.getElementById("print").innerHTML = arrNum;
}

/*
  Bài tập 1: Tính tổng số dương
*/

function baiTap1() {
  //B1: Tạo biến tổng
  let result = 0;
  //B2: Xử lí
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] >= 0) {
      result += arrNum[i];
    }
  }
  //B3: In kết quả ra màn hình
  document.getElementById("ketQua1").innerHTML = `Tổng số dương: ${result}`;
}

/*
  Bài tập 2: Đếm số dương
*/

function baiTap2() {
  //B1: Tạo biến đếm
  let count = 0;
  //B2: Xử lí: Nếu có số trong hàm lớn hơn 0 thì sẽ tăng lên 1 đơn vị
  for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      count++;
    }
  }
  //B3: In kết quả ra màn hình
  document.getElementById("ketQua2").innerHTML = `Số dương: ${count}`;
}

/*
  Bài tập 3: Tìm số nhỏ nhất
*/

function baiTap3() {
  //B1: Gán biến min bằng số đầu tiên của mảng
  let min = arrNum[0];
  //B2: So sánh biến min với từng số trong mảng
  for (i = 0; i < arrNum.length; i++) {
    if (min > arrNum[i]) {
      min = arrNum[i];
    }
  }
  //B3: In kết quả ra màn hình
  document.getElementById("ketQua3").innerHTML = `Số nhỏ nhất: ${min}`;
}

/*
  Bài tập 4: Tìm số dương nhỏ nhất
*/

function baiTap4() {
  //B1: Tạo 1 mảng positiveNum
  let positiveNum = [];
  //B2: Tách từng số dương trong mảng arrNum gán vào mảng positiveNum
  for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      positiveNum[positiveNum.length] = arrNum[i];
    }
  }
  //B3: Làm tương tự như công thức bài tập 3 tìm số nhỏ nhất
  let min = positiveNum[0];
  for (i = 0; i < arrNum.length; i++) {
    if (min > positiveNum[i]) {
      min = positiveNum[i];
    }
  }
  //B4: In kết quả ra màn hình
  document.getElementById("ketQua4").innerHTML = `Số dương nhỏ nhất: ${min}`;
}

/*
  Bài tập 5: Tìm số chẵn cuối cùng
*/

function baiTap5() {
  //B1: Tạo 1 mảng evenNum
  let evenNum = [];
  //B2: Duyệt từng số trong mảng arrNum nếu là số chẵn sẽ gán số đó vào mảng evenNum vừa mới khởi tạo
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      evenNum[evenNum.length] = arrNum[i];
    }
  }
  //B3: In kết quả ra màn hình
  if (evenNum[0] % 2 !== 0) {
    //Nếu không có số nào là sõ chẵn sẽ in ra trừ 1
    document.getElementById("ketQua5").innerHTML = -1;
  } else {
    //In số cuối cùng của mảng evenNum ra vì chắc chắn nó là số chẵn
    document.getElementById("ketQua5").innerHTML = `Số chẵn cuối cùng: ${
      evenNum[evenNum.length - 1]
    }`;
  }
}

/*
  Bài tập 6: Đổi chỗ
*/

function baiTap6() {
  //B1: DOM là khỏi tạo 2 biến change1, change2: number
  let change1 = +document.getElementById("change1").value;
  let change2 = +document.getElementById("change2").value;
  // Nếu nhập sai vị trí không có trong mảng thì sẽ xuất thông báo
  if (change1 > arrNum.length || change2 > arrNum.length) {
    return (document.getElementById(
      "ketQua6"
    ).innerHTML = `Không thể đổi vị trí vì một trong 2 vị trí bạn nhập không có trong mảng`);
  }
  //B2: Tạo 1 biến tạm gán nó bằng số vị trí thứ 1
  let create = arrNum[change1];
  //B3: Gán vị trí mảng thứ 1 bằng trị trí mảng thứ 2, sau đó gán vị trí mảng thứ 2 với biến tạm mình vừa gán lúc đầu
  arrNum[change1] = arrNum[change2];
  arrNum[change2] = create;
  //B4: In kết quả ra màn hình
  document.getElementById("ketQua6").innerHTML = arrNum;
}

/*
  Bài tập 7: Sắp xếp tăng dần
*/

function baiTap7() {
  // Dùng hàm sort lổng thêm hàm với tham số a và b trả về a - b
  arrNum.sort((a, b) => {
    return a - b;
  });
  // In kết quả ra màn hình
  document.getElementById("ketQua7").innerHTML = arrNum;
}

/*
  Bài tập 8: Tìm số nguyên tố đầu tiên
*/

function baiTap8() {
  //B1: Khởi tạo mảng primeNum
  let primeNum = [];
  //B2: Tạo hàm tìm số nguyên tố
  //B3: Duyệt từng phần tử trong mảng arrNum nếu số nào là số nguyên tố thì gán vào mảng primeNum nếu tìm được số đầu tiên sẽ dừng lại không tiếp tục duyệt tìm nữa
  for (let i = 0; i < arrNum.length; i++) {
    if (checkPrimeNum(arrNum[i])) {
      primeNum.push(arrNum[i]);
      break;
    }
  }
  //B4: In kết quả ra màn hình
  if (primeNum[0] === undefined) {
    // Nếu hàm rỗng thì sẽ in ra không có số nguyên tố
    document.getElementById("ketQua8").innerHTML = `Không có số nguyên tố`;
  } else {
    document.getElementById(
      "ketQua8"
    ).innerHTML = `Số nguyên tố đầu tiền là ${primeNum}`;
  }
}

// Đây là B2 bài tập 8
function checkPrimeNum(n) {
  isPrimeNum = true;
  if (n < 2) {
    isPrimeNum = false;
    return isPrimeNum;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrimeNum = false;
      break;
    }
  }
  return isPrimeNum;
}

/*
  Bài tập 9: Đếm số nguyên
*/
// Tạo 1 hàm nhập số mới
let arrNum2 = [];
function addNum2() {
  let addNum = +document.getElementById("input-num2").value;
  arrNum2.push(addNum);
  document.getElementById("print2").innerHTML = arrNum2;
}

function baiTap9() {
  //B1: Tạo biến count bằng 0
  let count = 0;
  //B2: Dùng Number.isInteger() để kiểm số nguyên nếu là true thì biến count sẽ tăng 1
  for (let i = 0; i < arrNum2.length; i++) {
    if (Number.isInteger(arrNum2[i])) {
      count++;
    }
  }
  //B3: In kết quả ra màn hình
  document.getElementById("ketQua9").innerHTML = `Số nguyên: ${count}`;
}

/*
  Bài tập 10: So sánh số lượng âm và dương
*/

function baiTap10() {
  //B1: Tạo 1 mảng chưa số âm vowelNum, 1 mảng chưa số dương positiveIntegerNum
  let vowelNum = [];
  let positiveIntegerNum = [];
  //B2: Gán số âm vào mảng vowelNum, gàn số dương vào mảng positiveIntegerNum
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < 0) {
      vowelNum.push(arrNum[i]);
    } else {
      positiveIntegerNum.push(arrNum[i]);
    }
  }
  //B3: In kết quả ra màn hình khi so sánh xong độ dài 2 mảng
  if (vowelNum.length > positiveIntegerNum.length) {
    document.getElementById("ketQua10").innerHTML = `Số âm > Số dương`;
  } else if (vowelNum.length === positiveIntegerNum.length) {
    document.getElementById("ketQua10").innerHTML = `Số âm = Số dương`;
  } else {
    document.getElementById("ketQua10").innerHTML = `Số dương > Số âm`;
  }
}
