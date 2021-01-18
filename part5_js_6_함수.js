// 함수

// function : 하나의 로직을 재실행 할 수 있도록 하는 것으로
// 코드의 재사용을 높여준다. 유지보수 쉬움
// 자바스크립트에서는 함수도 객체를 분류되기 때문에 넘기거나
// 할당할 수 있다.

// 함수 선언식
function print(){
    console.log('함수 호출');
}
// 함수 호출
print(1);

// 총합 구하는 함수
// 만약 2개 이상 입력 값을 받으면
// 2개만 받아들이고 실행이 안된다
function sum(a,b){
    return a + b;
}
console.log(sum(100,200));

// 함수 선언 다른 방법
var printf = function(){
    console.log('함수 호출');
}
printf(1);

// argument 입력 받는 값이 많거나 길이를
// 모를때 argument를 쓰면 된다

function sum1(){
    let total = 0;
    for (i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    console.log(total);
}
sum1(1,2,3,4,5);


// 일반 함수 선언식은 선언하면 위도 실행된다
// 하지만 함수 표현식은 호스팅인데
// 호스팅은 그 함수 선언 바로 아래
// 부분에서만 작동되고 위는 실행안된다
// 함수표현식은 익명과 기명이 있다
// 익명
// 함수 익명 표현식
var test1 = function(){
    return console.log('익명 함수 표현식');
}
// 기명
// 함수 이름이 있다
var test2 = function test2(){
    return console.log('기명 함수 표현식');
}

test1();
test2();

// 스코프 : 유효범위로써 매개변수 어디까지 유효함?이란 말이다.
// 자바스크립트 기본적으로 전역과 함수 단위 스코프를 생성한다.

// 전역 스코프
// 여기저기 다 쓸수 있는 것이다
// 함수안에서 선언된 변수들은 함수 블록안에서만 접근가능하고
// 전역에 선언된 변수들은 어디에서든 접근이 가능하다.

var  sco = 3; // 전역 스코프
var test = function test2(){
    var sco = 1; // 지역 스코프
    return sco;
}
console.log(sco);// 전역 값이 나온다
console.log(test());// 지역 값이 나온다
console.log(sco);// 전역 값이 나온다

// // 전역 스코프
var a = 10;
console.log(a);
var c = 10;
// 지역 스코프
function print(){
    var b = 20; // 함수 스코프의 로컬 스코프
    if (true){
        var c = 30; // 함수 스코프의 로컬 스코프
    }
    console.log(c);
}
print();
console.log(c);

// 블록 변수 스코프 설정

function print(){
    var b = 20;
    if (true){
        let c = 30; // let이나 const를 사용하면 if안에만 사용할 수 있다
        // 이 if문 블럭에만 사용가능
    }
    console.log(c);
}
print(); //오류난다.

function scopeTest(){
    let nc = 20; // 함수 안의 로컬 스코프
    if (true){
        // let을 사용하면 그영역 안에서만 사용된다
        // let nc = 30; // 함수 안의 로컬 스코프
    }
    console.log(nc);
}
scopeTest();


function scopeTest(){
    var y = 50; // 함수 안의 로컬 스코프
    if (true){
        var y = 60; // 함수 안의 로컬 스코프
    }
    console.log(y);
}
scopeTest();

// 디폴트 매개변수(ES6)

// 디폴트 값을 설정하는 것으로
// 입력이 없으면 디폴트 매개변수 값으로 실행된다.
function call(a,b=5){
    return a + b;
}
console.log(call(1));
console.log(call(1,7));