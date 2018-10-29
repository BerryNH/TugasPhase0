function balikString(kata) {
  var kataReverse =''
   for (var i = kata.length-1; i >= 0; i--) {
      kataReverse += kata[i]
   }
   return console.log(kataReverse);
}

balikString('Hello WOrld !')
