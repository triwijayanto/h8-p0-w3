function dataHandling2(input){
    var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
  
    input.splice(1, 1, "Roman Alamsyah Elsharawy")        //mengganti Roman Alamsyah
    input.splice(4, 1)                                    //menghapus membaca
    input.splice(2, 1, "Provinsi Bandar Lampung")         //mengganti Bandar Lampung
    input.splice(4, 0, "Pria", "SMA Internasional Metro") //menambah Pria & SMA Internasional Metro
    console.log(input)
    console.log() //spasi
    // Proses Output Mei
    var tanggal = input[3]
    //console.log(tanggal)                                //21/05/1989
    var pisah = tanggal.split("/")
    //console.log(pisah)                                  //[ '21', '05', '1989' ]
    var bulan = parseInt(pisah[1])
    //console.log(bulan)                                  //5
    switch(bulan) {
      case 1:   { console.log('Januari'); break; }
      case 2:   { console.log('Februari'); break; }
      case 3:   { console.log('Maret'); break; }
      case 4:   { console.log('April'); break; }
      case 5:   { console.log('Mei'); break; }
      case 6:   { console.log('Juni'); break; }
      case 7:   { console.log('Juli'); break; }
      case 8:   { console.log('Agustus'); break; }
      case 9:   { console.log('September'); break; }
      case 10:  { console.log('Oktober'); break; }
      case 11:  { console.log('November'); break; }
      case 12:  { console.log('Desember'); break; }
      default:  { console.log('Bulan masih salah'); }
    }
    console.log() //spasi
    
    // lanjut soal lain
    //pisah.sort(function(value1, value2) { return value1 < value2 });
    
    pisah.sort(function(a, b){return b - a});
    console.log(pisah)
    
    console.log() //spasi
    
    // lanjut soal lain
  
    var pisah = tanggal.split("/")
    console.log(pisah.join(' - '))
  
    console.log() //spasi
    
    // lanjut soal lain
    var irisan = input[1].slice(0,14)
    console.log(irisan)
  }
  
  dataHandling2()