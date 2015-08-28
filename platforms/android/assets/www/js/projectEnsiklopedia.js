var db;
var shortName = 'KMSDB';
var version = '1.0';
var displayName = 'KMSDB';
var maxSize = 999999;

$( document ).on( "pagecreate", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});

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

$( function() {
    if (!window.openDatabase) {
    alert('Databases are not supported in this browser.');
    }
    db = openDatabase(shortName, version, displayName,maxSize);
    createSemuaTabel();               
    insertSemuaDataTabel();

    $("a[data-role=tab]").each(function () {
        var anchor = $(this);
        anchor.bind("click", function () {
            $.mobile.changePage(anchor.attr("href"), {
                transition: "none",
                changeHash: false
            });
            return false;
        });
    });

    $("div[data-role=page]").bind("pagebeforeshow", function (e, data) {
        $.mobile.silentScroll(0);
    });
 });

function errorHandler(transaction, error) { 
    //alert('Error: ' + error.message + ' code: ' + error.code); 
}
function successCallBack() 
{ //alert("DEBUGGING: success");
    }
{ //alert("DEBUGGING: success");   
}
function nullHandler(){};  

function balita_refreshListView()
{
    $('#balitaListviewBahanMakanan').listview('refresh');
    $('#balitaListviewResep').listview('refresh');
}

function ibuhamil_refreshListView()
{
    $('#ibuHamilListviewBahanMakanan').listview('refresh');
    $('#ibuHamilListviewResep').listview('refresh');
}

function createSemuaTabel()
{
    db.transaction(function(tx){
        //tx.executeSql( 'DROP TABLE BalitaNutrisiBahanMakanan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE BalitaNutrisiResep',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE BalitaNutrisiInfo',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE BalitaNutrisiInfoGizi',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE BalitaPerkembangan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE BalitaP3K',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuInfoPerkembanganJanin',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuNutrisiBahanMakanan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuNutrisiResep',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuInfoOlahraga',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuInfoPemeriksaan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuInfoTips',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuPersiapan',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuPersiapanTips',nullHandler,nullHandler);
        //tx.executeSql( 'DROP TABLE IbuFAQ',nullHandler,nullHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaNutrisiBahanMakanan(IdBahanMakanan INTEGER NOT NULL PRIMARY KEY, NamaBM TEXT, UsiaBM INTEGER, A_Laktosa TEXT, A_Casein TEXT, A_Telur TEXT, A_IkanLaut TEXT, A_Kacang TEXT, GambarBM TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaNutrisiResep(IdResep INTEGER NOT NULL PRIMARY KEY, Resep TEXT, UsiaResep INTEGER, Rsp_Laktosa TEXT, Rsp_Casein TEXT, Rsp_Telur TEXT, Rsp_IkanLaut TEXT)',[], nullHandler, errorHandler);    
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaNutrisiInfo(IdInfo INTEGER NOT NULL PRIMARY KEY, Judul TEXT, Konten TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaNutrisiInfoGizi(IdGizi INTEGER NOT NULL PRIMARY KEY, NamaGizi TEXT, Keterangan TEXT, SumberMakanan TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaPerkembangan(IdWaktu INTEGER NOT NULL PRIMARY KEY, Waktu TEXT, Konten TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS BalitaP3K(IdKecelakaan INTEGER NOT NULL PRIMARY KEY, Jenis TEXT, Konten TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuNutrisiBahanMakanan(IdBahanMakanan INTEGER NOT NULL PRIMARY KEY, NamaBMIH TEXT, Vegetarian TEXT, Diabetes TEXT, Hipertensi TEXT, GambarBMIH TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuNutrisiResep(IdResep INTEGER NOT NULL PRIMARY KEY, Resep TEXT, Resep_Vegetarian TEXT, Resep_Diabetes TEXT, Resep_Hipertensi TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuInfoPerkembanganJanin(IdMinggu INTEGER NOT NULL PRIMARY KEY, Konten TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuInfoOlahraga(IdOlahraga INTEGER NOT NULL PRIMARY KEY, Jenis TEXT, Keterangan TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuInfoPemeriksaan(IdPemeriksaan INTEGER NOT NULL PRIMARY KEY, Nama TEXT, Keterangan TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuInfoTips(IdTips INTEGER NOT NULL PRIMARY KEY, Judul TEXT, Isi TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuPersiapan(IdKonten INTEGER NOT NULL PRIMARY KEY, Judul TEXT, Isi TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuPersiapanTips(IdTips INTEGER NOT NULL PRIMARY KEY, Judul TEXT, Isi TEXT)',[], nullHandler, errorHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS IbuFAQ(IdPertanyaan INTEGER NOT NULL PRIMARY KEY, Pertanyaan TEXT, Jawaban TEXT)',[], nullHandler, errorHandler);
    },errorHandler,successCallBack);  
}

function insertSemuaDataTabel()
{
    balita_insert_dataBahanMakanan();
    balita_insert_resep();
    balita_insert_nutrisiInformasi();
    balita_insert_perkembangan();
    balita_insert_p3k();
    ibu_insert_dataBahanMakanan();
    ibu_insert_resep();
    ibu_insert_infoPerkembanganJanin();
    ibu_insert_infoOlahraga();
    ibu_insert_infoPemeriksaan();
    ibu_insert_infoTips();
    ibu_insert_persiapan();
    ibu_insert_persiapanTips();
    ibu_insert_FAQ();
}

function balita_insert_dataBahanMakanan() 
{ 
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("ASI","0","T","T","T","T","T","img/nutrisi/asi.jpg")',[], nullHandler,errorHandler);                                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Es Krim","12","T","Y","T","T","T","img/nutrisi/eskrim.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Keju","12","T","Y","T","T","T","img/nutrisi/keju.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Minuman Kocok","18","T","Y","T","T","T","img/nutrisi/minuman kocok.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula","0","Y","Y","T","T","T","img/nutrisi/susu formula.jpg")',[], nullHandler,errorHandler);                                    
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula Anti Alergen","0","Y","T","T","T","T","img/nutrisi/susu formula anti alergen.jpg")',[], nullHandler,errorHandler);                  
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Formula Bebas Laktosa","0","T","Y","T","T","T","img/nutrisi/susu formula bebas laktosa.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Kedelai","6","T","T","T","T","T","img/nutrisi/susu kedelai.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Susu Murni","12","T","Y","T","T","T","img/nutrisi/susu murni.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Saus Krim","18","T","Y","T","T","T","img/nutrisi/saus krim.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Yoghurt","9","T","Y","T","T","T","img/nutrisi/yogurht.jpg")',[], nullHandler,errorHandler);                           
                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Alpukat","7","T","T","T","T","T","img/nutrisi/alpukat.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Apel","6","T","T","T","T","T","img/nutrisi/apel.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Aprikot","12","T","T","T","T","T","img/nutrisi/aprikot.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Jeruk","6","T","T","T","T","T","img/nutrisi/jeruk.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kiwi","12","T","T","T","T","T","img/nutrisi/kiwi.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Lemon","7","T","T","T","T","T","img/nutrisi/lemon.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Mangga","12","T","T","T","T","T","img/nutrisi/mangga.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Melon","12","T","T","T","T","T","img/nutrisi/melon.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Peach","7","T","T","T","T","T","img/nutrisi/peach.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pepaya","6","T","T","T","T","T","img/nutrisi/pepaya.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pir","6","T","T","T","T","T","img/nutrisi/pir.jpg")',[], nullHandler,errorHandler); 
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pisang","6","T","T","T","T","T","img/nutrisi/pisang.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Prun","7","T","T","T","T","T","img/nutrisi/prun.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Stroberi","12","T","T","T","T","T","img/nutrisi/stroberi.jpg")',[], nullHandler,errorHandler);                          
                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Bayam","9","T","T","T","T","T","img/nutrisi/bayam.jpg")',[], nullHandler,errorHandler);                               
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Buncis","9","T","T","T","T","T","img/nutrisi/buncis.jpg")',[], nullHandler,errorHandler);                        
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Bunga Kol","12","T","T","T","T","T","img/nutrisi/bunga kol.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Brokoli","12","T","T","T","T","T","img/nutrisi/brokoli.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kacang Polong","9","T","T","T","T","T","img/nutrisi/kacang polong.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kentang","7","T","T","T","T","T","img/nutrisi/kentang lumat.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Labu","7","T","T","T","T","T","img/nutrisi/labu.jpg")',[], nullHandler,errorHandler);                        
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Tomat","12","T","T","T","T","T","img/nutrisi/tomat.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ubi Jalar","7","T","T","T","T","T","img/nutrisi/ubi jalar.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Wortel","7","T","T","T","T","T","img/nutrisi/wortel.jpg")',[], nullHandler,errorHandler);                           

                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kuning Telur","9","T","T","Y","T","T","img/nutrisi/kuning telur.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Tahu","9","T","T","T","T","T","img/nutrisi/tahu.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Telur","12","T","T","Y","T","T","img/nutrisi/telur.jpg")',[], nullHandler,errorHandler);                           
                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Anak Sapi","9","T","T","T","T","T","img/nutrisi/daging anak sapi.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Ayam","9","T","T","T","T","T","img/nutrisi/daging ayam.jpg")',[], nullHandler,errorHandler);  
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Kambing","9","T","T","T","T","T","img/nutrisi/daging kambing.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Daging Sapi","12","T","T","T","T","T","img/nutrisi/daging sapi.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Hati","9","T","T","T","T","T","img/nutrisi/hati.jpg")',[], nullHandler,errorHandler);                          

                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ikan Salmon","12","T","T","T","Y","T","img/nutrisi/ikan salmon.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Ikan Tuna","12","T","T","T","Y","T","img/nutrisi/ikan tuna.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kerang","18","T","T","T","Y","T","img/nutrisi/kerang.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Makarel","12","T","T","T","Y","T","img/nutrisi/makarel.jpg")',[], nullHandler,errorHandler);                         
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sarden","12","T","T","T","Y","T","img/nutrisi/sarden.jpg")',[], nullHandler,errorHandler);                            
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Udang","18","T","T","T","Y","T","img/nutrisi/udang.jpg")',[], nullHandler,errorHandler);                           
                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kedelai","9","T","T","T","T","T","img/nutrisi/kedelai.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Maizena","7","T","T","T","T","T","img/nutrisi/maizena.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pasta","12","T","T","T","T","T","img/nutrisi/pasta.jpg")',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sereal dari Beras","6","T","T","T","T","T","img/nutrisi/sereal beras.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Sereal Gandum","7","T","T","T","T","T","img/nutrisi/sereal gandum.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Terigu","7","T","T","T","T","T","img/nutrisi/terigu.jpg")',[], nullHandler,errorHandler);                          

                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Biskuit","7","T","T","T","T","T","img/nutrisi/biskuit.jpg")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Kue Beras","9","T","T","T","T","T","img/nutrisi/kraker.jpg")',[], nullHandler,errorHandler);                             
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Madu","12","T","T","T","T","T","img/nutrisi/madu.jpg")',[], nullHandler,errorHandler);                          
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Pancake","12","T","T","T","T","T","img/nutrisi/pancakes.jpg")',[], nullHandler,errorHandler);                                       
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Puding Bergizi","18","T","T","T","T","T","img/nutrisi/puding.jpg")',[], nullHandler,errorHandler);   
                tx.executeSql('INSERT INTO BalitaNutrisiBahanMakanan(NamaBM, UsiaBM, A_Laktosa, A_Casein, A_Telur, A_IkanLaut, A_Kacang, GambarBM) VALUES ("Roti Lapis","18","T","T","T","T","T","img/nutrisi/sandwich.jpg")',[], nullHandler,errorHandler);                            
            }
        }   
     );
    },errorHandler,nullHandler);                
}

function balita_insert_resep()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BalitaNutrisiResep', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Pure Apel + Pir</big><br><br></b><b>Bahan:</b><br>• 25 gr apel, buang kulitnya.<br>• 50 gr pir.<br>• 3 sdm cairan.<br><br><b>Cara membuat:</b><br>Campur kemudian blender atau dihaluskan kemudian disaring.</li>","6","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><big><b>Bubur Beras Merah dan Pepaya</b></big><br><br><b>Bahan:</b><br>• 50 gram tepung beras merah, siap pakai.<br>• 200 cc air matang hangat.<br>• 200 cc susu formula.<br>• 50 gram pepaya.<br>• 1 sendok makan air jeruk manis.<br><br><b>Cara membuat:</b><br>1. Campur tepung dengan air hangat, aduk.<br>2. Tambahkan susu hangat , aduk rata kembali. Sajikan dengan pepaya.<br>3. Haluskan pepaya dengan garpu, saringan kawat  atau blender. Campur dengan air jeruk, aduk rata.<br></li>","6","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><big><b>Pure Pepaya Pisang</b></big><br><br><b>Bahan:</b><br>• 50 gram pepaya<br>• 1 buah pisang<br>• 100 ml ASI<br>• 50 gram susu formula<br>• 75 ml air matang<br><br><b>Cara membuat:</b><br>1. Blender 50 gram pepaya dan ½ buah avokad secara bersamaan.<br>2. Tambahkan 1 buah pisang dan 100 ml asip atau 50 gram susu formula yang sudah dicairkan dengan 75 ml air matang.<br></li>","6","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><big><b>Pure Pepaya Jeruk</b></big><br><br><b>Bahan:</b><br>• 100 gram pepaya, kupas.<br>• 150 ml air jeruk manis.<br><br><b>Cara membuat:</b><br>1. Potong kecil pepaya, masukkan ke dalam blender.<br>2. Tambahkan air jeruk, haluskan. Tuang ke dalam mangkuk kecil, sajikan.<br></li>","6","T","T","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Kuning Manis</big></b><br><br><b>Bahan:</b><br>• 100 gram labu kuning potong dadu.<br>• 75 gram apel, kupas dan buang bagian tengahnya cincang halus.<br>• 100 cc air.<br>• 150 cc susu formula.<br>• ½ sendok teh kayu manis bubuk.<br><br><b>Cara membuat:</b><br>2. Tuang ke dalam mangkuk kecil, tambahkan susu formula, aduk rata sambil diatur kekentalannya. Bubuhi kayu manis bubuk dan sajikan segera.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Sari Alpukat</big></b><br><br><b>Bahan:</b><br>• 500 g daging buah alpukat.<br>• 250 ml susu formula cair.<br><br><b>Cara membuat:</b><br>Campur buah alpukat dengan susu cair. Haluskan dengan blender. Tuang ke dalam gelas bayi.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Susu Crackers Sari Alpukat</big></b><br><br><b>Bahan:</b><br>• 40 gram crackers manis, hancurkan.<br>• 300 ml air panas.<br>• 4 sendok takar susu formula bubuk.<br>• Sari Avocad.<br>• 100 gram daging avocad tua, potong kecil.<br>• 100 ml air jeruk manis.<br><br><b>Cara membuat:</b><br>• Sari alpukat: Masukkan buah alpukat dan sari jeruk manis ke dalam blender, haluskan. <br><i><small>(Kiat memilih alpukat matang: jika buah alpukat digoyang, biji di dalamnya menimbulkan suara)</small></i><br>• Bubur susu: Masukkan crackers dalam mangkuk kecil, beri air hangat, aduk rata.<br>• Bubuhi susu formula, aduk rata kembali. Siram dengan sari alpukat. Suapkan segera pada balita Anda.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Puree Wortel Segar</big></b><br><br><b>Bahan:</b><br>• 100 gram wortel, potong-potong.<br>• 50 cc air jeruk manis.<br><br><b>Cara membuat:</b><br>Haluskan wortel dan air jeruk manis dengan blender hingga lembut. Tuang ke mangkuk kecil, sajikan segera. Untuk 2 porsi.</li>","7","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Sereal Susu Avokad</big></b><br><br><b>Bahan:</b><br>• 200 gram sereal.<br>• 200 gram avokad matang, haluskan bersama 50 cc air matang.<br>• 100 cc susu formula cair.<br>• 150 cc air.<br><br><b>Cara membuat:</b><br>1. Jerang air dalam panci kecil, masukkan sereal lalu masak sambil diaduk hingga mengental. Angkat dari api.<br>2. Masukkan susu cair ke dalam sereal, aduk rata kembali. Tuang dalam mangkuk kecil, tambahkan avokad, sajikan.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Marie Saus Wortel</big></b><br><br><b>Bahan:</b><br>• 8 keping biskuit marie.<br>• 150 cc ASI atau susu formula cair.<br><br><b>Saus:</b><br>50 gram wortel. Bersihkan dan rebus sebentar dalam air, lalu haluskan dengan blender.<br><br><b>Cara membuat:</b><br>1. Campur biskuit dan susu dalam mangkuk.<br>2. Aduk hingga biskuit lumat.<br>3. Siram saus wortel pada bubur biskuit, aduk. Sajikan.<br></li>","7","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Smoothie Peach</big></b><br><br><b>Bahan:</b><br>• 100 gram buah peach.<br>• 250 cc ASI atau susu formula cair.<br>• ½ sendok teh gula pasir.<br><br><b>Cara membuat:</b><br>Campur peach, susu dan gula pasir, haluskan. Tuang ke dalam gelas kecil, sajikan.<br></li>","7","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Puree Bayam Labu Kuning</big></b><br><br><b>Bahan:</b><br>• 50 gram bayam, iris halus.<br>• 100 gram labu kuning, kupas, potong dadu kecil.<br>• 50 gram daging ayam, buang lemak, cuci, cincang.<br>• 250 ml air.<br>• 100 ml ASI atau 2 sendok takar susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Rebus potongan labu kuning dan ayam cincang hingga matang.<br>2. Masukkan bayam, kemudian rebus lagi selama 3 menit hingga bayam lunak. Angkat, tiriskan.<br>3. Haluskan, tuang ke mangkuk saji, tambahkan susu. Aduk rata.<br></li>","9","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Pot Ayam</big></b><br><br><b>Bahan:</b><br>• 50 gram dada ayam, cincang.<br>• 30 gram wortel, kupas, potong kecil.<br>• 30 gram kentang, kupas, potong kecil.<br>• 1 sendok makan mentega.<br>• 250 ml kaldu ayam.<br><br><b>Cara membuat:</b><br>1. Panaskan mentega, lalu tumis daging ayam hingga berubah warna.<br>2. Tambahkan sayuran dan masukkan kaldu ayam. Masak hingga bahan matang. Angkat, haluskan.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Pure Apel Buncis</big></b><br><br><b>Bahan:</b><br>• 50  gram buncis, buang seratnya, iris.<br>• 50  gram apel, kupas, buang bagian tengahnya, potong kecil.<br>• 100 ml ASI atau 2 sendok takar peres susu formula yang dilarutkan dalam 100 ml air matang.<br>• 250 ml air untuk merebus.<br><br><b>Cara membuat:</b><br>1. Rebus buncis dan apel secara terpisah hingga lunak. Angkat.<br>2. Setelah agak dingin, haluskan buncis dan apel bersama susu.<br>3. Sajikan dalam mangkuk. Untuk 2 porsi, berikan pada bayi 6-9 bulan.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Beras Merah Wortel Daging</big></b><br><br><b>Bahan:</b><br>• 25 bungkus agar-agar bubuk.<br>• 400 cc air kaldu.<br>• 1/2 sendok teh garam.<br>• 75 gram daging giling, rebus.<br>• 100 gram labu kuning, iris dadu kecil, rebus.<br>• 100 gram wortel, iris bentuk bintang, rebus.<br><b>Cara membuat:</b><br>1. Rebus beras merah bersama air kaldu dan garam. Aduk perlahan hingga menjadi bubur.<br>2. Masukkan daging giling dan wortel, aduk sebentar hingga semua bahan tercampur rata.<br>3. Angkat dari api. Suapkan pada bayi dalam keadaan hangat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Jus Buah Yoghurt</big></b><br><br><b>Bahan:</b><br>• 50 gram pisang.<br>• 50 gram apel.<br>• 1 sendok makan yoghurt tawar.<br><br><b>Cara membuat:</b><br>Haluskan pisang dan apel, campur dengan yoghurt. Aduk rata. Tuang ke mangkuk kecil, sajikan segar.<br></li>","9","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Nasi Tofu</big></b><br><br><b>Bahan:</b><br>• 25 gram beras.<br>• 650 cc kaldu.<br>• 25 gram daging ayam, cincang halus.<br>• 30 gram tofu, potong kecil.<br>• 30 gram wortel, parut halus.<br>• 2 sendok makan margarin.<br><br><b>Cara membuat:</b><br>1. Campur beras dengan kaldu, masak sambil sesekali diaduk hingga menjadi bubur.<br>2. Masukkan ayam, masak hingga ayam matang. Masukkan tofu dan wortel, masak hingga wortel lunak. Tambahkan margarin, aduk terus. Angkat. Sajikan hangat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Tofu Kuah Wortel</big></b><br><br><b>Bahan:</b><br>• 50 gram tofu, potong dadu 1x1 cm.<br>• 50 gram ayam cincang.<br>• 50 gram wortel , kupas, cuci, haluskan.<br>• 1 sendok makan margarin.<br>• ½ sendok teh garam.<br>• 250 cc air.<br><br><b>Cara membuat:</b><br>1. Panaskan margarin, masukkan ayam cincang dan tofu. Masak sambil diaduk-aduk hingga matang.<br>2. Tuangi air, masukkan garam dan wortel, aduk dan masak mendidih. Angkat.<br></li>","9","T","T","T","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Sereal Kiwi</big></b><br><br><b>Bahan:</b><br>• 30 gram sereal instan.<br>• 1 buah kiwi, kupas, potong kecil.<br>• 100 ml ASI atau 2 sendok takar susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Campur sereal instan dengan air panas sambil diaduk hingga kental. Sisihkan.<br>2. Haluskan kiwi bersama susu dalam blender. Tuang ke dalam sereal, aduk rata. Sajikan hangat dalam mangkuk kecil.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Labu Brokoli</big></b><br><br><b>Bahan:</b><br>• 50 gram labu kuning, buang biji, potong kecil.<br>• 30 gram brokoli, potong sesuai kuntum.<br>• 100 ml ASI atau 2 sendok takar peres susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Kukus labu kuning dan brokoli hingga matang. Angkat.<br>2. Haluskan dengan blender.<br>3. Pindahkan ke dalam mangkuk kecil, tambahkan susu, aduk rata. Sajikan segera.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Kentang Kukus Daging Cincang</big></b><br><br><b>Bahan:</b><br>• 50 gram kentang, kupas, potong dadu kecil.<br>• 50 gram daging cincang.<br>• 30 gram buncis, buang serat, iris halus.<br>• 1 sendok makan margarin.<br>• 30 ml air.<br><br><b>Cara membuat:</b><br>1. Masukkan kentang, daging dan buncis dalam mangkuk tahan panas.Tambahkan margarin dan air, aduk rata.<br>2. Panaskan dandang berisi air, kukus campuran kentang hingga matang. Angkat, sajikan setelah dingin.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Sereal Melon</big></b><br><br><b>Bahan:</b><br>• 2 sendok makan oat.<br>• 150 ml air.<br>• 100 gram melon, potong kecil.<br>• 100 ml ASI atau 2 sendok takar peres susu formula dilarutkan dalam 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Rebus sereal dengan 100 ml air hingga mendidih dan kental. Angkat.<br>2. Campur  melon dan susu, haluskan dengan blender.<br>3. Tuang campuran melon susu ke dalam sereal, aduk rata. Sajikan.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Ayam Brokoli</big></b><br><br><b>Bahan:</b><br>• 60 gram beras, cuci bersih.<br>• 25 gram ayam, dicincang halus.<br>• 50 gram brokoli, cuci bersih<br>• 500 cc air untuk dimasak.<br><br><b>Cara membuat:</b><br>1. Masak beras dengan air dan daging ayam cincang, aduk-aduk hingga beras menjadi bubur. Angkat.<br>2. Rebus brokoli kurang dari 5 menit, angkat. Selanjutnya haluskan dengan blender dan campur rata dengan bubur dan ayam.<br>3. Hidangkan segera selagi hangat.<br></li>","12","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Makaroni Sayur Panggang</big></b><br><br><b>Bahan:</b><br>• 100 gram makaroni rebus.<br>• 50 gram wortel, parut.<br>• 50 gram bayam, cincang halus.<br>• 100 gram daging cincang.<br>• 75 cc susu cair.<br>• 1 butir telur, kocok.<br>• 2 sendok makan margarin, lelehkan.<br>• 100 gram keju cheddar parut.<br>• 50 gram keju cheddar parut untuk taburan.<br>• 200  cc kaldu.<br><br><b>Cara membuat:</b><br>1. Panaskan oven 180°C, olesi loyang persegi kecil dengan margarin.<br>2. Campur dalam mangkuk, makaroni, wortel, bayam, daging cincang, margarin dan keju. Aduk rata.<br>3. Masukkan telur kocok, dan tuangi susu sedikit demi sedikit sambil diaduk rata.<br>4. Tuang adonan ke dalam loyang, taburi keju lalu panggang 75 menit hingga matang lalu angkat.<br>5. Setelah dingin, potong-potong lalu sajikan.<br></li>","12","Y","Y","Y","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Tim Kentang Salmon</big></b><br><br><b>Bahan:</b><br>• 80 gram kentang, kupas, potong dadu kecil.<br>• 50 gram ikan salmon, cincang.<br>• 50 gram brokoli, cincang.<br>• 1 sendok makan margarin.<br>• 200 cc air untuk merebus.<br><br><b>Cara membuat:</b><br>1. Rebus kentang dalam 200 cc air hingga lunak.<br>2. Masukkan ikan salmon cincang, masak sambil diaduk hingga matang.<br>3. Masukkan brokoli dan margarin, masak sebentar hingga brokoli matang, angkat.<br>4. Setelah agak dingin, haluskan. Sajikan dalam mangkuk kecil.<br></li>","12","T","T","T","Y")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bubur Sayur Telur</big></b><br><br><b>Bahan:</b><br>• 20 g daging ayam.<br>• 250 ml air kaldu.<br>• 20 g kentang, kupas, potong kecil.<br>• 20 g wortel parut.<br>• 20 g tomat, buang bijinya, cincang.<br>• 1 kuning telur.<br>• 2 sdm tepung maizena.<br>• 1 sdt margarin.<br>• 20 g daun bayam, iris.<br><br><b>Cara membuat:</b><br>1. Rebus daging ayam hingga lunak. Tambahkan kentang, woret parut, tomat cincang. Aduk hingga setengah matang.<br>2. Bubuhi kuning telur, tepung maizena dan margarin. Aduk pula hingga matang dan mengental.<br>3. Bagi dua adonan. Satu bagian sisihkan untuk makan malam dan beri bagian sisanya dengan 10 gram irisan daun bayam. Aduk pula hingga sayuran matang, angkat.<br>4. Tuang ke dalam blender dan haluskan. Atau saring dengan saringan kawat khusus untuk makanan bayi.<br>5. Masukkan ke dalam mangkuk bayi dan suapkan dengan sendok plastik kecil.<br></li>","12","T","T","Y","T")',[], nullHandler,errorHandler);                           
                
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Pepes Tahu</big></b><br><br><b>Bahan:</b><br>• 2 siung bawang merah.<br>• 1 siung bawang putih.<br>• 1 butir kemiri sangrai.<br>• 100 gram tahu putih.<br>• 100 gram salmon.<br>• Labu siam, daun kemangi dan tomat secukupnya.<br><br><b>Cara membuat:</b><br>1. Haluskan 2 siung bawang merah, 1 siung bawang putih dan 1 butir kemiri sangrai.<br>2. Campurkan dengan 100 gram tahu putih dan 100 gram salmon tanpa tulang yang sudah dikukus dan dihaluskan.<br>3. Tata di atas daun pisang: 2 sendok makan tahu, 1 lembar daun kemangi,  tomat dan labu siam yang dipotong memanjang. Kukus selama 15 menit.<br></li>","18","T","T","T","Y")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Bola Kentang Kacang Polong</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• ½ sendok makan mentega tawar.<br>• 1 buah kentang.<br>• 50 gram kacang polong.<br>• 2 sendok teh tepung terigu.<br>• 100 ml ASIP atau 3 sendok takar susu formula.<br>• 100 ml air matang.<br>• 25 gram keju parut.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih dengan ½ sendok makan mentega tawar.<br>2. Masukkan 1 buah kentang yang sudah dihaluskan dan 50 gram kacang polong yang sudah direbus dan dicincang kasar. Aduk rata.<br>3. Tambahkan 2 sendok teh tepung terigu dan 100 ml ASIP atau 3 sendok takar susu formula, seduh dalam 100 ml air matang.<br>4. Aduk rata dan taburi dengan 25 gram keju parut. Buat bulatan, panggang sebentar.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Makaroni Saus Keju</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• 50 gram daging sapi cincang.<br>• 100 ml kaldu.<br>• 25 gram wortel parut.<br>• 25 gram keju parut.<br>• 2 sendok makan makaroni.<br>• 1 butir kuning telur.<br>• 25 gram brokoli.<br>• 2 sendok makan makaroni rebus.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih yang sudah dicincang halus.<br>2. Masukkan 50 gram daging sapi cincang. Aduk hingga matang.<br>3. Masukkan 100 ml kaldu, 25 gram wortel parut dan 25 gram keju parut. Masak hingga matang.<br>4. Masukkan 1 butir kuning telur yang sudah dikocok, aduk rata. Tambahkan 25 gram brokoli yang dicincang halus.<br>5. Tuang saus di atas 2 sendok makan makaroni yang sudah direbus.<br></li>","18","T","T","Y","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Tim Jagung Daging</big></b><br><br><b>Bahan:</b><br>• 1 siung bawang putih.<br>• 1 sendok teh mentega tawar.<br>• 50 gram daging giling.<br>• 50 gram jagung serut.<br>• 25 gram wortel parut.<br>• 25 gram sawi hijau.<br>• 75 gram nasi tim.<br><br><b>Cara membuat:</b><br>1. Tumis 1 siung bawang putih yang sudah dihaluskan menggunakan 1 sendok teh mentega tawar.<br>2. Masukkan 50 gram daging giling, 50 gram jagung serut, dan 25 gram wortel diparut kasar. Masak hingga lunak dan matang. <br>3. Tambahkan 25 gram sawi hijau yang diiris halus. Cetak 75 gram nasi tim, tambahkan tumisan daging di atasnya.<br></li>","18","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Kembang Kol Kentang Panggang</big></b><br><br><b>Bahan:</b><br>• 100 gram kentang.<br>• 100 gram kembang kol.<br>• 1 siung bawang putih.<br>• ½ sendok teh mentega tawar.<br>• 25 gram keju parut.<br>• daging ayam secukupnya.<br><br><b>Cara membuat:</b><br>1. Kukus 100 gram kentang dan 100 gram kembang kol. Haluskan keduanya.<br>2. Tumis 1 siung bawang putih, menggunakan ½ sendok teh mentega tawar.<br>3. Masukkan ayam, masak hingga matang.<br>4. Campurkan dengan kentang, taburi 25 gram keju parut. Panggang hingga matang.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Puding Yoghurt Avokad</big></b><br><br><b>Bahan:</b><br>• ½ bungkus agar-agar putih.<br>• 50 gram yoghurt tawar.<br>• 20 gram avokad, potong dadu kecil.<br>• 100 ml air.<br><br><b>Saus:</b><br>• 100 ml susu.<br> • 50 ml jus jeruk.<br>• ½ sendok teh tepung maizena, cairkan.<br><br><b>Cara membuat:</b><br>1. Masak agar-agar hingga mendidih. Angkat, masukkan yoghurt, aduk rata.<br>2. Sisihkan 1/3 adonan, lalu campur dengan avokad, aduk rata.<br>3. Cetak adonan dengan menuangkan adonan agar-agar avokad terlebih dahulu. Tunggu sebentar, lalu tuang sisanya.<br>4. Saus: Masak jus jeruk, susu dan tepung maizena hingga mengental.<br>5. Sajikan puding dengan sausnya.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Pasta Sayur</big></b><br><br><b>Bahan:</b><br>• 50 gram pasta keong.<br>• 50 gram daging cincang.<br>• 1 sendok teh bawang bombay cincang.<br>• 30 gram kacang polong, cincang.<br>• 50 gram wortel, kupas, parut.<br>• 30 gram tomat, cincang.<br>• 250 ml kaldu.<br><br><b>Cara membuat:</b><br>1. Rebus daging cincang bersama kaldu hingga daging matang.<br>2. Tambahkan bawang bombay, kacang polong,  wortel, dan tomat, tutup dan masak di atas api kecil  hingga bahan matang.<br>3. Masukkan pasta, masak hingga lunak.  Angkat dan haluskan. Sajikan dalam mangkuk kecil.<br></li>","18","T","T","T","T")',[], nullHandler,errorHandler);                           
                tx.executeSql('INSERT INTO BalitaNutrisiResep(Resep, UsiaResep, Rsp_Laktosa, Rsp_Casein, Rsp_Telur, Rsp_IkanLaut) VALUES ("<li><b><big>Agar-agar Buah Saus Susu</big></b><br><br><b>Bahan:</b><br>• ½ bungkus agar-agar bubuk warna putih.<br>• 30 gram pure Heinz  mango-apple.<br>• 25 gram mangga arumanis, kupas dan haluskan.<br>• 650 ml air matang.<br><br><b>Saus:</b><br>• 20 gram tepung maizena.<br>• 100 ml ASI atau 2 sendok takar susu formula, cairkan dalam 100 ml air matang.<br>• 100 ml air matang.<br><br><b>Cara membuat:</b><br>1. Campur bubuk agar-agar dan air, lalu aduk rata kemudian masak hingga mendidih. Angkat.<br>2. Tambahkan pure instan dan buah mangga segar yang telah dihaluskan.  Aduk rata,  tuang ke dalam cetakan. Diamkan hingga dingin dan padat, lalu sisihkan.<br>3. Buat saus susu: Campur tepung maizena dengan air, aduk rata. Panaskan sambil diaduk terus hingga mendidih dan kental. Angkat, tambahkan susu, aduk rata.<br>4. Keluarkan agar-agar dari cetakan, letakkan di piring saji untuk bayi,  lalu siram dengan saus susu. Sajikan.<br></li>","18","Y","Y","T","T")',[], nullHandler,errorHandler);                           
             }
        }   
     );
    },errorHandler,nullHandler);
}

function balita_insert_nutrisiInformasi()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BalitaNutrisiInfo', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaNutrisiInfo(Judul, Konten) VALUES (\'Alergi\', \'<li data-role="list-divider" style="white-space: normal"><b><big>Laktosa Intoleran</big></b></li><li style="white-space: normal">Alergi laktosa intoleran tidaklah murni sebuah alergi. Hal ini merupakan suatu keadaan dimana laktosa (gula yang terkandung dalam susu) tidak dapat dicerna karena kurang atau tidak adanya enzim laktose. Biasanya pengidap alergi ini adalah keturunan. Umumnya hal ini dapat terjadi seumur hidup.<br><br><b>Gejala:</b><br> mual, kram, diare, kembung perut, dan muka bengkak. Biasanya muncul setelah 30 menit mengonsumsi susu.<br><br><b>Cara mengatasi:</b><br> berikan susu bebas laktose, dapat juga diberikan susu kedelai tetapi untuk bayi berumur 6 bulan keatas.</li><li data-role="list-divider" style="white-space: normal"><b><big>Casein Susu Sapi</big></b></li><li style="white-space: normal">Alergi ini merupakan kondisi dimana bayi alergi terhadap protein susu sapi yang disebut casein. Apabila hal ini terjadi, segera konsultasikan dengan dokter dan hati-hati sebelum memutuskan untuk memberikan susu formula pada bayi.<br><br><b>Cara mengatasi:</b><br>Apabila bayi menampakkan alergi terhadap casein, dianjurkan agar si ibu juga harus membatasi konsumsi susu sapi atau produk olahannya agar tidak mempengaruhi kualitas ASI. Biasanya dokter akan memberikan nasihat untuk mengganti susu formula biasa dengan formula hidrolisa (rendah alergen).</li><li data-role="list-divider" style="white-space: normal"><b><big>Telur</big></b></li><li style="white-space: normal">Telur yang sering mengandung bakteri Salmonella yg dapat menyebabkan gejala alergi bahkan keracunan adalah telur bebek/itik. Hal ini banyak disebabkan oleh konsumsi telur bebek atau telur yang direbusnya tidak matang.<br><br><b>Gejala:</b><br>Dimulai dengan sakit perut, mual, muntah, panas tubuh meningkat, dan terkadang disertai diare.<br><br><b>Cara mengatasi:</b><br>Agar tidak terjadi risiko alergi terhadap telur, maka sebaiknya bayi baru boleh diberi telur setelah melewati usia 6 bulan. Telur yg diberikan harus matang, baik putih maupun kuningnya. Telur setengah matang baru boleh diberikan setelah bayi berumur 1 tahun.</li><li data-role="list-divider" style="white-space: normal"><b><big>Kacang-kacangan</big></b></li><li style="white-space: normal">Kacang-kacangan, terutama kacang tanah dan hasil olahannya dapat menyebabkan reaksi alergi yang berbahaya yang disebut <i>shock anaphylactic</i> (kejang-kejang), bahkan dapat menyebabkan kematian.<br><br><b>Cara mengatasi:</b><br>bagi mereka yang mempunyai sejarah alergi seperti eksim dan asma, sangat dianjurkan untuk menghindari kacang tanah dan produk olahannya, sampai bayi/anak minimal berusia 3 tahun. Mintalah nasihat dokter terlebih dahulu sebelum memperbolehkan bayi/anak mengonsumsi kacang tanah dalam menu makanannya.</li><li data-role="list-divider" style="white-space: normal"><b><big>Tomat dan Stroberi</big></b></li><li style="white-space: normal">Buah tomat yang mengandung laktin bisa mengakibatkan alergi pada bayi. Selain tomat, sebagian anak juga ada yang alergi terhadap buah stroberi.<br><br><b>Gejala:</b><br>Timbul ruam kulit seperti eksim.<br><br><b>Cara mengatasi:</b><br>Jangan memberikan makanan yang berbahan tomat mentah atau olahan seperti saus tomat, pasta tomat ataupun tomat kemasan. Jika, anak sudah memiliki riwayat alergi tomat, tunda dulu memberikan tomat pada bayi hingga usia 9 bulan.<br><br>Untuk anak yang alergi stroberi, sebaiknya ibu tidak memberikan buah jeruk segar yang berasa masam atau kecut, yogurt buah, labu, dan permen jeruk. Lebih baik memberikan buah pepaya, pisang, alpukat, atau jus apel yang lebih aman untuk tubuh bayi.</li><li data-role="list-divider" style="white-space: normal"><b><big>Ikan Laut</big></b></li><li style="white-space: normal">Ikan adalah makanan yang kaya akan protein yang bisa membentuk kecerdasan pada anak. Tapi sayangnya banyak kasus anak alergi terhadap ikan, khususnya ikan laut, seperti salmon dan jenis makanan laut lainya, misal tuna, salmon, cumi, udang dan kepiting.<br><br><b>Gejala:</b><br>Anak yang alergi makanan laut akan muncul rasa gatal dan bintik kemerahan di kulit.<br><br><b>Cara mengatasi:</b><br>Anda sebaiknya jangan dulu memberi ikan pada bayi sebelum usianya mencapai 6 bulan karena masih dalam masa pemberian ASI eksklusif. Setelah usia bayi Ibu mencapai 8 atau 12 bulan, ikan bisa menjadi bagian dari menu yang seimbang. Alergi makanan karena ikan laut paling mudah terdeteksi karena gejala yang ditimbulkan relatif cepat. Biasanya kurang dari 8 jam keluhan alergi sudah bisa dikenali.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
        tx.executeSql('SELECT * FROM BalitaNutrisiInfoGizi', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaNutrisiInfoGizi(IdGizi, NamaGizi, Keterangan, SumberMakanan) VALUES (1, \'Karbohidrat\', \'Karbohidrat berfungsi sebagai sumber energi, satu gram karbohidrat setara dengan 4 kkal.\', \'<div data-role="collapsible"><h4>Karbohidrat baik</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Buah/sayuran tertentu yang berasa manis madu</li><li>Gandum kasar</li><li>Beras merah</li><li>Beras tumbuk</li><li>Kentang</li><li>Pisang</li><li>Jagung</li><li>Sagu, dan lain-lain</li></ul></div><div data-role="collapsible"><h4>Karbohidrat jahat</h4><ul data-role="listview" data-inset="false"><li>Gula pasir</li><li>Gula merah</li><li>Soft drink</li><li>Permen</li><li>Biskuit</li><li>Kue</li><li>Terigu</li><li>Pasta</li><li>Beras putih</li><li>Tepung beras</li><li>Maizena</li><li>Roti</li><li>Mie</li><li>Bihun, dan lain-lain</li></ul></div>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiInfoGizi(IdGizi, NamaGizi, Keterangan, SumberMakanan) VALUES (2, \'Lemak\', \'Lemak berfungsi untuk komponen sel-sel syaraf, membran seluler, senyawa menyerupai hormon; pengangkut vitamin A, D, E,K; sumber energi; menjaga kesehatan kulit; melindungi organ-organ  vital tubuh; melindungi tubuh dari kehilangan panas yang berlebihan.\', \'<div data-role="collapsible"><h4>Asam lemak tidak jenuh</h4><ul data-role="listview" data-inset="false"><li>Minyak zaitun</li><li>Minyak jagung</li><li>Minyak bunga matahari</li><li style="white-space: normal">Biji-bijian (baru boleh diberikan pada anak usia di atas 12 bulan)</li></ul></div><div data-role="collapsible"><h4>Asam lemak omega 3/DHA</h4><ul data-role="listview" data-inset="false" ><li>Ikan salmon</li><li>Tuna</li><li>Sarden</li><li>Makarel</li><li>Telur organik</li><li>Wijen</li><li style="white-space: normal">Biji bunga matahari/minyak</li><li style="white-space: normal">Kedelai dan produk olahannya</li></ul></div><div data-role="collapsible"><h4>Asam lemak omega 6/AA/ARA</h4><ul data-role="listview" data-inset="false"><li>Almond</li><li>Kenari</li><li>Alpukat</li><li style="white-space: normal">Kedelai dan produk olahannya</li></ul></div><div data-role="collapsible"><h4>Asam lemak jenuh</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Minyak kelapa dan minyak kelapa sawit</li><li>Mentega</li><li style="white-space: normal">Susu <i>whole fat</i> atau produk susu beserta olahannya termasuk keju.</li><li style="white-space: normal">Daging merah</li></ul></div>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiInfoGizi(IdGizi, NamaGizi, Keterangan, SumberMakanan) VALUES (3, \'Protein\', \'Fungsi utama protein adalah sebagai bahan dasar pembentukan sel-sel dan jaringan tubuh. Fungsi lainnya yaitu berperan dalam proses pertumbuhan, pemeliharaan, dan perbaikan jaringan tubuh yang rusak, membantu proses pembuatan sel darah merah, serta membantu membentuk anti bodi untuk melawan penyakit dan infeksi.\', \'<div data-role="collapsible"><h4>Protein hewani</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Daging sapi</li><li>Daging kambing</li><li>Daging kambing</li><li>Daging domba</li><li>Ikan</li><li>Udang</li><li>Telur</li><li style="white-space: normal">Susu dan produk olahannya</li></ul></div><div data-role="collapsible"><h4>Protein nabati</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Kacang kedelai dan produk olahannya</li><li>Kacang almond</li><li>Kacang polong</li><li>Gandum</li></ul></div>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiInfoGizi(IdGizi, NamaGizi, Keterangan, SumberMakanan) VALUES (4, \'Vitamin\', \'Vitamin adalah zat-zat organik kompleks yang dibutuhkan dalam jumlah yang relatif kecil dan pada umumnya tidak dapat dibentuk atau disintesis oleh tubuh.\', \'<div data-role="collapsible"><h4>Vitamin A</h4><ul data-role="listview" data-inset="false"><li>Hati</li><li>Kuning Telur</li><li>Minyak ikan</li><li>Wortel</li><li>Brokoli</li><li>Labu kuning</li><li>Kentang</li><li>Mangga</li><li>Pepaya</li><li>Jeruk</li><li>Lemon</li><li>Tomat</li><li>Aprikot</li><li>Peach</li><li>Telur</li><li>Selada air</li><li>Mentega</li><li>Margarin</li><li>Susu penuh</li><li style="white-space: normal"><small>Berperan untuk pertumbuhan tulang, kulit, rambut, dan mata. Serta meningkatkan daya tahan tubuh terhadap infeksi, melindungi tubuh dari serangan jenis kanker tertentu.</small></li></ul></div><div data-role="collapsible"><h4>Vitamin B kompleks</h4><ul data-role="listview" data-inset="false"><li>Biji-bijian</li><li>Kacang-kacangan</li><li>Sayuran hijau</li><li style="white-space: normal">Susu dan produk olahannya</li><li>Telur</li><li>Ikan berlemak</li><li>Daging merah</li><li style="white-space: normal"><small>Terdiri dari vitamin B1 (thiamin), vitamin B2 (riboflavin), vitamin B3 (niacin), vitamin B5 (asam pantotenat), vitamin B6 (piridoksin), vitamin B12 (cianocabalamin), asam folat, dan biotin. Berfungsi untuk mengubah makanan menjadi energi, membantu proses pertumbuhan, menjaga kesehatan sistem saraf, menjaga lambung dan usus tetap sehat, dan menghindari infeksi.</small></li></ul></div><div data-role="collapsible"><h4>Vitamin C</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Pada umumnya ditemukan pada sayuran dan buah-buahan.</li><li>Brokoli</li><li>Kol</li><li>Taoge</li><li>Cabai</li><li>Jeruk</li><li>bluberi</li><li>Melon</li><li>Pepaya</li><li>Stroberi</li><li>Tomat</li><li style="white-space: normal"><small>Diperlukan untuk pertumbuhan, kesehatan jaringan tubuh, dan penyembuhan luka serta membantu dalam proses penyerapan zat besi. Selain itu penting untuk mengatur laju basal metabolisme dan menjaga suhu tubuh, membantu pembuluh darah agar tetap elastis dan kuat sehingga mencegah luka memar pada tubuh.</small></li></ul></div><div data-role="collapsible"><h4>Vitamin D</h4><ul data-role="listview" data-inset="false"><li>Minyak ikan</li><li>Ikan berlemak, misal: tuna</li><li>Hati</li><li>Minyak</li><li>Telur</li><li>Margarin</li><li>Susu olahan</li><li style="white-space: normal">Dapat dibuat melalui kulit dengan bantuan sinar ultraviolet/matahari</li><li style="white-space: normal"><small>Bersama dengan kalsium vitamin D berguna dalam pembentukan dan menjaga kesehatan tulang dan gigi.</small></li></ul></div><div data-role="collapsible"><h4>Vitamin E</h4><ul data-role="listview" data-inset="false"><li>Telur</li><li>Minyak</li><li>Sayuran</li><li>Margarin</li><li>Tepung gandum</li><li>Kentang</li><li>Sayuran hijau daun</li><li>Alpukat</li><li>Kacang-kacangan</li><li style="white-space: normal"><small>Penting untuk proses metabolisme, menjaga kesehatan kulit dan otot, melindungi lemak dan zat-zat yang terkandung di dalamnya dari kerusakan dan komposisi struktur sel. Selain itu, membantu membuat dan memelihara sel darah merah.</small></li></ul></div><div data-role="collapsible"><h4>Vitamin K</h4><ul data-role="listview" data-inset="false"><li>Sayuran hijau</li><li>Kol</li><li>Kacang polong</li><li>Kentang</li><li>Hati</li><li>Tomat</li><li>Yoghurt</li><li>Daging</li><li>Telur</li><li>Susu</li><li>Kacang-kacangan</li><li style="white-space: normal"><small>Berguna untuk pembentukan darah dan pertumbuhan tulang, membantu proses penyerapan di dalam usus, menghindari penyakit jantung dan menghentikan pendarahan.</small></li></ul></div>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaNutrisiInfoGizi(IdGizi, NamaGizi, Keterangan, SumberMakanan) VALUES (5, \'Mineral\', \'Mineral merupakan bagian yang memegang peranan penting dalam pemeliharaan fungsi tubuh, baik pada tingkat sel, jaringan, organ maupun fungsi tubuh secara keseluruhan. Disamping itu mineral berperan dalam berbagai tahap proses metabolisme, terutama sebagai kofaktor dalam aktifitas enzim-enzim.\', \'<div data-role="collapsible"><h4>Kalsium (Ca)</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Susu dan produk olahannya</li><li>Ikan</li><li>Buah Kering</li><li>Roti dan tepung</li><li>Brokoli</li><li>Kacang polong</li><li style="white-space: normal"><small>Kalsium diperlukan gar tulang dan gigi menjadi kuat, menjaga keseimbangan cairan tubuh, membantu proses pembekuan darah, membantu penyerapan vitamin B12, serta penting untuk perkembangan sel-sel saraf dan otak.</small></li></ul></div><div data-role="collapsible"><h4>Zat besi (Fe)</h4><ul data-role="listview" data-inset="false"><li>Hati</li><li>Ginjal</li><li>Daging merah</li><li>Minyak ikan</li><li>Kuning telur</li><li>Sereal gandum utuh</li><li>Kacang polong</li><li>Sayuran berdaun hijau</li><li>Cokelat</li><li style="white-space: normal"><small>Diperlukan untuk pembentukan sel darah merah, kesehatan darah dan otot, serta penting untuk mencegah infeksi.</small></li></ul></div><div data-role="collapsible"><h4>Seng (Zn)</h4><ul data-role="listview" data-inset="false"><li>Kacang-kacangan</li><li>Daging merah</li><li>Ikan</li><li>Telur</li><li>Gandum</li><li>Bawang</li><li style="white-space: normal"><small>Diperlukan untuk pembentukan enzim maupun protein. Serta diperlukan untuk memperlancar peredaran vitamin A dan cadangannya dari hati ke aliran darah.</small></li></ul></div><div data-role="collapsible"><h4>Fosfor (P)</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Kacang-kacangan dan olahannya</li><li>Daging merah</li><li>Ikan</li><li>Telur</li><li>Gandum</li><li>Ayam</li><li style="white-space: normal">Susu dan olahannya</li><li>Serealia</li><li style="white-space: normal"><small>Berperan dalam mengatur pengalihan energi, keseimbangan asam-basa, absorpsi dan transportasi zat gizi, serta membantu proses pengerasan tulang dan gigi.</small></li></ul></div><div data-role="collapsible"><h4>Magnesium (MG)</h4><ul data-role="listview" data-inset="false"><li>Daging merah</li><li>Kacang-kacangan</li><li>Biji-bijian</li><li>Sayuran hijau</li><li style="white-space: normal">Susu dan olahannya</li><li>Serealia tumbuk</li><li style="white-space: normal"><small>Berperan dalam mencegah kerusakan gigi, membantu dalam proses metabolisme tubuh, transmisi syaraf, kontraksi otot dan pembekuan darah.</small></li></ul></div><div data-role="collapsible"><h4>Iodium (I)</h4><ul data-role="listview" data-inset="false"><li style="white-space: normal">Pada umunya terdapat pada makanan laut</li><li>Ikan</li><li>Udang</li><li>Kerang</li><li>Ganggang laut</li><li style="white-space: normal"><small>Berperan dalam mengatur pertumbuhan dan perkembangan, membantu mengatur suhu tubuh, pembentukan sel darah merah, membantu dalam proses sintesis protein, absorpsi karbohidrat dan sintesis kolesterol darah.</small></li></ul></div><div data-role="collapsible"><h4>Selenium (SE)</h4><ul data-role="listview" data-inset="false"><li>Makanan laut</li><li>Hati</li><li>Ginjal</li><li>Daging merah</li><li>Ayam</li><li>Serealia</li><li>Biji-bijian</li><li>Kacang-kacangan</li><li style="white-space: normal"><small>Berperan sebagai antioksidan yang dapat melindungi membran sel dari kerusakan oksidatif sehingga berpontensi untuk mencegah penyakit kanker (antikanker) dan penyakit degeneratif lainnya.</small></li></ul></div>\')',[], nullHandler,errorHandler);
            }
        }
     );
    },errorHandler, function() {
        var content = "";
        $( '#balitaTabelNutrisiInfo' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM BalitaNutrisiInfo', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Judul + '</h4><ul data-role="listview" data-inset="false">' + row.Konten + '</ul></div>';
                }
                $( '#balitaTabelNutrisiInfo' ).append( content );
            }, errorHandler );
        }, errorHandler, function() {
            var content2 = '<div data-role="collapsible"><h4>Zat Gizi</h4><ul data-role="listview" data-inset="false">';
            db.transaction( function( tx ) {
                tx.executeSql('SELECT * FROM BalitaNutrisiInfoGizi', [], function(transaction, result) {
                    for ( var i = 0; i < result.rows.length; i++ ) {
                        var row = result.rows.item( i );
                        content2 += '<li><a href="#balita-' + row.NamaGizi.toLowerCase() + '">' + row.NamaGizi + '</a></li>';
                        $( '#balitaKonten' + row.NamaGizi ).html( '<b>' + row.NamaGizi + '</b><p>' + row.Keterangan + '</p><b>Sumber makanan:</b><div data-role="collapsibleset"  data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-filter="true" data-children="> div, > div div ul li, > div div ul li p" data-input="#cariPerkembangan" id="balitaTabelNutrisi' + row.NamaGizi + '">' + row.SumberMakanan + '</div>' );
                    }
                    $( '#balitaTabelNutrisiInfo' ).append( content2 + '</ul></div>' );
                }, errorHandler );
            }, errorHandler, nullHandler );
        } );
    } );
}

function balita_insert_perkembangan()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BalitaPerkembangan', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'1\', \'<li>Keterampilan Utama<p style="white-space: normal">Menunjukkan perilaku pemicu kasih sayang, menangis, meringkuk, mendekut</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Terbaring seperti ketika masih di dalam rahim</p><p>Ototnya seperti pegas</p><p>Kepala sedikit diangkat</p><p style="white-space: normal">Otot terkadang kejang kaki tidak merasakan berat</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Tangan terkepal erat</p><p style="white-space: normal">Tidak dapat menggenggam giring-giring</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Menangis karena meminta sesuatu</p><p style="white-space: normal">Mendengkur dengan suara tenggorokan</p><p style="white-space: normal">Tersenyum-senyum</p><p style="white-space: normal">Menangis disaat tidur</p><p style="white-space: normal">Mengenali orang tuanya sebagai "si suara asing"</p><p style="white-space: normal">Penglihatan paling baik berjarak 8-10 inci dan masih buram</p><p style="white-space: normal">Tidur, bangun, makan secara tidak menentu</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Tingkah laku bawaan sejak lahir sebagai pemicu kasih sayang: tangisan untuk meminta kenyamanan atau makanan</p><p style="white-space: normal">Tingkah lakunya lebih sering dilakukan secara refleks (otomatis) dibandingkan dengan berpikir dulu</p><p style="white-space: normal">Mengantisipasi bahwa dengan hilangnya stres akan diikuti dengan kenyamanan</p><p style="white-space: normal">Mulai belajar mempercayai</p></li><li>Tips<p style="white-space: normal"><b>Kiat untuk mempertahankan perhatian visual bayi:</b></p><p style="white-space: normal">Dudukkan atau pegang tubuh bayi dalam posisi tegak, tunggu bayi hingga dalam keadaan diam, pegang objek atau wajah dalam jarak dalam jarak sekitar 25cm dari wajah bayi, gunakan gerakan wajah yang lucu (mulut dan mata terbuka lebar) sambil berbicara perlahan, berirama, serta nada yang dilebih-lebihkan</p><p style="white-space: normal">*bayi yang baru lahir suka melihat wajah, terutama yang ia kenal.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'2\', \'<li>Keterampilan Utama<p style="white-space: normal">Terhubung secara visual dengan orang tua</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Lengan dan kaki rilaks direnggangkan ke luar</p><p style="white-space: normal">Kepala diangkat setinggi 45 derajat</p><p style="white-space: normal">Kepala masih terhuyung bila digendong dalam keadaan duduk</p><p style="white-space: normal">Kekejangan otot berkurang</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Sebagian jari tangan mulai membuka</p><p style="white-space: normal">Pukulan dilayangkan tanpa arah</p><p style="white-space: normal">Mulai dapat menggenggam giring-giring</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mendekut, menjerit, mendenguk</p><p style="white-space: normal">Membuat suara seperti sedang minum, dada berbunyi</p><p style="white-space: normal">Tersenyum dengan responsif</p><p style="white-space: normal">Menunjukkan emosi: kesenangan, tidak adanya tekanan</p><p style="white-space: normal">Membaca suasana hati: sedih bila orangtua tidak memiliki suasana hati yang bagus</p><p style="white-space: normal">Menyibukkan diri sendiri dengan ibu jari</p><p style="white-space: normal">Mengadakan kontak mata, mengamati wajah</p><p style="white-space: normal">Samar-samar meniru mimik wajah</p><p style="white-space: normal">Memerhatikan orang yang bergerak</p><p style="white-space: normal">Menangis bila diturunkan dari gendongan</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Menunjukkan perangai untuk mengajak: senang berkomunikasi, protes bila kebutuhannya tidak terpenuhi</p><p style="white-space: normal">Memberi isyarat, melihat tanggapan, memercayai keduanya</p><p style="white-space: normal">Membuat asosiasi: tangisan-digendong atau diberi makan</p></li><li>Tips<p style="white-space: normal"><b>Apa yang suka dilihat oleh bayi:</b></p><p style="white-space: normal">Wajah anda (selalu menjadi favoritnya), kekontrasan (terutama hitam dan putih), siluet, sesuatu yang bergerak khususnya dengan desain yang kontras hitan dan putih, kipas dan kayu di langit-langit.</p><p style="white-space: normal"><b>Kiat untuk berbicara dengan bayi anda:</b></p><p style="white-space: normal">1. Pandanglah mata bayi anda sebelum memulai percakapan.</p><p style="white-space: normal">2. Panggil bayi anda dengan menggunakan namanya.</p><p style="white-space: normal">3. Perjelas huruf vokal, contoh "baaaayi caaantik".</p><p style="white-space: normal">4. Gunakan "mama" dan "papa" untuk menyebutkan diri anda.</p><p style="white-space: normal">5. Asosiasikan ucapan dengan sikap tubuh.</p><p style="white-space: normal">6. Bicarakan hal yang sedang anda lakukan, misalnya saat sedang memandikan bayi anda "sekarang mama buka dulu ya bajunya ... sekarang pakai sabun ...".</p><p style="white-space: normal">7. Setelah berbicara berikan bayi anda waktu untuk meresponsnya, perhatikan pula sinyal yang diberikan oleh bayi anda apakah anda harus melanjutkannya atau berhenti.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'3\', \'<li>Keterampilan Utama<p style="white-space: normal">Memainkan tangan</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Lengan dan kaki digerakkan secara sempurna; dapat membuat gerakan bebas dan memutar</p><p style="white-space: normal">Kepala diangkat lebih tinggi daripada punggung, seperti mencari sesuatu</p><p style="white-space: normal">Mulai merasakan beban pada kaki</p><p style="white-space: normal">Kepala bisa diangkat hingga tegak saat digendong</p><p style="white-space: normal">Dari posisi telentang berguling ke samping</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Tangan terbuka seperti mengajak</p><p style="white-space: normal">Dapat membuat gerakan-gerakan seperti memukul, lebih banyak meleset daripada mengenai sasaran</p><p style="white-space: normal">Sudah dapat menggenggam dan menggoyangkan giring-giring lebih lama</p><p style="white-space: normal">Dapat menghisap ibu jari dan meninjuk</p><p style="white-space: normal">Bermain dengan tangan, tepuk tangan</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Membuat suara-suara: "aah, eee, oooh"</p><p style="white-space: normal">Membuat suara yang lebih keras, memekik</p><p style="white-space: normal">Tangisannya berbeda untuk kebutuhan yang berbeda, membuat jeda disela-sela tangisan</p><p style="white-space: normal">Mulai tertawa</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Mempelajari sebab dan akibat: mendorong mobil-mobilan dan bergerak!</p><p style="white-space: normal">Mempelajari kompetensi: bisa menyebabkan orang bereaksi dengan senyum, tangisan, bahasa tubuh</p></li><li>Tips<p style="white-space: normal"><b>Kiat untuk memilih mainan untuk bayi anda:</b></p><p style="white-space: normal">1. Ringan dan mudah digenggam.</p><p style="white-space: normal">2. Hitam dan putih atau warna yang kontras.</p><p style="white-space: normal">3. Berbahan plastik.</p><p style="white-space: normal">4. Mainan yang tidak dapat ditelan dan tidak memiliki bagian yang tajam atau bagian yang dapat dilepaskan.</p><p style="white-space: normal"><b>Kiat sikap tubuh bayi untuk merangsang permainan tangan:</b></p><p style="white-space: normal">Bayi harus berada pada posisi semi tegak pada gendongan anda atau pada kursi bayi. Pada saat mengangkat bayi anda pada posisi tersebut pastikan bahwa wajahnya akan menghadap ke depan. Sikap badan yang semi-tegak mendorong lengan dan tangan untuk bergerak bersama-sama, sehingga merangsang bayi untuk bermain dengan tangannya atau dengan mainan yang ada dihadapannya. Hal tersebut akan membantu bayi untuk melatih keseimbangannya.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'4\', \'<li>Keterampilan Utama<p style="white-space: normal">Menunjukkan pengamatan visual yang akurat</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Berdiri dengan berpegangan</p><p style="white-space: normal">Duduk bertumpu pada lengan</p><p style="white-space: normal">Kepala diangkat hingga 90 derajat, dan dapat menengokkan kepala hingga 180 derajat</p><p style="white-space: normal">Bersandar pada siku</p><p style="white-space: normal">Dari posisi telungkup berguling ke samping</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Bisa memeluk dengan dua tangan</p><p style="white-space: normal">Dapat menjangkau secara tepat mainan yang memiliki benang atau sesuatu yang menjuntai</p><p style="white-space: normal">Mengamati pakaian, memegang dada ibu</p><p style="white-space: normal">Menggenggam seperti menggunakan sarung tangan</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mengubah bentuk mulut untuk membuat suara: "ah-oh"</p><p style="white-space: normal">Meniup gelembung, bercakap dengan lantang, tertawa geli kalau dikelitiki</p><p style="white-space: normal">Sikap sosial: mengangkat lengan sebagai isyarat "gendonglah aku"</p><p style="white-space: normal">Penglihatan binokular berkembang: presepsi yang lebih baik, melihat dengan sungguh-sungguh, mengamati dengan akurat</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Membentuk gambaran mental tentang hal yang ia harapkan apabila memberi isyarat (contohnya disusui)</p><p style="white-space: normal">Tahu bahwa orang dan benda itu memiliki nama</p></li><li>Tips<p style="white-space: normal"><b>Melatih keterampilan visual:</b></p><p style="white-space: normal">Permainan saling menatap; ketika bayi sedang diam, tangkaplah perhatiannya dengan menempatkan posisi pandangan. Miringkan kepala anda secara perlahan. Amati bahwa bayi anda akan memiringkan kepalanya juga. Putarlah tubuhnya, dan lihatlah bahwa ia akan memutar kepalanya untuk tetap dapat melihat wajah anda.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'5\', \'<li>Keterampilan Utama<p style="white-space: normal">Meraih sesuatu dengan tepat</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Duduk bertumpu pada lantai dan bantal di atas kursi bayi</p><p style="white-space: normal">Berdiri, berpegangan hanya untuk menjaga keseimbangan</p><p style="white-space: normal">Berguling ke belakang</p><p style="white-space: normal">Perut digerak-gerakkan: seperti pesawat terbang</p><p style="white-space: normal">Seperti posisi push-up: dada dan sebagian perut diangkat dari lantai</p><p style="white-space: normal">Bergoyang maju sejauh beberapa meter</p><p style="white-space: normal">Leher dijulurkan ke depan untuk melihat benda</p><p style="white-space: normal">Jari kaki dapat dijangkau</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Dapat meraih dengan satu tangan-sudah cukup pandai melakukannya</p><p style="white-space: normal">Mainan dapat dipindahkan dengan muda dari tangan yang satu ke tangan yang lain dan ke mulut</p><p style="white-space: normal">Mulai bermain dengan balok-balok</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mengumumkan "ba-ba-ba" untuk mendapatkan perhatian</p><p style="white-space: normal">Menengok ke arah orang yang berbicara</p><p style="white-space: normal">Berusaha meniru suara, infleksi, dan sikap tubuh</p><p style="white-space: normal">Memerhatikan gerakan mulut menyuarakan bunyi yang berbeda untuk kebutuhan yang berbeda</p><p style="white-space: normal">Menunjukkan minat dini terhadap makanan padat</p><p style="white-space: normal">Menunjukkan ketertarikan pada warna</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Mempelajari suara dan mimik wajah yang akan ditanggapi orang</p><p style="white-space: normal">Menunjukkan ekspresi pengambilan keputusan sewaktu bermain-main dengan tangannya</p><p style="white-space: normal">Mencari tahu objek dan mengubah bentuk tangan untuk mengakomodasi bentuk objek sebelum melakukan kontak</p><p style="white-space: normal">Menggunakan tangan untuk mendorong lengan anda apabila anda memberinya obat</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'6\', \'<li>Keterampilan Utama<p style="white-space: normal">Duduk</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Duduk sendiri dengan sempurna, menggunakan lengan agar seimbang dan tidak jatuh, dapat merosot ke depan</p><p style="white-space: normal">Duduk di kursi bayi</p><p style="white-space: normal">Berdiri dengan berpegangan</p><p style="white-space: normal">Berguling-guling</p><p style="white-space: normal">Jari kaki dan tangan digunakan untuk menggerakkan mainan</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Meraih dengan tepat</p><p style="white-space: normal">Menunjuk mainan</p><p style="white-space: normal">Memanipulasi permainan menggunakan balok-balok</p><p style="white-space: normal">Menggunakan seluruh tangan untuk mengait dan mengambil benda kecil dengan cara dijumput</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Menjulurkan tangan lebih panjang dengan suara yang lebih bervariasi</p><p style="white-space: normal">Bereksperimen dengan pola tangga nada dan volume suara yang baru serta memerhatikan reaksi yang terjadi</p><p style="white-space: normal">Senang akan suara dan bahasa tubuh: berteriak, tertawa perut, menepuk lengan, mendengkur, menggeram, bermuka sedih</p><p style="white-space: normal">Meniru sikap wajah dengan lebih baik</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Menunjukkan "ketertarikan" yang lebih tinggi selama bermain: mencoba mencari tahu cara mengambil balok ketiga dengan kedua tangan yang telah penuh dengan balok</p><p style="white-space: normal">Menghabiskan waktu lebih lama untuk mempelajari mainan dan memahami tindakan yang harus dilakukan dengan mereka</p></li><li>Tips<p style="white-space: normal"><b>Tips untuk membatu bayi yang baru bisa duduk:</b></p><p style="white-space: normal">Letakkan bantal di sekeliling bayi untuk menjaga agar bayi tidak jatuh ke samping atau ke belakang. Gunakan interaksi dengan mainan untuk melatih keseimbangan bayi. Bayi akan menggunakan tangannya untuk meraih mainan sehingga bayi yang baru bisa duduk "lupa" untuk menggunakan tangannya sebagai penjaga keseimbangan.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'6-9\', \'<li>Keterampilan Utama<p style="white-space: normal">Merangkak, menjumput dengan jari-jarinya</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Duduk tegak tanpa ditopang</p><p style="white-space: normal">Badan condong ke depan untuk meraih mainan</p><p style="white-space: normal">Merangkak dengan tangan dan lutut</p><p style="white-space: normal">Berputar pada sumbu</p><p style="white-space: normal">Mendorong badan ke atas sampai berdiri</p><p style="white-space: normal">Berdiri berpegangan  pada perabotan</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Mengambil objek kecil dengan ibu jari dan telunjuk</p><p style="white-space: normal">Makan sendiri (berantakan)</p><p style="white-space: normal">Menyambar mainan yang bergerak, menjatuhkan dan memerhatikan jatuhnya mainan</p><p style="white-space: normal">Minum dari gelas</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Menggumamkan kombinasi acak vokal dan konsonan ("ah, da, ma, ba, di, mu") serta mengocehkan suara-suara tersebut secara bersamaan</p><p style="white-space: normal">Menambah gerakan lidah untuk mengubah suara: "ah-da"</p><p style="white-space: normal">Terus merespons bila namanya disebut</p><p style="white-space: normal">Gerakan sosial: menggunakan lengan untuk mengajak pengasuh bermain, mengangkat lengan sebagai tanda, "gendonglah aku"</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Memberikan label: mengasosiasikan gambaran dalam otak dengan bahasa dan gambar (contohnya: "kucing")</p><p style="white-space: normal">Mengembangkan konsep "masuk" dan "keluar" - memerhatikan bagaimana wadah yang lebih kecil bisa masuk ke yang lebih besar</p><p style="white-space: normal">Menunjukkan keinginan yang aneh</p></li><li>Tips<p style="white-space: normal"><b>Permainan untuk merangsang keterampilan merangkak dan mengambil sesuatu dengan jari telunjuk</b></p><p style="white-space: normal">1. Bermain bola</p><p style="white-space: normal">Gunakan bola yang cukup besar untuk dipegang dengan menggunakan kedua tangan, lebih baik yang berbahan busa atau kain sehingga bayi dapat memegangnya dengan satu tangan.</p><p style="white-space: normal">2. Bermain dengan cermin</p><p style="white-space: normal">Dudukkan bayi di depan cermin sehingga bayi dapat memegang bayangannya. Perhatikan bayi yang mencoba menyesuaikan tangan dan wajahnya dengan bayangan di cermin.</p><p style="white-space: normal">3. Permainan berguling</p><p style="white-space: normal">Tengkurapkan bayi anda diatas guling, lalu taruh mainan pada jarak yang dapat dijangkaunya. Perhatikan tumpuan yang dilakukan bayi untuk mendorong dan menggulingkan tubuhnya ke depan dalam usahanya menjangkau mainan.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'9-12\', \'<li>Keterampilan Utama<p style="white-space: normal">Merangkak, tidak hanya diam ditempat</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Semakin pandai merangkak</p><p style="white-space: normal">Dapat mengubah posisi dari duduk menjadi merangkak</p><p style="white-space: normal">Merambat dan memanjat perabotan</p><p style="white-space: normal">Merangkak menaiki tangga, belum bisa menuruninya</p><p style="white-space: normal">Berkeliling disekitar perabotan</p><p style="white-space: normal">Berdiri tanpa berpegangan</p><p style="white-space: normal">Berjalan dengan dipegangi si penuntun</p><p style="white-space: normal">Langkah pertama masih kaku, belum tegap, lebar-lebar, kadang terjatuh</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Menggenggam erat</p><p style="white-space: normal">Menunjuk dan mencongkel dengan jari telunjuk</p><p style="white-space: normal">Mengubah bentuk tangan untuk menyesuaikan bentuk objek</p><p style="white-space: normal">Menumpuk dan menjatuhkan balok-balok</p><p style="white-space: normal">Menunjukkan dominasi tangan</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Membuat suara dua suku kata ("ma-ma, da-da") dan mengasosiasikannya dengan orang yang tepat</p><p style="white-space: normal">Mengerti kata "tidak"</p><p style="white-space: normal">Membuat suara-suara tiruan: batuk, menjentikkan lidah</p><p style="white-space: normal">Mengerti sikap tubuh: lambaian perpisahan</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Menunjukkan ingatannya akan kejadian yang baru berlalu</p><p style="white-space: normal">Kata-kata isyarat memicu gambaran mental dari kegiatan yang ia harapkan: "pergi ..."-melihat ke arah pintu</p><p style="white-space: normal">Ingat letak mainannya ketika tertutupi</p><p style="white-space: normal">"Mama datang" memicu gambaran mental tentang mama-berhenti menangis</p>  <p style="white-space: normal">Menunjukkan kegelisahan akibat perpisahan</p>  </li><li>Tips<p style="white-space: normal"><b>Membantu bayi belajar berjalan</b></p><p style="white-space: normal">Pegang kedua tangan bayi, asosiasikan bayi diantara kaki anda atau disamping. Secara bertahap, lepaskan salah satu tangannya lalu yang lainnya juga. Setelah bayi berdiri sendiri berdirilah sejauh satu kaki dihadapannya, ulurkan tangan anda seolah memanggilnya ke arah anda.</p><p style="white-space: normal"><b>Aktifitas untuk melatih kecakapan tangan bayi</b></p><p style="white-space: normal">1. Berikan gelas plastik atau kotak sepatu kepada bayi. Lalu berikan balok dan cermati cara bayi memperkenalkan balok dengan wadahnya. Tangan dan pikiran bekerja sama untuk mencari tahu bagaimana meletakkan balok ke dalam kotak dan mengeluarkannya. Setelah menguasainya bayi akan menggoyang wadah dan mendengarkan balok yang bergerak di dalam.</p><p style="white-space: normal">2. Berikan panci dan baskom. Bayi suka menaruh baskom kecil ke dalam baskom yang besar serta suara bantingan ketika terjatuh.</p><p style="white-space: normal">3. Mengisi dan menuang air. Air yang diambil dan ditumpahkan sehingga menghasilkan percikan merupakan permainan favorit bayi. </p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'12-15\', \'<li>Keterampilan Utama<p style="white-space: normal">Berjalan</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Belajar berjalan sendiri</p><p style="white-space: normal">Mencoba bermacam-macam gaya berjalan</p><p style="white-space: normal">Menaiki tangga dan turun</p><p style="white-space: normal">Mencoba memanjat kursi bayi</p><p style="white-space: normal">Melakukan gerakan bangun-dan-jalan: merangkak, berjongkok, berdiri, dan berjalan</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Menggunakan peralatan: sikat gigi, sisir, telepon, membuka laci dan memindahkan isinya</p><p style="white-space: normal">Mencocokkan silinder dengan tutupnya</p><p style="white-space: normal">Melempar bola dengan tangan</p><p style="white-space: normal">Lebih mudah bila dipakaikan baju</p><p style="white-space: normal">Makan sendiri, memegang botol</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mengucapkan empat hingga enam kata yang dapat dimengerti</p><p style="white-space: normal">Menggunakan kata yang mangandung huruf b, c, d, g</p><p style="white-space: normal">Mengucapkan kata secara terpisah: "cing" untuk "kucing"</p><p style="white-space: normal">Mengatakan dan membuat sikap tubuh: "tidak" dan menggelengkan kepala</p><p style="white-space: normal">Meminta bantuan dengan menunjuk dan membuat suara-suara</p><p style="white-space: normal">Mengenali nama dan menunjuk orang yang ia kenal</p><p style="white-space: normal">Mengerti dan mengikuti satu macam perintah: "lemparkan bolanya ke ayah"</p><p style="white-space: normal">Tertawa saat melihat gambar yang lucu</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Kosa kata bertambah dan berkembangnya pikiran membuat kenangan lebih mudah terbentuk</p><p style="white-space: normal">Mengasosiakan orang dan benda yang dikenal dengan kata-kata yang diucapkan untuk mereka</p><p style="white-space: normal">Memberikan impresi bahwa kata-kata dan sikap tubuh memicu pikiran-pikirannya</p><p style="white-space: normal">Mulai mempelajari cara mencocokkan sesuatu: mencoba untuk mencocokkan tutup suatu benda, menumpuk balok</p></li><li>Tips<p style="white-space: normal"><b>Melatih anak berjalan</b></p><p style="white-space: normal">Berdiri di hadapan anak anda, pegang bola di tangan anda dan biarkan anak juga memegang bola tersebut. Mulailah berjalan mundur, hal tersebut akan menyebabkan anak anda ikut berjalan.</p><p style="white-space: normal">berikan mainan yang dapat ditarik atau didorong, misal: kereta dorong.</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'15-18\', \'<li>Keterampilan Utama<p style="white-space: normal">Mengerti bahasa yang sederhana</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Berjalan berbelok, mundur, berputar</p><p style="white-space: normal">Berjalan lebih cepat, berlari-lari kecil, melompat-lompat</p><p style="white-space: normal">Berhenti dan membungkuk untuk memungut mainan</p><p style="white-space: normal">Memanjat perabotan, mencoba untuk memanjat keluar dari ranjangnya</p><p style="white-space: normal">Mengendarai mainan beroda empat</p><p style="white-space: normal">Mencoba menendang bola, sering meleset</p><p style="white-space: normal">Mencari posisi sendiri diatas kursi</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Menuliskan kalimat acak dan menggambar separuh lingkaran</p><p style="white-space: normal">Membuka laci</p><p style="white-space: normal">Menurut bila dipakaikan baju</p><p style="white-space: normal">Melempar bola dengan seluruh kekuatan lengannya</p><p style="white-space: normal">Mengonsumsi makanan berkuah</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mengatakan 10-20 kata yang bisa dimengerti</p><p style="white-space: normal">Menggunakan kata yang lengkap: "cing" menjadi "kucing"</p><p style="white-space: normal">Menggabungkan dua kata bersama-sama</p><p style="white-space: normal">Membentuk kalimat pertama</p><p style="white-space: normal">Menanggapi permintaan verbal tanpa diikuti bahasa tubuh</p><p style="white-space: normal">Mengobrol dan meniru perkataan</p><p style="white-space: normal">Mengerti kata-kata: naik, turun, mati, panas</p><p style="white-space: normal">Menggunakan kata-kata untuk meminta: "num-num" atau "ba-ba"</p><p style="white-space: normal">Mengerti kata "yang lain"</p><p style="white-space: normal">Menggunakan isyarat "shhh" untuk "diam"</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Mengamati bermacam bentuk, menyusun gelang-gelang</p><p style="white-space: normal">Belajar dengan menjelajahi seisi rumah</p><p style="white-space: normal">Mengenali gambar yang dikenal pada buku: "cari seekor kucing"</p><p style="white-space: normal">Mencocokkan batang yang bundar dengan lubang yang bundar</p><p style="white-space: normal">Kegelisahan akan perpisahan berkurang: dapat membayangkan gambaran mental dari seseorang ketika mereka tidak terlihat</p></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaPerkembangan(Waktu, Konten) VALUES (\'18-24\', \'<li>Keterampilan Utama<p style="white-space: normal">Mencari tahu sebelum bertindak, mengerti bahasa sehari-hari</p></li><li>Keterampilan Motorik Kasar<p style="white-space: normal">Berlari, mencoba untuk melarikan diri dari si pengasuh</p><p style="white-space: normal">Melihat ke bawah untuk menghindari rintangan</p><p style="white-space: normal">Meloncat-loncat ditempat dan mundur</p><p style="white-space: normal">Mengayuh pedal sepeda pertamanya</p><p style="white-space: normal">Menendang bola tanpa terjatuh</p><p style="white-space: normal">Bisa memanjat keluar dari ranjangnya</p><p style="white-space: normal">Menaiki tangga tanpa bantuan, kedua kaki pada tiap anak tangga, bisa saja meminta tolong untuk turun</p><p style="white-space: normal">Membuka pintu</p></li><li style="white-space: normal">Keterampilan Tangan dan Kemampuan Menolong Diri Sendiri<p style="white-space: normal">Membuka bungkusan</p><p style="white-space: normal">Melepaskan baju, mencuci tangan</p><p style="white-space: normal">Memasang tutup kotak sepatu</p><p style="white-space: normal">Membangun menara yang terdiri dari enam buah balok</p><p style="white-space: normal">Meremas kertas, menyelesaikan <i>puzzle</i> yang mudah</p><p style="white-space: normal">Melempar bola dengan ayunan tangan yang tinggi</p><p style="white-space: normal">Duduk dikursi tanpa bantuan</p></li><li>Keterampilan Berbahasa dan Sosial<p style="white-space: normal">Mengatakan 20-25 kata-kata yang bisa dimengerti</p><p style="white-space: normal">Mencoba kata-kata multi suku kata: "Ben-ben-ben" untuk "Benjamin"</p><p style="white-space: normal">Menjawab: "apa yang dikatakan anjing itu?"</p><p style="white-space: normal">Membuat kalimat yang terdiri dari tiga kata, seperti dalam telegram: "kami mau lagi"</p><p style="white-space: normal">Biasanya "becicara sedikit, tetapi mengerti semuanya"</p><p style="white-space: normal">Suka kata-kata yang menantang ("helikopter", "dinosaurus"), dengan sedikit acak-acakan</p><p style="white-space: normal">Dapat menyebutkan nama lengkapnya</p><p style="white-space: normal">Bersenandung dan bernyanyi</p><p style="white-space: normal">Tingkah laku normal: marah, merengek, menggigit, dan menjerit</p></li><li>Keterampilan Kognitif (Berpikir)<p style="white-space: normal">Mencari tahu segala sesuatu sebelum melakukannya</p><p style="white-space: normal">Menggambar lingkaran, membuat gambar garis</p><p style="white-space: normal">Menyusun <i>puzzle</i> yang mudah</p><p style="white-space: normal">Memperlihatkan suatu rangkaian pikiran: mentega kacang harus ada diatas jeli</p><p style="white-space: normal">Mengerti dan mengingat dua macam perintah sekaligus: "pergi ke dapur dan ambilkan kue kering untuk ayah!"</p></li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#balitaTabelPerkembangan' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM BalitaPerkembangan', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Waktu + ' Bulan</h4><ul data-role="listview" data-inset="false">' + row.Konten + '</ul></div>';
                }
                $( '#balitaTabelPerkembangan' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function balita_insert_p3k()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM BalitaP3K', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Tersedak\', \'<p style="white-space: normal">Tersedak bermakna bahwa anak sedang berusaha untuk mengeluarkan sesuatu dari saluran udara yang sebagian terhalang atau berupaya sekuat tenaga untuk mendapatkan udara. Ini adalah salah satu penyebab kematian yang paling umum pada anak-anak.</p><b>Ciri-ciri:</b><p style="white-space: normal">• Sulit bernafas atau wajah berubah biru.<br></p><p style="white-space: normal">• Pucat (dan anda curiga bahwa dia tersedak).<br></p><p style="white-space: normal">• Memperlihatkan ekspresi “aku sedang tersedak”: mata lebar, mulut terbuka, meneteskan air liur, wajah tampak panik.<br></p><b>Penanganan:</b><p style="white-space: normal">• Tengkurapkan anak di lengan bawah anda. Sangga leher dan dagunya dengan jari jari anda. Posisikan bayi sehingga kepala lebih rendah dari dadanya.<br></p><p style="white-space: normal">• Tepuklah punggungnya sebanyak 5 kali, tepatnya antara tulang belikat, dengan pangkal telapak tangan yang lain.<br></p><p style="white-space: normal">• Jika tidak ada benda yang keluar, telentangkan bayi anda dan letakkan di atas meja atau lantai.<br></p><p style="white-space: normal">• Tempatkan 2 jari anda ditengah tulang dadanya dan tekanlah cepat sebanyak 5 kali.<br></p><p style="white-space: normal">• Ulangi proses yaitu 5 tepukan dipunggung dan 5 tekanan dada sampai benda tersebut keluar atau anak kembali bernapas.<br></p><p style="white-space: normal">• Jika bayi pingsan, lakukan CPR (bantuan napas). Setiap memberi bantuan napas, carilah benda didalam mulutnya dan coba keluarkan. Jangan masukan jari jari anda kedalam tenggorokan, bisa bisa anda malah membuat benda itu semakin masuk kedalam.<br></p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Pendarahan\', \'<b>Pendarahan Besar</b><p style="white-space: normal">• Beri tekanan.</p><p style="white-space: normal"><small>Gunakan kain kasa atau selembar sapu tangan bersih untuk menekan lokasi yang berdarah selama dua menit. Kemudian bila memungkinkan cek kondisi luka dibawah air leding dingin yang mengalir. Lalu lakukan kembali tekanan dengan perban selama setidaknya 20 menit lagi.</small></p><p style="white-space: normal">• Tenangkan anak anda.</p><p style="white-space: normal">• Posisikan anak anda dengan tepat.</p><p style="white-space: normal"><small>Baringkan anak anda, dan angkatlah lokasi pendarahan sehingga lebih tinggi dari jantung. Misal: meniggikan tangan.</small></p><p style="white-space: normal">• Dapatkan bantuan medis.</p><b>Pendarahan Kecil</b><p style="white-space: normal">• Tetap tenang</p><p style="white-space: normal">• Cuci luka, gunakan air dingin yang mengalir untuk membersihkan luka.</p><p style="white-space: normal">• Berikan perban pada luka</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Luka Bakar\', \'<b>Penanganan pertama:</b><p style="white-space: normal">• Langsung celupkan area yang terbakar ke air dingin, paling tidak selama 20 menit. Jangan gunakan es karena akan meningkatkan kerusakan jaringan. Jika luka terdapat pada wajah, usapkan handuk yang direndam air dingin, atau pegang pipi di bawah air leding yang mengalir. Jangan mengoleskan mentega, lemak, atau bedak diatas luka bakar.</p><p style="white-space: normal">• Nilailah kegawatan luka bakar. Jika hanya merah tetapi tidak menggelembung, rendamlah luka tersebut di dalam air dingin selama mungkin. Biarkan luka bakar tetap terbuka dan perhatikan perubahannya.</p><p style="white-space: normal">• Jika kulit menggelembung, berwarna putih, atau hangus, oleskan salep antiseptik dan tutup, jangan terlalu rapat, dengan kain bersih atau perban yang tidak melekat. Hubungi dokter.</p><p style="white-space: normal">• Selain merendam kulit yang terbakar di dalam air dingin, berikan asetaminofen kepada anak anda.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Sawan\', \'<p style="white-space: normal">Sawan disebaban oleh pelepasan aliran elektrik abnormal di dalam otak. Kegawatan sawan berkisar dari hentakan otot di beberapa bagian tubuh sampai guncangan seluruh badan, yang disebut <i>grand mal seizure</i> (tingkat sawan yang paling berbahaya), yang mungkin membuat si penderita jatuh dan menggeliat-geliat di tempat, bola matanya bergerak ke atas, mulutnya berbuih, lidahnya tergigit, dan si penderita kehilangan kesadaran untuk sementara waktu.</p><b>Penanganan</b><p style="white-space: normal">• Baringkan anak anda dengan aman di atas lantai, telungkupkan atau miringkan dia agar lidahnya dapat terjulur ke depan dan lendir bisa mengalir dari kerongkongan karena gaya berat.</p><p style="white-space: normal">• Jangan memberikan makanan atau minuman apa pun kepada anak anda selama atau segera setelah sawan terjadi; dan anda juga jangan mencoba untuk menahan anak anda dari goncangan</p><p style="white-space: normal">• Jika bibir anak anda tidak berwarna biru dan bayi bernapas secara normal, jangan cemas.</p><p style="white-space: normal">• Jika bibir anak anda berubah menjadi biru atau ia tidak bernapas, berikan pernapasan buatan mulut-ke-mulut.</p><p style="white-space: normal">• Agar anak yang menggeliat-geliat tidak menyentuh mebel, bersihkan area dengan segera.</p><p style="white-space: normal">• Kurangi suhu badan anak yang tinggi dengan mengusapkan handuk dingin. Hal ini berguna untuk mengurangi kejang-kejang pada anak.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Mimisan\', \'<b>Penanganan:</b><p style="white-space: normal">• Dudukkan anak di atas pangkuan anda, posisi anak bersandar agak condong ke depan.</p><p style="white-space: normal">• Lakukan penekanan dengan menyisipkan potongan lilitan kapas basah ke lubang hidung yang berdarah, dengan ukuran yang pas untuk mengisi sekitar setengah lubang hidung.</p><p style="white-space: normal">• Jika ini tidak menghentikan pendarahan, lakukan penekanan ke pembuluh darah utama yang mengalir ke hidung, yang letaknya tepat dibawah lubang hidung tempat bertemunya bibir bagian atas dengan gusi. Tempatkan sejumlah kapas basah di bagian dalam bibir atas dan tekanlah bagian bawah bibir dengan dua jari ke arah atas, ke arah lubang hidung, atau dengan menekan satu jari diatas bibir atas, tepat dibawah lubang hidung.</p><p style="white-space: normal">• Jaga posisi anak anda tetap tegak lurus supaya darah tidak menetes ke lehernya.</p><p style="white-space: normal">• Doronglah anak anda agar terus membuka mulutnya.</p><p style="white-space: normal">• Setelah pendarahan berhenti tinggalkan kapas dalam lubang hidung dalam beberapa jam untuk menyumbat pendarahan, agar pembekuan terjadi.</p><p style="white-space: normal">• Jika tindakan  ini tidak menghentikan mimisan, bawalah anak anda ke dokter atau UGD.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Demam\', \'<b>Penanganan:</b><p style="white-space: normal">• Amati dan pikirkan penyebabnya. Bila disusul dengan batuk pilek, Anda pun lega karena jelas penyebabnya adalah ISPA. </p><p style="white-space: normal">• Amati tanda kegawatdaruratan. Misalnya, penurunan kesadaran (perilaku anak  merupakan parameter kuat untuk menentukan ada tidaknya kegawa daruratan), dehidrasi, kejang, sesak napas, dan sakit kepala hebat (pada anak yang sudah bisa mengkomunikasikan keluhannya).</p><p style="white-space: normal">• Berikan cairan lebih sering dari biasanya, karena kebutuhan akan cairan akan meningkat saat demam. Demam akan meningkatkan risiko dehidrasi (kekurangan cairan tubuh), padahal dehidrasi akan membuat suhu tubuh lebih meningkat lagi. Ketika sakit, wajarlah jika selera makan anak menurun. Jadi, tawarkan makanan ringan, yang segar, rasanya enak, dan tampilannya menarik. Yang penting pada saat ini adalah asupan cairannya.</p><p style="white-space: normal">• Berikan obat demam, bila perlu. Obat demam tidak akan menormalkan suhu dan tidak menyembuhkan penyebab demam, melainkan agar anak merasa agak nyaman (karena efek pain killer-nya) dan untuk menurunkan 1 atau 2 derajat saja.  Obat demam diberikan saat anak sangat rewel karena merasa tak nyaman atau saat suhu tinggi (sedikitnya di atas 38,5°C). Dengan atau tanpa obat demam, suhu akan naik turun sesuai siklusnya.</p><p style="white-space: normal">• Kadang, bila suhu sangat tinggi, anak merasa sangat tidak nyaman. Anda bisa mencoba menurunkan suhu tubuh dengan menyeka tubuh anak atau mengompres dengan handuk yang sudah dibasahi air hangat. Kompres air dingin sejenak seolah menurunkan suhu tubuh, padahal selain membuat anak menggigil tak nyaman, kompres dingin justru akan meningkatkan suhu tubuh. Mengapa? Karena saat dikompres dingin, informasi yang diperoleh tubuh adalah di luar suhu dingin. Otomatis termostat pusat pengatur suhu tubuh di otak akan meningkatkan suhu tubuh agar tidak kedinginan.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Asma\', \'<b>Penyebab:</b><p style="white-space: normal">Alergi makanan atau lingkungan, infeksi paru-paru.</p><b>Tanda dan Gejala:</b><p style="white-space: normal">• Napasnya berbunyi.</p><p style="white-space: normal">• Saat menghembuskan napas terdengar suara berisik; serangan asma ditandai dengan adanya napas yang berbunyi, kesulitan bernapas, dan lekukan yang dalam di atas leher, tulang rusuk, serta bagian atas perut.</p><b>Penanganan:</b><p style="white-space: normal">• Istirahat, relaksasi.</p><p style="white-space: normal">• Tidur tegak bila mungkin.</p><p style="white-space: normal">• Perawatan dengan uap air di dalam kamar mandi.</p><p style="white-space: normal">• Tepuk-tepuklah dada untuk mendorong batuk.</p><p style="white-space: normal">• Untuk asma kronis, coba hindari makanan dan lingkungan yang menimbulkan alergi.</p><p style="white-space: normal">• untuk bayi yang sedang diberi ASI, hindari pemberian produk olahan berbahan susu dan sebagai makanan yang menimbulkan alergi pada pola makan ibu.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Bisul\', \'<b>Penyebab:</b><p style="white-space: normal">Bakteri, biasanya <i>Staohylococcus.</i></p><b>Tanda dan Gejala:</b><p style="white-space: normal">Kulit terangkat, berwarna merah, dan pembengkakan yang terasa hangat pada kulit</p><b>Penanganan:</b><p style="white-space: normal">• Gunakan kompres panas sepuluh kali setiap hari selama beberapa menit agar bisul menjadi matang.</p><p style="white-space: normal">• Lanjutkan beberapa hari setelah bisul pecah dan mengeluarkan cairan.</p><p style="white-space: normal">• Tetap ditutup sampai pengeluaran cairan berhenti.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Bronkiolitis\', \'<b>Penyebab:</b><p style="white-space: normal">Virus disebut <i>RSV</i></p><b>Tanda dan Gejala:</b><p style="white-space: normal">Seperti asma pada bayi, napas cepat, pendek-pendek, berbunyi dan tersengal-sengal, batuk berirama, pucat, lelah, ketakutan, gejala flu.</p><b>Penanganan:</b><p style="white-space: normal">• Berikan kenyamanan dan ketenangan pada bayi.</p> <p style="white-space: normal">• Bujuklah bayi untuk tidur dengan ditopang setinggi 45 derajat.</p> <p style="white-space: normal">• Pergunakan uap hangat.</p><p style="white-space: normal">• Belilah ekspekoran yang dijual bebas untuk mengendurkan dada yang sesak.</p><p style="white-space: normal">• Beri lebih banyak cairan, beri makanan dalam porsi kecil tapi sering</p> <p style="white-space: normal">• Cobalah penepukan dada.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Bronkitis\', \'<b>Penyebab:</b><p style="white-space: normal">Pada umumnya virus atau alergi, kadang-kadang bakteri.</p><b>Tanda dan Gejala:</b><p style="white-space: normal">• Gejala flu, demam rendah (38,3°C - 38,9°C) batuknya pendek-pendek dan bersuara dalam, lebih buruk pada malam hari, pucat, lelah.</p><p style="white-space: normal">• Anak-anak mungkin mengeluarkan napas yang berbunyi, seperti pada asma.</p><b>Penanganan:</b><p style="white-space: normal">• Istirahat, relaksasi.</p><p style="white-space: normal">• Tidur tegak bila mungkin; perawatan dengan uap air di dalam kamar mandi.</p><p style="white-space: normal">• Tepuk-tepuklah dada untuk mendorong batuk.</p><p style="white-space: normal">• Pemberian ekspektoran yang dijual bebas selama saing hari.</p><p style="white-space: normal">• Bila timbul banyak gejala, berikan obat batuk pada malam hari.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Cacar Air\', \'<b>Penyebab:</b><p style="white-space: normal">Virus (inkubasi 7-21 hari).</p><b>Tanda dan Gejala:</b><p style="white-space: normal">• Gejala mirip flu, demam 38,3°C.</p><p style="white-space: normal">• Ruam pada kulit yang semula seperti bekas gigitan segera melepuh dan menyebar pada tubuh, wajah, mulut, kemudian anggota badan.</p> <p style="white-space: normal">• Gatal.</p><p style="white-space: normal">• Noda baru muncul setiap hari selama beberapa hari.</p><b>Penanganan:</b><p style="white-space: normal">• Potong kuku jari tangan dan kenakan pakaian panjang untuk menghindari penggarukan.</p><p style="white-space: normal">• Bila timbul rasa gatal gunakan salep antibiotik untuk kulit yang terinfeksi.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Flu\', \'<b>Penyebab:</b><p style="white-space: normal">Virus (inkubasi satu sampai dengan tiga hari).</p><b>Tanda dan Gejala:</b><p style="white-space: normal">Demam, badan nyeri, muntah-muntah, diare, kerongkongan sakit, sakit kepala, batuk, hidung basah, mata merah.</p><b>Penanganan:</b><p style="white-space: normal">• Beri isapan cairan, kepingan es, larutan elektrolit secara oral.</p><p style="white-space: normal">• Pemberian makan dengan porsi kecil dengan frekuensi sering.</p><p style="white-space: normal">• Beri perawatan bila terjadi gejala yang paling mengganggu dengan pengobatan flu dan demam bla diperlukan.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Campak\', \'<b>Penyebab:</b><p style="white-space: normal">Virus (inkubasi 8-12 hari).</p><b>Tanda dan Gejala:</b><p style="white-space: normal">• Mulai seperti pilek, kemudian demam 40°C, batuk.</p><p style="white-space: normal">• Mata kemerah-merahan, sensitif terhadap cahaya.</p><p style="white-space: normal">• Sekitar empat hari timbul bintik-bintik (merah tua, berkumpul) mulai pada wajah, menyebar keseluruh badan.</p><p style="white-space: normal">• Anak merasa sakit ketika bintik-bintik muncul untuk pertama kalinya.</p><b>Penanganan:</b><p style="white-space: normal">• Karantina sampai ruam pada kulit hilang, paksakan cairan.</p><p style="white-space: normal">• Gunakan pengendali demam.</p>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO BalitaP3K(Jenis, Konten) VALUES (\'Gondong\', \'<b>Penyebab:</b><p style="white-space: normal">Virus (inkubasi tujuh sampai dengan sepuluh hari).</p><b>Tanda dan Gejala:</b><p style="white-space: normal">• Mulai seperti flu, pada umumnya gangguan pada perut.</p><p style="white-space: normal">• 2-3 hari kemudian kelenjar membengkak lunak dibawah daun telinga.</p><p style="white-space: normal">• Terasa sakit untuk membuka rahang.</p><p style="white-space: normal">• Bertahan selama 7-10 hari.</p><p style="white-space: normal">• Demam.</p><b>Penanganan:</b><p style="white-space: normal">• Beri makanan yang halus dan lembut, pasanglah kompres dingin untuk leher.</p><p style="white-space: normal">• Berikan asetaminofen.</p><p style="white-space: normal">• Hubungi dokter bila bayi mengantuk, muntah terus-menerus, atau memiliki leher yang kaku.</p>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#balitaTabelP3K' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM BalitaP3K', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Jenis + '</h4>' + row.Konten + '</div>';
                }
                $( '#balitaTabelP3K' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_dataBahanMakanan() 
    { 
      db.transaction(function(tx) 
      {  
        tx.executeSql('SELECT * FROM IbuNutrisiBahanMakanan', [], function(transaction, result) 
        {
          if (result.rows.length === 0)
          {
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Beras Putih","Y","T","Y","img/nutrisi/berasputih.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Beras Merah","Y","Y","Y","img/nutrisi/berasmerah.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Gandum","Y","Y","Y","img/nutrisi/gandum.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kacang-kacangan","Y","Y","Y","img/nutrisi/kacangkacangan.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kuning Telur","T","Y","T","img/nutrisi/kuningtelur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Kedelai","Y","Y","Y","img/nutrisi/susukedelai.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Sapi","T","T","Y","img/nutrisi/sususapi.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Susu Sapi Rendah Lemak","T","Y","Y","img/nutrisi/sususapirendahlemak.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tahu","Y","Y","Y","img/nutrisi/tahu.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Teh Hijau","Y","Y","Y","img/nutrisi/tehhijau.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Telur","T","Y","Y","img/nutrisi/telur.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tempe","Y","Y","Y","img/nutrisi/tempe.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Yoghurt","T","T","Y","img/nutrisi/yoghurt.jpg")',[], nullHandler,errorHandler);
            
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Alpukat","Y","T","Y","img/nutrisi/alpukat.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Apel","Y","Y","Y","img/nutrisi/apel.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bengkoang","Y","T","Y","img/nutrisi/bengkoang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jambu biji","Y","T","Y","img/nutrisi/jambubiji.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jeruk","Y","Y","Y","img/nutrisi/jeruk.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Mangga","Y","T","Y","img/nutrisi/mangga.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Melon","Y","T","Y","img/nutrisi/melon.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Pir","Y","Y","Y","img/nutrisi/pir.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Pisang","Y","T","Y","img/nutrisi/pisang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Semangka","Y","T","Y","img/nutrisi/semangka.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Strawberry","Y","Y","Y","img/nutrisi/strawberry.jpg")',[], nullHandler,errorHandler);

            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Mentega","Y","T","T","img/nutrisi/mentega.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Ikan","T","Y","Y","img/nutrisi/minyakikan.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Jagung","Y","Y","Y","img/nutrisi/minyakjagung.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Kedelai","Y","Y","Y","img/nutrisi/minyakkedelai.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Kelapa","Y","T","T","img/nutrisi/minyakkelapa.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Minyak Sayur","Y","Y","Y","img/nutrisi/minyaksayur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Santan","Y","T","T","img/nutrisi/santan.jpg")',[], nullHandler,errorHandler);                                          

            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Ayam","T","Y","T","img/nutrisi/dagingayam.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Kambing","T","Y","T","img/nutrisi/dagingkambing.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Daging Sapi","T","Y","T","img/nutrisi/dagingsapi.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Hati","T","Y","T","img/nutrisi/hati.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ikan Tuna","T","Y","Y","img/nutrisi/ikantuna.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ikan Salmon","T","Y","Y","img/nutrisi/ikansalmon.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kerang","T","Y","T","img/nutrisi/kerang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Udang","T","Y","T","img/nutrisi/udang.jpg")',[], nullHandler,errorHandler);
            
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Asparagus","Y","Y","Y","img/nutrisi/asparagus.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bayam","Y","Y","Y","img/nutrisi/bayam.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Brokoli","Y","Y","Y","img/nutrisi/brokoli.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Bunga Kol","Y","Y","Y","img/nutrisi/bungakol.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jagung","Y","T","Y","img/nutrisi/jagung.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Jamur","Y","Y","Y","img/nutrisi/jamur.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kacang Panjang","Y","Y","Y","img/nutrisi/kacangpanjang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kecambah","Y","Y","Y","img/nutrisi/kecambah.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Kentang","Y","T","Y","img/nutrisi/kentang.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Lobak","Y","T","Y","img/nutrisi/lobak.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Rumput Laut","Y","Y","T","img/nutrisi/rumputlaut.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Terigu","Y","T","Y","img/nutrisi/terigu.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Singkong","Y","T","Y","img/nutrisi/singkong.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Talas","Y","T","Y","img/nutrisi/talas.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Tomat","Y","Y","Y","img/nutrisi/tomat.jpg")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Ubi Jalar","Y","T","Y","img/nutrisi/ubijalar.jpg")',[], nullHandler,errorHandler);                                          
            tx.executeSql('INSERT INTO IbuNutrisiBahanMakanan(NamaBMIH, Vegetarian, Diabetes, Hipertensi, GambarBMIH) VALUES ("Wortel","Y","Y","Y","img/nutrisi/wortel.jpg")',[], nullHandler,errorHandler);
          }
        }   
       );
      },errorHandler,nullHandler);                
    }



function ibu_insert_resep()
{
      db.transaction(function(tx) 
      {  
        tx.executeSql('SELECT * FROM IbuNutrisiResep', [], function(transaction, result) 
        {
          if (result.rows.length === 0)
          {
            //Y = boleh ; T = tidak boleh
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Setup Pisang, Semangka dan Kacang Merah</big><br><br></b><b>Bahan:</b><br>• 25 gram kacang merah, rebus.<br>• 50 gram semangka potong dadu 2 cm.<br>• ½ buah pisang ambon, iris.<br>• 25 gram rambutan.<br>• 125 ml jus leci.<br>• 1 sdt madu.<br>• 1 sdt air jeruk nipis.<br>• Stroberi segar dan daun mint.<br><br><b>Cara membuat:</b><br>1. Siapkan pinggan, susun kacang merah rebus, semangka, rambutan dan irisan pisang, simpan dalam lemari pendingin.<br>2. Kuah : campur jus leci dengan madu dan air jeruk nipis, aduk rata. Tuangkan kedalam wadah isi buah dan simpan kembali dalam lemari pendingin.<br>3. Sajikan dingin, hias dengan stroberi, dan daun mint.</li>","Y","T","Y")',[], nullHandler,errorHandler);   
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Panada Ikan</big><br><br></b><b>Bahan:</b><br>• 5 gram mentega.<br>• Merah telur untuk mengoles secukupnya.<br>• 13 gram tepung terigu.<br>• 7 gram telur ayam.<br>• 17 gram ikan tongkol.<br>• 3 gram roti tawar.<br>• 5 gram wortel.<br>• 10 gram Tahu.<• 2 gram tepung susu.<br>• Garam.<br>• Lada halus.<br>• Air 15 cc.<br>• 1 gram ragi.<br><br><b>Cara membuat:</b><br>1. Untuk Isi : Ikan tongkol di kukus,lalu suir-suir kecil. Tumis wortel yang dicincang halus, tambahkan tahu yang sudah dipotong kecil, ikan yang sudah di suir, masak hingga wortel cukup.<br>2. Untuk kulit : Campurkan susu bubuk, ragi, garam, lada halus , roti tawar dicabik-cabik halus, mentega serta telur (aduk rata). Tambahkan terigu dan air sambil diuleni sampai kalis.<br>3. Ratakan adonan menjadi lapisan yang tipis, lalu potong menjadi lingkaran-lingkaran kecil bergaris tengah 5 ½ cm.<br>4. Ambil sehelai adonan, letakkan sedikit ikan di tengahnya. Tambahkan adonan ikan dan wortel cincang. Lipat adonan menutupi isi bentuk setengah lingkaran lalu tekan pinggirnya hingga tertutup rapat . Dengan mempergunakan jari telunjuk dan ibu jari, lipatkan sedikit pinggirnya ke atas lalu dari tengah lipatan tadi lipatkan lagi ke atas. Begitu selanjutnya hingga pinggiran setengah lingkaran tadi tertutup rapat dengan lipit-lipit kecil. Olesi atasnya dengan merah telur lalu bakar selama 30 menit dengan panas sedang.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Srikaya Pandan Nangka</big><br><br></b><b>Bahan:</b><br>• 35 gram telur ayam.<br>• 10 gram gula pasir.<br>• 50 ml santan kental.<br>• 2 gram tepung susu.<br>• 1 sdt air daun suji atau pandan pasta secukupnya.<br>• 1/4 lembar daun pandan, potong-potong.<br>• 10 gram (1 buah nangka  masak), potong dadu, potongan nangka dan daun pandan untuk hiasan.<br><br><b>Cara membuat:</b><br>1. Siapkan mangkuk atau pinggan tahan panas, sisihkan.<br>2. Kocok telur dan gula hingga gula larut.<br>3. Masukkan santan, tepung susu ke dalam kocokan telur, aduk rata, tambahkan hunkue dan pandan pasta, aduk rata.<br>4. Tuangkan adonan telur ke dalam mangkuk atau pinggan dan taburi nangka, beri sepotong daun pandan.<br>5. Kukus selama 20 menit dan tutup dandang dibuka sedikit hingga matang serta adonan menjadi padat, angkat lalu dinginkan.<br>6. Taburi atasnya dengan potongan nangka dan daun pandan sebagai pemanis.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Otak-otak Panggang</big><br><br></b><b>Bahan:</b><br>• 30 gram daging ikan tenggiri/ikan lain.<br>• ¼ tangkai daun bawang.<br>• 10 gram sagu.<br>• 20 ml santan kental.<br>• 1 helai daun jeruk.<br>• ¼ tangkai daun seledri.<br>• 1 siung kecil bawang putih.<br>• 2 gram gula pasir.<br>• 10 gram putih telur.<br>• Merica.<br>• Garam.<br>• Daun untuk membungkus.<br><br></b><b>Bahan Saus Kacang:</b><br>• 25 gram kacang tanah.<br>• 1 buah cabe merah.<br>• 10 gram gula pasir.<br>• 1 sdt garam.<br>• Minyak untuk menggoreng.<br>• Cuka secukupnya.<br><br><b>Cara membuat:</b><br>1. Daging ikan dihaluskan. Bawang putih dihaluskan. Daun jeruk, daun bawang dan daun seledri diiris halus. Campur seluruh bahan dan aduk hingga rata. Bagi adonan menjadi 2 bagian. Bungkus dengan daun secara memanjang. Panggang selama 5 menit. Hidangkan dengan saus kacang.<br>2. Saus kacang : Kacang yang sudah digoreng, dihaluskan dengan cabe, gula dan garam. Beri air matang sesuai selera. Dapat dihidangkan dengan diberi jeruk limo.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Serabi Telur</big><br><br></b><b>Bahan:</b><br>• 20 gram tepung terigu.<br>• 20 gram telur kocok.<br>• 30 cc air.<br>• 2 gram margarin.<br>• garam.<br><br></b><b>Bahan Kuah:</b><br>• 5 gram kacang hijau.<br>• 5 gram gula merah.<br>• 5 gram gula pasir.<br>• ½ lembar daun pandan.<br>• Garam.<br>• 10 cc santan.<br><br><b>Cara membuat:</b><br>1. Campur tepung terigu dengan telur kocok, tuang air sedikit demi sedikit sambil diaduk rata. Masukkan garam dan aduk rata.<br>2. Panaskan wajan serabi, tuang 1 sendok sayur kecil adonan serabi, tutup, masak hingga matang.<br>3. Kuah : rebus santan dan gula merah sambil diaduk hingga gula larut, lalu saring. Rebus kembali bersama gula pasir dan daun panda. Kentalkan dengan tepung sagu, beri garam, aduk rata. Angkat.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bola-Bola Udang</big><br><br></b><b>Bahan:</b><br>• 30 gram udang, haluskan.<br>• 5 ml santan.<br>• 10 gram telur.<br>• 10 gram tepung sagu.<br>• Garam.<br>• Merica bubuk.<br>• GUla pasir.<br><br></b><b>Bumbu yang dihaluskan:</b><br>• 1 butir bawang merah.<br>• 1 siung bawang putih.<br>• 1 buah cabai merah besar.<br>• 1 buah cabai rawit merah.<br>• 1 lembar daun jeruk.<br>• 1 sdt irisan batang sereh.<br><br></b><b>Panir:</b><br>• 25 gram telur.<br>• 10 gram tepung roti.<br>• Minyak untuk menggoreng.<br><br><b>Cara membuat:</b><br>1. Campurkan udang, tepung, telur, santan dan bumbu yang sudah dihaluskan.<br>2. Masukkan adonan ke dalam loyang.<br>3. Kukus hingga matang dan dinginkan.<br>4. Potong adonan sesuai selera.<br>5. Celupkan ke dalam adonan telur dan lumuri dengan tepung roti.<br>6. Goreng hingga warna kuning keemasan.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bolu Kukus</big><br><br></b><b>Bahan:</b><br>• 15 gram telur.<br>• 15 gram tepung terigu.<br>• 10 gram gula pasir.<br>• 15 ml air soda.<br>• 8 gram tepung susu.<br>• Vanili.<br>• Cokelat bubuk.<br>• ¼ gram soda kue.<br><br><b>Cara membuat:</b><br>1. Siapkan cetakan bolu kukus, alasi dengan kertas roti, masukkan ke dalam kukusan yang airnya sedang mendidih. Bungkus tutup kukusan dengan serbet kain.<br>2. Kocok telur, gula, vanili sampai kental dan naik.<br>3. Masukkan secara bergantian sedikit tepung, sedikit air soda, berulang-ulang hingga bahan habis, sambil diaduk rata.<br>4. Ambil 1 sdt adonan, beri coklat bubuk, aduk rata.<br>5. Tuangkan adonan kedalam cetakan sampai hampir penuh.<br>6. Tambahkan 1 sdt adonan coklat.<br>7. Tutup kukusan, masak + 20 menit dengan api besar tanpa membuka tutupnya. Kukus hingga matang dan merekah, selama + 25 menit.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Martabak Manis</big><br><br></b><b>Bahan:</b><br>• ½ gram ragi instan.<br>• 15 gram tepung terigu.<br>• 5 gram gula pasir.<br>• 10 gram telur.<br>• Soda kue.<br>• 20 cc air.<br><br></b><b>Bahan Taburan:</b><br>• 5 gram kacang tanah, sangrai, kupas, cincang.<br>• 2 gram wijen, sangrai.<br>• 3 gram cokelat beras.<br>• 5 gram susu kental manis.<br><br><b>Cara membuat:</b><br>1. Aduk dan larutkan ragi dengan air hangat sampai berbuih, sisihkan.<br>2. Campur tepung dan gula, buat lubang ditengahnya, masukkan telur, aduk dan uleni sambil dituangi air sedikit demi sedikit sampai gula larut. Masukkan soda kue, uleni, tutup dengan plastik, biarkan + 15 menit di tempat hangat agar mengembang.<br>3. Panaskan penggorengan datar diameter 12-15 cm, oleskan margarin.<br>4. Dengan api sedang, aduk dan tuangkan 1 sendok sayur adonan.<br>5. Setelah mengembang naik dan selagi permukaan belum mengering, taburkan bahan yang disukai, lipat dan balik, segera angkat.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Kroket Kentang</big><br><br></b><b>Bahan:</b><br>• 2o gram kentang dikupas, kukus, haluskan.<br>• 5 gram roti tawar.<br>• Garam.<br>• 2 gram susu bubuk.<br><br></b><b>Isi:</b><br>• 10 gram ayam/daging cincang/udang kupas.<br>• ½ sdt bawang putih cincang.<br> 8 gram wortel dicincang halus.<br> 1 sdt seledri dan daun bawang diiris tipis.<br> 10 cc susu cair.<br> Garam.<br> 2 gram gula pasir.<br> Lada halus.<br><br></b><b>Untuk memanir:</b><br>• 10 ml telur.<br>• 10 gram tepung roti.<br>• Minyak goreng.<br><br><b>Cara membuat:</b><br>1. Percikkan air masak keatas roti lalu peras airnya. Campurkan roti, kentang, susu bubuk, dan garam lalu aduk hingga tercampur rata.<br>2. Untuk isinya : goreng bawang putih hingga baunya harum lalu masukkan ayam/daging/udang serta wortel dengan garam, gula, lada, bumbu masak. Masak hingga wortel lunak. Campurkan tepung dengan susu lalu tuangkan kedalam campuran ayam/daging/udang tadi. Masukkan daun bawangnya. Masak sambil diaduk hingga air habis.<br>3. Masukkan isi ke dalam adonan kentang, bentuk oval.<br>4. Lumuri telur dan gulingkan diatas tepung panir.<br>5. Panaskan minyak goreng lalu goreng hingga kuning kecoklatan. Angkat lalu hidangkan.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lumpia Tahu</big><br><br></b><b>Bahan:</b><br>• 4 gram tepung beras.<br>• 6 gram tepung terigu.<br>• 20 cc air.<br>• 6 gram putih telur.<br>• 3 gram minyak goreng.<br>• Garam.<br>• Selai kacang.<br><br></b><b>Isi:</b><br>• 10 gram udang, kupas, rebus, iris.<br>• 15 gram tahu.<br>• Daun selada bokor.<br>• 2 gram bihun, rendam air panas hingga lunak.<br>• 10 gram wortel, serut.<br><br></b><b>Saus:</b><br>• 150 ml saus sambal manis.<br>• 1 sdm air jeruk nipis.<br>• 2 sdm madu.<br>• 2 batang daun ketumbar, iris.<br><br><b>Cara membuat:</b><br>1. Kulit : campur tepung beras, tepung terigu, air, putih telur, minyak goreng dan garam, aduk rata. Buat dadar tipis-tipis dengan wajan datar ukuran 18 cm.<br>2. Tumis udang dan tahu.<br>3. Penyelesaian : Ambil selembar kulit lumpia, olesi selai kacang, beri udang, tahu, selada, bihun, wortel, gulung bentuk lumpia.<br>4. Saus : campur saus sambal manis, air jeruk nipis, dan madu, aduk rata, tambahkan irisan daun ketumbar, aduk rata.<br>5. Sajikan lumpia dengan sausnya.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Somay Ayam + Udang</big><br><br></b><b>Bahan:</b><br>• 10 gram udang.<br>• 10 gram daging ayam, cincang.<br>• Bawang merah, cincang, tumis.<br>• 15 gram tepung sagu.<br>• 2 gram putih telur.<br>• Garam.<br>• Merica bubuk.<br>• 1 gram gula pasir.<br>• Kecap asin.<br>• 1 gram minyak wijen.<br>• Kulit pangsit, potong bentuk bulat (diameter 7 cm), celup terlebih dahulu dalam air panas.<br>• 5 cc air.<br><br><b>Cara membuat:</b><br>1. Campur udang dengan ayam, aduk rata. Tambahkan tumisan bawang merah cincang, masukkan bersama minyaknya, aduk rata.<br>2. Masukkan tepung sagu, putih telur, garam, merica, gula pasir, kecap asin, dan minyak wijen, aduk rata.<br>3. Ambil selembar kulit pangsit, taruh 1 sdm adonan isi dan bentuk siomay. Lakukan terus hingga semua pangsit habis dibentuk.<br>4. Masukkan adonan hiasan kedalam kantung plastik segitiga dan semprotkan diatas siomay.<br>5. Kukus siomay selama 15 menit hingga matang, angkat. Selagi panas, olesi dengan minyak goreng. Sajikan hangat.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Tembro Spesial</big><br><br></b><b>Bahan:</b><br>• 40 gram ubi kayu/singkong, kupas dan parut.<br>• Garam.<br><br></b><b>Isi Tembro:</b><br>• 20 gram tempe dihaluskan.<br>• 10 gram daging sapi cincang.<br>• Seledri, iris halus.<br>• .Minyak untuk menumis<br><br></b><b>Bumbu dihaluskan:</b><br>• Cabai rawit.<br>• Cabai merah.<br>• Bawang putih.<br>• Bawang merah.<br>• Garam dan gula menurut selera.<br><br><b>Cara membuat:</b><br>1. Isi : Tumis bumbu halus sampai matang dan harum. Masukkan daging dan tempe yang telah dihaluskan , aduk, beri 10 ml air. Masak sampai matang dan air habis. Masukkan seledri, aduk sampai layu, angkat, dinginkan.<br>2. Campur ubi kayu parut dan garam.<br>3. Ambil 1-2 sdm adonan, bulatkan, tipiskan, beri ½ sdm isi ditengahnya, tutup kembali, bentuk menjadi bulat telur.<br>4. Goreng dengan api sedang hingga matang kecoklatan, tiriskan. Hidangkan selagi hangat dan empuk.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Dadar GUlung Kacang Tolo</big><br><br></b><b>Bahan untuk dadar:</b><br>• 15 gram tepung terigu.<br>• 15 gram telur (kocok sebentar).<br>• 15 ml santan.<br>• Garam.<br>• Air daun suji.<br><br></b><b>Bahan untuk isi:</b><br>• 10 gram kacang tolo.<br>• 10 gram kelapa parut.<br>• 8 gram gula merah atau gula pasir.<br>• Daun pandan.<br>• Garam.<br>• Margarin untuk mengoles.<br><br><b>Cara membuat:</b><br>1. Isi : Masak dan aduk bahan menjadi satu dengan api kecil, masak sampai matang dan air habis.<br>2. Dadar : Campur tepung, telur, garam dan air daun suji. Tuangkan santan sedikit demi sedikit sambil diaduk sampai adonan halus, boleh dengan mixer.<br>3. Panaskan penggorengan datar berdiameter 20 cm, oleskan margarin.<br>4. Aduk rata adonan, tuang dan buat dadar tipis yang rata sampai adonan habis.<br>5. Isi setiap lembar dadar dengan adonankacang dan kelapa, lipat sisi bawah, kanan dan kiri, lalu gulung.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lemper Ayam</big><br><br></b><b>Bahan:</b><br>• 25 gram beras ketan putih (rendam 2 jam, tiriskan).<br>• 15 ml santan.<br>• Garam.<br>• Daun pandan, buat simpul.<br><br></b><b>Untuk isi:</b><br>• 15 gram ayam, rebus lunak.<br>• Daun salam.<br>• Serai, memarkan.<br>• 2 gram gula merah.<br><br></b><b>Bumbu dihaluskan:</b><br>• Ketumbar.<br>• Bawang putih.<br>• Bawang merah.<br>• Kemiri, sangrai.<br>• Asam.<br>• Garam.<br><br><b>Cara membuat:</b><br>1. Isi : daging ayam, cabik-cabik, iris halus. Tumis bumbu halus sampai harum, tuangi air, masukkan semua bahan isi, masak dengan api kecil sampai kering. Angkat, dinginkan.<br>2. Kukus ketan dengan daun pandan sampai setengah matang, keluarkan, pindahkan ke panc.<br>3. Tuangkan santan, beri garam, jerang di atas api kecil sampai santan terisap habis oleh ketan sambil sesekali diaduk. Kukus kembali sampai matang.<br>4. Selagi panas, ratakan ketan dalam loyang datar setebal 1 cm, potong 6 x 8 cm. Ambil dan pipihkan sepotong ketan.. Beri 1 sdm adonan isi, rapatkan dan bentuk hingga terbentuk lemper bergaris tengah 4 cm, panjang 6 cm.<br>5. Lilit atau bungkus seluruhnya dengan daun pisang.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Bakwan Toge Tahu Udang</big><br><br></b><b>Bahan:</b><br>• Seledri, iris halus.<br>• Daun bawang, iris halus.<br>• 15 gram tahu.<br>• 15 gram udang, tanpa kepala + kulit.<br>• 15 gram tepung terigu.<br>• 15 gram toge.<br>• 10 gram telur ayam.<br><br></b><b>Bahan Adonan:</b><br>• 10 ml santan.<br>• Soda kue.<br>• Garam.<br>• Merica bubuk.<br>• Bawang putih.<br>• Minyak untuk menggoreng.<br><br><b>Cara membuat:</b><br>1. Campur semua bahan adonan, aduk bersama telur. Kocok sambil dituangi santan/air sampai terbentuk adonan yang licin.<br>2. Masukkan tahu, toge, daun bawang dan seledri.<br>3. Dengan api sedang, panaskan minyak cukup banyak. Celupkan sendok sayur yang akan digunakan sebagai cetakan.<br>4. Angkat sendok setelah panas, isi dengan adonan, tambahkan 1 ekor udang utuh diatasnya, masukkan dalam minyak panas.<br>5. Lepaskan bakwan dari sendok setelah mungkin, goreng matang kecoklatan, tiriskan.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Sosis Solo</big><br><br></b><b>Bahan kulit:</b><br>• 10 gram telur.<br>• 15 gram tepung terigu.<br>• Garam.<br>• Air.<br>• 2 gram margarin.<br><br></b><b>Bahan Isi:</b><br>• 10 gram daging sapi giling.<br>• Bawang putih.<br>• Bawang merah.<br>• Minyak goreng.<br>• Ketumbar.<br>• Merica bubuk.<br><br></b><b>Untuk menggoreng:</b><br>• 5 gram telur.<br>• Garam.<br>• Minyak goreng secukupnya.<br><br><b>Cara membuat:</b><br>1. Kulit : campur telur, tepung terigu dan garam, aduk rata. Tuangkan air sedikit demi sedikit sambil diaduk hingga menjadi adonan yang cair.<br>2. Siapkan wajan datar anti lengket, tuangkan adonan 1 sendok sayur. Buat dadar tipis, angkat. Lakukan hal yang sama hingga adonan habis.<br>3. Isi : tumis bawang putih dan bawang merah serta ketumbar hingga harum aromanya. Masukkan daging sapi giling lalu bubuhkan merica bubuk dan garam., masak hingga daging matang.<br>4. Ambil selembar kulit, isikan dengan adonan isi lalu bungkus dan gulung. Celupkan gulungan kue ke dalam telur kocok. Goreng hingga berwarna kecoklatan. Angkat, tiriskan.</li>","T","Y","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Mentho</big><br><br></b><b>Bahan:</b><br>• 20 gram tepung terigu.<br>• 25 gram telur ayam.<br>• 15 gram tahu.<br>• Minyak tumis.<br>• 10 ml santan siram.<br>• Garam.<br>• Bawang merah.<br>• Bawang putih.<br>• Daun pisang untuk membungkus.<br>• 25 cc air.<br><br><b>Cara membuat:</b><br>1. Adoni tepung terigu dengan telur, tambahkan garam, air, lalu dibuat dadar.<br>2. Tahu dipotong-potong kecil.<br>3. Bumbu ditumbuk lalu ditumis, masukkan tahu lalu masak hingga rata.<br>4. Isi dadar terigu dengan campuran tahu, diletakkan didaun pisang dan siram dengan santan kental lalu dibungkus kemudian dikukus.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Sakura Wokatu</big><br><br></b><b>Bahan:</b><br>• 10 gram tepung terigu protein sedang.<br>• 10 gram gula pasir.<br>• 10 ml air panas.<br>• 10 gram wortel diparut.<br>• 2,5 gram kacang tolo rebus haluskan (5 g kacang tolo dapat diganti dengan 5 g kacang hijau atau 3 g kacang merah atau 2 g kacang kedele).<br>• 10 gram kelapa parut setengah tua.<br>• 1 sdm susu bubuk.<br>• ½ btr telur ayam.<br>• Soda kue seujung sendok kecil.<br><br><b>Cara membuat:</b><br>1. Setengah bagian gula dibuat karamel hingga larut dan kecoklatan. Tambahkan air, aduk rata. Masak selama 5 menit, angkat dan dinginkan.<br>2. Campur terigu, susu bubuk, dan soda kue. Ayak hingga rata, lalu sisihkan.<br>3. Tuangi terigu dengan sirup karamel sedikit demi sedikit, hingga rata, sisihkan.<br>4. Kocok telur dan sisa gula pasir hingga mengembang. Tambahkan campuran terigu, wortel parut dan kacang tolo yang dihaluskan, aduk rata.<br>5. Tuang adonan dalam cetakan sakura yang telah dioles minyak atau margarin.<br>6. Panaskan panci pengukus, kukus adonan hingga matang 15 menit. Angkat dan keluarkan dari cetakan.<br>7. Sajikan dengan kelapa parut yang telah diberi sedikit garam.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Lepet Jagung</big><br><br></b><b>Bahan:</b><br>• 50 gram jagung muda yang telah disisir, dihaluskan.<br>• 10 gram kelapa ½ tua, dibuang kulitnya, diparut memanjang.<br>• 5 gram kacang tolo, direndam diulek kasar (5 g kacang tolo dapat diganti dengan 5 g kacang hijau atau 3 g kacang merah atau 2 g kacang kedele).<br>• 10 gram ikan pindang, digoreng, disuwir (20 g ikan segar dapat diganti dengan 15 g ikan tongkol pindang atau 15 g daging ayam).<br>• 10 gram buncis muda, rajang bulat tipis.<br>• 10 gram gula merah.<br>• 5 gram gula pasir.<br>• 20 gram telur.<br>• Garam halus secukupnya.<br>• 3 lembar daun buah jagung/klobot, tali untuk mengikat.<br><br><b>Cara membuat:</b><br>1. Campur semua bahan menjadi satu.<br>2. Bungkus dengan klobot dan ikat kedua ujungnya.<br>3. Kukus sampai masak, bila menghidangkan, lepas talinya.</li>","T","T","Y")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Kue Lapis Ubi kayu</big><br><br></b><b>Bahan:</b><br>• 20 gram singkong parut.<br>• 20 gram telur ayam.<br>• 5 gram tepung terigu.<br>• 20 gram santan.<br>• 5 gram susu skim.<br>• 2 gram coklat.<br><br><b>Cara membuat:</b><br>1. Gula dikocok dengan telur hingga putih, masukkan tepung, santan, susu dan ubi kayu.<br>2. Adonan dibagi menjadi dua, setengah bagian dicampur dengan coklat.<br>3. Siapkan cetakan yang sudah dialas dengan kertas, tuangkan ½ bagian dan kukus. Setelah 5 menit, tuangkan ½ bagian adonan, kukus selama 35 menit.<br>4. Dinginkan dan potong-potong.</li>","T","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Onde-Onde Sambiki/Labu Kuning</big><br><br></b><b>Bahan:</b><br>• 25 gram sambiki/labu kuning tua yang telah dikukus dan dihaluskan.<br>• 5 gram tepung sagu.<br>• 15 gram tepung beras ketan.<br>• 10 gram gula merah.<br>• 10 gram kelapa muda parut.<br>• 15 gram susu skim.<br>• Air kapur secukupnya.<br>• Garam secukupnya.<br><br><b>Cara membuat:</b><br>1. Sambiki/labu kuning yang sudah dikukus dihaluskan, kemudian dicampur dengan sagu, tepung beras ketan, susu skim, air kapur, garam dan aduk hingga bisa berbentuk bola, sisihkan.<br>2. Bentuk adonan menjadi bulatan sebesar kelereng dan isi dengan gula merah.<br>3. Didihkan air yang sudah diberi daun pandan dan masukkan bulatan yang telah terisi gula kedalam air yang mendidih.<br>4. Bila sudah mengapung diatas air, angkat dan gulingkan dikelapa parut yang sudah dicampur garam.</li>","Y","T","T")',[], nullHandler,errorHandler);
            tx.executeSql('INSERT INTO IbuNutrisiResep(Resep, Resep_Vegetarian, Resep_Diabetes, Resep_Hipertensi) VALUES ("<li><b><big>Pempek Palembang</big><br><br></b><b>Bahan pempek:</b><br>• 30 gram ikan gabus yang telah digiling halus (30 g ikan gabus dapat diganti dengan 30 g ikan kakap atau 25 g ikan tenggiri).<br>• 20 gram tepung sagu.<br>• 30 cc air.<br>• 1 gram garam.<br>• Gula putih seujung sendok kecil.<br>• Minyak sayur dimasukkan kedalam air rebusan.<br><br><b>Cara membuat pempek:</b><br>1. Ikan dan air 24 cc diaduk secara merata.<br>2. Garam + air 6 cc + gula putih diaduk sampai garam larut.<br>3. Adonan 2 dimasukkan kedalam adonan 1, aduk perlahan sampai merata.<br>4. Tambahkan 18 g sagu sedikit demi sedikit sampai merata, aduk perlahan.<br>5. Sisa sagu diratakan diatas talenan, letakkan adonan diatas hamparan sagu dan bentuk lenjer.<br>6. Siapkan air dalam wajan, didihkan, teteskan sedikit minyak.<br>7. Masukkan lenjer sampai matang (pempek terapung).<br><br></b><b>Bahan kuah cuka:</b><br>• 10 gram gula merah.<br>• 10 cc air.<br>• 1 gram cabe rawit dihaluskan.<br>• 1 gram asam jawa diencerkan, diambil airnya.<br>• 1 iris bawang putih digiling halus.<br>• 1 gram garam.<br><br><b>Cara membuat kuah cuka:</b><br>1. Gula merah direbus sampai mendidih lalu disaring.<br>2. Gula dan air yang sudah disaring didihkan kembali.<br>3. Masukkan cabe rawit, bawang putih, asam jawa dan garam.<br>4. Aduk rata, didihkan lagi kemudian angkat.</li>","T","T","T")',[], nullHandler,errorHandler);
          }
        }   
        );
      },errorHandler,nullHandler);
}

function ibu_insert_infoPerkembanganJanin()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuInfoPerkembanganJanin', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (1, \'<li>Minggu ini sebenarnya masih periode menstruasi, bahkan pembuahan pun belum terjadi. Sebab tanggal perkiraan kelahiran si kecil dihitung berdasarkan hari pertama haid terakhir Anda.</li><li>Proses pembentukan antara sperma dan telur yang memberikan informasi kepada tubuh bahwa telah ada calon bayi dalam rahim. Saat ini janin sudah memiliki segala bekal genetik, sebuah kombinasi unik berupa 46 jenis kromosom manusia. Selama masa ini, yang dibutuhkan hanyalah nutrisi (melalui ibu) dan oksigen.</li><li>Sel2 telur yang berada didalam rahim, berbentuk seperti lingkaran sinar yg mengelilingi matahari. Sel ini akan bertemu dengan sel2 sperma dan memulai proses pembuahan.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw1-1" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw1-1" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w1-1.jpg" alt="Photo landscape"></div></li><li>5 juta sel sperma sekaligus berenang menuju tujuan akhir mereka yaitu menuju sel telur yang bersembunyi pada saluran sel telur. Walaupun pasukan sel sperma ini sangat banyak, tetapi pada akhirnya hanya 1 sel saja yang bisa menembus indung telur.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw1-2" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw1-3" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw1-2" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w1-2.jpg" alt="Photo landscape"></div><div data-role="popup" id="ibuHamilPopupPhotoIHIPw1-3" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w1-3.jpg" alt="Photo landscape"></div></li><li>Pada saat ini kepala sel sperma telah hampir masuk. Kita dapat melihat bagian tengah dan belakang sel sperma yang tidak henti-hentinya berusaha secara tekun menerobos dinding indung telur.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw1-4" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw1-5" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw1-4" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w1-4.jpg" alt="Photo landscape"></div><div data-role="popup" id="ibuHamilPopupPhotoIHIPw1-5" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w1-5.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (2, \'<li>Pembuahan terjadi pada akhir minggu kedua. Sel telur yang telah dibuahi membelah dua 30 jam setelah dibuahi. Sambil terus membelah, sel telur bergerak di dalam lubang falopi menuju rahim. Setelah membelah menjadi 32, sel telur disebut morula.</li><li>Sel-sel mulai berkembang dan terbagi kira-kira dua kali sehari sehingga pada hari yang ke-12 jumlahnya telah bertambah dan membantu blastocyst terpaut pada endometrium.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw2" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw2" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w2.gif" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (3, \'<li>Sampai usia kehamilan 3 minggu, Anda mungkin belum sadar jika sedang mengandung. Sel telur yang telah membelah menjadi ratusan akan menempel pada dinding rahim disebut blastosit. Ukurannya sangat kecil, berdiameter 0,1-0,2 mm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw3" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw3" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w3.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (4, \'<li>Kini, bayi berbentuk embrio. Embrio memproduksi hormon kehamilan (Chorionic Gonadotropin - HCG), sehingga apabila Anda melakukan test kehamilan, hasilnya positif.</li><li>Janin mulai membentuk struktur manusia. Saat ini telah terjadi pembentukan otak dan tulang belakang serta jantung dan aorta (urat besar yang membawa darah ke jantung).<ul data-role="listview" data-inset="false" style="margin: 10px 0 0  0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw4" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw4" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w4.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (5, \'<li>Terbentuk 3 lapisan yaitu ectoderm, mesoderm dan endoderm. Ectoderm adalah lapisan yang paling atas yang akan membentuk system saraf pada janin tersebut yang seterusnya membentuk otak, tulang belakang, kulit serta rambut. Lapisan Mesoderm berada pada lapisan tengah yang akan membentuk organ jantung, buah pinggang, tulang dan organ reproduktif. Lapisan Endoderm yaitu lapisan paling dalam yang akan membentuk usus, hati, pankreas dan pundi kencing.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw5" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw5" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w5.gif" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (6, \'<li>Ukuran embrio rata-rata 2-4 mm yang diukur dari puncak kepala hingga bokong. Tuba saraf sepanjang punggung bayi telah menutup. Meski Anda belum bisa mendengar, jantung bayi mulai berdetak pada minggu ini. Sistem pencernaan dan pernafasan mulai dibentuk, pucuk-pucuk kecil yang akan berkembang menjadi lengan kaki pun mulai tampak.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw6-1" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw6-2" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw6-1" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w6-1.jpg" alt="Photo landscape"></div><div data-role="popup" id="ibuHamilPopupPhotoIHIPw6-2" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w6-2.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (7, \'<li>Akhir minggu ketujuh, panjangnya sekitar 5-13 mm dan beratnya 0,8 gram, kira-kira sebesar biji kacang hijau. Pucuk lengan mulai membelah menjadi bagian bahu dan tangan yang mungil. Jantung telah dibagi menjadi bilik kanan dan bilik kiri, begitu pula dengan saluran udara yang terdapat di dalam paru-paru.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw7" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw7" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w7.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (8, \'<li>Panjang kira-kira 14-20 mm. Banyak perubahan yang terjadi pada bayi Anda. Jika Anda bisa melihat , ujung hidung dan kelopak mata mulai berkembang, begitu pula telinga. Brochi, saluran yang menghubungkan paru-paru dengan tenggorokan, mulai bercabang. Lengan semakin membesar dan ia memiliki siku. Semua ini terjadi hanya dalam 6 minggu setelah pembuahan.</li><li>Bayi sudah mulai terbentuk diantaranya pembentukan lubang hidung, bibir, mulut serta lidah. Matanya juga sudah kelihatan berada dibawah membran kulit yang tipis. Anggota tangan serta kaki juga terbentuk walaupun belum sempurna.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw8" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw8" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w8.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (9, \'<li>Telinga bagian luar mulai terbentuk, kaki dan tangan terus berkembang berikut jari kaki dan tangan mulai tampak. Ia mulai bergerak walaupun Anda tak merasakannya. Dengan Doppler, Anda bisa mendengar detak jantungnya. Minggu ini, panjangnya sekitar 22-30 mm dan beratnya sekitar 4 gram.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw9" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw9" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w9.gif" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (10, \'<li>Semua organ penting yang telah terbentuk mulai bekerjasama. Pertumbuhan otak meningkat dengan cepat, hampir 250.000 sel saraf baru diproduksi setiap menit. Ia mulai tampak seperti manusia kecil dengan panjang 32-43 mm dan berat 7 gram.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw10" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw10" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w10.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (11, \'<li>Panjang tubuhnya mencapai sekitar 6,5 cm. Baik rambut, kuku jari tangan dan kakinya mulai tumbuh. Sesekali di usia ini janin sudah menguap.</li><li>Gerakan demi gerakan kaki dan tangan, termasuk gerakan menggeliat, meluruskan tubuh dan menundukkan kepala, sudah bisa dirasakan ibu. Bahkan, janin kini sudah bisa mengubah posisinya dengan berputar, memanjang, bergelung, atau malah jumpalitan yang kerap terasa menyakitkan sekaligus memberi sensasi kebahagiaan tersendiri.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw11" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw11" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w11.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (12, \'<li>Bentuk wajah bayi lengkap, ada dagu dan hidung kecil. Jari-jari tangan dan kaki yang mungil terpisah penuh. Usus bayi telah berada di dalam rongga perut. Akibat meningkatnya volume darah ibu, detak jantung janin bisa jadi meningkat. Panjangnya sekitar 63 mm dan beratnya 14 gram.</li><li>Mulai proses penyempurnaan seluruh organ tubuh. Bayi membesar beberapa millimeter setiap hari. Jari kaki dan tangan mulai terbentuk termasuk telinga dan kelopak mata.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw12-1" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw12-2" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw12-1" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w12-1.jpg" alt="Photo landscape"></div><div data-role="popup" id="ibuHamilPopupPhotoIHIPw12-2" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w12-2.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (13, \'<li>Pada akhir trimester pertama, plasenta berkembang untuk menyediakan oksigen , nutrisi dan pembuangan sampah bayi. Kelopak mata bayi merapat untuk melindungi mata yang sedang berkembang. Janin mencapai panjang 76 mm dan beratnya 19 gram.</li><li>Kepala bayi membesar dengan lebih cepat daripada yang lain. Badannya juga semakin membesar untuk mengejar pembesaran kepala.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw13" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw13" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w13.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (14, \'<li>Tiga bulan setelah pembuahan, panjangnya 80-110 mm dan beratnya 25 gram. Lehernya semakin panjang dan kuat. Lanugo, rambut halus yang tumbuh di seluruh tubuh dan melindungi kulit mulai tumbuh pada minggu ini. Kelenjar prostat bayi laki-laki berkembang dan ovarium turun dari rongga perut menuju panggul.</li><li>Detak jantung bayi mulai menguat tetapi kulit bayi belum tebal karena belum ada lapisan lemak.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw14" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw14" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w14.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (15, \'<li>Tulang dan sumsum tulang di dalam sistem kerangka terus berkembang. Jika bayi Anda perempuan, ovarium mulai menghasilkan jutaan sel telur pada minggu ini. Kulit bayi masih sangat tipis sehingga pembuluh darahnya kelihatan. Akhir minggu ini, beratnya 49 gram dan panjang 113 mm.</li><li>Bayi sudah mampu menggenggam tangannya dan mengisap ibu jari. Kelopak matanya masih tertutup.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw15" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw15" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w15.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (16, \'<li>Bayi telah terbentuk sepenuhnya dan membutuhkan nutrisi melalui plasenta. Bayi telah mempunyai tulang yang kuat dan mulai bisa mendengar suara. Dalam proses pembentukan ini system peredaran darah adalah yang pertama terbentuk dan berfungsi.</li><li>Janin mulai bergerak ! Tetapi tak perlu kuatir jika Anda tak merasakannya. Semakin banyak kalsium yang disimpan dalam tulang bayi seiring dengan perkembangan kerangka. Bayi Anda berukuran 116 mm dan beratnya 80 gram.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw16" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw16" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w16.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (17, \'<li>Dengan panjang 12 cm dan berat 100 gram, bayi masih sangat kecil. Lapisan lemak cokelat mulai berkembang, untuk menjada suhu tubuh bayi setelah lahir. Tahukah Anda ? Saat dilahirkan, berat lemak mencapai tiga perempat dari total berat badannya.</li><li>Rambut, kening, bulu mata bayi mulai tumbuh dan garis kulit pada ujung jari mulai terbentuk. Sidik jari sudah mulai terbentuk.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw17" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw17" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w17.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (18, \'<li>Mulailah bersenandung sebab janin sudah bisa mendengar pada minggu ini. Ia pun bisa terkejut bila mendengar suara keras. Mata bayi pun berkembang. Ia akan mengetahui adanya cahaya jika Anda menempelkan senter yang menyala di perut. Panjangnya sudah 14 cm dan beratnya 140 gram.</li><li>Bayi sudah bisa melihat cahaya yang masuk melalui dinding rahim ibu. Hormon Estrogen dan Progesteron semakin meningkat.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw18" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw18" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w18.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (19, \'<li>Tubuh bayi diselimuti vernix caseosa, semacam lapisan lilin yang melindungi kulit dari luka. Otak bayi telah mencapai jutaan saraf motorik karenanya ia mampu membuat gerakan sadar seperti menghisap jempol. Beratnya 226 gram dengan panjang hampir 16 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw19" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw19" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w19.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (20, \'<li>Setengah perjalanan telah dilalui. Kini, beratnya mencapai 260 gram dan panjangnya 14-16 cm. Dibawah lapisan vernix, kulit bayi mulai membuat lapisan dermis, epidermis dan subcutaneous. kuku tumbuh pada minggu ini.</li><li>Proses penyempurnaan paru-paru dan system pernafasan. Pigmen kulit mulai terlihat.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw20" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw20" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w20.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (21, \'<li>Usus bayi telah cukup berkembang sehingga ia sudah mampu menyerap atau menelan gula dari cairan lalu dilanjutkan melalui sistem pencernaan manuju usus besar. Gerakan bayi semakin pelan karena beratnya sudah 340 gram dan panjangnya 20 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw21" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw21" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w21.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (22, \'<li>Indera yang akan digunakan bayi untuk belajar berkembang setiap hari. Setiap minggu, wajahnya semakin mirip seperti saat dilahirkan. Perbandingan kepala dan tubuh semakin proporsional.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw22" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw22" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w22.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (23, \'<li>Meski lemak semakin bertumpuk di dalam tubuh bayi, kulitnya masih kendur sehingga tampak keriput. Ini karena produksi sel kulit lebih banyak dibandingkan lemak. Ia memiliki kebiasaaan "berolahraga", menggerakkan otot jari-jari tangan dan kaki, lengan dan kaki secara teratur. Beratnya hampir 450 gram</li><li>Tangan dan kaki bayi telah terbentuk dengan sempurna, jari juga terbentuk sempurna.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw23" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw23" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w23.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (24, \'<li>Paru-paru mulai mengambil oksigen meski bayi masih menerima oksigen dari plasenta. Untuk persiapan hidup di luar rahim, paru-paru bayi mulai menghasilkan surfaktan yang menjaga kantung udara tetap mengembang.</li><li>Kulit bayi mulai menebal.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw24" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw24" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w24.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (25, \'<li>Bayi cegukan, apakah Anda merasakannya? Ini tandanya ia sedang latihan bernafas. Ia menghirup dan mengeluarkan air ketuban. Jika air ketuban yang tertelan terlalu banyak, ia akan cegukan.</li><li>Tulang bayi semakin mengeras dan bayi menjadi bayi yang semakin kuat. Saluran darah di paru-paru bayi sudah semakin berkembang. Garis disekitar mulut bayi sudah mulai membentuk dan fungsi menelan sudah semakin membaik. Indera penciuman bayi sudah semakin membaik karena di minggu ini bagian hidung bayi (nostrils) sudah mulai berfungsi. Berat bayi sudah mencapai 650-670 gram dengan tinggi badan 34-37 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw25" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw25" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w25.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (26, \'<li>Bayi sudah bisa mengedipkan matanya selain itu retina matanya telah mulai terbentuk. Aktifitas otaknya yang berkaitan dengan pendengarannya dan pengelihatannya sudah berfungsi, bunda dapat memulai memperdengarkan lagu yang ringan dan mencoba untuk memberi cahaya lebih disekitar perut, mungkin bunda akan merasakan anggukan kepala si kecil. Berat badan bayi sudah mencapai 750-780gram, sedangkan tingginya 35-38 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw26" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw26" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w26.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (27, \'<li>Minggu pertama trimester ketiga, paru-paru, hati dan sistem kekebalan tubuh masih harus dimatangkan. Namun jika ia dilahirkan, memiliki peluang 85% untuk bertahan.</li><li>Indra perasa mulai terbentuk. Bayi juga sudah pandai mengisap ibu jari dan menelan air ketuban yang mengelilinginya. Berat umum bayi seusia si kecil 870-890 gram dengan tinggi badan 36-38 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw27" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw27" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w27.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (28, \'<li>Minggu ini beratnya 1100 gram dan panjangnya 25 cm. Otak bayi semakin berkembang dan meluas. Lapisan lemak pun semakin berkembang dan rambutnya terus tumbuh</li><li>Lemak dalam badan mulai bertambah. Walaupun gerakan bayi sudah mulai terbatas karena beratnya yang semakin bertambah, namun matanya sudah mulai bisa berkedip bila melihat cahaya melalui dinding perut ibunya. Kepalanya sudah mengarah ke bawah. Paru-parunya belum sempurna, namun jika saat ini ia terlahir ke dunia, si kecil kemungkinan besar telah dapat bertahan hidup.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw28" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw28" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w28.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (29, \'<li>Kelenjar adrenalin bayi mulai menghasilkan hormon seperti androgen dan estrogen. Hormon ini akan menyetimulasi hormon prolaktin di dalam tubuh ibu sehingga membuat kolostrum (air susu yang pertama kali keluar saat menyusui).</li><li>Sensitifitas dari bayi semakin jelas, bayi sudah bisa mengidentifikasi perubahan suara, cahaya, rasa dan bau. Selain itu otak bayi sudah bisa mengendalikan nafas dan mengatur suhu badan dari bayi. Postur dari bayi sudah semakin sempurna sebagai seorang manusia, berat badannya 1100-1200 gram, dengan tinggi badan 37-39 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw29" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw29" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w29.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (30, \'<li>Lemak dan berat badan bayi terus bertambah sehingga bobot bayi sekarang sekitar 1400 gram dan panjangnya 27 cm. Karena ia semakin besar, gerakannya semakin terasa.</li><li>Mata indah bayi sudah mulai bergerak dari satu sisi ke sisi yang lain dan dia sudah mulai belajar untuk membuka dan menutup matanya. Saat ini waktu yang terbaik bagi bunda untuk menyenteri perut dan menggerak-gerakan senter tersebut maka mata bayi sudah bisa mengikuti ke arah mana senter tersebut bersinar.cairan ketuban (amniotic fluid) di rahim bunda semakin berkurang. Kini si kecil pun sudah mulai memproduksi air mata. Berat badan bayi 1510-1550 gram, dengan tinggi 39-40 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw30" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw30" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w30.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (31, \'<li>Plasenta masih memberikan nutrisi yang dibutuhkan bayi. Aliran darah di plasenta memungkinkan bayi menghasilkan air seni. Ia berkemih hampir sebanyak 500 ml sehari di dalam air ketuban</li><li>Perkembangan fisik bayi sudah mulai melambat pada fase ini, hanya berat badan bayilah yang akan bertambah. Selain itu lapisan lemak akan semakin bertambah dibawah jaringan kulitnya. Tulang pada tubuh bayi sudah mulai mengeras, berkembang dan mulai memadat dengan zat-zat penting seperti kalsium, zat besi, fosfor. Berkebalikan dengan.</li><li>perkembangan fisiknya, pada fase ini perkembangan otaknyalah yang berkembang dengan sangat pesat dengan menghasilkan bermilyar sel. Apabila diperdengarkan musik, bayi akan bergerak. Berat badan bayi 1550-1560 gram dengan tinggi 41-43 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw31" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw31" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w31.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (32, \'<li>Jari tangan dan kaki telah tumbuh sempurna, begitu pula dengan bulu mata, alis dan rambut di kepala bayi yang semakin jelas. Lanugo yang menutupi tubuh bayi mulai rontok tetapi sebagian masih ada di bahu dan punggung saat dilahirkan. Dengan berat 1800 gram dan panjang 29 cm, kemampuan untuk bertahan hidup di luar rahim sudah lebih baik apabila di dilahirkan pada minggu ini.</li><li>Kulit bayi semakin merah, kelopak matanya juga telah terbuka dan system pendengaran telah terbentuk dengan sempurna. Kuku dari jari mungil tangan dan kaki si kecil sudah lengkap dan sempurna. Rambutnya pun semakin banyak dan semakin panjang. Bayi sudah mulai bisa bermimpi.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw32" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw32" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w32.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (33, \'<li>Bayi telah memiliki bentuk wajah yang menyerupai ayah dan ibunya. Otak bayi semakin pesat berkembang. Pada saat ini juga otak bayi sudah mulai bisa berkoordinasi antara lain, bayi sudah menghisap jempolnya dan sudah bisa menelan. Walaupun tulang-tulang bayi sudah semakin mengeras tetapi otot-otot bayi belum benar-benar bersatu. Bayi sudah bisa mengambil nafas dalam-dalam walaupun nafasnya masih di dalam air. Apabila bayinya laki-laki maka testis bayi sudah mulai turun dari perut menuju skrotum. Berat badan bayi 1800-1900 gram, dengan tinggi badan sekitar 43-45 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw33" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw33" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w33.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (34, \'<li>Bayi berada di pintu rahim. Bayi sudah dapat membuka dan menutup mata apabila mengantuk dan tidur, bayi juga sudah mulai mengedipkan matanya. Tubuh bunda sedang mengirimkan antibodi melalui darah bunda ke dalam darah bayi yang berfungsi sebagai sistem kekebalan tubuhnya dan proses ini akan tetap terus berlangsung bahkan lebih rinci pada saat bunda mulai menyusui. Berat Badan bayi 2000-2010 gram, dengan tinggi badan sekitar 45-46 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw34" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw34" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w34.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (35, \'<li>Pendengaran bayi sudah berfungsi secara sempurna. Lemak dari tubuh bayi sudah mulai memadat pada bagian kaki dan tangannya, lapisan lemak ini berfungsi untuk memberikan kehangatan pada tubuhnya. Bayi sudah semakin membesar dan sudah mulai memenuhi rahim bunda. Apabila bayi bunda laki-laki maka di bulan ini testisnya telah sempurna. Berat badan bayi 2300-2350 gram, dengan tinggi badan sekitar 45-47 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw35" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw35" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w35.png" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (36, \'<li>Kulit bayi sudah semakin halus dan sudah menjadi kulit bayi. Lapisan lemak sudah mulai mengisi bagian lengan dan betis dari bayi. Ginjal dari bayi sudah bekerja dengan baik dan livernya pun telah memproduksi kotoran. Saat ini paru-paru bayi sudah bekerja baik bahkan sudah siap bertemu dengan mama dan papa. Berat badan bayi 2400-2450 gram, dengan tinggi badan 47-48 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw36" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw36" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w36.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (37, \'<li>Kepala bayi turun ke ruang pelvik. Bentuk bayi semakin membulat dan kulitnya menjadi merah jambu. Rambutnya tumbuh dengan lebat dan bertambah 5cm. Kuku terbentuk dengan sempurna. Bayi sudah bisa melihat adanya cahaya diluar rahim. Bayi pada saat ini sedang belajar untuk mengenal aktifitas harian, selain itu bayi juga sedang belajar untuk melakukan pernafasan walaupun pernafasannya masih dilakukan di dalam air. Berat badan bayi di minggu ini 2700-2800 gram, dengan tinggi 48-49 cm.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw37" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw37" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w37.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPerkembanganJanin(IdMinggu, Konten) VALUES (38, \'<li>Proses pembentukan telah berakhir dan bayi siap dilahirkan.<ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw38-1" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><ul data-role="listview" data-inset="false" style="margin: 10px 0 0 0;"><li style=""><a href="#ibuHamilPopupPhotoIHIPw38-2" data-rel="popup" data-position-to="window" style="text-decoration: none; color: inherit; font-size: small; border: 1px solid rgb(232, 155, 120); border-radius: 5px; text-align: center; padding-left: 32.5px">Lihat Gambar</a></li></ul><div data-role="popup" id="ibuHamilPopupPhotoIHIPw38-1" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w38-1.gif" alt="Photo landscape"></div><div data-role="popup" id="ibuHamilPopupPhotoIHIPw38-2" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img src="img/ibuhamil-info-perkembangan/w38-2.jpg" alt="Photo landscape"></div></li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelInfoPerkembanganJanin' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuInfoPerkembanganJanin ORDER BY IdMinggu', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>Minggu ke-' + row.IdMinggu;
                    if ( i == 37 ) {
                        content += ' hingga 40';
                    }
                    content += '</h4><ul data-role="listview" data-inset="false">' + row.Konten + '</ul></div>';
                }
                $( '#ibuHamilTabelInfoPerkembanganJanin' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_infoOlahraga()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuInfoOlahraga', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Jalan Kaki\', \'<li>Merupakan jenis olah raga terbaik yang bisa dilakukan oleh ibu hamil selama kehamilannya. Jalan kaki sangat baik untuk melancarkan peredaran darah dan menjaga ibu hamil tetap fit. Melakukan jalan kaki tentunya semua orang bisa melakukannya, tidak memerlukan peralatan, bisa dilakukan di mana saja dan bisa dilakukan hingga akhir kehamilan.<br><br>Menurut American College of Obstetricians and Gynecologists ibu hamil bisa melakukan olah raga jalan kaki selama 30 menit per hari.<br><br>Selama melakukan olahraga jalan kaki, hindarkan ibu hamil mengalami dehidrasi, oleh karena itu selalu bawa persediaan air minum selama jalan kaki atau jangan melakukannya saat terik di siang hari. Begitu pula, hindari melakukan jalan kaki saat malam hari. Hindari pula jalan kaki dengan jalur yang menanjak.<br><br>Hentikan olah raga jalan kaki, jika ibu hamil mengalami perdarahan, sesak nafas, mengalami kontraksi, pusing, mengalami sakit dada, sakit atau kram pada betis, dicurigai adanya pecah ketuban atau setelah jalan kaki adanya kondisi dimana janin pergerakannya jadi berkurang.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Berenang\', \'<li>Para ahli kesehatan menyatakan bahwa berenang merupakan salah satu olahraga terbaik bagi ibu hamil. Berenang sangat baik sebab sangat bagus melatih otot otot besar (kaki dan tangan). Memberi manfaat bagi kinerja jantung dan juga mempermudah menurunkan berat badan bagi ibu hamil yang over weight. Selain itu olahraga berenang dapat menghindarkan ibu hamil dari dehidrasi. Namun meskipun demikian disarankan ibu hamil setiap 15 menit sekali minum satu gelas air selama melakukan olahraga renang dan satu gelas setelah selesai. Olahraga berenang sendiri bisa dilakukan ibu hamil selama 30 menit dalam sehari. Gaya dada cocok dilakukan oleh ibu hamil karena tidak membutuhkan banyak putaran seperti pada gaya bebas juga hanya membutuhkan tenaga yang minim. Selain itu gaya punggung juga baik dilakukan oleh ibu hamil saat renang karena air dapat mengurangi efek gravitasi pada tubuh dan dengan posisi terlentang menghindari resiko terganggunya aliran darah.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Senam Hamil\', \'<li>Meskipun ibu hamil bisa melakukan senam secara sendiri berdasarkan DVD yang banyak beredar namun akan lebih baik jika ibu hamil melakukan senam hamil dipandu oleh ahli atau mengikuti kelas-kelas hamil yang saat ini banyak berdiri. Selain mendapatkan kebugaran dan panduan yang tepat , ibu dapat berinteraksi dengan ibu ibu hamil lainnya sehingga makin memperbanyak pengetahuan dan berbagi pengalaman dengan yang lain. Dengan melakukan senam hamil, dapat menambah kesehatan dan kebugaran ibu hamil beserta janinnya . Selain itu senam hamil dapat membantu melenturkan dan menguatkan otot-otot yang diperlukan saat persalinan nanti sehingga akan mempermudah proses persalinan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Yoga\', \'<li>Sama halnya dengan senam hamil, jika ibu hamil ingin melakukan yoga ada baiknya mengikuti kelas-kelas yoga dengan panduan ahli. Selain membantu kebugaran tubuh ibu hamil, kelebihan yoga adalah melatih pernapasan dan relaksasi ibu hamil yang sangat penting diperlukan saat persalinan nanti karena, pada saat persalinan nanti dibutuhkan teknik-teknik pernapasan yang baik dan ibu hamil yang rileks dan yoga bisa membantu mewujudkan itu. Relaksasi yang dihasilkan dari latihan yoga dapat membuat ibu hamil menjalani hari-harinya dengan tenang, juga mampu mengurangi rasa takut akan proses persalinan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Latihan Beban\', \'<li>Manfaat dari latihan beban salah satunya adalah mengurangi terjadinya ibu hamil mengalami cidera dan membuat otot-otot disekeliling sendi menjadi lebih kuat. Selain itu dapat membantu menjaga stamina tubuh yang sangat diperlukan selama kehamilan dan persalinan. Lakukan latihan angkat beban yang sederhana dan yang bisa juga dilakukan dirumah. Gunakan beban maksimal setengah dari berat beban normal. Sediakan air minum selama latihan berlangsung.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoOlahraga(Jenis, Keterangan) VALUES (\'Peregangan\', \'<li>Dengan melakukan latihan peregangan dapat membantu fleksibilitas tubuh ibu hamil yang diperlukan saat proses persalinan dan juga dapat membantu mengurangi rasa sakit saat persalinan. Latihan peregangan juga dapat membantu relaksasi ibu hamil.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelInfoOlahraga' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuInfoOlahraga', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Jenis + '</h4><ul data-role="listview" data-inset="false">' + row.Keterangan + '</ul></div>';
                }
                $( '#ibuHamilTabelInfoOlahraga' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_infoPemeriksaan()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuInfoPemeriksaan', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Darah\', \'<li>Pemeriksaan darah bertujuan untuk mengetahui kondisi kesehatan ibu hamil secara umum. Caranya adalah dengan pemeriksaan AFP (alpha fetoprotein) pada usia kehamilan antara 15 - 20 minggu. Kadar AFP dipantau untuk memastikan apakah saluran saraf tulang belakang janin mengalami gangguan atau tidak.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Urine dan Gula Darah\', \'<li>Pemeriksaan ini dilakukan untuk memeriksa fungsi ginjal ibu hamil, sekaligus memeriksa kadar gula darah. Jika ditemukan adanya kandungan protein, maka kemungkinan besar ibu hamil akan mengalami preeklampsia yang berbahaya. Pemeriksaan kadar gula darah juga penting untuk mencegah diabetes pada ibu.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Berat Badan\', \'<li>Berat badan ibu hamil dipantau untuk mengetahui apakah pertambahan berat badannya tergolong normal atau tidak. Pertambahan berat badan yang tak normal bisa dipengaruhi oleh perkembangan janin yang terhambat atau gangguan lain.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Perut\', \'<li>Dilakukan untuk melihat posisi rahim, mengukur pertumbuhan janin dan mengetahui posisi janin. Pemeriksaan ini harus dilakukan secara rutin oleh dokter kandungan atau bidan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Tinggi Badan\', \'<li>Pada saat memeriksa tinggi badan, ukuran panggul ibu akan diukur sehingga dapat diperkirakan apakah ibu dapat menjalani persalinan normal atau harus melakukan caesar. Jika tinggi badannya tergolong pendek, maka ukuran panggul juga cenderung sempit sehingga tidak memungkinkan persalinan normal.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Dalam\', \'<li>Dilakukan untuk mengetahui apakah terdapat tumor, kondisi abnormal di dalam rongga panggul, mendiagnosis adanya bisul atau erosi pada mulut rahim, papsmear, mengetahui ada tidaknya penyakit kehamilan, letak janin dan ukuran rongga panggul sebagai jalan lahir bayi. Biasanya pemeriksaan ini dilakukan di awal kehamilan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Kaki\', \'<li>Dilakukan untuk mengetahui adanya pembengkakan dan kemungkinan varises. Pembengkakan yang terjadi di minggu-minggu akhir kehamilan adalah normal, namun pembengkakan yang berlebihan menandakan preeklampsia.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Pemeriksaan Detak Jantung\', \'<li>Pemeriksaan ini dilakukan untuk mengetahui apakah janin dalam berada dalam kondisi sehat dan baik. Permeriksaan detak jantung biasanya menggunakan Teknik Doopler sehingga ibu hamil dapat mendengarkan detak janin yang dikandungnya.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoPemeriksaan(Nama, Keterangan) VALUES (\'Uji TORCH\', \'<li>Dilakukan untuk mengetahui ada tidaknya infeksi parasit TORCH di dalam tubuh ibu hamil. Infeksi TORCH dapat menyebabkan bayi terlahir dengan kondisi cacat bahkan mengalami kematian. Pemeriksaan ini dilakukan dengan menganalisis kadar imunogloblin G (IgG) dan imunoglobin M (IgM) dalam serum darah ibu hamil yang berfungsi sebagai sistem kekebalan tubuh.<br><br>Banyak sedikitnya IgG dan IgM dalam serum darah mengindikasikan ada tidaknya infeksi serta besar kecilnya infeksi. Jika hasil IgG negatif, berarti infeksi terjadi pada masa lalu dan kini sudah tidak aktif lagi. Jika hasil IgM positif, berarti infeksi masih berlangsung aktif dan ibu hamil memerlukan pengobatan agar janin dalam kandungan yang terinfeksi dapat segera ditangani sehingga infeksi tidak semakin buruk.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelInfoPemeriksaan' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuInfoPemeriksaan', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Nama + '</h4><ul data-role="listview" data-inset="false">' + row.Keterangan + '</ul></div>';
                }
                $( '#ibuHamilTabelInfoPemeriksaan' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_infoTips()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuInfoTips', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuInfoTips(Judul, Isi) VALUES (\'20 Cara Mengatasi Mual Saat Hamil Muda Tanpa Obat\', \'<li data-role="list-divider" style="white-space: normal"><b><big>Penyebab Mual Saat Hamil</big></b></li><li style="white-space: normal">Banyak hal yang bisa menyebabkan ibu hamil mengalami mual. Jika ingin mengatasi mual, sebaiknya mengetahui penyebab apa saja yang bisa menyebabkan mual. Barulah ibu hamil tahu bagaimana cara mengatasi mual yang menderanya. Penyebab mual pada ibu hamil adalah sebagai berikut ini:<br><br><b>1. Menderita Asam Lambung</b><br>Bagi ibu hamil yang waktu mudanya memiliki riwayat asam lambung, dia akan rentan untuk terkena mual dan muntah. Apalagi jika ibu hamil sering membiarkan perutnya kosong dalam waktu yang lama maka dia akan rentan untuk mual disebabkan asam lambung yang naik.<br><br><b>2. Hormon Meningkat</b><br>Penyebab asam lambung bisa naik dan kambuh sewaktu-waktu dikarenakan hormon di dalam tubuh meningkat. Hormon yang meningkat itu adalah hormon estrogen. Hormon ini sangat mempengaruhi kondisi asam lambung seseorang. Saat asam lambung meningkat maka timbullah rasa mual. Hormon estrogen akan banyak dikeluarkan saat pagi hari, oleh sebab itulah banyak ibu hamil yang merasakan mual saat pagi hari. Ibu hamil yang tidak memiliki asam lambung, biasanya dia tidak akan mengalami mual dan muntah di pagi hari.<br><br><b>3. Hormon HCG</b><br>HCG merupakan hormon yang bisa mendeteksi kehamilan seseorang. Berikut ini hal-hal yang berhubungan dengan HCG:<br>• Saat tes urin, testpack akan mengidentifikasi adanya hormon HCG di dalam rahim.<br>• Jika hormon HCG di dalam rahim telah terbentuk, maka hasilnya akan positif. Jika tidak, hasilnya akan negatif.<br>• HCG adalah hormon yang diciptakan oleh plasenta atau ari-ari bayi.<br>• Sebelum janin terbentuk, ari-ari bayi terbentuk telebih dahulu. Hormon yang dihasilkan oleh plasenta bisa menimbulkan perubahan di dalam rahim ibu.<br>• Perubahan itulah yang menyebabkan ibu hamil muda menjadi mual.<br><br><b>4. Metabolisme Berubah</b><br>Di dalam tubuh seseorang, sering terjadi metabolisme. Metabolisme di dalam tubuh bisa mempengaruhi sistem imun tubuh. Begitu pula saat hamil muda, metabolisme di dalam tubuh berubah. Metabolisme terjadi lebih lambat dibandingkan sebelum terjadinya kehamilan. Hal itulah yang menyebabkan seseorang terkena mual dan muntah.<br><br><b>5. Pencernaan Terdesak</b><br>Ada yang mual saat kehamilan muda, namun ada juga rasa mual yang ditimbulkan saat kehamilan justru sudah membesar. Saat hamil besar dan baru merasakan mual, penyebabnya adalah janin mendesak organ pencernaan dan saluran cerna. Saluran cerna dan organ pencernaan semakin terdesak karena memberikan ruang kepada janin untuk tumbuh dan berkembang.<br><br><b>6. Psikologis</b><br>Faktor yang berpengaruh terhadap mual ibu hamil adalah psikologis. Perasaan tertekan dan belum siap memiliki momongan menjadi pemicu utama ibu hamil merasakan mual.</li><li data-role="list-divider" style="white-space: normal"><b><big>Kondisi Mual Saat Hamil Yang Bahaya</big></b></li><li style="white-space: normal">Meskipun mual dianggap hal wajar bagi ibu hamil, namun ada indikasi bahaya pada mual yang terjadi pada ibu hamil. Indikasi itu harus dipahami oleh ibu hamil agar ibu hamil segera mendapatkan penanganan medis yang sesuai dan cepat. Berikut ini indikasi bahaya mual pada ibu hamil yang harus segera mendapatkan penanganan lebih lanjut:<br><br>1. Saat makan dan minum ibu hamil selalu disertai dengan muntah dan mual.<br>2. Sedikit berkemih dan jumlah urin sedikit.<br>3. Badan terus lemas dan lesu. Tidak bisa beranjak dari tempat tidur.<br><br>Ketiga indikasi di atas mengarah ke indikasi bahwa ibu hamil mengalami penyakit hiperemisi gravidarum. Penyakit itu merupakan penyakit mual dan muntah yang over atau berlebihan. Perawatan intensif di rumah sakit sangat diperlukan untuk mengembalikan kondisi ibu hamil seperti sedia kala. Jika tidak mendapatkan penanganan dengan segera, akan membahayakan nyawa ibu hamil. Membahayakan nyawa karena ibu hamil kekurangan cairan dan tenaga untuk bertahan hidup.</li><li data-role="list-divider" style="white-space: normal"><b><big>Cara Mengatasi Mual Saat Hamil</big></b></li><li style="white-space: normal">Agar tidak terkena mual dan muntah yang berlebihan. Ibu hamil harus mengetahui bagaimana cara mengatasi mual selama kehamilannya. Cara itu bisa membuat ibu hamil terhindar dari dehidrasi dan kekurangan tenaga. Meskipun mual dan muntah, ibu hamil harus tetap mempertahankan nutrisi yang masuk ke dalam tubuhnya. Nutrisi itu tidak untuk dirinya sendiri, namun juga untuk perkembangan janin yang ada di dalam kandungannya. Cara mengatasi mual dan muntah yang efektif untuk ibu hamil adalah sebagai berikut ini:<br><br><b>1. Makan Sedikit Demi Sedikit Tapi Sering</b><br>Sama halnya dengan diet, ada diet yang menganjurkan untuk makan porsi sedikit demi sedikit tapi sering. Hal itu lebih efektif dibandingkan dengan makan banyak tapi jarang. Alasan porsi sedikit lebih bermanfaat bagi ibu hamil muda:<br><br>• Makan dengan porsi sedikit ini akan bisa masuk ke dalam tubuh dibandingkan dengan makan dengan porsi yang banyak.<br>• Porsi banyak hanya akan membuat ibu hamil bertambah mual.<br>• Sugesti ibu yang hamil muda akan merasakan eneg atau tidak nyaman di perut jika melihat makanan dengan jumlah yang banyak.<br>• Porsi yang harus dimakan sedikit demi sedikit tapi sering adalah makanan yang kaya akan karbohidrat.<br>• Karbohidrat bisa menghindarkan ibu hamil dari rasa lemas dan lesu.<br>• Jika ibu hamil belum bisa secara langsung mengkonsumsi karbohidrat, ibu hamil bisa memancing nafsu makannya dengan konsumsi buah yang segar.<br><br>Cara menjaga kehamilan agar tetap sehat dapat anda awali dengan pola makan, jangan sembarangan makan dan atur intensitasnya.<br><br><b>2. Mengambil Jeda Saat Pagi Hari</b><br>Kebiasaan wanita saat pagi hari adalah langsung beranjak dari tempat tidurnya. Kebiasaan itu akan terbawa saat dia hamil muda. Sayangnya, wanita yang baru hamil muda akan merasakan mual pada pagi hari. Bahkan saat dia baru bangun dari tempat tidurnya. Jika sudah begitu, pagi hari yang seharusnya diawali dengan semangat dan energi justru diisi dengan rasa lemas. Untuk mengatasi hal tersebut, lakukanlah hal-hal di bawah ini:<br><br>• Jangan langsung beranjak dari tempat tidur.<br>• Berilah jeda waktu antara bangun tidur dan waktu beranjak dari tempat tidur.<br>• Saat merasakan mual, sebaiknya ibu hamil mengambil camilan atau biskuit yang sudah ibu hamil siapkan di tempat tidurnya.<br>• Saat mual sudah mereda, barulah ibu hamil bisa bangkit dari tempat tidurnya.<br><br><b>3. Hindari Makanan Penimbul Gas</b><br>Makanan yang menimbulkan gas di dalam perut tidak boleh dikonsumsi, pasalnya makanan yang bergas tersebut bisa membuat perut terasa kembung atau penuh. Akibatnya adalah gas memenuhi perut dan terjadilah mual. Makanan yang harus dihindari adalah:<br><br>• Kol<br>• Nangka<br>• Durian<br>• Makanan hasil fermentasi misalnya saja tape ketan, tape singkong dan lain sebagainya.<br>• Sawi hijau.<br><br>Konsumsi makanan di atas memang bukan larangan ibu hamil dalam hal makanan, namun jika anda mual sebaiknya di hindari. Konsumsilah makanan sehat untuk ibu hamil seperti bayam.<br><br><b>4. Jauhi Makanan Penambah Rasa Mual</b><br>Ibu hamil sebaiknya menjauhi dan tidak mengkonsumsi makanan yang bisa menyebabkan rasa mualnya datang dan semakin menjadi. Makanan itu selain membuat mual bertambah, ada efek lain yang bisa ditimbulkan bagi ibu hamil. Makanan yang tidak boleh dimakan bagi ibu hamil agar tidak mual adalah sebagai berikut ini:<br><br>• <b>Makanan lemak tinggi</b>. Makanan ini tidak bisa dikonsumsi karena kandungan lemak jahatnya bisa menimbulkan rasa mual pada ibu hamil.<br>• <b>Makanan berminyak</b>. Makanan dengan minyak tinggi seperti gorengan akan meninggalkan sisa minyak di lidah dan di usus. Minyak tidak dapat diuraikan oleh usus akaibatnya adalah rasa mual akan timbul setelah mengkonsumsi makanan tersebut.<br>• <b>Makanan pedas</b>. Pedas akan membuat rasa mual pada ibu hamil, terutama ibu hamil yang memiliki asam lambung. Makanan pedas bisa memicu meningkatnya kadar asam lambung di dalam lambung. Saat asam lambung naik, ibu hamil akan merasakan mual. Oleh karena itu, makanan pedas merupakan salah satu pantangan makanan ibu hamil yang perlu anda waspadai.<br><br><b>5. Minum Cukup</b><br>Frekuensi muntah yang sering bisa menyebabkan ibu hamil kekurangan cairan. Oleh sebab itu ibu hamil harus bisa mengganti cairan yang hilang dengan cara mengkonsumsi air putih yang cukup. Air putih hangat bisa dipilih bagi ibu hamil yang merasakan mual dan muntah. Air hangat bisa dijadikan sebagai penetralisir muntah dikarenakan rasa hangatnya bisa lebih diterima oleh usus dibandingkan dengan air putih dingin atau es.<br><br><b>6. Mengkonsumsi Buah Kaya Vitamin C</b><br>Buah banyak mengandung vitamin C, banyak ibu hamil yang memilih menghilangkan mual dengan mengkonsumsi buah secara teratur. Vitamin C yang ada di dalam buah bermanfaat untuk menetralisir rasa mual. Buah yang terlalu asam tidak dianjurkan bagi ibu hamil yang menderita asam lambung.<br><br><b>7. Mengkonsumsi Buah Dingin</b><br>Buah kaya serat dan vitamin. Bagi ibu hamil yang menderita asam lambung masih bisa mengkonsumsi buah dingin. Buah dalam kondisi dingin bisa menetralisir rasa mual dibandingkan dengan buah yang didiamkan dalam suhu ruang. Penyebab buah dingin bisa menetralisir rasa mual karena buah dingin yang didiamkan dalam lemari es, suhunya akan menurun. Suhu buah yang menurun akan bisa diterima usus dibandingkan dengan buah dengan suhu biasa.<br><br><b>8. Menghirup Udara Pagi</b><br>Udara pagi bisa bermanfaat untuk menghilangkan rasa mual. Saat mencium udara segar di pagi hari, tubuh ibu hamil akan rileks. Saat rileks itulah, syaraf otak akan bekerja untuk menghilangkan rasa mual. Otak adalah sistem syaraf pusat yang membawahi sistem syaraf yang ada di bawahnya termasuk usus dan organ-organ lainnya.<br><br><b>9. Olahraga</b><br>Ibu hamil muda juga harus olahraga. Olahraga yang bisa dilakukan adalah olahraga dengan gerakan ringan. Jalan-jalan di pagi hari bisa menghilangkan rasa mual pada ibu hamil.<br><br><b>10. Terapi</b><br>Ada terapi yang bisa dilakukan ibu hamil untuk mengatasi rasa mual. Ibu hamil dengan frekuensi mual dan muntah yang sering bisa menggunakan terapi itu untuk mengatasi mual dan muntahnya. Terapi itu adalah akupuntur. Akupuntur adalah terapi yang menggunakan totok jarum di titik syaraf tertentu. Akupuntur ini berguna untuk memperbaiki syaraf perut yang mengalami kelainan. Kelainan itulah yang menyebabkan ibu hamil mual dan muntah dengan intensitas yang lebih sering.<br><br><b>11. Mendinginkan Suhu Tubuh</b><br>Ibu hamil memiliki suhu tubuh yang meningkat, saat suhu tubuh meningkat rasa mual pun akan ditimbulkan. Untuk mengatasinya, duduklah dan berdiam dirilah di tempat yang sejuk dan dingin. Tempat-tempat tersebut bermanfaat untuk mendinginkan suhu tubuh ibu hamil, jika suhu tubuh normal kembali. Rasa mual pun akan hilang.<br><br><b>12. Mengkonsumsi Banyak Vitamin B6</b><br>Vitamin B6 banyak ditemukan pada produk susu hamil. Bagi ibu hamil yang sering mual dan muntah, sebaiknya mengkonsumsi susu secara teratur. Susu itu selain memperbaiki cairan tubuh juga bisa dijadikan sebagai tenaga untuk ibu hamil. Saat ini banyak sekali varian rasa yang ditawarkan oleh susu hamil, ibu hamil bisa memilih varian yang sesuai dengan seleranya.<br><br><b>13. Istirahat Cukup</b><br>Ibu hamil yang mual dan muntah disarankan untuk istirahat yang cukup. Istirahat bisa membantu pikiran dan badan ibu hamil rileks. Saat rileks, mual bisa hilang dan diatasi.<br><br><b>14. Hindari Stress</b><br>Stress bisa membuat ibu hamil cepat mual dan muntah. Penyebabnya adalah:<br><br>• Saat stress, mental dan psikis ibu hamil terganggu.<br>• Psikis yang terganggu bisa membuat ibu hamil mudah mengalami lelah.<br>• Lelah bisa membuat ibu hamil cepat merasakan mual.<br>• Psikis yang kacau dan terganggu akan berpengaruh pada syarat otak. Syaraf otak akan tegang dan berpengaruh pada sistem syaraf yang dibawahinya termasuk syaraf perut dan usus.<br><br><b>15. Mengkonsumsi Minuman Tertentu</b><br>Minuman tertentu juga bisa bermanfaat untuk mengatasi rasa mual. Minuman yang bermanfaat untuk mengatasi rasa mual adalah sebagai berikut ini:<br><br>• <b>Jahe hangat</b>. Saat mual, banyak pihak medis maupun non medis yang menyuruh ibu hamil untuk mengkonsumsi minuman jahe. Jahe mengandung minyak atsiri yang bermanfaat untuk mengatasi rasa mual. Zat itu membuat bau jahe khas dan terasa hangat di perut. Sebelum meminum jahe hangat, ciumlah dulu aromanya yang segar. Aroma jahe bisa membuat tubuh dan pikiran rileks.<br>• <b>Teh mint</b>. Teh dengan kandungan mint di dalamnya bisa mengatasi rasa mual pada ibu hamil. Mint mengandung menthol, menthol rasanya dingin. Sama halnya dengan buah-buahan dingin, rasa dingin pada menthol lebih bisa diterima usus dibandingkan dengan teh dengan rasa biasa.<br>• <b>Air dengan perasan lemon</b>. Air hangat dengan perasan lemon bisa membuat rasa mual teratasi. Air hangat lebih bisa diterima oleh usus dibandingkan air putih dingin. Dicampurkan dengan lemon yang mengandung vitamin C, rasa mual yang dialami akan segera hilang.<br><br><b>16. Melakukan Hal-Hal Yang Menenangkan</b><br>Melakukan hal-hal yang menenangkan bisa membuat rasa mual menjadi hilang. Saat tenang, badan dan pikiran jadi rileks. Saat rileks, mual tidak akan mudah datang dan menyerang. Hal-hal yang bisa menenangkan adalah:<br><br>• Yoga<br>• Meditasi<br>• Melatih pernafasan hidung dan perut.<br>• Relaksasi<br><br><b>17. Hindari Bau Menyengat</b><br>Bau menyengat bisa menimbulkan rasa mual, oleh sebab itu menghindari bau menyengat bisa menjadi salah satu cara untuk penghilang rasa mual bagi ibu hamil. Ibu hamil akan mudah mual saat mencium bau-bauan berikut ini:<br><br>• Bau masakan. Bau masakan yang menusuk hidung seperti bau nasi baru mau matang, bau masakan terasi, bau bumbu yang ditumis dan masih banyak lagi lainnya.<br>• Bau bensin.<br>• Bau solar<br>• Bau keringat manusia di tempat keramaian.<br>• Bau chemical bahan kimia misalnya pembersih lantai, pembersih kaca dan detergent.<br>• Asap knalpot.<br>• Asap pabrik<br>• Limbah pabrik.<br><br><b>18. Mengkonsumsi Jus Buah</b><br>Mengkonsumsi jus buah juga bisa menghilangkan rasa mual, dikarenakan kandungan vitamin yang di jus bisa menetralisir rasa mual.<br><br><b>19. Berbaringlah</b><br>Saat merasakan mual, sebaiknya ibu hamil berbaring sebentar. Jangan memaksakan diri untuk duduk. Saat berbaring, aturlah pernafasan dengan sedemikian rupa.<br><br><b>20. Menghirup Aroma Terapi</b><br>Aroma terapi selain menenangkan juga bisa menghilangkan rasa mual. Bau aroma terapi yang dihirup bisa membuat tubuh ibu hamil rileks.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuInfoTips(Judul, Isi) VALUES (\'Mengatasi Kaki Bengkak saat Hamil\', \'<li>Terjadinya perubahan postur tubuh selama kehamilan adalah salah satu yang wajar terjadi selama perubahan tersebut menunjukan tanda tanda yang normal. Adapun untuk anda yang mendapatkan keluhan yang abnormal biasanya ditandai dengan kondisi kesehatan yang semakin buruk, nafsu makan berkurang, berat badan berkurang dan adanya beberapa bagian tubuh yang bengkak tidak wajar selama kehamilan. Keluhan kehamilan yang sering dijumpai oleh ibu hamil adalah kaki yang bengkak, hal ini dikarenakan kaki menopang beban yang lebih berat dari keadaan normal, meskipun kondisi ini dianggap wajar akan tetapi apabila bengkak semakin bertambah anda harus segera mencari solusi untuk mengurangi kondisi tersebut.<br><br>Perubahan yang terjadi selama kehamilan dipengaruhi oleh perubahan hormon yang terjadi pada ibu hamil. Adapun penyebab kaki bengkak selama kehamilan adalah kecenderungan tubuh anda dalam menahan cairan sehingga tubuh menahan cairan sebesar 30 persen lebih banyak dari keadaan yang normal. Keberadaan cairan yang tertahan di bagian kaki diperparah dengan kondisi rahim yang semakin membesar dikarenakan adanya pembuluh darah balik di bagian kaki yang terhambat sehingga arus balik darah ke jantung menjadi terganggu.<br><br>Kondisi kaki bengkak sering kali ditemukan pada ibu hamil yang tengah memasuki kehamilan trimester ketiga dikarenakan kondisi berat badan yang semakin bertambah sehingga beban kaki anda semakin berat. Meskipun hal ini dianggap wajar akan tetapi untuk mendapatkan kenyaman anda selama kehamilan anda dapat mengendalikan kaki bengkak dengan menjauhi beberapa faktor yang menyebabkan bengkak semakin parah.<br><br><b>Berikut adalah beberapa tips yang dapat anda lakukan untuk mengatasi kaki bengkak selama kehamilan:</b><br>1. Saat anda duduk usahakan posisi kaki lebih tinggi dari jantung anda, posisi seperti ini akan membantu dalam mengatur sirkulasi darah. Sehingga apabila anda tidur, anda dapat menggunakan ganjalan bantal pada kedua kaki untuk mendapatkan posisi yang lebih tinggi dari kepala dan jantung.<br>2. Pada kehamilan yang semakin membesar, anda jangan memaksakan untuk berdiri dalam jangka waktu yang cukup lama apalagi bila anda merasakan pegal. Pegal yang anda rasakan adalah tanda bahwa peredaran darah anda juga otot mengalami kelelahan.<br>3. Ketika anda tidur sebaiknya posisi badan anda miring ke kiri selain dianjurkan bagi umat muslim, manfaat yang anda dapatkan dengan tidur miring ke kiri adalah pembuluh darah balik ada di bagian kanan tubuh dan membuat tekanan pada tubuh  anda berkurang.<br>4. Apabila anda berenang usahakan untuk berjalan di dasar kolam, daya apung dari kolam akan mengangkat bayi sehingga mampu mengatur peredaran darah secara normal pada ibu hamil.<br>5. Aturlah jadwal olahraga secara rutin selama kehamilan anda selain dapat membantu anda menjaga kesehatan selama kehamilan. Olahraga yang dilakukan selama kehamilan akan membantu untuk mengatasi keluhan kehamilan dan juga mempersiapkan persalinan terutama latihan pernapasan.<br>6. Hindari menggunakan sepatu yang mengikat kaki anda atau ukurannya kekecilan karena dengan sepatu yang mengikat kaki akan menghambat peredaran darah anda.<br>7. Seimbangkan konsumsi menu makan anda terutama makanan yang mengandung garam, konsumsi makanan mengandung garam dalam jumlah yang wajar.<br>8. Gerakan ringan yang membantu anda mengurangi bengkak bisa anda lakukan, contohnya adalag ketika anda sedang duduk, gerakan pergelangan kaki anda dengan cara ditekuk, gerakan yang melingkar ini akan sangat membantu anda.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelInfoTips' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuInfoTips', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Judul + '</h4><ul data-role="listview" data-inset="false">' + row.Isi + '</ul></div>';
                }
                $( '#ibuHamilTabelInfoTips' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_persiapan()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuPersiapan', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuPersiapan(Judul, Isi) VALUES (\'Tanda-tanda Kelahiran\', \'<li>Selamat datang di akhir kehamilan. Barangkali anda hanya tinggal menunggu selama beberapa jam atau beberapa hari ke sebuah proses yang mendebarkan yaitu melahirkan. Namun apapun yang terjadi anda harus bersiap-siap melepaskan julukan sebagai calon ibu dengan kata penuh makna "ibu". Namun sebelum hal tersebut terwujud ada baiknya, kita mengetahui, sebetulnya proses melahirkan itu dimulai dengan tanda-tanda seperti apa, hingga kita yakin jika kita mendapatkan tanda tersebut, tenaga, mental, dan pikiran akan kita kerahkan guna menghadapi proses melahirkan.<br><br>Pada kebanyakan wanita, melahirkan dimulai antara minggu ke 39 dan 41 usia kehamilan. Namun karena lama kehamilan setiap orang berbeda-beda, maka banyak bayi yang dilahirkan pada salah satu minggu tersebut tanpa menunjukkan tanda-tanda prematur atau lahir terlambat. Pada bulan-bulan akhir kehamilan, tubuh anda memproduksi progesteron yang bertujuan melunakkan jaringan di sekitar cervix (leher rahim menghubungkan uterus dan vagina) dan pelvis (panggul) untuk persiapan proses melahirkan. Melahirkan di mulai saat kontraksi rahim mulai meregangkan jaringan di sekirar cervix.<br><br>Tanda-tanda akah melahirkan di awali dengan gejala:<br><br><b>Terasa nyeri di selangkangan</b><br>Anda akan merasakan nyeri di bagian selangkangan karena ada tekanan sebagai akibat posisi kepala janin sudah turun ke bawah, ke daerah rangka tulang pelvis. Lantaran janin menekan kandung kemih, ibu hamil menjadi sering buang air kecil. Anda juga merasakan sakit pada perut, mulas, sering buang air besar, dan buang angin.<br><br><b>Sakit pada panggul dan tulang belakang.</b><br>Anda akan merasakan sakit berlebih pada panggul dan bagian tulang belakang. Rasa sakit ini disebabkan oleh pergeseran dan pergerakan janin yang mulai menekan tulang belakang.<br><br><b>Keluarnya Lendir Kental Bercampur Darah</b><br>Selama kehamilan bayi anda tersumbat dalam rahim oleh mucus (gumpalan lendir yang lengket pada leher rahim). Saat persalinan dimulai dan cervix mulai membuka, gumpalan mucus tadi terhalau. Pada saat bersamaan, membran yang mengelilingi bayi anda dan cairan amniotik agak memisah dari dinding rahim. Penampakan dari darah dan mucus yang keluar tampak bagai cairan lengket berwarna merah muda ini merupakan tanda anda segera akan menjalani proses persalinan.<br><br><b>Kontraksi</b><br>Adalah tidak biasa bisa suatu persalinan diawali dengan kontraksi yang kuat. Mulanya, kontraksi tersasa seperti sakit pada punggung bawah, yang berangsur-angsur bergeser ke bagian bawah perut. Beberapa menggambarkannya mirip dengan mulas saat haid. Saat mulas bergerak kebagian perut dengan tangan dapat anda rasakan bagian perut tersebut mengeras. Kejangnya mirip kontraksi Braxton Hicks (kontraksi palsu), namur terasa teratur, semakin seiring dengan kemajuan proses persalinan. Rahim tersusun oleh otot-otot longitudinal involuntary, yaitu otot-otot yang tak dapat anda kontrol sesuka hati. Selama proses melahirkan, otot-otot tersebut semakin menebal dan memendek seiring dengan setiap kontraksi, dan saat itu juga otot-otot itu berangsur-angsur berhenti menipis, atau menghapus cervix. Proses ini berlanjut hingga pembukaan cervix menjadi penuh, ukuran lebarnya antara 8-10 cm. Dewasa ini besarnya bukaan tidak lagi diukur dengan jari. Lima jari berarti bukaan penuh.<br><br>Tahap awal dilatasi dari 1-4 cm berlangsung paling lama. Kontraksi perlahan dan muncul setiap 15-20 menit, lalu berangsur menguat dan semakin sering sehingga menjadi setiap tiga hingga lima menit, yang membuat anda merasa tak nyaman. Bila air ketuban anda belum pecah, lebih baik mendatangi rumah sakit begitu kontraksi terasa setiap 10 menit. Begitu dilatasi servix mencapai 4 hingga 5 cm, kontraksi akan terasa semakin cepat hingga seperti muncul bergelombang. Untuk mengatasinya ambillah nafas pendek-pendek namun cepat, dan waktu untuk menarik nafas diantaranya akan terasa sangat singkat. Bisa dikatakan inilah masa terberat melahirkan, yang bisa membuat anda ingin memperoleh obat penghilang nyeri.<br><br><b>Pecahnya Air Ketuban</b><br>Pada beberapa kasus, membran masih utuh hingga akhir tahap pertama persalinan. Kemudian, desakan kontraksi dan tekanan kepala bayi anda pada mulut cervix menyebabkan pecahnya air ketuban.<br><br>Saat air ketuban mulai bocor, anda akan merasakan semburan air atau hanya rembesan, namun persitiwa sebenarnya pecahnya air ketuban tidak terasa, karena membran tidak memiliki syaraf. Tugasnya adalah menampung dua liter air amniotik steril, yang saat keluar sekaligus juga membersihkan jalur persalinan. Seiring dengan pecahnya membran, proses melahirkan akan berlangsung cepat. Kepala bayi akan berusaha keras menekan cervix, untuk membukanya dan merangsang pelepasalan prostaglanding untuk memacu kontraksi anda.<br><br></li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuPersiapan(Judul, Isi) VALUES (\'Persiapan Persalinan\', \'<li data-role="list-divider" style="white-space: normal"><b><big>Tempat Kelahiran</big></b></li><li>Tempat melahirkan hendaknya disesuaikan dengan jarak tempuh dari rumah untuk memperkirakan waktu sampai ke rumah sakit.</li><li>Perhatikan kepadatan lalu lintas pada jam-jam tertentu sehingga anda dapat mempersiapkan jalur alternatif untuk sampai ke rumah sakit.</li><li>Prosedur masuk, fasilitas yang ada, biaya persalinan.</li><li>Lokasi kamar bersalin, agar dalam keadaan darurat mempercepat sampai ke tempat tujuan</li><li>Tempat plasenta (ari-ari) harus sudah direncanakan di mana plasenta akan diurus, apakah di rumah atau di tempat bersalin. Biasanya sudah disiapkan di tempat bersalin.</li><li data-role="list-divider" style="white-space: normal"><b><big>Kebersihan Diri dan Aktivitas Yang Dapat Dilakukan Menjelang Persalinan</big></b></li><li>Sangat disarankan untuk menjaga kebersihan diri menjelang persalinan, manfaatnya antara lain:<br>a. Dengan mandi dan membersihkan badan, ibu akan mengurangi kemungkinan adanya kuman yang masuk selama persalinan. Hal ini mengyrangi terjadinya infeksi sesudah melahirkan.<br>b. Ibu akan merasa nyaman selama menjalani proses persalinan.</li><li>Saat ini, ibu yang akan melahirkan, tidak di-huknah untuk mengeluarkan tinja.</li><li>Bulu kemaluan tidak dicukur seluruhnya, hanya bagian yang dekat anus yang akan dibersihkan, karena hal tersebut akan mempermudah penjahitan jika ibu ternyata diepisiotomi.</li><li>Selama menunggu persalinan tiba, ibu diperbolehkan untuk berjalan-jalan di sekitar kamar bersalin.</li><li>Ibu boleh minum dan makan makanan ringan selama menunggu persalinan, disarankan untuk tidak mengkonsumsi makanan yang berbau menyengat seperti petai atau jengkol.</li><li data-role="list-divider" style="white-space: normal"><b><big>Hindari kepanikan dan ketakutan</big></b></li><li>Siapkan diri ibu, ingat bahwa setelah semua ini ibu akan mendapatkan buah hati yang didambakan.</li><li>Simpan tenaga anda untuk melahirkan, tenaga anda akan terkuras jika berteriak-teriak dan bersikap gelisah.</li><li>Dengan bersikap tenang, ibu dapat melalui saat persalinan dengan baik dan lebih siap.</li><li>Dukungan dari orang-orang terdekat, perhatian dan kasih sayang tentu akan membantu memberikan semangat untuk ibu yang akan melahirkan.</li><li data-role="list-divider" style="white-space: normal"><b><big>Persiapan kebutuhan untuk persalinan</big></b></li><li>Perkirakan jarak antara rumah dan rumah sakit serta lalu lintas yang harus dilalui jika akan bersalin.</li><li>Perkirakan kapan waktu persalinan untuk mengatur jadwal bepergian jauh.</li><li>Persiapan peralatan yang harus dibawa Untuk Ibu selama persalinan:<br>a. Alas tahan air (water proof) untuk di mobil selama perjalanan ke rumah sakit.<br>b. Minyak untuk memijit, untuk mengurangi rasa sakit.<br>c. Alat-alat mandi seperti sabun, tutup kepala, handuk, dll.<br>d. Lip balm, sikat gigi dan odol, sisir, ikat rambut.<br>e. Baju ganti (gunakan baju yang nyaman dan menyerap keringat)<br>f. Radiotape, CD atau musik yang menenangkan.<br>g. Bantal dari rumah.</li><li>Untuk Ayah:<br>a. Jam tangan<br>b. Kartu atau kunjungan pemeriksaan kehamilan, KTP (suami-istri, beserta foto kopinya)<br>c. Alat mandi : sikat gigi, odol, sisir, dll.<br>d. Makanan kecil.<br>e. Baju ganti atau sweater.<br>f. Kertas, pensil, buku, majalah untuk membaca.<br>g. No. telp saudara atau teman.</li><li>Untuk Ibu, setelah melahirkan:<br>a. Baju atau gaun yang dapat dibuka dari depan (berkancing di depan) agar dapat menyusui.<br>b. Kosmetik<br>c. Bra yang sesuai<br>d. Makanan ringan yang disukai<br>e. Baju untuk pulang, perlu diingat badan ibu akan terlihat seperti hamil 5 - 6 bulan, jadi siapkan baju yang sesuai.</li><li>Untuk Bayi:<br>a. Kain flannel beberapa buah (3 - 4 buah)<br>b. Pakaian bayi, 2 pasang (siapkan 2 ukuran)<br>c. Popok, dapat menggunakan popok kain atau popok sekali pakai.<br>d. Sarung tangan, sarung kaki, topi (penutup kepala)<br>e. Bedak, minyak angin.<br>f. Selimut untuk membungkus bayi selama di perjalanan pulang.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuPersiapan(Judul, Isi) VALUES (\'Tahapan Proses Persalinan\', \'<li>Persalinan merupakan hal yang paling ditunggu-tunggu oleh para ibu hamil, sebuah waktu yang menyenangkan namun di sisi lain merupakan hal yang paling mendebarkan. Persalinan terasa akan menyenangkan karena si kecil yang selama sembilan bulan bersembunyi di dalam perut anda akan muncul terlahir ke dunia. Di sisi lain persalinan juga menjadi mendebarkan khususnya bagi calon ibu baru, dimana terbayang proses persalinan yang menyakitkan, mengeluarkan energi yang begitu banyak, dan sebuah perjuangan yang cukup melelahkan.<br><br>Ada baiknya para calon ibu mengetahui proses atau tahapan persalinan seperti apa, sehingga para calon ibu dapat mempersiapkan segala halnya guna menghadapi proses persalinan ini. Proses persalinan terbagi ke dalam  empat tahap, yaitu:</li><li><b>kala I; Tahap Pembukaan</b><br><br>In partu (partus mulai) ditandai dengan lendir bercampur darah, karena serviks mulai membuka dan mendatar. Darah berasal dari pecahnya pembuluh darah kapiler sekitar karnalis servikalis karena pergeseran ketika serviks mendatar dan terbuka. Pada kala ini terbagi atas dua fase yaitu:<br><br>Fase Laten: dimana pembukaan serviks berlangsung lambat, sampai pembukaan 3 cm<br><br>Fase aktif: yang terbagi atas 3 subfase yaitu akselerasi, steady dan deselerasi<br><br>Kala I adalah tahap terlama, berlangsung 12-14 jam untuk kehamilan pertama dan 6-10 jam untuk kehamilan berikutnya. Pada tahap ini mulut rahim akan menjadi tipis dan terbuka karena adanya kontraksi rahim secara berkala untuk mendorong bayi ke jalan lahir. Pada setiap kontraksi rahim, bayi akan semakin terdorong ke bawah  sehingga menyebabkan pembukaan jalan lahir. Kala I persalinan di sebut lengkap ketika pembukaan jalan lahir menjadi 10 cm, yang berarti pembukaan sempurna dan bayi siap keluar dari rahim.<br><br>Masa transisi ini menjadi masa yang paling sangat sulit bagi ibu. Menjelang berakhirnya kala I, pembukaan jalan lahir sudah hampir sempurna. Kontraksi yang terjadi akan semakin sering dan semakin kuat. Anda mungkin mengalami rasa sakit yang hebat, kebanyakan wanita yang pernah mengalami masa inilah yang merasakan masa yang paling berat. Anda akan merasakan datangnya rasa mulas yang sangat hebat dan terasa seperti ada tekanan yang sangat besar ke arah bawah, seperti ingin buang air besar.<br><br>Menjelang akhir kala pertama, kontraksi semakin sering dan kuat, dan bila pembukaan jalan lahir sudah 10 cm berarti bayi siap dilahirkan dan proses persalinan memasuki kala II.</li><li><b>Kala II; Tahap Pengeluaran Bayi</b><br><br>Pada kala pengeluaran janin, rasa mulas terkordinir, kuat, cepat dan lebih lama, kira-kira 2-3 menit sekali. Kepala janin turun masuk ruang panggul sehingga terjadilah tekanan pada otot-otot dasar panggul yang secara reflektoris menimbulkan rasa mengedan. Anda merasa seperti mau buang air besar, dengan tanda anus terbuka. Pada waku mengedan, kepala janin mulai kelihatan, vulva (bagian luar vagina) membuka dan perineum (daerah antara anus-vagina) meregang. Dengan mengedan terpimpin, akan lahirlah kepala diikuti oleh seluruh badan janin. Sebagai gambaran : Video MelahirkanIbu akan merasakan tekanan yang kuat di daerah perineum. Daerah perineum bersifa elastis, tapi bila dokter/bidan memperkirakan perlu dilakukan pengguntingan di daerah perineum (episiotomi), maka tindakan ini akan dilakukan dengan tujuan mencegah perobekan paksa daerah perineum akibat tekanan bayi</a></li><li><b>Kala III; Tahap Pengeluaran Plasenta</b><br><br>Dimulai setelah bayi lahir, dan plasenta akan keluar dengan sendirinya. Proses melahirkan plasenta berlangsung antara 5-30 menit. Pengeluaran plasenta disertai dengan pengeluaran darah kira-kira 100-200 cc. Dengan adanya kontraksi rahim, plasenta akan terlepas. Setelah itu dokter/bidan akan memeriksa apakah plasenta sudah terlepas dari dinding rahim.  Setelah itu barulah dokter/bidan membersihkan segalanya termasuk memberikan jahitan bila tindakan episiotomi dilakukan</li><li><b>Kala IV; Tahap Pengawasan</b><br><br>Tahap ini digunakan untuk melakukan pengawasan terhadap  bahaya perdarahan. Pengawasan ini dilakukan selam kurang lebih dua jam. Dalam tahap ini ibu masih mengeluarkan darah dari vagina, tapi tidak banyak, yang berasal dari pembuluh darah yang ada di dinding rahim tempat terlepasnya plasenta, dan setelah beberapa hari anda akan mengeluarkan cairan sedikit darah yang disebut lokia yang berasal dari sisa-sisa jaringan.<br><br>Pada beberapa keadaan, pengeluaran darah setelah proses kelahiran menjadi banyak. Ini disebabkan beberapa faktor seperti lemahnya kontraksi atau tidak berkontraksi otot-otot rahim. Oleh karena itu perlu dilakukan pengawasan sehingga jika perdarahan semakin hebat, dapat dilakukan tindakan secepatnya.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelPersiapan' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuPersiapan', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Judul + '</h4><ul data-role="listview" data-inset="false">' + row.Isi + '</ul></div>';
                }
                $( '#ibuHamilTabelPersiapan' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_persiapanTips()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuPersiapanTips', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuPersiapanTips(Judul, Isi) VALUES (\'Tips Mengatasi Nyeri Waktu Bersalin\', \'<li>Persalinan merupakan serangkaian kejadian yang berlangsung tahap demi tahap. Dimulai dengan kontraski, keluarnya darah, kemudian disusul dengan pecahnya ketuban dan berakhir dengan lahirnya bayi yang cukup bulan atau hampir cukup bulan yang disertai dengan pengeluaran plasenta (ari-ari) serta selaput janin dari perut ibu.<br><br>Dalam tahapan persalinan, kontraksi merupakan tanda paling awal yang mengisyaratkan persalinan akan segera tiba. Kontraksi ini dimulai dari puncak rahim yang kemudian akan mengarah ke jalan lahir. Kondisi kontraksi akan semakin lama dan semakin kuat dan jaraknya akan semakin pendek antara satu kontraksi dengan kontraksi lainnya. Adapun tanda-tanda tersebut adalah keluarnya cairan bercampur darah yang keluar dari jalan lahir. Yang mana kondisi ini disertai dengan rasa sakit yang berlangsung cukup lama hingga waktu persalinan tiba.<br><br>Sebagian ibu hamil yang akan segera melahirkan beberapa diantaranya ada yang mampu menahan rasa sakit hingga pembukaan jalan lahir cukup lebar. Namun adapula ibu hamil yang tidak tahan dengan rasa nyeri yang timbulkan bahkan saat pembukaan jalan lahir belum muncul.</li><li><b>Lantas Mengapa Nyeri Bersalin Bisa Timbul?</b><br><br>Nyeri sewaktu bersalin dapat dipicu karena beberapa faktor seperti:<br><br>1. Meregangnya jalan lahir, leher v*g*n* serta jaringan lunak yang berada disekitarnya.<br><br>2. Adanya gerakan kontraksi rahim yang menyebabkan otot-otot dinding rahim menjadi mengerut, sehingga timbulnya nyeri tidak dapat dihindarkan. Adapun mengerutnya otot-otot rahim ini diakibatkan adanya perubahan hormon pada waktu hamil.<br><br>3. Keadaan psikologis ibu yang terus-terusan cemas, ketakutan serta tegang sebagai respon stres dapat memicu peningkatan rasa nyeri.</li><li>Nah, untuk mengatasinya kita simak berikut ini:<br><br>1. Kompres bagian punggung bawah ibu dengan menggunakan air hangat kuku diantara waktu kontraksi. Yang mana tindakan ini bertujuan untuk memperlebar serta memperlancar peredaran darah, sehingga rasa nyeri bisa dikurangi.<br><br>2. Cobalah untuk mengalihkan perhatian agar ibu tidak berfokus pada rasa nyeri yang dirasakan seperti bernyanyi atau berbicara ketika rasa nyeri timbul. Terutama jika ibu seorang muslim ibu bisa berdzikir atau bertasbih untuk melepaskan rsa nyeri. Hanya saja tidk perlu terlalu keras agar ibu tidak terlalu membuang energi.<br><br>3. Buanglah air kecil sesering mungkin. Hanya saja hal ini tentunya harus diimbangi dengan asupan cairan ke dalam tubuh ibu. Berkemih dapat membantu turunya kepala bayi ke dasar panggul dengan baik dan menjaga ritme kontraksi persalinan.<br><br>4. Mintalah keluarga atau suami untuk meijat punggung bagian bawah. Gunakan minyak aroma terapi yang lembut dan menenangkan untuk memijat punggung bawah sebagai pelicin. Namun jika anda tidak mendapatkan minyak aromaterapi anda bisa menggantinya dengan lotion tubuh atau lotion ibu.<br><br>5. Pertahankan agar posisi punggu tetap tegak,baik saat berdiri, duduk ataupun posisi lainnya. Hal ini bertujuan agar kepala bayi tetap berada dibagain leher rahim dengan baik sehingga konraksi yang terjadi semakin kuat dan efektif.<br><br>6. Lakukan pengaturan nafas degan baik. Biasanya menjelang persalinannya ibu merasakan begitu panik dan sulit mengatur nafasnya dengan baik. Namun tahukah ibu pengaturan nafas yang diatur lebih baik akan dapat mengurangi rasa sakit yang ibu rasakan. Untuk itu, cobalah redam rasa panik dan aturlah nafas ibu.</li><li>Demikian beberapa cara mengatasi rasa sakit sewaktu bersalin. Rasa sakit yang dapat diminimalisir sewaktu bersalin tentu akan mengurangi dan meringankan beban sakit ibu pada saat melahirkan. Semoga bermanfaat dan selamat menempuh persalinan semoga lancar.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuPersiapanTips(Judul, Isi) VALUES (\'Teknik Pernapasan Selama Persalinan\', \'<li>Ada dua pernafasan dasar untuk persalinan : pernafasan lambat atau pernafasan ringan. Rencanakan untuk menggunakan selama persalinan guna membantu relaksasi, menjamin pasokan oksigen yang memadai, dan memungkinkan anda mengubah pernafasan sebagai respons terhadap intensitas kontraksi. Akan sangat nyaman bila memulai dengan pernafasan lambat jika diperlukan pada awal persalinan dan menggunakannya selama persalinan sepanjang hal itu membantu. Selanjutnya anda mungkin ingin menggantinya dengan pernafasan ringan atau salah satu variasi yang paling enak bagi Anda.Beberapa wanita menggunakan pernafasan lambat selama persalinan. Lainnya menggunakan ringan atau lambat saja.Apa yang anda gunakan tergantung keinginan Anda saat itu dan intensitas persalinan.<br><br>Kami menganjurkan Anda belajar pernafasan lambat maupun ringan. Hal terpenting disini adalah menguasai kedua pola dasar sehingga membantu Anda rileks dan mengalihkan perhatian selama persalinan. Anda sapat mengadaptasikannya sesuai kebutuhan.</li><li data-role="list-divider" style="white-space: normal"><b><big>Pernafasan Lambat</big></b></li><li>Gunakan pernafasan lambat (tingkat pertama dari pernafasan terpola) sewaktu Anda mencapai satu titik pada persalinan saat kontraksi cukup kuat sehingga anda tidak dapat lagi berjalan atau berbicara tanpa berhenti sejenak. Gunakan pernafasan lambat selama hal itu membantu , biasanya sampai Anda kekala satu persalinan. Bergantilah kepernafasan ringan atau variasinya jika Anda menjadi tegang dan tidak rileks selama kontraksa. Beberapa wanita hanya menggunakan pernafasan lambat sepanjang kala satu persalinan; lainnya menggunakan semua pola dan variasi yang diuraikan disini.<br><br>pernafasan lambat dapat berupa pernafasan dada maupun perut, yang lebih penting dari pada apakah itu pernafasan dada atau perut adalah bahwa pernafasan ini membantu Anda rileks.</li><li><b>Implementasi Saat Persalinan</b><br><br>1. Segera setelah kontraksi dimulai, ambil nafas yang banyak, dan hembuskan nafas dengan kuat. Ini dapat digunakan sebagai pernafasan "pengatur" atau sinyal pada pasangan. Lepaskan semua ketegangan sewaktu Anda mengeluarkan nafas, dan kendurkan semua otot dari kepala sampai ujung kaki.<br><br>2. Pusatkan perhatian<br><br>3. Dengan perlahan hirup nafas melalui hidung (atau mulut jika hidung Anda tersumbat) dan keluarkan melalui mulut, dengan membiarkan semua udara mengalir keluar. Berhenti sejenak sampai udara seolah-olah ingin masuk kembali. Bernafaslah enam sampai sepuluh tarikan per menit (kira-kira separuh dari kecepatan pernafasan normal).<br><br>4. Tarik nafas dengan cepat, tetapi keluarkan nafas dengan bersuara (dapat didengar oleh mereka yang dekat dengan Anda), dengan mulut sedikit terbuka dan rileks. Bunyi yang terdengar sewaktu mengeluarkan nafas adalah seperti desah lega. Pada saat persalinan, Anda boleh berteriak atau bergumam waktu mengeluarkan nafas.<br><br>5. Jaga bahu dalam posisi kebawah dan rileks. Relakskan dada dan perut sehingga keduanya mengembung waktu Anda menarik nafas dan kembali normal waktu Anda mengeluarkan nafas.<br><br>6. Saat kontraksi berakhir, beri sinyal pada pasangan bahwa kontraksi sudah berlalu atau ambil nafas yang dalam dan rileks, diakhiri dengan desahan.<br><br>7. Rilekskan seluruh tubuh, ganti posisi, minum, dst.<br><br>Catatan : Saat berlatih dan belajar pola pernafasan ini, beberapa wanita merasa kurang nyaman bila menarik nafas melalui hidung dan mengeluarkannya melalui mulut. Bila hal ini terjadi pada diri Anda, modipikasi polanya menjadi pernafasan hidung atau mulut saja, yang paling penting pernafasan ini dan membuat Anda relaks.</li><li>Praktekkan teknik yang diuraikan diatas sampai Anda merasa nyaman dan konsisten dalam melakukannya. Dengan demikian, Anda cukup percaya pada kemampuan Anda untuk menggunakan pernafasan lambat ini guna mendapat rileksasi yang dalam. Selama kontraksi persalinan, Anda mnggunakan pola ini selama 60 sampai 90 detik. Berlatihlah dengan berbagai posisi (duduk, berbaring, menyamping, berdiri, merangkak, dan bahkan didalam mobil). Saat mengeluarkan nafas pusatkan perhatian untuk merilekskan berbagai bagian tubuh  Anda sehingga Anda dapat merilekskan semua bagian tubuh yang tidak diperlukan untuk mempertahankan posisi Anda.</li><li data-role="list-divider" style="white-space: normal"><b><big>Pernafasan Ringan</big></b></li><li>Pernafasan ringan sangat bermanfaat jika dan saat Anda menemukan bahwa Anda tidak lagi dapat relaks selama kontraksi, kontraksi terlalu sakit untuk pernafasan lambat, atau Anda secara naluriah mempercepat pernafasan. Sebagaian besar wanita meskipun tidak semuanya, merasa perlu berpindah kepernafasan ringan pada saat tertentu selama dalam masa persalinan aktif- khususnya jika kontraksi jaraknya sangat dekat dan sangat kuat. Biarkan insensitas kontraksi membimbing Anda dalam memutuskan kapan menggunakan pernafasan ringan.</li><li>Untuk melakukan pernafasan ringan, tarik dan keluarkan pernafasan dengan cepat dan ringan melalui mulut-kira-kira satu tarikan nafas setiap satu atau dua detik. Jaga pernafasan Anda tetap dangkal dan ringan. Tarik nafas dengan tenang, tetapi keluarkan dengan bersuara baik berupa desahan pendek atau bunyi ringan. Tarikan nafas yang tenang membantu Anda memastikan bahwa tidak mengambil nafas berlebihan atau hiperventilasi.</li><li>Pola ini tidak mudah dikusai seperti pernafasan lambat. Bersabarlah dan berikan cukup waktu bagi diri Anda untuk mempelajarinya perlahan-lahan. Mulailah mempelajari pernafasan ringan dengan berlatih pada kecepatan antara satu tarikan nafas per detik dan satu setiap dua detik. Cobalah bernafas dengan berbagai kecepatan dalam kisaran tersebut sampai Anda merasa nyaman. Cara terbaik untuk menghitung kecepatan adalah menghitung pernafasan selama 10 detik. Jika hitungan Anda diantara 5 sampai 10, pernafasan Anda dalam kisaran tersebut. Bernafaslah dengan kecepatan ini selama 30 detik sampai 2 menit. Saat Anda sudah mampu melakukan pernafasan ringan dengan mudah, nyaman, dan konsisten selama satu sampai dua menit.</li><li>Selama persalinan, pernafasan ringan tanpa lebih alami karena rahim bekerja sangat keras sehingga Anda membutuhkan lebih banyak oksigen. Sama seperti berlari membuat Anda bernafas dengan cepat untuk memenuhi kebutuhan oksigen, meningkatnya intensitas dan frekwensi kontraksi juga meningkatkan kebutuhan akan oksigen. Kecepatan pernafasan Anda selama persalinan secara alami akan diatur oleh kebutuhan oksigen serta rasa sakit dan frekwensi kontraksi.</li><li>Pernafasan ringan melalui mulut terbuka akan membuat mulut kering, jadi gunakan satu atau beberapa anjuran berikut ini.<br>• Sewaktu Anda menarik nafas, sentuhkan ujung lidah pada langit-langit tepat dibelakang gigi. Cara ini akan membuat udara basah saat Anda menarik nafas.<br>• Dengan jari-jari regang, tutup hidung dan mulut sehingga telapak tangan Anda mereefleksikan cairan dari udara pernafasan Anda.<br>• Diantara kontraksi, minumlah iar atau cairan lain, atau mangisap es batu atau es buah beku.<br>• Kadang-kadang sikat gigi atau kumur-kumur.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelPersiapanTips' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuPersiapanTips', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Judul + '</h4><ul data-role="listview" data-inset="false">' + row.Isi + '</ul></div>';
                }
                $( '#ibuHamilTabelPersiapanTips' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_insert_FAQ()
{
    db.transaction(function(tx) 
    {  
        tx.executeSql('SELECT * FROM IbuFAQ', [], function(transaction, result) 
        {
            if (result.rows.length === 0)
            {
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah ibu hamil tetap bisa berolahraga?\', \'<li>Olahraga tetap harus dilakukan walaupun seorang wanita sedang dalam masa kehamilan, agar kehamilan yang merupakan anugerah ini menjadi sehat dan aman. Hal ini tentu saja berbeda intensitas dan jenis olahraga yang baik bagi wanita hamil, bahkan juga harus sesuai dengan masa kehamilan trimester pertama, kedua dan ketiga trimester. Selama masa kehamilan, tubuh wanita mengalami perubahan fisiologis secara besar-besaran. Perubahan ini tidak menetap, dan yang harus diingat adalah harus mengikuti program olahraga yang dirancang dan direncanakan dengan hati-hati. Olahraga ringan memiliki banyak manfaat selama dan setelah kehamilan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah aman bagi ibu hamil untuk melakukan perjalanan?\', \'<li>Untuk pegergian menggunakan transportasi udara, para dokter menganjurkan untuk tidak melakukan penerbangan setelah usia kehamilan 36 minggu. Setiap maskapai penerbangan pun memiliki regulasi sendiri untuk wanita hamil. Bahkan pembatasan akan semakin ketat jika Anda bepergian ke luar negeri. Maka pastikan Anda mendapat informasi dari maskapai penerbangan sebelum memutuskan untuk pergi. Bawa pula catatan dokter yang memberitahukan kondisi kesehatan kehamilan Anda.<br><br>Jika bepergian melalui jalur laut, kapal mempunyai peraturan individu tentang batas maksimal wanita hamil dapat berlayar. Umumnya usia hamil di bawah 23 minggu bisa naik kapal. Tanyakan pada armada kapal tentang peraturan ini sebelum memesan tiket.<br><br>Sementara itu, jalur darat adalah transportasi yang paling aman bagi wanita hamil. Anda bisa berhenti untuk beristirahat sebentar jika naik mobil. Ini memudahkan Anda untuk mampir ke toilet atau sekadar berjalan-jalan meregangkan kaki dan merilekskan tubuh. Namun perjalanan di dalam mobil untuk waktu yang lama juga membuat Anda menjadi tidak nyaman.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah ibu hamil tetap boleh menyusui?\', \'<li>Kegiatan menyusui saat hamil dikenal juga dengan istilah Tandem Nursing. Banyak yang berpendapat hal ini sangat berbahaya bagi janin, ibu dan juga bayi yang sedang disusui. Namun berdasarkan penelitian medis, Tandem Nursing relatif aman dan tidak berbahaya selama ibu mematuhi beberapa rambu-rambu terutama pemenuhan gizi selama melakukan Tandem Nursing.<br><br>Menyusui saat hamil bisa membuat rahim berkontraksi dan berakibat pada keguguran. Dasar pemahaman ini adalah pada saat menyusui hormonebernama oksitosin turut diproduksi. Hormon ini memang menyebabkan kontraksi di bagian payudara juga rahim ibu. Akan tetapi, kontraksi tersebut tidak berpengaruh secara signifikan bagi janin yang dikandung oleh ibu yang menyusui. Kontraksi rahim pada saat menyusui sama dengan kontraksi rahim saat berhubungan intim dengan suami, dan tidak mengakibatkan keguguran. Meski demikian, ibu yang melakukan Tandem Nursing juga harus hati-hari. Jika pada bagian rahim terasa nyeri maka jauh lebih baik jika ibu mengehentikan kegiatan menyusui.<br><br>Alasan kedua mengapa kegiatan menyusui saat hamil tidak dibolehkan adalah kekhawatiran akan gizi yang kurang. Hal ini memang ada benarnya, namun jika ibu bisa memenuhi<br><br>kebutuhan super extra gizinya, mengaoa tidak? Tandem Nursing memerlukan asupan makanan yang penuh dengan protein dan juga karbohidrat. Jumlahnya lebih tinggi lagi dari biasanya sebab ada janin dan bayi menyusui. Sementara ini, kalsium dan kebutuhan vitamin juga harus diperhatikan. Kombinasikan suplemen dan juga makanan alami adalah taktik terbaik.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah berhubungan intim diperbolehkan untuk ibu hamil?\', \'<li>Tidak ada alasan yang menyebutkan jika ibu hamil tidak dapat menjalankan kehidupan seks nya pada masa kehamilan. Kenyataanya, hormon kehamilan membuat Anda lebih responsif pada aktivitas ini. Pada saat kandungan Anda sudah mulai besar, Anda mungkin ingin mencoba posisi lain yang dapat membuat Anda merasa nyaman. Namun apabila Anda mengalami pendarahan semasa hamil, kelahiran prematur, ataupun mengalami plasenta previa, sebaiknya Anda mengkonsultasikan perihal ini terlebih dahulu pada dokter kandungan atau bidan. Anda biasanya akan disarankan untuk menunda aktivitas ini terlebih dahulu.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah aman untuk mengkonsumsi obat saat hamil?\', \'<li>Anda harus berkonsultasi pada dokter umum atau dokter kandungan Anda sebelum menjalani pengobatan apapun, terutama pada masa-masa awal kehamilan dimana organ tubuh bayi Anda masih dalam masa pembentukan. Anda harus mempertimbangkan rencana Anda untuk memiliki bayi apabila Anda tengah menjalani pengobatan dalam jangka panjang, karena mengonsimsi obat-obatan tertentu dapat mendatangkan risiko bagi bayi Anda.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah Ibu Hamil Boleh Makan Sushi?\', \'<li>Pertanyaan ini sering sekali terdengar. Maklum, saat ini makanan Jepang sangat terkenal di masyarakat kita. Pertanyaan sederhana tetapi membutuhkan jawaban yang serius.<br><br>Ikan laut adalah salah satu sumber protein yang baik, mempunyai kadar lemak jenuh rendah dan kadar omega-3 yang tinggi. Dilaporkan, terdapat keuntungan untuk janin jika ibu hamil memakan ikan laut lebih dari 340 gram per minggu.<br><br>Lalu masalah apa yang perlu dikhawatirkan dalam hal mengkonsumsi ikan laut ? hampir semua ikan laut dan kerang laut telah tercemar merkuri. Merkuri ini dapat mengakibatkan hal buruk untuk janin dan kadar merkuri tidak akan berubah banyak jika ikan tersebut di olah (dimasak) terlebih dahulu. Jadi untuk ibu hamil sebaiknya mengurangi konsumsi ikan laut dan tidak mengkonsumsi kerang.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Mengapa ibu hamil sering buang air?\', \'<li>Kehamilan adalah salah satu faktor utama yang menyebabkan sering buang ai kecil. Tapi, tak perlu kahwatir karena itu gejala normal dan akan menghilang setelah melahirkan.<br><br>Anda sering buang air kecil karena janin mendorong kandung kemih, uretra, dan otot-otot dasar panggul. Karena ada tekanan, otot-otot dasar panggul melemah dan dapat menyebabkan kebocoran atau masalah buang air.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Mengapa saat hamil menjadi mudah lapar?\', \'<li>Saat mengandung, seringkali wanita merasa lapar dan lapar dan lapar. Keinginan untuk makan seakan berlipat ganda dan anda tidak bisa menolak rasa lapar tersebut.<br><br>Hal ini terjadi karena makanan yang anda makan saat hamil tidak hanya diserap oleh tubuh anda tapi juga diserap oleh janin yang ada dalam rahim anda.<br><br>Buah hati anda dalam kandungan memerlukan nutrisi sama halnya dengan anda. Oleh karenanya, otak anda memberikan sinyal pada tubuh anda untuk menyerap sebanyak mungkin nutrisi yang anda serap dan makan sesering anda bisa makan.<br><br>Nutrisi yang anda dapat dari makanan diserap dan dibagi menjadi dua. Yang pertama adalah untuk mempersiapkan anda dalam proses melahirkan dan mempersiapkan tubuh anda agar siap untuk menyusui setelah lahir. Selain itu, nutrisi tersebut juga memastikan buah hati anda dalam kandungan akan sehat dan siap untuk dilahirkan.<br><br>Kebutuhan nutrisi yang buah hati anda perlukan ketika sedang tumbuh dalam rahim tidak main-main lho. Buah hati anda perlu lebih daripada sekedar protein. Asam lemak omega-3 dan zat besi juga merupakan dua elemen penting yang perlu diasup secara teratur untuk memastikan buah hati anda dan anda tentunya, siap untuk proses melahirkan.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Mengapa ibu hamil sering merasa kembung?\', \'<li>Ibu hamil sering kali mengalami perut kembung saat hamil dikarenakan adanya perubahan hormon selama kehamilan, hormon progesterone saat hamil menjadi meningkat dari keadaan normalnya, sehingga akan membuat jaringan otot rileks, begitu pula dengan saluran pencernaan ibu hamil. Relaksasi yang terjadi akan memperlambat proses pencernaan ibu hamil sehingga mengakibatkan gas yang bertambah, perut yang berisi gas akan mengakibatkan kembung dan sering bersendawa. Kondisi ini akan membuat ibu hamil mengeluh karena perut terasa penuh dan tidak nyaman dalam melakukan aktivitas harian. Diperparah saat hamil, perkembangan rahim yang semakin besar akan menimbulkan banyak rongga yang menyebabkan proses pencernaan menjadi terlambat dan berdampak pada perut yang terasa penuh. Selain itu banyaknya gas di dalam perut saat hamil dapat disebabkan karena udara yang masuk saat makan atau masuknya bakteri ke dalam usus besar melalui makanan yang dicerna. Akan tetapi sebagian besar gas di dalam tubuh dihasilkan oleh bakteri yang menghancurkan sisa-sisa makanan setelah dicerna tetapi tidak sempurna, ketika hamil pencernaan ini akan menjadi lambat dan membutuhkan waktu yang lebih lama untuk dicerna, dapat memperparah perut kembung.</li>\')',[], nullHandler,errorHandler);
                tx.executeSql('INSERT INTO IbuFAQ(Pertanyaan, Jawaban) VALUES (\'Apakah benar bahwa “sekali caesar, pasti selalu bedah caesar lagi”?\', \'<li>Tidak, ini adalah konsep medis yang ketinggalan jaman. 40 tahun lalu, sebagian besar luka operasi SC dibuat dengan sayatan klasik, sementara saat ini di hampir semua caesar menggunakan sayatan melintang rendah juga disebut “bikini”. Studi saat ini menunjukkan bahwa VBAC (kelahiran normal setelah sesar) memang alternatif yang lebih aman bagi ibu dan bayi daripada menjadwalkan untuk operasi caesar lagi setelah operasi caesar sebelumnya dimana insisi-nya melintang rendah.</li>\')',[], nullHandler,errorHandler);
            }
        }   
     );
    },errorHandler, function() {
        var content = "";
        $( '#ibuHamilTabelFAQ' ).html( "" );
        db.transaction( function( tx ) {
            tx.executeSql('SELECT * FROM IbuFAQ', [], function(transaction, result) {
                for ( var i = 0; i < result.rows.length; i++ ) {
                    var row = result.rows.item( i );
                    content += '<div data-role="collapsible"><h4>' + row.Pertanyaan + '</h4><ul data-role="listview" data-inset="false">' + row.Jawaban + '</ul></div>';
                }
                $( '#ibuHamilTabelFAQ' ).append( content );
            }, errorHandler );
        }, errorHandler, nullHandler );
    } );
}

function ibu_rekomendasi() {
      var vegetarian = $('#ibuHamilAVegetarian').is(":checked");
      var diabetes = $('#ibuHamilHasDiabetes').is(":checked");
      var hipertensi = $('#ibuHamilHasHipertensi').is(":checked");
      $('#ibuHamilListviewBahanMakanan').html('');
      $('#ibuHamilListviewResep').html('');
      db.transaction(function(transaction) 
        { 
          if(vegetarian === true)
          {
            if(diabetes === true)
            {
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Vegetarian="Y" AND Diabetes="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);  

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Vegetarian="Y" AND Resep_Diabetes="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Vegetarian="Y" AND Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Vegetarian="Y" AND Resep_Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
            else
            {//diabetes === false
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Vegetarian="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Vegetarian="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);      
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Vegetarian="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Vegetarian="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
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
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Diabetes="Y" AND Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);  

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Diabetes="Y" AND Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);     
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Diabetes="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
            else
            {//diabetes === false
              if(hipertensi === true)
              {
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan WHERE Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep WHERE Resep_Hipertensi="Y"', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
              else
              {//hipertensi === false
                transaction.executeSql('SELECT * FROM IbuNutrisiBahanMakanan', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewBahanMakanan').append(
                        '<li>' + '<img src="' + row.GambarBMIH +'" class="ui-li-thumb"> <br>' +  row.NamaBMIH + '</li>');
                    }
                  }
                },errorHandler);

                transaction.executeSql('SELECT * FROM IbuNutrisiResep', [], function(transaction, result) 
                {
                  if (result !== null && result.rows !== null) 
                  {
                    for (var i = 0; i < result.rows.length; i++) 
                    {
                      var row = result.rows.item(i);
                      $('#ibuHamilListviewResep').append(row.Resep);
                    }
                  }
                },errorHandler);
              }
            }
          }                   
        },errorHandler,ibuhamil_refreshListView);   
}

function balita_rekomendasi()
{
    var usiaSlc = $('#balitaSlctUsiaBM').val();
    var laktosa = $('#balitaChkLaktosa').is(":checked");
    var casein = $('#balitaChkCasein').is(":checked");
    var telur = $('#balitaChkTelur').is(":checked");
    var ikan = $('#balitaChkIkan').is(":checked");
    $('#balitaListviewBahanMakanan').html('');
    $('#balitaListviewResep').html('');
    db.transaction(function(transaction) 
        {        
            if(usiaSlc === '1' )
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' +  row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#balitaListviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');                        
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#balitaListviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#balitaListviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        $('#balitaListviewResep').append('<li>Tidak ada resep untuk kategori usia ini.</li>');
                    }                                
                }
            }   
            else if (usiaSlc === '2')
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 6 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 6 AND Rsp_Laktosa="T" AND Rsp_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=6 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep=6 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 6 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep =6 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
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
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 7 AND Rsp_Laktosa="T" AND Rsp_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=8 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep=7 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T")', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 7 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T"', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
                                }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewBahanMakanan').append(
                                        '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                }
                            }
                        },errorHandler);
                        transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 7 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") ', [], function(transaction, result) 
                        {
                            if (result !== null && result.rows !== null) 
                            {
                                for (var i = 0; i < result.rows.length; i++) 
                                {
                                    var row = result.rows.item(i);
                                    $('#balitaListviewResep').append(row.Resep);
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
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND Rsp_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 9 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND Rsp_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 9 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND (Rsp_Telur="T" OR Rsp_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
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
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND Rsp_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND Rsp_Telur="T"', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
                                    }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewBahanMakanan').append(
                                            '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                    }
                                }
                            },errorHandler);
                            transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 9 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND (Rsp_Telur="T" OR Rsp_Telur="Y")', [], function(transaction, result) 
                            {
                                if (result !== null && result.rows !== null) 
                                {
                                    for (var i = 0; i < result.rows.length; i++) 
                                    {
                                        var row = result.rows.item(i);
                                        $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler); 
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 12 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 18 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep = 18 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler); 
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND Rsp_Laktosa="T" AND (Rsp_Casein="Y" OR Rsp_Casein="T") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND Rsp_Casein="T" AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND Rsp_Telur="T" AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND Rsp_Telur="T" AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND Rsp_IkanLaut="T"', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewBahanMakanan').append(
                                                '<li>' + '<img src="' + row.GambarBM +'" class="ui-li-thumb"> <br>' + row.NamaBM + '</li>');
                                        }
                                    }
                                },errorHandler);
                                transaction.executeSql('SELECT * FROM BalitaNutrisiResep WHERE UsiaResep= 18 AND (Rsp_Laktosa="Y" OR Rsp_Laktosa="T") AND (Rsp_Casein="T" OR Rsp_Casein="Y") AND (Rsp_Telur="T" OR Rsp_Telur="Y") AND (Rsp_IkanLaut="T" OR Rsp_IkanLaut="Y")', [], function(transaction, result) 
                                {
                                    if (result !== null && result.rows !== null) 
                                    {
                                        for (var i = 0; i < result.rows.length; i++) 
                                        {
                                            var row = result.rows.item(i);
                                            $('#balitaListviewResep').append(row.Resep);
                                        }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }
            }
        },errorHandler,balita_refreshListView);                       
}

function balita_bolehkah()
{
    var usiaSlc = $('#balitaSlctUmurBK').val();
    var laktosa = $('#balitaChkLaktosaBK').is(":checked");
    var casein = $('#balitaChkCaseinBK').is(":checked");
    var telur = $('#balitaChkTelurBK').is(":checked");
    var ikan = $('#balitaChkIkanBK').is(":checked");
    var hasil=[];
    var bahan= $('#balitaSlctBahanBK').val().toString();                

    db.transaction(function(transaction) 
        {        
            if(usiaSlc === '1' )
            {
                if(laktosa === true)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM=0 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 6 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=6 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=6 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND A_Laktosa="T" AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein===false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <=8 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T")', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                }
                else if(laktosa===false)
                {
                    if(casein === true)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T"', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                            }
                        },errorHandler);
                    }
                    else if(casein === false)
                    {
                        transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 8 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") ', [], function(transaction, result) 
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
                                { $( "#balitaJawabanBK" ).text("boleh"); }
                                else 
                                { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }                                    
                    }
                    else if(casein===false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T"', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                        else if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T"', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }
                    }
                    else if(casein === false)
                    {
                        if(telur === true)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T"', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                }
                            },errorHandler);
                        }  
                        if(telur === false)
                        {
                            transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 11 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y")', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                    { $( "#balitaJawabanBK" ).text("boleh"); }
                                    else 
                                    { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);   
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 17 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);   
                            }                                        
                        }
                        else if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND A_Laktosa="T" AND (A_Casein="Y" OR A_Casein="T") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }                                        
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND A_Casein="T" AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
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
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND A_Telur="T" AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }  
                        if(telur === false)
                        {
                            if(ikan === true)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND A_IkanLaut="T"', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                            else if(ikan === false)
                            {
                                transaction.executeSql('SELECT * FROM BalitaNutrisiBahanMakanan WHERE UsiaBM <= 18 AND (A_Laktosa="Y" OR A_Laktosa="T") AND (A_Casein="T" OR A_Casein="Y") AND (A_Telur="T" OR A_Telur="Y") AND (A_IkanLaut="T" OR A_IkanLaut="Y")', [], function(transaction, result) 
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
                                        { $( "#balitaJawabanBK" ).text("boleh"); }
                                        else 
                                        { $( "#balitaJawabanBK" ).text("tidak boleh"); }
                                    }
                                },errorHandler);
                            }
                        }
                    }                                
                }                         
            }                        
        },errorHandler,nullHandler);
}
