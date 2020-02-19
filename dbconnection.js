const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./sqlite/db/probDashDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
});

// Lab details
db.parallelize(() => {
  db.each(`SELECT lab as labName, 
            min as labMin,
            max as labMax,
            units as labUnits
          FROM labs
          WHERE labID=1`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
   
    lab1name = row.labName; 
    lab1min = row.labMin;
    lab1max = row.labMax;
    lab1unit = row.labUnits;
    console.log(lab1name, lab1min,lab1max,lab1unit);

  });
  db.each(`SELECT labDate as labDate, 
          value as labValues
          FROM labValues
          WHERE labID=1`, (err, row) => {
  if (err) {
    console.error(err.message);
  }
    lab1date = row.labDate; 
    lab1values = row.labValues;
    // console.log(lab1date, lab1values);

});
  
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
});
// console.log(lab1name,lab1min,lab1max,lab1unit);
// console.log(lab1date, lab1values);