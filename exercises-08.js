function pasanganTerbesar(num) {
 
    //mengubah nilai angka ke string
    var keString = String(num);
    var penampung = []

    for(var i = 0 ; i <= keString.length-2  ; i++){
      //mengubah string ke angka
      penampung.push(Number(keString[i]+keString[i+1]))
      //penampung.push((keString)[i]+keString[i+1]) // menggabungkan string pertama dan selanjutnya, seterusnya
    
    }
    // [ 64, 41, 15, 57, 73 ]
    // [ 12, 27, 78, 83, 34, 45, 56 ]
    // [ 91, 10, 2, 23, 33 ]
    // [ 71, 18, 85, 56, 64, 42, 21 ]
    // [ 79, 99, 91, 18, 82, 29, 93 ]

    //return penampung
    var nilaiMax = 0
    for( i = 0 ; i <= penampung.length-1;i++){
      return nilaiMax+=(Math.max.apply(null, penampung))

    }  

}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99