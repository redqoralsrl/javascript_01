for (i=1;i<6;i++){
    document.write("*".repeat(i));
    document.write('<br>');
}

let k = 0;
for (j=5;j>0;j--){
    document.write('*'.repeat(j));
    document.write('&nbsp'.repeat(k));
    k++;
    document.write('<br>');
}

let z = 4;
for (x = 1; x < 6; x++){
    document.write('&nbsp'.repeat(z));
    document.write('*'.repeat(x));
    document.write('<br>');
    z--;
}

let u = 0;
for (o = 5; o>0; o--){
    document.write('&nbsp'.repeat(u));
    document.write('*'.repeat(o));
    document.write('<br>');
    u++;
}

let a = 4;
for (b=0;b<5;b++){
    document.write('&nbsp'.repeat(a));
    document.write('*'.repeat(b*2+1));
    document.write('<br>');
    a--;
}