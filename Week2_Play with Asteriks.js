

console.log('Soal 1');
var row1=5;
  for(var i=1;i<=row1;i++){
      console.log('*');
  }


console.log('\n');
console.log('Soal 2');
var rows2=5;
 for (var a=1;a<=rows2;a++){
   star=''
   for(var b=1;b<=rows2;b++){
       star=star+'*';
     }
    console.log(star);
    }

console.log('\n');
console.log('Soal 3');

var rows3=5;

for (var i = rows3; i >= 1; i--) {
  var star = "";
   for (var j = i; j <= rows3; j++) {
   star += "*";
      }
  console.log(star);
}
