/*
parseInt(): (소수점X) 숫자 + 문자 문자열에서 숫자로 시작하는 경우에는 숫자가 끝날 때까지만 형 변환을 하여 num에 저장됩니다.
(소수점의 점은 문자로 인식)
Number(): (소수점O) 숫자 문자열에서 소수점까지 숫자타입으로 가져올 수 있다.

Number()의 속도가 더 빠름!!!
*/

// Int -> String
let a = "777";
let b = Number(a);
console.log(b);
console.log(typeof(b));

// String -> Int
let c = 777;
let d = String(c);
console.log(d);
console.log(typeof(d));


// 배열 최댓값, 최솟값
Math.min(...arr)


// 입력값 : 1 2
let fs = require('fs');
let input = fs.readFileSync('js_input.txt').toString().split('\n');
// ['1 2']

// 첫째줄의 데이터를 공백 기준으로 나누기
let line = input[0].split(' ');
// ['1','2']

let a = parseInt(line[0]); // 1  parseInt = Number
let b = parseInt(line[1]); // 2
console.log(a + b);          // 3
console.log(parseInt(a / b));
console.log(typeof(a + b));  // number


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 배열을 Number 형태로 
let [a,b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinutes = a * 60 + b + c;
let hours = parseInt(totalMinutes / 60);
let minutes = totalMinutes % 60;
if (hours > 23){
    hours = hours % 24;
}

console.log(hours + " " + minutes);

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
let n = input[0];

for(let i = 1; i <= 9; i++){
  console.log(`${n} * ${i} = ${n * i}`)
}

// 문자열을 숫자 기준으로 분리
const strValue = "A1B2C3D4E";
const strValueSplit = strValue.split(/\d/);

console.log(strValueSplit); // ['A', 'B', 'C', 'D', 'E']