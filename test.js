
var db = openDatabase('db.sqlite', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
    
db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM vocabList WHERE weekNO = 1', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>Found rows: " + len + "</p>";
        document.querySelector('#status').innerHTML +=  msg;
            
        for (i = 0; i < len; i++){
            msg = "<p><b>" + results.rows.item(i).word + "</b></p>";   
            document.querySelector('#status').innerHTML +=  msg;
        }
    }, null);
});
