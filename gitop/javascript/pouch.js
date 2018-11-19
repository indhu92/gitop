var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');
// db.info(function(err, info) {
//     if (err) {
//        return console.log(err);
//     } else {
//        console.log(info);
//     }
//  });
student=
  {
      _id:'01',
    name:"indhu",
    age:22
  
}
doc1 = {_id: '001', name: 'Ram', age: 23, Designation: 'Programmer'}
doc2 = {_id: '002', name: 'Robert', age: 24, Designation: 'Programmer'}
doc3 = {_id: '003', name: 'Rahim', age: 25, Designation: 'Programmer'}
student = [{_id: '004', name: 'Rahim', age: 25, Designation: 'Programmer'},{_id: '005', name: 'Rahim', age: 25, Designation: 'Programmer'}]
   db.bulkDocs(student, function(err, response) {
    if (err) {
       return console.log(err);
    } else {
       console.log("Document created Successfully");
    }
 });
//  db.get('005', function(err, doc) {
//     if (err) {
//        return console.log(err);
//     } else {
//        console.log(doc);
//     }
//  });
 db.allDocs(function(err, docs) {
    if (err) {
       return console.log(err);
    } else {
    //    if(docs.Designation=='Programmer')
    //         console.log(doc.name)
        console.log(docs.rows.id)
    }
 });