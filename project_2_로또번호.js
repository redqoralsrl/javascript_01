let lottoNum = [];

while (lottoNum.length != 6){
    let randNum = Math.floor(Math.random()*45) + 1;
    if (lottoNum.indexOf(randNum) == -1) lottoNum.push(randNum);
    else continue;
}
console.log(lottoNum);