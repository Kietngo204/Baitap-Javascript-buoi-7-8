let stringNum = [];

function addNum1() {
  let addNum = +document.getElementById("input-num").value;
  stringNum.push(addNum);
  document.getElementById("print").innerHTML = stringNum;
  return stringNum;
}

/*
  Bài tập 1: Tính tổng số dương
*/

function baiTap1() {
  // let listNum = addNum1();
  console.log(stringNum);
  let result = 0;
  for (let i = 0; i < stringNum.length; i++) {
    result += stringNum[i];
  }
  console.log(result);  
}
