
const parse = require('csv-parse');
const { on } = require('events');
const fs = require('fs');


const results = [];

fs.createReadStream('keplar_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data' , (data) =>{
        results.split(data)
    })
    .on('error' , (err) =>{
        console.log(err)
    })
    .on('end' , () =>{
        console.log(results);
        console.log('done');
    });
;

