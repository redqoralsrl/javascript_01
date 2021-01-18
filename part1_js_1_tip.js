// 세미콜론으로 구분한다.
// 그래서 꼭 세미콜론을 사용하는 것을 잊지마라!

// 장점 : html을 직접 건들일 수 있다.
// css를 수정할 수 있다.

// 변수 선언
// 변수 선언시 주의할 점 : 한글 절대 안됨
// 네이밍 할 때 반드시 풀네임이 좋다.
// 가독성도 중요
var a = 1;
var b = 2;

var numberStudent = 2;
var numberTeacher = 3;

// 카멜 표기법
var user = '민기';
var time = 10;

var noTime = 10;
var userPhone = 'Galaxy';

// 자바스크립트는 동적 형식도 가진다.
var x = 5;
var x= "John";
console.log(x);

// 출력방식
alert('hi');
console.log('wow');
document.write('money');
// Window.document.write('money'); Window는 생략이 가능하다. Window가 최상위다.

// ' ' 싱글쿼터는 단일문자 a나 b 이렇게 단일로 있을 때 쓴다.
// " " 더블쿼터는 문자열 abcd를 사용한다.
// 하지만 Javascript는 다 허용 해준다.
var str = "hello world!"
console.log(str);
document.write(str);