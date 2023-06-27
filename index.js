let arrNum = [];

function addNum() {
  let addNum = +document.getElementById("input-num").value;
  arrNum.push(addNum);
  document.getElementById("print").innerHTML = arrNum;
}

/*
  Bài tập 1: Tính tổng số dương
*/

function baiTap1() {
  let result = 0;
  for (let i = 0; i < arrNum.length; i++) {
    result += arrNum[i];
  }
  document.getElementById("ketQua1").innerHTML = `Tổng số dương: ${result}`;
}

/*
  Bài tập 2: Đếm số dương
*/

function baiTap2() {
  let count = 0;
  for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      count++;
    }
  }
  document.getElementById("ketQua2").innerHTML = `Số dương: ${count}`;
}

/*
  Bài tập 3: Tìm số nhỏ nhất
*/

function baiTap3() {
  let min = arrNum[0];
  for (i = 0; i < arrNum.length; i++) {
    if (min > arrNum[i]) {
      min = arrNum[i];
    }
  }
  document.getElementById("ketQua3").innerHTML = `Số nhỏ nhất: ${min}`;
}

/*
  Bài tập 4: Tìm số dương nhỏ nhất
*/

function baiTap4() {
  let positiveNum = [];
  for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      positiveNum[positiveNum.length] = arrNum[i];
    }
  }
  let min = positiveNum[0];
  for (i = 0; i < arrNum.length; i++) {
    if (min > positiveNum[i]) {
      min = positiveNum[i];
    }
  }
  document.getElementById("ketQua4").innerHTML = `Số dương nhỏ nhất: ${min}`;
}

/*
  Bài tập 5: Tìm số chẵn cuối cùng
*/

function baiTap5() {
  let bool = true;
  let evenNum = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      evenNum[evenNum.length] = arrNum[i];
    }
  }
  if (evenNum[0] % 2 !== 0) {
    document.getElementById("ketQua5").innerHTML = -1;
  } else {
    document.getElementById("ketQua5").innerHTML = `Số chẵn cuối cùng: ${
      evenNum[evenNum.length - 1]
    }`;
  }
}

/*
  Bài tập 6: Đổi chỗ
*/

function baiTap6() {
  let change1 = +document.getElementById("change1").value;
  let change2 = +document.getElementById("change2").value;
  let create1 = arrNum.splice(change1, 1);
  let create2 = arrNum.splice(change2 - 1, 1);
  arrNum.splice(change1, 0, Number(create2.join("")));
  arrNum.splice(change2, 0, Number(create1.join("")));
  document.getElementById("ketQua6").innerHTML = arrNum;
}

/*
  Bài tập 7: Sắp xếp tăng dần
*/

function baiTap7() {
  arrNum.sort((a, b) => {
    return a - b;
  });
  document.getElementById("ketQua7").innerHTML = arrNum;
}

/*
  Bài tập 8: Tìm số nguyên tố đầu tiên
*/

function baiTap8() {
  let primeNum = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (checkPrimeNum(arrNum[i])) {
      primeNum.push(arrNum[i]);
      break;
    }
  }
  if (primeNum[0] === undefined) {
    document.getElementById("ketQua8").innerHTML = `Không có số nguyên tố`;
  } else {
    document.getElementById(
      "ketQua8"
    ).innerHTML = `Số nguyên tố đầu tiền là ${primeNum}`;
  }
}
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
  Bài tập 9: Tìm số nguyên tố đầu tiên
*/

let arrNum2 = [];
function addNum2() {
  let addNum = +document.getElementById("input-num2").value;
  arrNum2.push(addNum);
  document.getElementById("print2").innerHTML = arrNum2;
}

function baiTap9() {
  let count = 0;
  for (let i = 0; i < arrNum2.length; i++) {
    if (Number.isInteger(arrNum2[i])) {
      count++;
    }
  }
  document.getElementById("ketQua9").innerHTML = `Số nguyên: ${count}`;
}

/*
  Bài tập 10: So sánh số lượng âm và dương
*/

function baiTap10() {
  let vowelNum = [];
  let positiveIntegerNum = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < 0) {
      vowelNum.push(arrNum[i]);
    } else {
      positiveIntegerNum.push(arrNum[i]);
    }
  }
  if (vowelNum.length > positiveIntegerNum.length) {
    document.getElementById("ketQua10").innerHTML = `Số âm > Số dương`;
  } else if (vowelNum.length === positiveIntegerNum.length) {
    document.getElementById("ketQua10").innerHTML = `Số âm = Số dương`;
  } else {
    document.getElementById("ketQua10").innerHTML = `Số dương > Số âm`;
  }
}
