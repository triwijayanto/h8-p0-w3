// balik string

var kata = 'hello world!'
var balik = ''

//console.log(kata.length)
for (var i = kata.length-1 ; i >= 0; i--){
  balik += kata[i]
}

console.log(balik)