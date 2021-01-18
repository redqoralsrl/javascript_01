// while 무한루프

// 기본적으로 무한루프이기에 종료조건이 없으면 블랙홀에 빠진다.
// while (true) {
//     console.log(1);
// }

var v = 0;
while(true){
    v++;
    console.log(v);
    if (v == 10) break;
}

var number = 0;
while (number < 10){
    number++;
    if(number % 2 == 0) console.log(number);
}