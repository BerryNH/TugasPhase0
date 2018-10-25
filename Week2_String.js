console.log('Skeleton Code \n');

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);

console.log('\n')

console.log('Index Accessing - 1 by 1 \n');

var word2 = 'wow JavaScript is so cool';
var firstWord = word2[0]+word2[1]+word2[2] ;
var secondWord = word2[4]+word2[5]+word2[6]+word2[7]+word2[8]+word2[9]+word2[10]+word2[11]+word2[12]+word2[13];
var thirdWord= word2[15]+word2[16];
var fourthWord= word2[18]+word2[19];
var fifthWord= word2[21]+word2[22]+word2[23]+word2[24];

console.log('First Word: ' +firstWord);
console.log('Second Word: ' +secondWord);
console.log('Third Word: ' +thirdWord);
console.log('Fourth Word: ' +fourthWord);
console.log('Fifth Word: ' +fifthWord);

console.log('\n')

console.log('Breaking Sentence (Again) using Substring \n')

var word3 ='wow Javascript is so cool';
var firstWord2= word3.substring(0,3);
var secondWord2= word3.substring(4, 14);
var thirdWord2= word3.substring(15, 17);
var fourthWord2= word3.substring(18, 20);
var fifthWord2= word3.substring(21, 25);

console.log('First Word: '+firstWord2);
console.log('Second Word: ' +secondWord2);
console.log('Third Word: ' +thirdWord2);
console.log('Fourth Word: ' +fourthWord2);
console.log('Fifth Word: ' +fifthWord2);

console.log('\n')

console.log('Breaking Sentence (yet Again) and Count Each Length \n');


var word4 ='wow Javascript is so cool';
var firstWord3= word4.substring(0,3);
var secondWord3= word4.substring(4, 14);
var thirdWord3= word4.substring(15, 17);
var fourthWord3= word4.substring(18, 20);
var fifthWord3= word4.substring(21, 25);

var firstWordLength = firstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('First Word: '+firstWord3+ ', with length: ' + firstWordLength);
console.log('Second Word: ' +secondWord3+ ', with length: ' + secondWordLength);
console.log('Third Word: ' +thirdWord3+ ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' +fourthWord3+ ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' +fifthWord3+ ', with length: ' + fifthWordLength);
