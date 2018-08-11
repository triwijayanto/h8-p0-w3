function angkaPalindrome(num) {
    
    var check = false
    while ( check === false){
      
      var keString = String(num);
      var reverse = ''
      for(var i = keString.length-1 ; i >= 0 ; i--){
        reverse += keString[i]
      }
      if (keString < 10){
        return num+1
      } else if(keString === reverse ){
        check = true
      } else {
        num += 1
      }
    }
    return num
  }
  
  // TEST CASES
  
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  // 1. membuat variable check dulu
  // 2. while selama masih false
  // 3. buat stringNum
  // 4. buat reverseNum
  // 5. jika sudah selesai bandingkan stringNum dengan reverseNum
  // 6. jika sama: check menjadi true
  // 7. jika tidak: num+1