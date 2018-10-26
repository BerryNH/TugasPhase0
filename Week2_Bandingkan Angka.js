console.log('Bandingan Angka\n');

function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
    var kondisi;
    if (angka1<angka2) {
     kondisi= true;
   } else if(angka1>angka2){
     kondisi = false;
   } else {
     kondisi=-1
   }
  return kondisi;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
