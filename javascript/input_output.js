+/* javascript 입력받기 1. fs 모듈 
: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기
   (readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기) */
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// txt 파일을 읽어와 문자열 형태로 바꿈, 줄바꿈을 기준으로 나눠줌
console.log(input);
// ['5',48 20 39 5]

/* javascript 입력받기 2. readline 모듈
:한 줄 씩 입력 받아서 처리하여 정답을 출력 */

// const rl = require('readline').createInterface({
//   // 한 줄 한 줄 표준 입력과 표준 출력
//   input : process.stdin,
//   output : process.stdout
// });

// let input = [];
// rl.on('line',function(line){
//   // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
//   input.push(line);
// }).on('close',function(){
//   // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D 를 입력하면 호출 (입력의 종료)
//   console.log(input);
//   process.exit();
// })

/*
\n : 줄바꿈
\t : 탭
\\ : 역슬래시
\" : 큰 따옴표
\' : 작은 따옴표
