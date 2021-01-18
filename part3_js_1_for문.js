// 반복문 for문
// 일단 형식은 아래와 같다

// for (let 변수 = 값; 변수 < 범위; 변수++) {
//     실행할 명령
// }

// for는 반복해서 예를 들면 1부터 10까지 더하라
// 는 10줄로 적으면 되는데 1000번 10000번은?
// 안된다. 너무 비효율적이다. 그래서 반복문으로
// 1000번을 돌리거나 10000번을 돌리면 된다.

for(let i = 0; i < 5; i++){
    console.log(i);
}

for(let i = 5; i > 0; i--){
    console.log(i);
}

for(let i = 0; i < 7; i+=2){
    console.log(i);
}

// 1부터 100까지의 합

let sum = 0;
for(let i = 1; i < 101; i++){
    sum += i;
}

console.log(sum);

// 이중 for문

for(let x = 0; x < 2; x++){
    console.log('x for문<br />');
    for(let j = 0; j < 2; j++){
        console.log('j for문<br />');
    }
}

// 구구단

for(let x = 1; x < 10; x ++){
    for (let y = 1; y < 10; y ++){
        document.write(x + "*" + y + "=" + x * y + " ");
    }
    document.write('<br />');
}