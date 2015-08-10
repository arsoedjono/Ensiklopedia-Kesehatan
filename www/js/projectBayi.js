var db;
var shortName = 'KMSDB';
var version = '1.0';
var displayName = 'KMSDB';
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

$( document ).on( "pageshow", "#main", function()
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

function CreateSemuaTabel()
{
    db.transaction(function(tx){
        //tx.executeSql( 'DROP TABLE BahanMakanan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE Resep',nullHandler,nullHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BahanMakanan(IdBahanMakanan INTEGER NOT NULL PRIMARY KEY, NamaBM TEXT, UsiaBM INTEGER, A_Laktosa TEXT, A_Casein TEXT, A_Telur TEXT, A_IkanLaut TEXT, A_Kacang TEXT, GambarBM TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS Resep(IdResep INTEGER NOT NULL PRIMARY KEY, Resep TEXT, UsiaResep INTEGER, Resep_Laktosa TEXT, Resep_Casein TEXT, Resep_Telur TEXT, Resep_IkanLaut TEXT)',[], nullHandler, errorHandler);    
    },errorHandler,successCallBack);  
}

function InsertSemuaDataTabel()
{
    InsertDataBahanMakanan();
    InsertResep();
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

function Rekomendasi()
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
