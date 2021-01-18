// 산술 연산자 : + - * / %
// 증감 연산자 : ++(1씩증가) --(1씩감소)
// 대입 연산자 : = += -= /= %= >>= <<= &=
// 비교 연산자 : < > <= >= == != === !==
// 논리 연산자 : && || ! ^
// && : AND 연산자로 두 개가 참이여야 한다.
// || : OR 연산자로 두 개 중 하나만 참이어도 된다.

var a = 4;
var b = 3;

console.log(a);
console.log(b);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(a%b);

var sum = a + b;
console.log(sum);

//

var num = 1;
console.log(num);
++num;
console.log(num);
console.log(++num);

var num = 1;
console.log(num);
num++;
console.log(num);
console.log(num++);
console.log(num++);

//

var chulSu = 5;
var youngSu = 10;
console.log(chulSu < youngSu);
console.log(chulSu > youngSu);
console.log(chulSu == youngSu);

// undefined와 null은 둘 다 값은 없지만 데이터 속성 값은 다르다.

var test = undefined;
var test1 = null;
console.log(test == test1);
console.log(test === test1);

// prompt는 입력창

// prompt('바보');

var value = prompt('1번 숫자를 입력하세요');
var value1 = prompt('2번 숫자를 입력하세요');

var result = value + value1;

alert(result);

// 형변환
var sum = Number(value) + Number(value1);
alert(sum);

var te = 2;
var ta = 1;
var result = String(te) + String(ta);

alert(result);


var test1 = Number(prompt('입력1'));
var test2 = Number(prompt('입력2'));

var result = test1 + test2;

alert(result);