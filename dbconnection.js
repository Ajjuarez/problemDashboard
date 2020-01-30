const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('C:/Users/ajjuarez/problemDashboard/problemDashboard/sqlite/db/probDashDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Problem Dashboard Database.');
});
 
db.parallelize(() => {
  db.each(`SELECT contact_id as id,
                first_name as name,
                last_name as lname,
                email as email
            FROM testTable`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name + " " + row.lname + (' - ') + row.email);
  });
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
