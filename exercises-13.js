function targetTerdekat(arr) {
    // menghitung posisi X dan O
    var tampungX = []
    var tampungO = []
    for (var i = 0 ; i<arr.length ; i++){
      // cek karakter
      if(arr[i]==='x'){
        tampungX.push(i)
      } else if (arr[i]==='o'){
        tampungO.push(i)
      }
    }
    //console.log('posisi x: '+tampungX)
    //console.log('posisi o: '+tampungO)
  
    // posisi x: 5,7 
    // posisi o: 2
    
    // posisi x: 4,5,6
    // posisi o: 0
    
    // posisi x: 0,4,5
    // posisi o: 6
        
    // posisi x: 3,4,7
    // posisi o: 1
  
    //jika O kosong maka akan langsung mengembalikan nilai 0
    if(tampungX.length === 0 || tampungO.length === 0)  {
      return 0
    }
    
    var selisih =  Math.abs(tampungO[0]- tampungX[0])
  
      for( var j = 0 ; j < tampungO.length ; j++){
        for(var k = 0 ; k < tampungX.length ; k++){
          //tes looping
          //console.log('posisi O : '+ tampungO[j]+ ' dikurangi ' + 'posisi X :' + tampungX[k] + ' hasilnya: ')
                  
        // posisi O : 2 dikurangi posisi X :5 hasilnya: -3
        // posisi O : 2 dikurangi posisi X :7 hasilnya: -5
        
        // posisi O : 0 dikurangi posisi X :4 hasilnya: -4
        // posisi O : 0 dikurangi posisi X :5 hasilnya: -5
        // posisi O : 0 dikurangi posisi X :6 hasilnya: -6
        
        // posisi O : 6 dikurangi posisi X :0 hasilnya: 6
        // posisi O : 6 dikurangi posisi X :4 hasilnya: 2
        // posisi O : 6 dikurangi posisi X :5 hasilnya: 1
        
        // 0
  
        // posisi O : 1 dikurangi posisi X :3 hasilnya: -2
        // posisi O : 1 dikurangi posisi X :4 hasilnya: -3
        // posisi O : 1 dikurangi posisi X :7 hasilnya: -6
    
        if(selisih > Math.abs(tampungO[j]- tampungX[k])){
          selisih = Math.abs(tampungO[j]- tampungX[k])
        }
      }
  
    }
  
    return (selisih)
  
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2