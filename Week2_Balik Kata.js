function balikKata(kata) {
  var kataReverse = ""; //mulai kata baru
   for (var i = kata.length-1; i >= 0; i--) { //decrement, pake panjang kata buat kasih value i, di minus 1 biar terakhir  0
       kataReverse += kata[i]; // kataReverse diisi sama kata yg udah di decrement
   }
   return kataReverse; //nampilin kata dalam kondisi terbalik
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
