// switch

// if와 마찬가지로 조건문이라고는 하나
// 간단한 조건식이라고 보면 된다.
// 너무 많은 조건이 아닌 특정 정해진 값
// 을 조건으로 하는 것으로 형식은

// switch (변수) {
//     case 조건1:
//         조건1 참일 시 실행
//         break;
//     case 조건2:
//         조건2 참일 시 실행
//     default:
//         조건이 다 거짓이면 실행
//         break;
// }
// 하지만 'break;'의 역할은 실행을 하고
// 빠져나오는 것으로 만약 적지 않는다면
// 그 조건이 참일 시 실행하는데 그 밑에
// 전부다 실행이 되버리는 불상사가 일어난다.
// 그리고 'default'는 딱히 있어도 되고
// 안써도 그만이다. 아무튼 if와는 조금
// 다른 것은 조건이 간단해야 한다.
// 예시를 보면 이해가 될 것이다.

var num = 2;

switch (num) {
    case 1:
        document.write(1);
        break;
    case 2:
        document.write(2);
        break;
    default:
        document.write(3);
        break;
}

// 위는 일단 'num'의 값은 2다.
// 그러면 조건문으로 넘어가면
// switch옆에 num을 넣어서 num을
// 가지고 조건을 매기는 것이다.
// case에 간단한 1 2 가 있고
// 마지막에는 default가 있는데
// 우선 조건이 1이면 num은 2인데
// 맞지 않으니 넘어간다. 다음 조건은
// 2인데 num이 2니까 참이다. 그럼
// 그안의 내용인 2를 출력하는 명령어로
// 실행되는 것을 볼 수 있다. 그러고 break;
// 가 있으니 switch문을 종료하란 것이다.
// 만약 종료하란 것이 없다면?

var num = 2;

switch (num) {
    case 1:
        document.write(1);
        break;
    case 2:
        document.write(2); // break를 없앴다
        
    default:
        document.write(3);
        break;
}

// 위와 같이 그냥 쭈욱 다 실행되버리는
// 불상사가 있으니 조심하길 바란다.