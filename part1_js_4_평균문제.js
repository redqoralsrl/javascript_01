// 문제

// 입력을 아래와 같이 4개를 받는다.
// 국어, 과학, 수학, 영어
// 4개에 대한 합과 평균을 구하라!

var kor = Number(prompt('국어 점수를 입력하세요.'));
var sci = Number(prompt('과학 점수를 입력하세요.'));
var mat = Number(prompt('수학 점수를 입력하세요.'));
var eng = Number(prompt('영어 점수를 입력하세요.'));

var sum = kor + sci + mat + eng;
var evg = sum / 4;

console.log('총합은 ' + sum + '점 평균은 ' + evg + '점입니다.');
document.write('총합은 ' + sum + '점 평균은 ' + evg + '점입니다.');
alert('총합은 ' + sum + '점 평균은 ' + evg + '점입니다.');