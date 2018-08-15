function tentukanDeretAritmatika(arr) {
  
    //1. buat variable yang menyimpan selisih
    var selisih = arr[1]-arr[0] // misal 2
    //2. tetapkan aturan selisih untuk pembanding nilai loop
    for(var i = 0 ; i <= arr.length-2 ; i++){
    //3. jika selisih tidak sama dengan nilai uji i+1 - i
    //   jika 2 tidak sama dengan
      if (selisih !== arr[i+1]-arr[i]){
        //maka false
        return false
      } else {
        //return true
      }
    }
    
    return true
    
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
