// 조건문
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
else
  statementN


// 반복문 : 조건에 따라서 특정 코드를 반복하고자 할 때 사용
/* 
- 초기문이 존재한다면 초기문이 먼저 실행
- 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료
- 블록 내부 코드가 실행된 뒤에 증감문이 실행
*/
for (초기문; 조건문; 증감문){
  // statements
}
while(조건문){
  // 실행되는 코드 부분
}

// 1부터 100까지의 합 계산
// for문
let summary = 0;
for (let i = 1; i <= 100; i++){
  summary += i;
}
console.log(summary);
// while 문
let j = 1;
let summary2 = 0;
while(j <= summary2){
  summary2 += j;
  j += 1
}
console.log(summary2)


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n').map(Number);

let mySet = new Set();
for(let i = 0; i < 10; i++){
  mySet.add(input[i] %  42);
}
console.log(mySet.size);
