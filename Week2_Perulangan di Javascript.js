var nomer = 1;
var tambah = 1;
var nomor = 21;
var kurang = 1;

console.log('LOOPING PERTAMA');


while(nomer < 20) {
  nomer += tambah;
  console.log(nomer+ ' -I love coding');
  nomer++;
}
console.log('LOOPING KEDUA');

while(nomor > 1) {
  nomor -= kurang;
  console.log(nomor+ ' -I will become fullstack developer');
  nomor--;
}
console.log('\n');
console.log('\n');
console.log('LOOPING PERTAMA');

for(nomer=1;nomer <21;nomer++){
  console.log(nomer+ ' -I love coding');
}
console.log('LOOPING KEDUA');
for(nomor=20;nomor>1;nomor--){
    console.log(nomor+ ' -I will become fullstack developer');
}

console.log('\n');


for(var angka = 1; angka <=100; angka++){
    if (angka % 2==0){
      console.log('GENAP')
    } else {
      console.log('GANJIL')
    }
}

for (var angka = 1; angka <= 100; angka+=2) {
  if(angka % 3 === 0){
  console.log(angka+' adalah kelipatan 3');
  }
}

console.log('\n');

for (var angka = 1; angka <= 100; angka+=5) {
  if(angka % 6 === 0){
  console.log(angka+' adalah kelipatan 6');
  }
}

console.log('\n');

for (var angka = 1; angka <= 100; angka+=9) {
  if(angka % 10 === 0){
  console.log(angka+' adalah kelipatan 10');
  }
}
