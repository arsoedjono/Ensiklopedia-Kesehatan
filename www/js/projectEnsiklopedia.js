var db;
var shortName = 'ENSIKLOPEDIA';
var version = '1.0';
var displayName = 'ENSIKLOPEDIA';
var maxSize = 999999;

$.mobile.document.on( "listviewcreate", "#slctBahanBK-menu", function( e ) {
        var input,
            listbox = $( "#slctBahanBK-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        if ( !form ) {
            input = $( "<input data-type='search' placeholder='Cari Bahan Makanan...'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#slctBahanBK-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }        
        listview.filterable({ input: input });
    }).on( "pagebeforeshow pagehide", "#slctBahanBK-dialog", function( e ) {
        var form = $( "#slctBahanBK-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#slctBahanBK-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });

$( document ).on( "pageshow", "#main-menu", function()
    {
        if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        }
        db = openDatabase(shortName, version, displayName,maxSize);
        CreateSemuaTabel();               
        InsertSemuaDataTabel();
 }); 

function errorHandler(transaction, error) 
{ alert('Error: ' + error.message + ' code: ' + error.code); }
function successCallBack() 
{ //alert("DEBUGGING: success");
    }
{ //alert("DEBUGGING: success");   
}
function nullHandler(){};  

function refreshListView()
{
    $('#listviewBahanMakanan').listview('refresh');
    $('#listviewResep').listview('refresh');
}

function refreshListViewIbuHamil()
{
  $('#listviewBahanMakananIbuHamil').listview('refresh');
  $('#listviewResepIbuHamil').listview('refresh');
}

function CreateSemuaTabel()
{
    db.transaction(function(tx){
        //tx.executeSql( 'DROP TABLE BahanMakanan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE Resep',nullHandler,nullHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BahanMakanan(IdBahanMakanan INTEGER NOT NULL PRIMARY KEY, NamaBM TEXT, UsiaBM INTEGER, A_Laktosa TEXT, A_Casein TEXT, A_Telur TEXT, A_IkanLaut TEXT, A_Kacang TEXT, GambarBM TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS Resep(IdResep INTEGER NOT NULL PRIMARY KEY, Resep TEXT, UsiaResep INTEGER, Resep_Laktosa TEXT, Resep_Casein TEXT, Resep_Telur TEXT, Resep_IkanLaut TEXT)',[], nullHandler, errorHandler);    
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BahanMakananIbuHamil(IdBahanMakananIbuHamil INTEGER NOT NULL PRIMARY KEY, NamaBMIH TEXT, Vegetarian TEXT, Diabetes TEXT, Hipertensi TEXT, GambarBMIH TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS ResepIbuHamil(IdResepIbuHamil INTEGER NOT NULL PRIMARY KEY, Resep TEXT, Resep_Vegetarian TEXT, Resep_Diabetes TEXT, Resep_Hipertensi TEXT)',[], nullHandler, errorHandler);
    },errorHandler,successCallBack);  
}

function InsertSemuaDataTabel()
{
    InsertDataBahanMakanan();
    InsertResep();
    InsertDataBahanMakananIbuHamil();
    InsertResepIbuHamil();
}

function InsertDataBahanMakanan() 
{ 
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BahanMakanan', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("ASI","0","T","T","T","T","T","img/nutrisi/asi.jpg")',[], nullHandler,errorHandler);                                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Es Krim","12","T","Y","T","T","T","img/nutrisi/eskrim.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Keju","12","T","Y","T","T","T","img/nutrisi/keju.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Minuman Kocok","18","T","Y","T","T","T","img/nutrisi/minuman kocok.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula","0","Y","Y","T","T","T","img/nutrisi/susu formula.jpg")',[], nullHandler,errorHandler);                                    
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula Anti Alergen","0","Y","T","T","T","T","img/nutrisi/susu formula anti alergen.jpg")',[], nullHandler,errorHandler);                  
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula Bebas Laktosa","0","T","Y","T","T","T","img/nutrisi/susu formula bebas laktosa.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Kedelai","6","T","T","T","T","T","img/nutrisi/susu kedelai.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Murni","12","T","Y","T","T","T","img/nutrisi/susu murni.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Saus Krim","18","T","Y","T","T","T","img/nutrisi/saus krim.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Yoghurt","9","T","Y","T","T","T","img/nutrisi/yogurht.jpg")',[], nullHandler,errorHandler);                           
                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Alpukat","7","T","T","T","T","T","img/nutrisi/alpukat.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Apel","6","T","T","T","T","T","img/nutrisi/apel.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Aprikot","12","T","T","T","T","T","img/nutrisi/aprikot.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Jeruk","6","T","T","T","T","T","img/nutrisi/jeruk.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kiwi","12","T","T","T","T","T","img/nutrisi/kiwi.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Lemon","7","T","T","T","T","T","img/nutrisi/lemon.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Mangga","12","T","T","T","T","T","img/nutrisi/mangga.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Melon","12","T","T","T","T","T","img/nutrisi/melon.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Peach","7","T","T","T","T","T","img/nutrisi/peach.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pepaya","6","T","T","T","T","T","img/nutrisi/pepaya.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pir","6","T","T","T","T","T","img/nutrisi/pir.jpg")',[], nullHandler,errorHandler); 
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pisang","6","T","T","T","T","T","img/nutrisi/pisang.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Prun","7","T","T","T","T","T","img/nutrisi/prun.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Stroberi","12","T","T","T","T","T","img/nutrisi/stroberi.jpg")',[], nullHandler,errorHandler);                          
                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Bayam","9","T","T","T","T","T","img/nutrisi/bayam.jpg")',[], nullHandler,errorHandler);                               
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Buncis","9","T","T","T","T","T","img/nutrisi/buncis.jpg")',[], nullHandler,errorHandler);                        
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Bunga Kol","12","T","T","T","T","T","img/nutrisi/bunga kol.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Brokoli","12","T","T","T","T","T","img/nutrisi/brokoli.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kacang Polong","9","T","T","T","T","T","img/nutrisi/kacang polong.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kentang","7","T","T","T","T","T","img/nutrisi/kentang lumat.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Labu","7","T","T","T","T","T","img/nutrisi/labu.jpg")',[], nullHandler,errorHandler);                        
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Tomat","12","T","T","T","T","T","img/nutrisi/tomat.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ubi Jalar","7","T","T","T","T","T","img/nutrisi/ubi jalar.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Wortel","7","T","T","T","T","T","img/nutrisi/wortel.jpg")',[], nullHandler,errorHandler);                           

                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kuning Telur","9","T","T","Y","T","T","img/nutrisi/kuning telur.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Tahu","9","T","T","T","T","T","img/nutrisi/tahu.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Telur","12","T","T","Y","T","T","img/nutrisi/telur.jpg")',[], nullHandler,errorHandler);                           
                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Anak Sapi","9","T","T","T","T","T","img/nutrisi/daging anak sapi.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Ayam","9","T","T","T","T","T","img/nutrisi/daging ayam.jpg")',[], nullHandler,errorHandler);  
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Kambing","9","T","T","T","T","T","img/nutrisi/daging kambing.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Sapi","12","T","T","T","T","T","img/nutrisi/daging sapi.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Hati","9","T","T","T","T","T","img/nutrisi/hati.jpg")',[], nullHandler,errorHandler);                          

                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ikan Salmon","12","T","T","T","Y","T","img/nutrisi/ikan salmon.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ikan Tuna","12","T","T","T","Y","T","img/nutrisi/ikan tuna.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kerang","18","T","T","T","Y","T","img/nutrisi/kerang.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Makarel","12","T","T","T","Y","T","img/nutrisi/makarel.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sarden","12","T","T","T","Y","T","img/nutrisi/sarden.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Udang","18","T","T","T","Y","T","img/nutrisi/udang.jpg")',[], nullHandler,errorHandler);                           
                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kedelai","9","T","T","T","T","T","img/nutrisi/kedelai.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Maizena","7","T","T","T","T","T","img/nutrisi/maizena.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pasta","12","T","T","T","T","T","img/nutrisi/pasta.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sereal dari Beras","6","T","T","T","T","T","img/nutrisi/sereal beras.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sereal Gandum","7","T","T","T","T","T","img/nutrisi/sereal gandum.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Terigu","7","T","T","T","T","T","img/nutrisi/terigu.jpg")',[], nullHandler,errorHandler);                          

                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Biskuit","7","T","T","T","T","T","img/nutrisi/biskuit.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kue Beras","9","T","T","T","T","T","img/nutrisi/kraker.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Madu","12","T","T","T","T","T","img/nutrisi/madu.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pancake","12","T","T","T","T","T","img/nutrisi/pancakes.jpg")',[], nullHandler,errorHandler);                                       
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Puding Bergizi","18","T","T","T","T","T","img/nutrisi/puding.jpg")',[], nullHandler,errorHandler);   
                tx.executeSql('INSERT INTO BahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Roti Lapis","18","T","T","T","T","T","img/nutrisi/sandwich.jpg")',[], nullHandler,errorHandler);                            
            }
        }   
     );
    },errorHandler,nullHandler);                
}

function InsertDataBahanMakananIbuHamil() 
    { 
      db.transaction(function(tx) 
      {  
        tx.executeSql('SELECT * FROM BahanMakananIbuHamil', [], function(transaction, result) 
        {
          if (result.rows.length === 0)
          {
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Beras Putih","Y","T","Y","img/ibu/berasputih.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Beras Merah","Y","Y","Y","img/ibu/berasmerah.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Gandum","Y","Y","Y","img/ibu/gandum.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kacang-kacangan","Y","Y","Y","img/ibu/kacangkacangan.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kuning Telur","T","Y","T","img/ibu/kuningtelur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Kedelai","Y","Y","Y","img/ibu/susukedelai.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Sapi","T","T","Y","img/ibu/sususapi.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Sapi Rendah Lemak","T","Y","Y","img/ibu/sususapirendahlemak.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tahu","Y","Y","Y","img/ibu/tahu.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Teh Hijau","Y","Y","Y","img/ibu/tehhijau.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Telur","T","Y","Y","img/ibu/telur.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tempe","Y","Y","Y","img/ibu/tempe.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Yoghurt","T","T","Y","img/ibu/yogurht.jpg")',[], nullHandler,errorHandler);
            
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Alpukat","Y","T","Y","img/ibu/alpukat.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Apel","Y","Y","Y","img/ibu/apel.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bengkoang","Y","T","Y","img/ibu/bengkoang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jambu biji","Y","T","Y","img/ibu/jambubiji.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jeruk","Y","Y","Y","img/ibu/jeruk.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Mangga","Y","T","Y","img/ibu/mangga.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Melon","Y","T","Y","img/ibu/melon.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Pir","Y","Y","Y","img/ibu/pir.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Pisang","Y","T","Y","img/ibu/pisang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Semangka","Y","T","Y","img/ibu/semangka.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Strawberry","Y","Y","Y","img/ibu/strawberry.jpg")',[], nullHandler,errorHandler);

            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Mentega","Y","T","T","img/ibu/mentega.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Ikan","T","Y","Y","img/ibu/minyakikan.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Jagung","Y","Y","Y","img/ibu/minyakjagung.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Kedelai","Y","Y","Y","img/ibu/minyakkedelai.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Kelapa","Y","T","T","img/ibu/minyakkelapa.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Sayur","Y","Y","Y","img/ibu/minyaksayur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Santan","Y","T","T","img/ibu/santan.jpg")',[], nullHandler,errorHandler);                                          

            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Ayam","T","Y","T","img/ibu/dagingayam.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Kambing","T","Y","T","img/ibu/dagingkambing.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Sapi","T","Y","T","img/ibu/dagingsapi.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Hati","T","Y","T","img/ibu/hati.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ikan Tuna","T","Y","Y","img/ibu/ikantuna.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ikan Salmon","T","Y","Y","img/ibu/ikansalmon.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kerang","T","Y","T","img/ibu/kerang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Udang","T","Y","T","img/ibu/udang.jpg")',[], nullHandler,errorHandler);
            
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Asparagus","Y","Y","Y","img/ibu/asparagus.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bayam","Y","Y","Y","img/ibu/bayam.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Brokoli","Y","Y","Y","img/ibu/brokoli.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bunga Kol","Y","Y","Y","img/ibu/bungakol.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jagung","Y","T","Y","img/ibu/jagung.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jamur","Y","Y","Y","img/ibu/jamur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kacang Panjang","Y","Y","Y","img/ibu/kacangpanjang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kecambah","Y","Y","Y","img/ibu/kecambah.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kentang","Y","T","Y","img/ibu/kentang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Lobak","Y","T","Y","img/ibu/lobak.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Rumput Laut","Y","Y","T","img/ibu/rumputlaut.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Terigu","Y","T","Y","img/ibu/terigu.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Singkong","Y","T","Y","img/ibu/singkong.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Talas","Y","T","Y","img/ibu/talas.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tomat","Y","Y","Y","img/ibu/tomat.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ubi Jalar","Y","T","Y","img/ibu/ubijalar.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO BahanMakananIbuHamil(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Wortel","Y","Y","Y","img/ibu/wortel.jpg")',[], nullHandler,errorHandler);
          }
        }   
       );
      },errorHandler,nullHandler);                
    }

function InsertResep()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM Resep', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Pure Apel + Pir</big><br><br></b><b>Bahan:</b><br>• 25 gr apel, buang kulitnya.<br>• 50 gr pir.<br>• 3 sdm cairan.<br><br><b>Cara membuat:</b><br>Campur kemudian blender atau dihaluskan kemudian disaring.</li>","6","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><big><b>Bubur Beras Merah dan Pepaya</b></big><br><br><b>Bahan:</b><br>• 50 gram tepung beras merah, siap pakai.<br>• 200 cc air matang hangat.<br>• 200 cc susu formula.<br>• 50 gram pepaya.<br>• 1 sendok makan air jeruk manis.<br><br><b>Cara membuat:</b><br>1. Campur tepung dengan air hangat, aduk.<br>2. Tambahkan susu hangat , aduk rata kembali. Sajikan dengan pepaya.<br>3. Haluskan pepaya dengan garpu, saringan kawat  atau blender. Campur dengan air jeruk, aduk rata.<br></li>","6","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><big><b>Pure Pepaya Pisang</b></big><br><br><b>Bahan:</b><br>• 50 gram pepaya<br>• 1 buah pisang<br>• 100 ml ASI<br>• 50 gram susu formula<br>• 75 ml air matang<br><br><b>Cara membuat:</b><br>1. Blender 50 gram pepaya dan ½ buah avokad secara bersamaan.<br>2. Tambahkan 1 buah pisang dan 100 ml asip atau 50 gram susu formula yang sudah dicairkan dengan 75 ml air matang.<br></li>","6","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><big><b>Pure Pepaya Jeruk</b></big><br><br><b>Bahan:</b><br>• 100 gram pepaya, kupas.<br>• 150 ml air jeruk manis.<br><br><b>Cara membuat:</b><br>1. Potong kecil pepaya, masukkan ke dalam blender.<br>2. Tambahkan air jeruk, haluskan. Tuang ke dalam mangkuk kecil, sajikan.<br></li>","6","T","T","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Kuning Manis</big></b><br><br><b>Bahan:</b><br>• 100 gram labu kuning potong dadu.<br>• 75 gram apel, kupas dan buang bagian tengahnya cincang halus.<br>• 100 cc air.<br>• 150 cc susu formula.<br>• ½ sendok teh kayu manis bubuk.<br><br><b>Cara membuat:</b><br>2. Tuang ke dalam mangkuk kecil, tambahkan susu formula, aduk rata sambil diatur kekentalannya. Bubuhi kayu manis bubuk dan sajikan segera.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Sari Alpukat</big></b><br><br><b>Bahan:</b><br>• 500 g daging buah alpukat.<br>• 250 ml susu formula cair.<br><br><b>Cara membuat:</b><br>Campur buah alpukat dengan susu cair. Haluskan dengan blender. Tuang ke dalam gelas bayi.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Susu Crackers Sari Alpukat</big></b><br><br><b>Bahan:</b><br>• 40 gram crackers manis, hancurkan.<br>• 300 ml air panas.<br>• 4 sendok takar susu formula bubuk.<br>• Sari Avocad.<br>• 100 gram daging avocad tua, potong kecil.<br>• 100 ml air jeruk manis.<br><br><b>Cara membuat:</b><br>• Sari alpukat: Masukkan buah alpukat dan sari jeruk manis ke dalam blender, haluskan. <br><i><small>(Kiat memilih alpukat matang: jika buah alpukat digoyang, biji di dalamnya menimbulkan suara)</small></i><br>• Bubur susu: Masukkan crackers dalam mangkuk kecil, beri air hangat, aduk rata.<br>• Bubuhi susu formula, aduk rata kembali. Siram dengan sari alpukat. Suapkan segera pada balita Anda.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Puree Wortel Segar</big></b><br><br><b>Bahan:</b><br>• 100 gram wortel, potong-potong.<br>• 50 cc air jeruk manis.<br><br><b>Cara membuat:</b><br>Haluskan wortel dan air jeruk manis dengan blender hingga lembut. Tuang ke mangkuk kecil, sajikan segera. Untuk 2 porsi.</li>","7","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Sereal Susu Avokad</big></b><br><br><b>Bahan:</b><br>• 200 gram sereal.<br>• 200 gram avokad matang, haluskan bersama 50 cc air matang.<br>• 100 cc susu formula cair.<br>• 150 cc air.<br><br><b>Cara membuat:</b><br>1. Jerang air dalam panci kecil, masukkan sereal lalu masak sambil diaduk hingga mengental. Angkat dari api.<br>2. Masukkan susu cair ke dalam sereal, aduk rata kembali. Tuang dalam mangkuk kecil, tambahkan avokad, sajikan.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Marie Saus Wortel</big></b><br><br><b>Bahan:</b><br>• 8 keping biskuit marie.<br>• 150 cc ASI atau susu formula cair.<br><br><b>Saus:</b><br>50 gram wortel. Bersihkan dan rebus sebentar dalam air, lalu haluskan dengan blender.<br><br><b>Cara membuat:</b><br>1. Campur biskuit dan susu dalam mangkuk.<br>2. Aduk hingga biskuit lumat.<br>3. Siram saus wortel pada bubur biskuit, aduk. Sajikan.<br></li>","7","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Smoothie Peach</big></b><br><br><b>Bahan:</b><br>• 100 gram buah peach.<br>• 250 cc ASI atau susu formula cair.<br>• ½ sendok teh gula pasir.<br><br><b>Cara membuat:</b><br>Campur peach, susu dan gula pasir, haluskan. Tuang ke dalam gelas kecil, sajikan.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Puree Bayam Labu Kuning</big></b><br><br><b>Bahan:</b><br>• 50 gram bayam, iris halus.<br>• 100 gram labu kuning, kupas, potong dadu kecil.<br>• 50 gram daging ayam, buang lemak, cuci, cincang.<br>• 250 ml air.<br>• 100 ml ASI atau 2 sendok takar susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Rebus potongan labu kuning dan ayam cincang hingga matang.<br>2. Masukkan bayam, kemudian rebus lagi selama 3 menit hingga bayam lunak. Angkat, tiriskan.<br>3. Haluskan, tuang ke mangkuk saji, tambahkan susu. Aduk rata.<br></li>","9","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Pot Ayam</big></b><br><br><b>Bahan:</b><br>• 50 gram dada ayam, cincang.<br>• 30 gram wortel, kupas, potong kecil.<br>• 30 gram kentang, kupas, potong kecil.<br>• 1 sendok makan mentega.<br>• 250 ml kaldu ayam.<br><br><b>Cara membuat:</b><br>1. Panaskan mentega, lalu tumis daging ayam hingga berubah warna.<br>2. Tambahkan sayuran dan masukkan kaldu ayam. Masak hingga bahan matang. Angkat, haluskan.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Pure Apel Buncis</big></b><br><br><b>Bahan:</b><br>• 50  gram buncis, buang seratnya, iris.<br>• 50  gram apel, kupas, buang bagian tengahnya, potong kecil.<br>• 100 ml ASI atau 2 sendok takar peres susu formula yang dilarutkan dalam 100 ml air matang.<br>• 250 ml air untuk merebus.<br><br><b>Cara membuat:</b><br>1. Rebus buncis dan apel secara terpisah hingga lunak. Angkat.<br>2. Setelah agak dingin, haluskan buncis dan apel bersama susu.<br>3. Sajikan dalam mangkuk. Untuk 2 porsi, berikan pada bayi 6-9 bulan.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Beras Merah Wortel Daging</big></b><br><br><b>Bahan:</b><br>• 25 bungkus agar-agar bubuk.<br>• 400 cc air kaldu.<br>• 1/2 sendok teh garam.<br>• 75 gram daging giling, rebus.<br>• 100 gram labu kuning, iris dadu kecil, rebus.<br>• 100 gram wortel, iris bentuk bintang, rebus.<br><b>Cara membuat:</b><br>1. Rebus beras merah bersama air kaldu dan garam. Aduk perlahan hingga menjadi bubur.<br>2. Masukkan daging giling dan wortel, aduk sebentar hingga semua bahan tercampur rata.<br>3. Angkat dari api. Suapkan pada bayi dalam keadaan hangat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Jus Buah Yoghurt</big></b><br><br><b>Bahan:</b><br>• 50 gram pisang.<br>• 50 gram apel.<br>• 1 sendok makan yoghurt tawar.<br><br><b>Cara membuat:</b><br>Haluskan pisang dan apel, campur dengan yoghurt. Aduk rata. Tuang ke mangkuk kecil, sajikan segar.<br></li>","9","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Nasi Tofu</big></b><br><br><b>Bahan:</b><br>• 25 gram beras.<br>• 650 cc kaldu.<br>• 25 gram daging ayam, cincang halus.<br>• 30 gram tofu, potong kecil.<br>• 30 gram wortel, parut halus.<br>• 2 sendok makan margarin.<br><br><b>Cara membuat:</b><br>1. Campur beras dengan kaldu, masak sambil sesekali diaduk hingga menjadi bubur.<br>2. Masukkan ayam, masak hingga ayam matang. Masukkan tofu dan wortel, masak hingga wortel lunak. Tambahkan margarin, aduk terus. Angkat. Sajikan hangat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Tofu Kuah Wortel</big></b><br><br><b>Bahan:</b><br>• 50 gram tofu, potong dadu 1x1 cm.<br>• 50 gram ayam cincang.<br>• 50 gram wortel , kupas, cuci, haluskan.<br>• 1 sendok makan margarin.<br>• ½ sendok teh garam.<br>• 250 cc air.<br><br><b>Cara membuat:</b><br>1. Panaskan margarin, masukkan ayam cincang dan tofu. Masak sambil diaduk-aduk hingga matang.<br>2. Tuangi air, masukkan garam dan wortel, aduk dan masak mendidih. Angkat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Sereal Kiwi</big></b><br><br><b>Bahan:</b><br>• 30 gram sereal instan.<br>• 1 buah kiwi, kupas, potong kecil.<br>• 100 ml ASI atau 2 sendok takar susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Campur sereal instan dengan air panas sambil diaduk hingga kental. Sisihkan.<br>2. Haluskan kiwi bersama susu dalam blender. Tuang ke dalam sereal, aduk rata. Sajikan hangat dalam mangkuk kecil.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Labu Brokoli</big></b><br><br><b>Bahan:</b><br>• 50 gram labu kuning, buang biji, potong kecil.<br>• 30 gram brokoli, potong sesuai kuntum.<br>• 100 ml ASI atau 2 sendok takar peres susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Kukus labu kuning dan brokoli hingga matang. Angkat.<br>2. Haluskan dengan blender.<br>3. Pindahkan ke dalam mangkuk kecil, tambahkan susu, aduk rata. Sajikan segera.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Kentang Kukus Daging Cincang</big></b><br><br><b>Bahan:</b><br>• 50 gram kentang, kupas, potong dadu kecil.<br>• 50 gram daging cincang.<br>• 30 gram buncis, buang serat, iris halus.<br>• 1 sendok makan margarin.<br>• 30 ml air.<br><br><b>Cara membuat:</b><br>1. Masukkan kentang, daging dan buncis dalam mangkuk tahan panas.Tambahkan margarin dan air, aduk rata.<br>2. Panaskan dandang berisi air, kukus campuran kentang hingga matang. Angkat, sajikan setelah dingin.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Sereal Melon</big></b><br><br><b>Bahan:</b><br>• 2 sendok makan oat.<br>• 150 ml air.<br>• 100 gram melon, potong kecil.<br>• 100 ml ASI atau 2 sendok takar peres susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Rebus sereal dengan 100 ml air hingga mendidih dan kental. Angkat.<br>2. Campur  melon dan susu, haluskan dengan blender.<br>3. Tuang campuran melon susu ke dalam sereal, aduk rata. Sajikan.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Ayam Brokoli</big></b><br><br><b>Bahan:</b><br>• 60 gram beras, cuci bersih.<br>• 25 gram ayam, dicincang halus.<br>• 50 gram brokoli, cuci bersih<br>• 500 cc air untuk dimasak.<br><br><b>Cara membuat:</b><br>1. Masak beras dengan air dan daging ayam cincang, aduk-aduk hingga beras menjadi bubur. Angkat.<br>2. Rebus brokoli kurang dari 5 menit, angkat. Selanjutnya haluskan dengan blender dan campur rata dengan bubur dan ayam.<br>3. Hidangkan segera selagi hangat.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Makaroni Sayur Panggang</big></b><br><br><b>Bahan:</b><br>• 100 gram makaroni rebus.<br>• 50 gram wortel, parut.<br>• 50 gram bayam, cincang halus.<br>• 100 gram daging cincang.<br>• 75 cc susu cair.<br>• 1 butir telur, kocok.<br>• 2 sendok makan margarin, lelehkan.<br>• 100 gram keju cheddar parut.<br>• 50 gram keju cheddar parut untuk taburan.<br>• 200  cc kaldu.<br><br><b>Cara membuat:</b><br>1. Panaskan oven 180°C, olesi loyang persegi kecil dengan margarin.<br>2. Campur dalam mangkuk, makaroni, wortel, bayam, daging cincang, margarin dan keju. Aduk rata.<br>3. Masukkan telur kocok, dan tuangi susu sedikit demi sedikit sambil diaduk rata.<br>4. Tuang adonan ke dalam loyang, taburi keju lalu panggang 75 menit hingga matang lalu angkat.<br>5. Setelah dingin, potong-potong lalu sajikan.<br></li>","12","Y","Y","Y","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Tim Kentang Salmon</big></b><br><br><b>Bahan:</b><br>• 80 gram kentang, kupas, potong dadu kecil.<br>• 50 gram ikan salmon, cincang.<br>• 50 gram brokoli, cincang.<br>• 1 sendok makan margarin.<br>• 200 cc air untuk merebus.<br><br><b>Cara membuat:</b><br>1. Rebus kentang dalam 200 cc air hingga lunak.<br>2. Masukkan ikan salmon cincang, masak sambil diaduk hingga matang.<br>3. Masukkan brokoli dan margarin, masak sebentar hingga brokoli matang, angkat.<br>4. Setelah agak dingin, haluskan. Sajikan dalam mangkuk kecil.<br></li>","12","T","T","T","Y")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bubur Sayur Telur</big></b><br><br><b>Bahan:</b><br>• 20 g daging ayam.<br>• 250 ml air kaldu.<br>• 20 g kentang, kupas, potong kecil.<br>• 20 g wortel parut.<br>• 20 g tomat, buang bijinya, cincang.<br>• 1 kuning telur.<br>• 2 sdm tepung maizena.<br>• 1 sdt margarin.<br>• 20 g daun bayam, iris.<br><br><b>Cara membuat:</b><br>1. Rebus daging ayam hingga lunak. Tambahkan kentang, woret parut, tomat cincang. Aduk hingga setengah matang.<br>2. Bubuhi kuning telur, tepung maizena dan margarin. Aduk pula hingga matang dan mengental.<br>3. Bagi dua adonan. Satu bagian sisihkan untuk makan malam dan beri bagian sisanya dengan 10 gram irisan daun bayam. Aduk pula hingga sayuran matang, angkat.<br>4. Tuang ke dalam blender dan haluskan. Atau saring dengan saringan kawat khusus untuk makanan bayi.<br>5. Masukkan ke dalam mangkuk bayi dan suapkan dengan sendok plastik kecil.<br></li>","12","T","T","Y","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Pepes Tahu</big></b><br><br><b>Bahan:</b><br>• 2 siung bawang merah.<br>• 1 siung bawang putih.<br>• 1 butir kemiri sangrai.<br>• 100 gram tahu putih.<br>• 100 gram salmon.<br>• Labu siam, daun kemangi dan tomat secukupnya.<br><br><b>Cara membuat:</b><br>1. Haluskan 2 siung bawang merah, 1 siung bawang putih dan 1 butir kemiri sangrai.<br>2. Campurkan dengan 100 gram tahu putih dan 100 gram salmon tanpa tulang yang sudah dikukus dan dihaluskan.<br>3. Tata di atas daun pisang: 2 sendok makan tahu, 1 lembar daun kemangi,  tomat dan labu siam yang dipotong memanjang. Kukus selama 15 menit.<br></li>","18","T","T","T","Y")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Bola Kentang Kacang Polong</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• ½ sendok makan mentega tawar.<br>• 1 buah kentang.<br>• 50 gram kacang polong.<br>• 2 sendok teh tepung terigu.<br>• 100 ml ASIP atau 3 sendok takar susu formula.<br>• 100 ml air matang.<br>• 25 gram keju parut.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih dengan ½ sendok makan mentega tawar.<br>2. Masukkan 1 buah kentang yang sudah dihaluskan dan 50 gram kacang polong yang sudah direbus dan dicincang kasar. Aduk rata.<br>3. Tambahkan 2 sendok teh tepung terigu dan 100 ml ASIP atau 3 sendok takar susu formula, seduh dalam 100 ml air matang.<br>4. Aduk rata dan taburi dengan 25 gram keju parut. Buat bulatan, panggang sebentar.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Makaroni Saus Keju</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• 50 gram daging sapi cincang.<br>• 100 ml kaldu.<br>• 25 gram wortel parut.<br>• 25 gram keju parut.<br>• 2 sendok makan makaroni.<br>• 1 butir kuning telur.<br>• 25 gram brokoli.<br>• 2 sendok makan makaroni rebus.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih yang sudah dicincang halus.<br>2. Masukkan 50 gram daging sapi cincang. Aduk hingga matang.<br>3. Masukkan 100 ml kaldu, 25 gram wortel parut dan 25 gram keju parut. Masak hingga matang.<br>4. Masukkan 1 butir kuning telur yang sudah dikocok, aduk rata. Tambahkan 25 gram brokoli yang dicincang halus.<br>5. Tuang saus di atas 2 sendok makan makaroni yang sudah direbus.<br></li>","18","T","T","Y","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Tim Jagung Daging</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• 1 sendok teh mentega tawar.<br>• 50 gram daging giling.<br>• 50 gram jagung serut.<br>• 25 gram wortel parut.<br>• 25 gram sawi hijau.<br>• 75 gram nasi tim.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih yang sudah dihaluskan menggunakan 1 sendok teh mentega tawar.<br>2. Masukkan 50 gram daging giling, 50 gram jagung serut, dan 25 gram wortel diparut kasar. Masak hingga lunak dan matang. <br>3. Tambahkan 25 gram sawi hijau yang diiris halus. Cetak 75 gram nasi tim, tambahkan tumisan daging di atasnya.<br></li>","18","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Kembang Kol Kentang Panggang</big></b><br><br><b>Bahan:</b><br>• 100 gram kentang.<br>• 100 gram kembang kol.<br>• 1 siung bawang putih.<br>• ½ sendok teh mentega tawar.<br>• 25 gram keju parut.<br>• daging ayam secukupnya.<br><br><b>Cara membuat:</b><br>1. Kukus 100 gram kentang dan 100 gram kembang kol. Haluskan keduanya.<br>2. Tumis 1 siung bawang putih, menggunakan ½ sendok teh mentega tawar.<br>3. Masukkan ayam, masak hingga matang.<br>4. Campurkan dengan kentang, taburi 25 gram keju parut. Panggang hingga matang.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Puding Yoghurt Avokad</big></b><br><br><b>Bahan:</b><br>• ½ bungkus agar-agar putih.<br>• 50 gram yoghurt tawar.<br>• 20 gram avokad, potong dadu kecil.<br>• 100 ml air.<br><br><b>Saus:</b><br>• 100 ml susu.<br> • 50 ml jus jeruk.<br>• ½ sendok teh tepung maizena, cairkan.<br><br><b>Cara membuat:</b><br>1. Masak agar-agar hingga mendidih. Angkat, masukkan yoghurt, aduk rata.<br>2. Sisihkan 1/3 adonan, lalu campur dengan avokad, aduk rata.<br>3. Cetak adonan dengan menuangkan adonan agar-agar avokad terlebih dahulu. Tunggu sebentar, lalu tuang sisanya.<br>4. Saus: Masak jus jeruk, susu dan tepung maizena hingga mengental.<br>5. Sajikan puding dengan sausnya.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Pasta Sayur</big></b><br><br><b>Bahan:</b><br>• 50 gram pasta keong.<br>• 50 gram daging cincang.<br>• 1 sendok teh bawang bombay cincang.<br>• 30 gram kacang polong, cincang.<br>• 50 gram wortel, kupas, parut.<br>• 30 gram tomat, cincang.<br>• 250 ml kaldu.<br><br><b>Cara membuat:</b><br>1. Rebus daging cincang bersama kaldu hingga daging matang.<br>2. Tambahkan bawang bombay, kacang polong,  wortel, dan tomat, tutup dan masak di atas api kecil  hingga bahan matang.<br>3. Masukkan pasta, masak hingga lunak.  Angkat dan haluskan. Sajikan dalam mangkuk kecil.<br></li>","18","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO Resep(Resep, UsiaResep, Resep_Laktosa, Resep_Casein, Resep_Telur, Resep_IkanLaut) VALUES ("<li><b><big>Agar-agar Buah Saus Susu</big></b><br><br><b>Bahan:</b><br>• ½ bungkus agar-agar bubuk warna putih.<br>• 30 gram pure Heinz  mango-apple.<br>• 25 gram mangga arumanis, kupas dan haluskan.<br>• 650 ml air matang.<br><br><b>Saus:</b><br>• 20 gram tepung maizena.<br>• 100 ml ASI atau 2 sendok takar susu formula, cairkan dalam 100 ml air matang.<br>• 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Campur bubuk agar-agar dan air, lalu aduk rata kemudian masak hingga mendidih. Angkat.<br>2. Tambahkan pure instan dan buah mangga segar yang telah dihaluskan.  Aduk rata,  tuang ke dalam cetakan. Diamkan hingga dingin dan padat, lalu sisihkan.<br>3. Buat saus susu: Campur tepung maizena dengan air, aduk rata. Panaskan sambil diaduk terus hingga mendidih dan kental. Angkat, tambahkan susu, aduk rata.<br>4. Keluarkan agar-agar dari cetakan, letakkan di piring saji untuk bayi,  lalu siram dengan saus susu. Sajikan.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
             }
        }   
     );
    },errorHandler,nullHandler);
}

function InsertResepIbuHamil()
{
      db.transaction(function(tx) 
      {  
        tx.executeSql('SELECT * FROM ResepIbuHamil', [], function(transaction, result) 
        {
          if (result.rows.length === 0)
          {
            //Y = boleh ; T = tidak boleh
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Setup Pisang, Semangka dan Kacang Merah</big><br><br></b><b>Bahan:</b><br>• 25 gram kacang merah, rebus.<br>• 50 gram semangka potong dadu 2 cm.<br>• ½ buah pisang ambon, iris.<br>• 25 gram rambutan.<br>• 125 ml jus leci.<br>• 1 sdt madu.<br>• 1 sdt air jeruk nipis.<br>• Stroberi segar dan daun mint.<br><br><b>Cara membuat:</b><br>1. Siapkan pinggan, susun kacang merah rebus, semangka, rambutan dan irisan pisang, simpan dalam lemari pendingin.<br>2. Kuah : campur jus leci dengan madu dan air jeruk nipis, aduk rata. Tuangkan kedalam wadah isi buah dan simpan kembali dalam lemari pendingin.<br>3. Sajikan dingin, hias dengan stroberi, dan daun mint.</li>","Y","T","Y")',[], nullHandler,errorHandler);   
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Panada Ikan</big><br><br></b><b>Bahan:</b><br>• 5 gram mentega.<br>• Merah telur untuk mengoles secukupnya.<br>• 13 gram tepung terigu.<br>• 7 gram telur ayam.<br>• 17 gram ikan tongkol.<br>• 3 gram roti tawar.<br>• 5 gram wortel.<br>• 10 gram Tahu.<• 2 gram tepung susu.<br>• Garam.<br>• Lada halus.<br>• Air 15 cc.<br>• 1 gram ragi.<br><br><b>Cara membuat:</b><br>1. Untuk Isi : Ikan tongkol di kukus,lalu suir-suir kecil. Tumis wortel yang dicincang halus, tambahkan tahu yang sudah dipotong kecil, ikan yang sudah di suir, masak hingga wortel cukup.<br>2. Untuk kulit : Campurkan susu bubuk, ragi, garam, lada halus , roti tawar dicabik-cabik halus, mentega serta telur (aduk rata). Tambahkan terigu dan air sambil diuleni sampai kalis.<br>3. Ratakan adonan menjadi lapisan yang tipis, lalu potong menjadi lingkaran-lingkaran kecil bergaris tengah 5 ½ cm.<br>4. Ambil sehelai adonan, letakkan sedikit ikan di tengahnya. Tambahkan adonan ikan dan wortel cincang. Lipat adonan menutupi isi bentuk setengah lingkaran lalu tekan pinggirnya hingga tertutup rapat . Dengan mempergunakan jari telunjuk dan ibu jari, lipatkan sedikit pinggirnya ke atas lalu dari tengah lipatan tadi lipatkan lagi ke atas. Begitu selanjutnya hingga pinggiran setengah lingkaran tadi tertutup rapat dengan lipit-lipit kecil. Olesi atasnya dengan merah telur lalu bakar selama 30 menit dengan panas sedang.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Srikaya Pandan Nangka</big><br><br></b><b>Bahan:</b><br>• 35 gram telur ayam.<br>• 10 gram gula pasir.<br>• 50 ml santan kental.<br>• 2 gram tepung susu.<br>• 1 sdt air daun suji atau pandan pasta secukupnya.<br>• 1/4 lembar daun pandan, potong-potong.<br>• 10 gram (1 buah nangka  masak), potong dadu, potongan nangka dan daun pandan untuk hiasan.<br><br><b>Cara membuat:</b><br>1. Siapkan mangkuk atau pinggan tahan panas, sisihkan.<br>2. Kocok telur dan gula hingga gula larut.<br>3. Masukkan santan, tepung susu ke dalam kocokan telur, aduk rata, tambahkan hunkue dan pandan pasta, aduk rata.<br>4. Tuangkan adonan telur ke dalam mangkuk atau pinggan dan taburi nangka, beri sepotong daun pandan.<br>5. Kukus selama 20 menit dan tutup dandang dibuka sedikit hingga matang serta adonan menjadi padat, angkat lalu dinginkan.<br>6. Taburi atasnya dengan potongan nangka dan daun pandan sebagai pemanis.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Otak-otak Panggang</big><br><br></b><b>Bahan:</b><br>• 30 gram daging ikan tenggiri/ikan lain.<br>• ¼ tangkai daun bawang.<br>• 10 gram sagu.<br>• 20 ml santan kental.<br>• 1 helai daun jeruk.<br>• ¼ tangkai daun seledri.<br>• 1 siung kecil bawang putih.<br>• 2 gram gula pasir.<br>• 10 gram putih telur.<br>• Merica.<br>• Garam.<br>• Daun untuk membungkus.<br><br></b><b>Bahan Saus Kacang:</b><br>• 25 gram kacang tanah.<br>• 1 buah cabe merah.<br>• 10 gram gula pasir.<br>• 1 sdt garam.<br>• Minyak untuk menggoreng.<br>• Cuka secukupnya.<br><br><b>Cara membuat:</b><br>1. Daging ikan dihaluskan. Bawang putih dihaluskan. Daun jeruk, daun bawang dan daun seledri diiris halus. Campur seluruh bahan dan aduk hingga rata. Bagi adonan menjadi 2 bagian. Bungkus dengan daun secara memanjang. Panggang selama 5 menit. Hidangkan dengan saus kacang.<br>2. Saus kacang : Kacang yang sudah digoreng, dihaluskan dengan cabe, gula dan garam. Beri air matang sesuai selera. Dapat dihidangkan dengan diberi jeruk limo.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Serabi Telur</big><br><br></b><b>Bahan:</b><br>• 20 gram tepung terigu.<br>• 20 gram telur kocok.<br>• 30 cc air.<br>• 2 gram margarin.<br>• garam.<br><br></b><b>Bahan Kuah:</b><br>• 5 gram kacang hijau.<br>• 5 gram gula merah.<br>• 5 gram gula pasir.<br>• ½ lembar daun pandan.<br>• Garam.<br>• 10 cc santan.<br><br><b>Cara membuat:</b><br>1. Campur tepung terigu dengan telur kocok, tuang air sedikit demi sedikit sambil diaduk rata. Masukkan garam dan aduk rata.<br>2. Panaskan wajan serabi, tuang 1 sendok sayur kecil adonan serabi, tutup, masak hingga matang.<br>3. Kuah : rebus santan dan gula merah sambil diaduk hingga gula larut, lalu saring. Rebus kembali bersama gula pasir dan daun panda. Kentalkan dengan tepung sagu, beri garam, aduk rata. Angkat.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bola-Bola Udang</big><br><br></b><b>Bahan:</b><br>• 30 gram udang, haluskan.<br>• 5 ml santan.<br>• 10 gram telur.<br>• 10 gram tepung sagu.<br>• Garam.<br>• Merica bubuk.<br>• GUla pasir.<br><br></b><b>Bumbu yang dihaluskan:</b><br>• 1 butir bawang merah.<br>• 1 siung bawang putih.<br>• 1 buah cabai merah besar.<br>• 1 buah cabai rawit merah.<br>• 1 lembar daun jeruk.<br>• 1 sdt irisan batang sereh.<br><br></b><b>Panir:</b><br>• 25 gram telur.<br>• 10 gram tepung roti.<br>• Minyak untuk menggoreng.<br><br><b>Cara membuat:</b><br>1. Campurkan udang, tepung, telur, santan dan bumbu yang sudah dihaluskan.<br>2. Masukkan adonan ke dalam loyang.<br>3. Kukus hingga matang dan dinginkan.<br>4. Potong adonan sesuai selera.<br>5. Celupkan ke dalam adonan telur dan lumuri dengan tepung roti.<br>6. Goreng hingga warna kuning keemasan.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bolu Kukus</big><br><br></b><b>Bahan:</b><br>• 15 gram telur.<br>• 15 gram tepung terigu.<br>• 10 gram gula pasir.<br>• 15 ml air soda.<br>• 8 gram tepung susu.<br>• Vanili.<br>• Cokelat bubuk.<br>• ¼ gram soda kue.<br><br><b>Cara membuat:</b><br>1. Siapkan cetakan bolu kukus, alasi dengan kertas roti, masukkan ke dalam kukusan yang airnya sedang mendidih. Bungkus tutup kukusan dengan serbet kain.<br>2. Kocok telur, gula, vanili sampai kental dan naik.<br>3. Masukkan secara bergantian sedikit tepung, sedikit air soda, berulang-ulang hingga bahan habis, sambil diaduk rata.<br>4. Ambil 1 sdt adonan, beri coklat bubuk, aduk rata.<br>5. Tuangkan adonan kedalam cetakan sampai hampir penuh.<br>6. Tambahkan 1 sdt adonan coklat.<br>7. Tutup kukusan, masak + 20 menit dengan api besar tanpa membuka tutupnya. Kukus hingga matang dan merekah, selama + 25 menit.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Martabak Manis</big><br><br></b><b>Bahan:</b><br>• ½ gram ragi instan.<br>• 15 gram tepung terigu.<br>• 5 gram gula pasir.<br>• 10 gram telur.<br>• Soda kue.<br>• 20 cc air.<br><br></b><b>Bahan Taburan:</b><br>• 5 gram kacang tanah, sangrai, kupas, cincang.<br>• 2 gram wijen, sangrai.<br>• 3 gram cokelat beras.<br>• 5 gram susu kental manis.<br><br><b>Cara membuat:</b><br>1. Aduk dan larutkan ragi dengan air hangat sampai berbuih, sisihkan.<br>2. Campur tepung dan gula, buat lubang ditengahnya, masukkan telur, aduk dan uleni sambil dituangi air sedikit demi sedikit sampai gula larut. Masukkan soda kue, uleni, tutup dengan plastik, biarkan + 15 menit di tempat hangat agar mengembang.<br>3. Panaskan penggorengan datar diameter 12-15 cm, oleskan margarin.<br>4. Dengan api sedang, aduk dan tuangkan 1 sendok sayur adonan.<br>5. Setelah mengembang naik dan selagi permukaan belum mengering, taburkan bahan yang disukai, lipat dan balik, segera angkat.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Kroket Kentang</big><br><br></b><b>Bahan:</b><br>• 2o gram kentang dikupas, kukus, haluskan.<br>• 5 gram roti tawar.<br>• Garam.<br>• 2 gram susu bubuk.<br><br></b><b>Isi:</b><br>• 10 gram ayam/daging cincang/udang kupas.<br>• ½ sdt bawang putih cincang.<br> 8 gram wortel dicincang halus.<br> 1 sdt seledri dan daun bawang diiris tipis.<br> 10 cc susu cair.<br> Garam.<br> 2 gram gula pasir.<br> Lada halus.<br><br></b><b>Untuk memanir:</b><br>• 10 ml telur.<br>• 10 gram tepung roti.<br>• Minyak goreng.<br><br><b>Cara membuat:</b><br>1. Percikkan air masak keatas roti lalu peras airnya. Campurkan roti, kentang, susu bubuk, dan garam lalu aduk hingga tercampur rata.<br>2. Untuk isinya : goreng bawang putih hingga baunya harum lalu masukkan ayam/daging/udang serta wortel dengan garam, gula, lada, bumbu masak. Masak hingga wortel lunak. Campurkan tepung dengan susu lalu tuangkan kedalam campuran ayam/daging/udang tadi. Masukkan daun bawangnya. Masak sambil diaduk hingga air habis.<br>3. Masukkan isi ke dalam adonan kentang, bentuk oval.<br>4. Lumuri telur dan gulingkan diatas tepung panir.<br>5. Panaskan minyak goreng lalu goreng hingga kuning kecoklatan. Angkat lalu hidangkan.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lumpia Tahu</big><br><br></b><b>Bahan:</b><br>• 4 gram tepung beras.<br>• 6 gram tepung terigu.<br>• 20 cc air.<br>• 6 gram putih telur.<br>• 3 gram minyak goreng.<br>• Garam.<br>• Selai kacang.<br><br></b><b>Isi:</b><br>• 10 gram udang, kupas, rebus, iris.<br>• 15 gram tahu.<br>• Daun selada bokor.<br>• 2 gram bihun, rendam air panas hingga lunak.<br>• 10 gram wortel, serut.<br><br></b><b>Saus:</b><br>• 150 ml saus sambal manis.<br>• 1 sdm air jeruk nipis.<br>• 2 sdm madu.<br>• 2 batang daun ketumbar, iris.<br><br><b>Cara membuat:</b><br>1. Kulit : campur tepung beras, tepung terigu, air, putih telur, minyak goreng dan garam, aduk rata. Buat dadar tipis-tipis dengan wajan datar ukuran 18 cm.<br>2. Tumis udang dan tahu.<br>3. Penyelesaian : Ambil selembar kulit lumpia, olesi selai kacang, beri udang, tahu, selada, bihun, wortel, gulung bentuk lumpia.<br>4. Saus : campur saus sambal manis, air jeruk nipis, dan madu, aduk rata, tambahkan irisan daun ketumbar, aduk rata.<br>5. Sajikan lumpia dengan sausnya.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Somay Ayam + Udang</big><br><br></b><b>Bahan:</b><br>• 10 gram udang.<br>• 10 gram daging ayam, cincang.<br>• Bawang merah, cincang, tumis.<br>• 15 gram tepung sagu.<br>• 2 gram putih telur.<br>• Garam.<br>• Merica bubuk.<br>• 1 gram gula pasir.<br>• Kecap asin.<br>• 1 gram minyak wijen.<br>• Kulit pangsit, potong bentuk bulat (diameter 7 cm), celup terlebih dahulu dalam air panas.<br>• 5 cc air.<br><br><b>Cara membuat:</b><br>1. Campur udang dengan ayam, aduk rata. Tambahkan tumisan bawang merah cincang, masukkan bersama minyaknya, aduk rata.<br>2. Masukkan tepung sagu, putih telur, garam, merica, gula pasir, kecap asin, dan minyak wijen, aduk rata.<br>3. Ambil selembar kulit pangsit, taruh 1 sdm adonan isi dan bentuk siomay. Lakukan terus hingga semua pangsit habis dibentuk.<br>4. Masukkan adonan hiasan kedalam kantung plastik segitiga dan semprotkan diatas siomay.<br>5. Kukus siomay selama 15 menit hingga matang, angkat. Selagi panas, olesi dengan minyak goreng. Sajikan hangat.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Tembro Spesial</big><br><br></b><b>Bahan:</b><br>• 40 gram ubi kayu/singkong, kupas dan parut.<br>• Garam.<br><br></b><b>Isi Tembro:</b><br>• 20 gram tempe dihaluskan.<br>• 10 gram daging sapi cincang.<br>• Seledri, iris halus.<br>• .Minyak untuk menumis<br><br></b><b>Bumbu dihaluskan:</b><br>• Cabai rawit.<br>• Cabai merah.<br>• Bawang putih.<br>• Bawang merah.<br>• Garam dan gula menurut selera.<br><br><b>Cara membuat:</b><br>1. Isi : Tumis bumbu halus sampai matang dan harum. Masukkan daging dan tempe yang telah dihaluskan , aduk, beri 10 ml air. Masak sampai matang dan air habis. Masukkan seledri, aduk sampai layu, angkat, dinginkan.<br>2. Campur ubi kayu parut dan garam.<br>3. Ambil 1-2 sdm adonan, bulatkan, tipiskan, beri ½ sdm isi ditengahnya, tutup kembali, bentuk menjadi bulat telur.<br>4. Goreng dengan api sedang hingga matang kecoklatan, tiriskan. Hidangkan selagi hangat dan empuk.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Dadar GUlung Kacang Tolo</big><br><br></b><b>Bahan untuk dadar:</b><br>• 15 gram tepung terigu.<br>• 15 gram telur (kocok sebentar).<br>• 15 ml santan.<br>• Garam.<br>• Air daun suji.<br><br></b><b>Bahan untuk isi:</b><br>• 10 gram kacang tolo.<br>• 10 gram kelapa parut.<br>• 8 gram gula merah atau gula pasir.<br>• Daun pandan.<br>• Garam.<br>• Margarin untuk mengoles.<br><br><b>Cara membuat:</b><br>1. Isi : Masak dan aduk bahan menjadi satu dengan api kecil, masak sampai matang dan air habis.<br>2. Dadar : Campur tepung, telur, garam dan air daun suji. Tuangkan santan sedikit demi sedikit sambil diaduk sampai adonan halus, boleh dengan mixer.<br>3. Panaskan penggorengan datar berdiameter 20 cm, oleskan margarin.<br>4. Aduk rata adonan, tuang dan buat dadar tipis yang rata sampai adonan habis.<br>5. Isi setiap lembar dadar dengan adonankacang dan kelapa, lipat sisi bawah, kanan dan kiri, lalu gulung.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lemper Ayam</big><br><br></b><b>Bahan:</b><br>• 25 gram beras ketan putih (rendam 2 jam, tiriskan).<br>• 15 ml santan.<br>• Garam.<br>• Daun pandan, buat simpul.<br><br></b><b>Untuk isi:</b><br>• 15 gram ayam, rebus lunak.<br>• Daun salam.<br>• Serai, memarkan.<br>• 2 gram gula merah.<br><br></b><b>Bumbu dihaluskan:</b><br>• Ketumbar.<br>• Bawang putih.<br>• Bawang merah.<br>• Kemiri, sangrai.<br>• Asam.<br>• Garam.<br><br><b>Cara membuat:</b><br>1. Isi : daging ayam, cabik-cabik, iris halus. Tumis bumbu halus sampai harum, tuangi air, masukkan semua bahan isi, masak dengan api kecil sampai kering. Angkat, dinginkan.<br>2. Kukus ketan dengan daun pandan sampai setengah matang, keluarkan, pindahkan ke panc.<br>3. Tuangkan santan, beri garam, jerang di atas api kecil sampai santan terisap habis oleh ketan sambil sesekali diaduk. Kukus kembali sampai matang.<br>4. Selagi panas, ratakan ketan dalam loyang datar setebal 1 cm, potong 6 x 8 cm. Ambil dan pipihkan sepotong ketan.. Beri 1 sdm adonan isi, rapatkan dan bentuk hingga terbentuk lemper bergaris tengah 4 cm, panjang 6 cm.<br>5. Lilit atau bungkus seluruhnya dengan daun pisang.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bakwan Toge Tahu Udang</big><br><br></b><b>Bahan:</b><br>• Seledri, iris halus.<br>• Daun bawang, iris halus.<br>• 15 gram tahu.<br>• 15 gram udang, tanpa kepala + kulit.<br>• 15 gram tepung terigu.<br>• 15 gram toge.<br>• 10 gram telur ayam.<br><br></b><b>Bahan Adonan:</b><br>• 10 ml santan.<br>• Soda kue.<br>• Garam.<br>• Merica bubuk.<br>• Bawang putih.<br>• Minyak untuk menggoreng.<br><br><b>Cara membuat:</b><br>1. Campur semua bahan adonan, aduk bersama telur. Kocok sambil dituangi santan/air sampai terbentuk adonan yang licin.<br>2. Masukkan tahu, toge, daun bawang dan seledri.<br>3. Dengan api sedang, panaskan minyak cukup banyak. Celupkan sendok sayur yang akan digunakan sebagai cetakan.<br>4. Angkat sendok setelah panas, isi dengan adonan, tambahkan 1 ekor udang utuh diatasnya, masukkan dalam minyak panas.<br>5. Lepaskan bakwan dari sendok setelah mungkin, goreng matang kecoklatan, tiriskan.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Sosis Solo</big><br><br></b><b>Bahan kulit:</b><br>• 10 gram telur.<br>• 15 gram tepung terigu.<br>• Garam.<br>• Air.<br>• 2 gram margarin.<br><br></b><b>Bahan Isi:</b><br>• 10 gram daging sapi giling.<br>• Bawang putih.<br>• Bawang merah.<br>• Minyak goreng.<br>• Ketumbar.<br>• Merica bubuk.<br><br></b><b>Untuk menggoreng:</b><br>• 5 gram telur.<br>• Garam.<br>• Minyak goreng secukupnya.<br><br><b>Cara membuat:</b><br>1. Kulit : campur telur, tepung terigu dan garam, aduk rata. Tuangkan air sedikit demi sedikit sambil diaduk hingga menjadi adonan yang cair.<br>2. Siapkan wajan datar anti lengket, tuangkan adonan 1 sendok sayur. Buat dadar tipis, angkat. Lakukan hal yang sama hingga adonan habis.<br>3. Isi : tumis bawang putih dan bawang merah serta ketumbar hingga harum aromanya. Masukkan daging sapi giling lalu bubuhkan merica bubuk dan garam., masak hingga daging matang.<br>4. Ambil selembar kulit, isikan dengan adonan isi lalu bungkus dan gulung. Celupkan gulungan kue ke dalam telur kocok. Goreng hingga berwarna kecoklatan. Angkat, tiriskan.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Mentho</big><br><br></b><b>Bahan:</b><br>• 20 gram tepung terigu.<br>• 25 gram telur ayam.<br>• 15 gram tahu.<br>• Minyak tumis.<br>• 10 ml santan siram.<br>• Garam.<br>• Bawang merah.<br>• Bawang putih.<br>• Daun pisang untuk membungkus.<br>• 25 cc air.<br><br><b>Cara membuat:</b><br>1. Adoni tepung terigu dengan telur, tambahkan garam, air, lalu dibuat dadar.<br>2. Tahu dipotong-potong kecil.<br>3. Bumbu ditumbuk lalu ditumis, masukkan tahu lalu masak hingga rata.<br>4. Isi dadar terigu dengan campuran tahu, diletakkan didaun pisang dan siram dengan santan kental lalu dibungkus kemudian dikukus.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Sakura Wokatu</big><br><br></b><b>Bahan:</b><br>• 10 gram tepung terigu protein sedang.<br>• 10 gram gula pasir.<br>• 10 ml air panas.<br>• 10 gram wortel diparut.<br>• 2,5 gram kacang tolo rebus haluskan (5 g kacang tolo dapat diganti dengan 5 g kacang hijau atau 3 g kacang merah atau 2 g kacang kedele).<br>• 10 gram kelapa parut setengah tua.<br>• 1 sdm susu bubuk.<br>• ½ btr telur ayam.<br>• Soda kue seujung sendok kecil.<br><br><b>Cara membuat:</b><br>1. Setengah bagian gula dibuat karamel hingga larut dan kecoklatan. Tambahkan air, aduk rata. Masak selama 5 menit, angkat dan dinginkan.<br>2. Campur terigu, susu bubuk, dan soda kue. Ayak hingga rata, lalu sisihkan.<br>3. Tuangi terigu dengan sirup karamel sedikit demi sedikit, hingga rata, sisihkan.<br>4. Kocok telur dan sisa gula pasir hingga mengembang. Tambahkan campuran terigu, wortel parut dan kacang tolo yang dihaluskan, aduk rata.<br>5. Tuang adonan dalam cetakan sakura yang telah dioles minyak atau margarin.<br>6. Panaskan panci pengukus, kukus adonan hingga matang 15 menit. Angkat dan keluarkan dari cetakan.<br>7. Sajikan dengan kelapa parut yang telah diberi sedikit garam.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lepet Jagung</big><br><br></b><b>Bahan:</b><br>• 50 gram jagung muda yang telah disisir, dihaluskan.<br>• 10 gram kelapa ½ tua, dibuang kulitnya, diparut memanjang.<br>• 5 gram kacang tolo, direndam diulek kasar (5 g kacang tolo dapat diganti dengan 5 g kacang hijau atau 3 g kacang merah atau 2 g kacang kedele).<br>• 10 gram ikan pindang, digoreng, disuwir (20 g ikan segar dapat diganti dengan 15 g ikan tongkol pindang atau 15 g daging ayam).<br>• 10 gram buncis muda, rajang bulat tipis.<br>• 10 gram gula merah.<br>• 5 gram gula pasir.<br>• 20 gram telur.<br>• Garam halus secukupnya.<br>• 3 lembar daun buah jagung/klobot, tali untuk mengikat.<br><br><b>Cara membuat:</b><br>1. Campur semua bahan menjadi satu.<br>2. Bungkus dengan klobot dan ikat kedua ujungnya.<br>3. Kukus sampai masak, bila menghidangkan, lepas talinya.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Kue Lapis Ubi kayu</big><br><br></b><b>Bahan:</b><br>• 20 gram singkong parut.<br>• 20 gram telur ayam.<br>• 5 gram tepung terigu.<br>• 20 gram santan.<br>• 5 gram susu skim.<br>• 2 gram coklat.<br><br><b>Cara membuat:</b><br>1. Gula dikocok dengan telur hingga putih, masukkan tepung, santan, susu dan ubi kayu.<br>2. Adonan dibagi menjadi dua, setengah bagian dicampur dengan coklat.<br>3. Siapkan cetakan yang sudah dialas dengan kertas, tuangkan ½ bagian dan kukus. Setelah 5 menit, tuangkan ½ bagian adonan, kukus selama 35 menit.<br>4. Dinginkan dan potong-potong.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Onde-Onde Sambiki/Labu Kuning</big><br><br></b><b>Bahan:</b><br>• 25 gram sambiki/labu kuning tua yang telah dikukus dan dihaluskan.<br>• 5 gram tepung sagu.<br>• 15 gram tepung beras ketan.<br>• 10 gram gula merah.<br>• 10 gram kelapa muda parut.<br>• 15 gram susu skim.<br>• Air kapur secukupnya.<br>• Garam secukupnya.<br><br><b>Cara membuat:</b><br>1. Sambiki/labu kuning yang sudah dikukus dihaluskan, kemudian dicampur dengan sagu, tepung beras ketan, susu skim, air kapur, garam dan aduk hingga bisa berbentuk bola, sisihkan.<br>2. Bentuk adonan menjadi bulatan sebesar kelereng dan isi dengan gula merah.<br>3. Didihkan air yang sudah diberi daun pandan dan masukkan bulatan yang telah terisi gula kedalam air yang mendidih.<br>4. Bila sudah mengapung diatas air, angkat dan gulingkan dikelapa parut yang sudah dicampur garam.</li>","Y","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO ResepIbuHamil(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Pempek Palembang</big><br><br></b><b>Bahan pempek:</b><br>• 30 gram ikan gabus yang telah digiling halus (30 g ikan gabus dapat diganti dengan 30 g ikan kakap atau 25 g ikan tenggiri).<br>• 20 gram tepung sagu.<br>• 30 cc air.<br>• 1 gram garam.<br>• Gula putih seujung sendok kecil.<br>• Minyak sayur dimasukkan kedalam air rebusan.<br><br><b>Cara membuat pempek:</b><br>1. Ikan dan air 24 cc diaduk secara merata.<br>2. Garam + air 6 cc + gula putih diaduk sampai garam larut.<br>3. Adonan 2 dimasukkan kedalam adonan 1, aduk perlahan sampai merata.<br>4. Tambahkan 18 g sagu sedikit demi sedikit sampai merata, aduk perlahan.<br>5. Sisa sagu diratakan diatas talenan, letakkan adonan diatas hamparan sagu dan bentuk lenjer.<br>6. Siapkan air dalam wajan, didihkan, teteskan sedikit minyak.<br>7. Masukkan lenjer sampai matang (pempek terapung).<br><br></b><b>Bahan kuah cuka:</b><br>• 10 gram gula merah.<br>• 10 cc air.<br>• 1 gram cabe rawit dihaluskan.<br>• 1 gram asam jawa diencerkan, diambil airnya.<br>• 1 iris bawang putih digiling halus.<br>• 1 gram garam.<br><br><b>Cara membuat kuah cuka:</b><br>1. Gula merah direbus sampai mendidih lalu disaring.<br>2. Gula dan air yang sudah disaring didihkan kembali.<br>3. Masukkan cabe rawit, bawang putih, asam jawa dan garam.<br>4. Aduk rata, didihkan lagi kemudian angkat.</li>","T","T","T")',[], nullHandler,errorHandler);
          }
        }   
        );
      },errorHandler,nullHandler);
}


function RekomendasiIbuHamil() {
    /* empty */
}

function RekomendasiBalita()
{
    var usiaSlc = $('#slctUsiaBM').val();
    var laktosa = $('#chkLaktosa').is(":checked");
    var casein = $('#chkCasein').is(":checked");
    var telur = $('#chkTelur').is(":checked");
    var ikan = $('#chkIkan').is(":checked");
    $('#listviewBahanMakanan').html('');
    $('#listviewResep').html('');
    db.transaction(function(transaction) 
        {        
            if(usiaSlc === '1' )
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' +  row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#listviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');                        
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#listviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#listviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#listviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }                                
                }
            }   
            else if (usiaSlc === '2')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 6 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 6 AND Resep_Laktosa="T" AND Resep_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=6 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep=6 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 6 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep =6 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }                                
                }
            }      
            else if (usiaSlc === '3')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 7 AND Resep_Laktosa="T" AND Resep_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=8 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep=7 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 7 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 7 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#listviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }                                
                }
            }     
            else if (usiaSlc === '4')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND Resep_Laktosa="T" AND Resep_Casein="T" AND Resep_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND Resep_Laktosa="T" AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 9 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND Resep_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 9 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND (Resep_Telur="T" OR Resep_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND Resep_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND Resep_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 9 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND (Resep_Telur="T" OR Resep_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#listviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                    }                                
                }
            }
            else if (usiaSlc === '5')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND Resep_Laktosa="T" AND Resep_Casein="T" AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND Resep_Laktosa="T" AND Resep_Casein="T" AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND Resep_Laktosa="T" AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND Resep_Laktosa="T" AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler); 
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 12 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }
            } 
            else if (usiaSlc === '6')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 18 AND Resep_Laktosa="T" AND Resep_Casein="T" AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep = 18 AND Resep_Laktosa="T" AND Resep_Casein="T" AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler); 
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND Resep_Laktosa="T" AND (Resep_Casein="Y" OR Resep_Casein="T") AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND Resep_Casein="T" AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND Resep_Telur="T" AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND Resep_Telur="T" AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND (Resep_Telur="T" OR Resep_Telur="Y") AND Resep_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM Resep WHERE UsiaResep= 18 AND (Resep_Laktosa="Y" OR Resep_Laktosa="T") AND (Resep_Casein="T" OR Resep_Casein="Y") AND (Resep_Telur="T" OR Resep_Telur="Y") AND (Resep_IkanLaut="T" OR Resep_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#listviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }
            }
        },errorHandler,refreshListView);                       
}

function RekomendasiIbuHamil()
{
      var vegetarian = $('#vegetarian').is(":checked");
      var diabetes = $('#diabetes').is(":checked");
      var hipertensi = $('#hipertensi').is(":checked");
      $('#listviewBahanMakananIbuHamil').html('');
      $('#listviewResepIbuHamil').html('');
      db.transaction(function(transaction) 
        { 
          if(vegetarian === true)
          {
            if(diabetes === true)
            {
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Vegetarian="Y" AND Diabetes="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);  

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Vegetarian="Y" AND Resep_Diabetes="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Vegetarian="Y" AND Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Vegetarian="Y" AND Resep_Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
            else
            {//diabetes === false
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Vegetarian="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Vegetarian="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);      
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Vegetarian="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Vegetarian="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
          }
          else
          {//vegetarian === false
            if(diabetes === true)
            {
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Diabetes="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);  

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Diabetes="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);     
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
            else
            {//diabetes === false
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil WHERE Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil WHERE Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM BahanMakananIbuHamil', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewBahanMakananIbuHamil').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM ResepIbuHamil', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#listviewResepIbuHamil').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
          }                   
        },errorHandler,refreshListViewIbuHamil);   
}

function Bolehkah()
{
    var usiaSlc = $('#slctUmurBK').val();
    var laktosa = $('#chkLaktosaBK').is(":checked");
    var casein = $('#chkCaseinBK').is(":checked");
    var telur = $('#chkTelurBK').is(":checked");
    var ikan = $('#chkIkanBK').is(":checked");
    var hasil=[];
    var bahan= $('#slctBahanBK').val().toString();                

    db.transaction(function(transaction) 
        {        
            if(usiaSlc === '1' )
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);                                                
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }                                
                }                            
            }   
            else if (usiaSlc === '2')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 6 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=6 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }                                
                }
            }      
            else if (usiaSlc === '3')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <=8 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    hasil[i]=row.NamaBM;
                                }                                            
                                hasil = $.grep(hasil, function( a ){return a === bahan;});
                                var hasilBaru = hasil.join( ", " );
                                if(hasilBaru !== "")
                                { $( "#jawabanBK" ).text("boleh"); }
                                else 
                                { $( "#jawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }                                
                }
            }     
            else if (usiaSlc === '4')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                    }                                
                }
            }
            else if (usiaSlc === '5')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                    }                                            
                                    hasil = $.grep(hasil, function( a ){return a === bahan;});
                                    var hasilBaru = hasil.join( ", " );
                                    if(hasilBaru !== "")
                                    { $( "#jawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);   
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }
            } 
            else if (usiaSlc === '6')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);   
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                    }
                }
                else if(laktosa === false)
                {
                    if(casein === true)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            hasil[i]=row.NamaBM;
                                        }                                            
                                        hasil = $.grep(hasil, function( a ){return a === bahan;});
                                        var hasilBaru = hasil.join( ", " );
                                        if(hasilBaru !== "")
                                        { $( "#jawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#jawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }                         
            }                        
        },errorHandler,nullHandler);
}
