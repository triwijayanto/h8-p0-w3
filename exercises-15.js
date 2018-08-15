function groupAnimals(animals) {

  var kandangUtama = []
  
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0 ; i <abjad.length ; i++){
    var kandangKecil = []
    
      //cek abjad
      //console.log(abjad[i])
      for(var j = 0 ; j < animals.length;j++){
      //console.log('cek: '+ abjad[i] +' index ke: ' + j + ' huruf pertama adalah ' + animals[j][0] + ' dari kata '+ animals[j])
      //console.log('cek index ke: '+abjad[i]+ ' jika huruf pertama: '+ animals[j][0] +' sama dengan huruf '+ abjad[i])
  
        if(abjad[i]===animals[j][0]){
          kandangKecil.push(animals[j])     
        }
      }    
  
      if(kandangKecil.length !== 0){
        kandangUtama.push(kandangKecil)
      }
    }
  return kandangUtama
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]