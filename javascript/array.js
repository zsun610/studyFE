/*
배열 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용한다.
reduce()메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환한다.
reducer의 형태 : (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
- 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.
*/

let data = [5, 2, 9, 8, 4];
// minValue 구하기 예제
let minValue = data.reduce((a,b) => Math.min(a,b));
console.log(minValue); // 2
// 원소의 합계 구하기 예저
let summary = data.reduce((c,d) => c + d);
console.log(summary); // 28


// 배열 초기화
// 1. 직접 값을 설정하여 초기화
let arr = [8, 1, 4, 5, 7];

// 2. 길이는 5인 0 배열 초기화
let tmp2 = new Array(5).fill(0);


// 배열 함수
let arr1 = [1, 2, 3];
let arr2 = [a, b, c, d];
// 1) arr1.concat(arr2) : 두 배열을 합쳐 배열을 반환함
let numchars = arr1.concat(arr2);  // [1, 2, 3, a, b, c, d]
let charsnum = arr2.concat(arr1);  // [a, b, c, d, 1, 2, 3]

// 2) arr1.join() : 배열 내부 요소들을 합쳐 하나의 문자열로 만들어줌(구분자 기본값: 쉼표)
let string1 = arr1.join(); // 1,2,3
let string2 = arr2.join('/'); // a/b/c/d

// 3) arr1.push(), arr1.unshift() : 배열에 새로운 요소 추가
// 3-1) arr1.push() : 배열 맨 끝에 새로운 요소를 추가
let arr1Length = arr1.push(4,5);   // arr1 배열의 길이값인 5를 반환

// 3-2) arr1.unshift() : 배열 맨 앞에 새로운 요소를 추가
arr1Length = arr1.unshifht(0);  // arr1 배열의 길이값인 6을 반환

// 4) arr1.pop(), arr1.shifht() : 배열에서 요소를 꺼냄
// 4-1) arr1.pop() : 배열 맨 끝에서 요소를 꺼냄
let popped1 = arr1.pop(); // 5
// 4-2) arr1.shift() : 배열 맨 앞에서 요소를 꺼냄
let popped2 = arr1.shifht(); // 0

// 5) arr1.splice(index,(삭제 개수),(추가 요소)) : 원하는 위치에 요소를 추가/삭제
// 5-1) 인수가 1개인 경우
let newNumbers = arr1.splice(2);   // 인덱스 2부터 배열 끝까지 잘라 저장 [3, 4, 5]
console.log(arr1); // [1, 2]
// 5-2) 인수가 2개인 경우
let newNumbers2 = arr1.splice(2,1);  // 인덱스 2인 요소부터 1개 삭제 [3]
console.log(arr1);  // [1, 2, 4, 5]
// 5-3) 인수가 3개인 경우
let newnumbers3 = arr1.splice(2, 1, 6);  // 인덱스 2인 요소부터 1개 삭제하고 6 요소를 추가
console.log(arr1);  // [1, 2, 4, 5, 6]

// 6) arr1.slice(시작 인덱스, (마지막 인덱스)) : 기존 배열을 바꾸지 않으면서 요소를 꺼냄
let newNum = arr1.slice(2);    // [3, 4, 5]
let newNum2 = arr1.slice(2,3);  // [3]


// 배열 Math (최댓값, 최솟값, 절댓값, 소수점 반올림, 제곱근 등)
// 1) Math.min(), Math.max() : 최솟값 / 최댓값
Math.min(...arr1)    // 배열 통으로 넣을 수 없음
Math.max(...arr1)
// 2) Math.abs() : 절댓값 (음수 -> 양수)
// 3) Math.round(x) : 소수점을 첫번째 자리에서 반올림
// 4. Math.sqrt(x) : x의 제곱근을 반환
// 5. Math.random() : 0<= x < 1 랜덤 숫자를 반환
// 집합 : 요소의 중복이 없음 
let mySet = new Set(); // 집합 객체 생성
// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log('원소의 개수 : ${mySet.size}');
console.log('원소 7을 포함하고 있는가? ${mySet.has(7)}');

// 집합 원소 제거
mySet.delete(5);

// set을 array로 
let myArray = [...mySet]

// 집합 item of mySet
for (let item of mySet){
  console.log(item);
}

// 소수점 아래 특정 자리에서 반올림
// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456
console.log(x.toFixed(2))

// 함수 거꾸로 정렬
array.sort ((a,b) => b-a)

// Array.from(s) :문자열 문자들을 분리 및 배열 변환, 집합을 어레이로 변환

// string.toUpperCase()

// isNaN() : not a number 숫자일 경우 false, 문자일 경우 true