// null => 프로그래머가 의도적으로 만든 빈 값
// undefined => 프로그래머가 의도하지 않았는데 만들어진 빈 값
// Nan => 숫자 값을 낼 수 없을 때 나오는 빈 값
// 일반적인 객체와 구별되는 특징
/**
 * 객체의 구조는 property Key와 Value 값이 들어가지만
 * 배열은 index와 요소가 들어간다
 * 값의 순서 : 객체는 순서가 없다, 배열은 존재
 * 값의 참조 : 객체는 property Key, 배열은 index
 * length : 객체는 없고 배열은 있다
 */

// 일반적인 배열 : 인덱스로 요소에 빠르게 접근이 가능하다
// 단점은 특정요소를 검색하거나 삽입 또는 삭제하는 경우에
// 효율적이지 않다
// 자바스크립트 배열 : 해시테이블로 구현된 객체, 일반적인
// 배열보다 성능적으로(인덱스로 요소에 접근하는 경우) 느릴
// 수 있다. (구조적 단점임) 특정 요소를 검색하거나
// 삽입 또는 삭제하는 경우에 효율적.

// 배열 메서드는 결과물을 반환하는 패턴이 두가지 있음
// 원본배열 직접변경(배열 메서드를 호출한 배열, 즉 배열 메서드의
// 내부에서 this가 가르키는 객체)
// 원본배열을 직접 건드리지 않고 새로운 배열을 생성해서 반환하는
// 메서드
// ** 지수 연산자(ES7)
// ES6

Array.of(1); // [1]

// 원본 배열 직접 변경 (원본 날라감)
let num = [1, 2, 3, 4];
// push
num.push(5); // 배열 끝에 값을 추가한다
console.log(num);
// pop
num.pop(5); // 배열 끝을 삭제한다
console.log(num);
// // reverse
num.reverse(); // 배열 뒤집는다
console.log(num);
// sort
num.sort(); // 배열 정리한다
console.log(num);
// unshift
num.unshift(5); // 배열 앞에 추가한다
console.log(num);
num.unshift(6,7);
console.log(num);
// 배열 앞에 추가 다른 방법은 ... 사용
num = [3,...num]; // 배열 원하는 자리에 쓰고 ...변수 적는다
console.log(num)
// shift
num.shift();
console.log(num); // 배열 앞에 삭제한다
// slice
let a = num.slice(2); // 숫자만큼 인덱싱 제거를 한뒤 배열을 리턴
console.log(a);
let b = num.slice(1,3); // 문자 사이 인덱싱
console.log(b);
// filter
let sub = num.filter(num=>num>2); // 조건에 맞는 것만 걸러준다
console.log(sub);
let number = [1,2,3,4,5];
let param = number.filter(num=>num > 2); // 필터링 걸러내기 조건식
console.log(param);
// 안에 값 확인해보기
let nummm = number.filter((it, index, arr)=>{console.log(it,index,arr)});
console.log(nummm);
// concat
var test = [1,2,3,4];
var test1 = ['a','b','c','d'];
test = test.concat(test1); // 배열을 합친다 원본을 안 건드린다.
console.log(test);
let re = test.concat(test1,5); // test에 test1을 추가하고 5 추가
console.log(re);
// split
var word = '프랑스_중국_독일_한국_일본_영국'; // 쪼개기
console.log(word.split('_'));
// indexOf
let alpha = [1,2,3,4]; //
console.log(alpha.indexOf(3)); // 배열에 있으면
console.log(alpha.indexOf(8)); // 배열에 없으면 -1값을 반환
console.log(alpha.indexOf(3,2)); // 인덱스 2자리의 숫자 3인지
// join
const arr = [1,2,3,4];
console.log(arr.join()); // 1,2,3,4로 나온다 join안에 적으면 적은걸로 나온다
// trim
let words = '    Hello World    ';
console.log(words.trim()); // 양쪽 공백 제거
// includes (ES7)
let bonus = '가나다라마바사';
console.log(bonus.includes('다')); // 있으면 true로 반환한다
let numArray = [1,2,3,4];
console.log(numArray.includes(2));
console.log(str.includes('라',3)); // 없으면 false (문자, 인덱스) 위치 확인
// splice
let c = ['a','b','c','d'];
let d = c.splice(1,3); // b,c,d만 잘려서 d에 넣어짐
console.log(c); // a 만 남는다
console.log(d);
let e = [1, 2, 3, 4, 5];
e.splice(2, 3, 30, 40); // 인덱스 2부터 3개요소를 제거하고 30, 40으로 바뀐다
console.log(e);
// toFixed
var subs = 1.23114;
console.log(subs.toFixed(2)); // 소수점 자리를 출력해준다
// charAt
var str = 'this is javaScript'
console.log(str.charAt(2)); // 인덱스가 2인 자리의 글자를 출력
// match
console.log(str.match('hi')); // 동일한 문자를 찾는다 있으면 알려준다
console.log(str.match('ho')); // 없으면 null로 반환한다
// replace
console.log(str.replace('is', 'ese')); // 지정된 문자를 오른쪽 문자로 바꾼다
// search
console.log(str.search('java')); // 지정된 단어나 문자를 제일 앞 j의 위치로 알려준다
// substring
console.log(str.substring(2,10)); // 앞 지정 인덱스부터 뒷 지정에서 한칸 앞 인덱스까지 자른다
// toString
console.log(str.toString()); // 값을 문자로 다 변환한다
// toUpperCase, toLowerCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// 마지막 요소를 추가할 녀석이 하나라면
const arr3 = [1,2];
arr3[arr3.length] = 3;
console.log(arr3);
// fill
// ES6 인자로 전달받은 값을 배열의 처음부터 끝까지 채운다
// 원본배열이 변경
// 두번째자리는 인덱스시작 세번재자리는 인덱스 끝 + 1
const arr5 = [1,2,3,4];
arr5.fill(0); // 0으로 채워진다
arr5.fill(0,1); // 인덱스 1자리부터 0으로 채워진다
arr5.fill(0,1,3); // 인덱스 1부터 2까지 0으로 채워진다
console.log(arr5);
// flat
// ES10
// flat : 기본 디폴트 값이 1이 된다
[1,[2,3,4,5]].flat(); // [1,2,3,4,5] 로 평탄하게 바꿔준다
[1,[2,[3,[4]]]].flat(); // [1,2,[3,[4]]]
[1,[2,[3,[4]]]].flat(Infinity); // [1,2,3,4]
// 배열 고차 함수
// 고차 함수 : 함수를 인자로 전달받거나 함수를 반환하는 함수
// 숫자로 입력해도 sort로 하면 이제
// 숫자를 아래와같이 인식을 해서 1이 먼저 정렬된다
// 유니코드의 코드 순서에 정렬한다
// 배열의 요소가 숫자타입이여도 배열의 요소를 일시적으로 문자열로
// 변환한 후 -> 유니코드 코드 포인트의 순서를 기준으로 정렬
// u+0031(1)
// u+0031(2)
// u+0031 u+0030(10)
const points = [40,100,1,5,2,25,10];
// points.sort();
// 숫자 배열의 오름차순 정렬, 비교 함수의 반환값이
// 0보다 작으면 a를 우선하여 정렬
points.sort((a,b)=>a-b);
console.log(points);
 // Math 함수
Math.pow(3,2);       // 9,   3의 2승 
Math.round(10.6);    // 11,  10.6을 반올림
Math.ceil(10.2);     // 11,  10.2를 올림
Math.floor(10.6);    // 10,  10.6을 내림
Math.sqrt(9);        // 3,   3의 제곱근
Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
Math.abs(-3);       // 절댓값 구하기
const random = Math.floor((Math.random()*10)+1);
console.log(random); // 1~10
//////
// forEach
const numbers = [1,2,3];
const pows = [];
// for (let i = 0; i < numbers.length; i++){
//     pows.push(numbers[i]**2);
// }
// forEach는 자신의 내부에서 반복문을 실행함
// 내부에서 반복문을 통해 자신의 호출한 배열을 순회하면서
// 수행해야할 처리를 콜백함수로 전달받아서 반복호출
numbers.forEach(item=>pows.push(item**2));
console.log(pows);
/////////
// Date 함수
console.log(Date.now());
var a = new Date('2020/05/30').getFullYear();
console.log(a);
const today = new Date();
today.setFullYear(2000);
console.log(today.getFullYear());
today.setMonth(0); // 1월
today.setMonth(11,1); // 12월 1일
today.setHours(0,0,0,0); // 00:00:00:00
const today1 = new Date('2020/5/24/12:30');
console.log(today1.toString()); // 정리해서 보여줌
const today_date = new Date();
console.log(today_date.toString()); // 정리해서 보여줌
const today_hour = new Date();
console.log(today_date.toTimeString()); // 시간만 알려줌
