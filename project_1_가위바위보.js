var user = prompt('가위 바위 보 중에 입력하시오.','가위');

var compu = Math.random()*10;

var result = '';

if (compu < 3.33){
    compu = '가위';
}else if (compu < 6.66){
    compu = '바위';
}else{
    compu = '보';
}

switch (user) {
    case '가위':
        if (compu == '가위') result = '무승부';
        else if (compu == '바위') result = '패';
        else if (compu == '보') result = '승';
        break;
    case '바위':
        if (compu == '가위') result = '승';
        else if (compu == '바위') result = '무승부';
        else if (compu == '보') result = '패';
        break;
    case '보':
        if (compu == '가위') result = '패';
        else if (compu == '바위') result = '승';
        else if (compu == '보') result = '무승부';
        break;
}
alert('나 : '+user+' 컴퓨터 : '+compu+' 결과 :'+result);