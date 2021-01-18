// random은 값을 랜덤하게 상수나 정수로
// 만들어서 받을 수가 있다. 일단 흔히
// 아는 random은 Math의 내장함수이다.
// 즉, Math 를 호출하고 나서 random을
// 쓸 수 있는 것이다. 한번 실습해보자.

var num = Math.random();
console.log(num);
var num = Math.random();
console.log(num);
var num = Math.random();
console.log(num);

// 위와 같이 Math.random();은 0~1사이의 실수
// 가 랜덤하게 나온다. 이것을 활용해서 각종 숫자
// 를 나타낼 수가 있는데 한번 보자.

console.log(Math.random()*10);

// 곱하기 10을 하니 1~10의 난수가 발생한다.
// 즉 이걸 응용해서 잘 써먹으면 좋은 랜덤 값을
// 얻을 수 있다.

// Math.floor는 반올림을 하는 것으로
// 깔끔한 자연수를 얻을 수 있는 장점이 있다.

console.log(Math.floor(Math.random()*10));