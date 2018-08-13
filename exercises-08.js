function pasanganTerbesar(num) {
 
  // 1. mengubah nilai number ke string, agar bisa dipisah
  var keString = String(num);
  // 2. buat penampung berupa typedata array, untuk hasil perubahan number ke string yg dimasukkan ke array nanti
  var penampung = []
  // 3. membuat looping dari untuk menggabungkan 2 buah string
  for(var i = 0 ; i <= keString.length-2  ; i++){
  // 4. setelah berhasil menggabungkan dengan metode looping, maka
  // 5. ubah dulu yg tadinya string ke number lagi
  // 6. tambahkan nilai hasil pecah kedalah array baru dengan .push()
    penampung.push(Number(keString[i]+keString[i+1]))
    //penampung.push((keString)[i]+keString[i+1]) // menggabungkan string pertama dan selanjutnya, seterusnya
  
  }
  // [ 64, 41, 15, 57, 73 ]
  // [ 12, 27, 78, 83, 34, 45, 56 ]
  // [ 91, 10, 2, 23, 33 ]
  // [ 71, 18, 85, 56, 64, 42, 21 ]
  // [ 79, 99, 91, 18, 82, 29, 93 ]
  //return penampung

  //var metodeMax = 0
  // 7. buat penampung baru yg diisi dengan array pertama, untuk nantinya diganti degan nilai terbesar yang baru
  var terbesar = penampung[0]
  // 8. buat looping untuk membandingkan array [0] - terakhir mana yg terbesar
  for( var i = 0 ; i <= penampung.length-1;i++){
    
    //dengan Math.max,apply
    //kode dibawah sudah berhasil, tp dengan metode lain belum, jadi masih revisi
    //return metodeMax+=(Math.max.apply(null, penampung))
  // 9. buat condisionalnya  
    if(penampung[i]>terbesar){
  // 10. jika nilai array[i] lebih besar dari penampung terbesar, maka
  //  a. ganti nilai terbesar tersebut dengan nilai array[i] tersebut
      terbesar = penampung[i]
  //  b. jika tidak abaikan
    } else {
      
    }
  }
  // 11. tampilkan nilai terbesar yang baru
  return terbesar

}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


// jadi untuk mencari nilai terbesar dari sebuah arr:
// 1. looping untuk membuat array yang isinya pasangan2
// 2. buat sebuah var `terbesar`, yang bernilai arr pertama = arr[0]. kenapa? nanti akan kita cek dengan nilai yang lain
// 3. Looping array tersebut, dari 0 - ujung
// 4. kita bandingkan, nilai arr[i] dengan nilai terbesar
//  a. jika nilainya lebih besar, maka variabel penampung akan kita ganti dengan nilai baru yaitu arr[i]
//  b. jika lebih kecil, abaikan

// Jika looping sudah selesai
// 5. tampilkan nilai terbesar
