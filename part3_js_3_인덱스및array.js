// 문자 인덱싱
let alphabet = "가나다라마바사"

console.log(alphabet[0] + alphabet[2]);

// 문자열 인덱싱
let word = "부산광역시 수영구 광안동"

let si = word.slice(0,5);
console.log(si);
let gu = word.slice(6,9);
console.log(gu);
let dong = word.slice(10,13);
console.log(dong);

var arrNum = [1, '아프다', 3, '짱'];
console.log(arrNum);
console.log(arrNum[1][1]);

var arrNum1 = new Array(1,2,3,'하하','A');
console.log(arrNum1);

var forArray = [];
for (let i = 0; i < 5; i++){
    forArray[i] = i + 1;
    console.log(forArray);
}

// 셋팅한 배열의 길이만큼 돌린다

for (let i = 0; i < forArray.length; i++){
    console.log(forArray[i] + '<br>');
}

