// // 변수 : 변하는 수 데이터를 담는 그릇
var num = 5;
console.log(num);
document.write(num);

var float = 1.2;
console.log(float);

// typeof 변수 속성알아보는 명령어
var num = 1;
console.log(typeof num);

var float = 1.2;
console.log(typeof float);

var str = '날씨 춥다.'
console.log(typeof str);

var bool = true;
console.log(typeof bool);

// var 재할당, 재선언
var apple = 100;
var apple = 200; // 재선언
console.log('apple : ',apple);
apple = 20; // 재할당
console.log('apple : ',apple);

// const는 상수(변하지 않는) : 재선언 재할당 안됨
const banana = 1000;
// const banana = 100; // 재선언
// console.log('banana : ',banana);
// banana = 30; // 재할당
// console.log('banana : ',banana);

// let은 재선언 불가능, 재할당 가능
let potato = 123;
// let potato = 456; // 재선언
// console.log('potato : ',potato);
potato = 10000;
console.log('potato : ',potato);

var isCheck = true;
console.log(isCheck);