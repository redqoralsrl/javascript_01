// 객체 : {} 키 값으로 이루어진 속성들의 모음이다

/**
 * 키는 반드시 string 형태를 가지고 있어야하고 이 속성 키를
 * 통해서 해당 속성에 매핑된 값을 접근할 수 있다.
 * 전역(global)객체 : 모든 객체의 부모가 되는 객체다.
 * Function, Array
 * String, Number, Boolean(원시 자료형을 객체로 감싼 새로운 형태의 객체를
 * 말한다)
 * Math, JSON, RegExp - 특수 연산에 특화된 내장객체
 * 이터레이블, 컬렉션 특성의 객체(Map, Set, WeakMap, WeakSet) - 표준 내장
 * 객체라고 불림
 */

 // 객체 형식
const store = {snack : 1000, drink : 2000, gum : 500};
const store1 = [{snack : 1000, drink : 2000, gum : 500}];
const store2 = [{snack : 1000, drink : 2000, gum : 500},
    {snack : 1000, drink : 2000, gum : 500}];
console.log(store);
console.log(store1);
console.log(store2);

// 객체 다뤄보기
const market = {snack : 1000, drink : 2000, gum : 500};
console.log(market.snack);

// 객체 안에 추가 배열 가능
const phone = {galaxy : {width:50, height:100}};
console.log(phone.galaxy);

// 객체 추가하기
phone.apple = {width:100,height:200};
console.log(phone);

// 객체 삭제하기
delete phone.apple;
console.log(phone);

// 템플릿 문자열(ES6 환경)
// 템플릿 문자열을 이용하면 `$표현식}`을 이용하여 삽입처리가 가능하다.
// interplation이라고 한다.
// ~에 있는 퀵백 ( ` )을 사용한다.

// 템플릿 문자열을 사용하면 +나 ,를 사용하면 힘들게 적는다
// 하지만 간편하게 작성이 가능하다
let name = '백민기';
let age = 26;
let hobby = '게임하기';

const end = `안녕하세요 저는 ${name}이고 ${age}세이며 취미는 ${hobby}입니다.`;
console.log(end);