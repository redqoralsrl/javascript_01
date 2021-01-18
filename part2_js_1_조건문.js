// 조건문 (말 그대로 조건을 사용할 때)

// 만약에 조건이 만족하면 실행한다.
// if (조건) {
//     // 여기에 실행할 코드
// }
// else if (조건) {
        // 자신보다 윗줄에 있는 if문이 거짓일때만 진입한다.
// } else{
        // 위에 있는 모든 녀석들이 전부 거짓이면 실행한다.
// }

// 한 줄이면 중가로 없어도 된다.
// 두 줄이면 중가로 필요하다.

var money = 500;

if (money < 100){
    document.write('100원보다 작네');
}else if(money < 500){
    document.write('500원보다 작네');
}else{
    document.write('부자구나!');
}

var age = 20;
if (age < 14){
    document.write('어린이네 ㅋㅋ');
}else if(age < 25){
    document.write('이정도면 다컷지!');
}else{
    document.write('와 늙....었...');
}

// 문제

// 국어, 과학, 수학, 영어를 입력받아
// 총합 평균을 구하고
// 평균이 90~100이면 'A학점'
// 평균이 80~89이면 'B학점'
// 평균이 70~79이면 'C학점'
// 그외는 'F학점'을 부여하라

var kor = Number(prompt('국어 점수를 입력하세요'));
var sci = Number(prompt('과학 점수를 입력하세요'));
var mat = Number(prompt('수학 점수를 입력하세요'));
var eng = Number(prompt('영어 점수를 입력하세요'));

var sum = kor + sci + mat + eng;
var evg = sum / 4;

var result = '';
if (evg >= 90){
    result = 'A학점';
}else if(evg >= 80){
    result = 'B학점';
}else if(evg >= 70){
    result = 'C학점';
}else{
    result = 'F학점';
}

document.write('총합 : '+sum+'점 평균 : '+evg+'점 학점 : '+result+'입니다. 고생하셨습니다.');